import {getParent, fixChildren} from "../Utils/aeUtils.js";
import {logger} from "../Utils/Logger.js";
import {isRunningTooLong, getRuntimeExceededMessage} from "./MarkdownUtils/mdUtils";

export let stage3d_markDownFunc_errors = {};

/**
 * Alter back elements to their original tagName - so that tests continue to work
 * @param {*} node 
 */
export function stage3d_RevertElementsToOrigTagName(node) {
	stage3d_markDownFunc_errors = {};

	var tree;
	var treeTagName = node.getAttribute("data-ae_origTagName");
	tree = document.createElement(treeTagName);


	// copy across all the attributes
	// just copy attributes, as all manipulation is already done in earlier stages
	var attrs = node.attributes;
	for (var j = attrs.length; j--;) {
		var attr = attrs[j];
		tree.setAttribute(attr.name, attr.value);
	}

	var parentEl = tree;
	var x = 0;
	var origTagName = false;	

	try {
		var markEach = function markEach(n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {
					fixChildren(n);
					let tagName = n.getAttribute("data-ae_origTagName");

					if (tagName !== "html") {
						const createChildDiv = () => {
							// likely tried to create a non-standard HTML element
							// fall back to creating a div instead
							origTagName = tagName;
							tagName = "div";
							childElement = document.createElement(tagName);
						};

						let childElement;
						try {
							childElement = document.createElement(tagName);
						} catch (err) {
							if (err instanceof DOMException) {
								createChildDiv();
							} else {
								throw err;
							}
						}

						// just copy attributes, as all manipulation is already done in earlier stages
						var attrs = n.attributes;
						for (var j = attrs.length; j--;) {
							var attr = attrs[j];
							if ( attr.name === "muted" ) {
								childElement.muted = ( attr.value !== false && attr.value !== "false" );
							} 
							childElement.setAttribute(attr.name, attr.value);
						}
						// > instead of !==
						if (n.childNodes.length > 0) {
							parentEl.appendChild(childElement);
							parentEl = childElement;

							x = x + 1;
                            markEach(n.childNodes[0]);
						} else {
							childElement.innerHTML = n.innerHTML;
							// IE will set "Submit Query" or "Reset" on INPUT elements of type submit | reset which lack a value
							if (childElement.tagName === "INPUT") {
								if (childElement.hasAttribute("value") === true) {
									var nVal = n.getAttribute("value");
									var childVal = childElement.getAttribute("value");
									if (nVal !== childVal) {
										childElement.setAttribute("value", nVal);
									}
								}
							}
							parentEl.appendChild(childElement);
						}
					}
				}
				if (n.nodeType === 3) {
					// just append that value to parentEl
					var orig = n.parentElement.getAttribute("data-ae_origTagName");
					if ((orig !== "style") && (orig !== "script") && (orig !== "noscript") && (orig !== "template")) {
						var textNode=document.createTextNode(n.textContent);
						parentEl.appendChild(textNode);
					}
				}
				if (n.nextSibling === null) {
					x = x - 1;
					parentEl = getParent(parentEl);
				}
			} while (n = n.nextSibling);
		};

		fixChildren(node);
		if (node.children.length > 0) {
			markEach(node.children[0]);
		}

		// produce a new HTML document by cloning the page DOM using its string representation,
		// which mimics what's done in stage2 when there's no shadow DOM,
		// but we couldn't do this before because we had yet to resolve all the shadow DOM stuff
		const clonedDocument = new DOMParser().parseFromString(tree.outerHTML, "text/html");
		tree = clonedDocument.documentElement;

		return tree;
	} catch (err) {
		logger.error("Error: stage3d_markDownFunc_errors", err);
		stage3d_markDownFunc_errors["stage3d_RevertElementsToOrigTagName"] = err;
		return null;
	}
}
