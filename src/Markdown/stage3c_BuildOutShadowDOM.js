import {rebuildShadowDOMFromOrig, cloneThisNodeForMarkDown, getElementFromOrigShadowRoot, getParent, fixChildren} from "../Utils/aeUtils.js";
import {logger} from "../Utils/Logger.js";
import {isRunningTooLong, getRuntimeExceededMessage} from "./MarkdownUtils/mdUtils";

export let stage3c_markDownFunc_errors = {};

/**
 * Replace the slot content - ShadowDOM v1
 * @param {*} node
 * @param {*} shadDOM
 */
function replaceSlotsInShadowDOM(node, shadDOM, testDoc) {
	while(shadDOM.querySelector('[data-ae_origTagName="slot"]')) {
		var slotToReplace = shadDOM.querySelector('[data-ae_origTagName="slot"]');
		var parent = getParent(slotToReplace);
		if (parent === null) {
			parent = shadDOM;
		}
		
		var slotFromLiveDOM = getElementFromOrigShadowRoot(slotToReplace.getAttribute("data-ae_domuel"), testDoc);
		// this is now the live one
		if (slotFromLiveDOM && ('assignedNodes' in slotFromLiveDOM)) {
			var contentInSlot = slotFromLiveDOM.assignedNodes({ flatten: true });
			if (typeof(contentInSlot) !== "undefined") {
				// we append all content from contentInSlot to the parent
				const insertionPoint = slotToReplace.nextSibling;
				for (var i = 0, len = contentInSlot.length; i < len; i++) {
					// IMPORTANT: clone the content in the slot
					var contentInSlotClone = cloneThisNodeForMarkDown(contentInSlot[i], true);
					// the following does and insertAfter - and preserves order
					parent.insertBefore(contentInSlotClone, insertionPoint);
				}
			}
		}
		
		// then we remove the slot
		parent.removeChild(slotToReplace);
	}
	
	// we want to remove the content from the body of the node
	node.innerHTML = "";
}

/**
 * Replaces the contents of those slot elements located in the shadowDOM with the relevant content from the web components body e.g. host root
 * @param {Element} node
 * @param {*} shadDOM
 * @param {HTMLDocument} testDoc
 * At this stage - we need to check if all the shadowRoots are transferred through a clone + append
 */
function buildOutVirtualDOMNode(node, shadDOM, testDoc) {
	// cannot clone shadowRoot - currently
		
	var childNs = shadDOM.childNodes;
		
	// appending is better than swapping outer for inner html, as it preserves properties
	// we also append text nodes
	
	for (var c = 0, len = childNs.length; c < len; c++) {
		var childN = childNs[c];
		if (typeof(childN) !== "undefined") {
			var nodeType = childN.nodeType;
			if (typeof(nodeType) !== "undefined") {
				if (nodeType === 1) {
					// element clone
					var childNClone = null;
					childNClone = cloneThisNodeForMarkDown(childN, true);

					// set a temp id to find the appended child by in the node
					// it will be removed later
					childNClone.setAttribute("data-ae_tempcloneid", "");
					
					node.appendChild(childNClone);
					
					var elInClone = node.querySelector("[data-ae_tempcloneid]");
					
					if (elInClone) {
						elInClone.removeAttribute("data-ae_tempcloneid");
						
						// you need to reattach the shadowRoot of the cloned element
						if (elInClone.shadowRoot) {
							// you have to re-build from the original element in the live DOM
							rebuildShadowDOMFromOrig(elInClone, testDoc);
						}
						
						// then if the clone has children 
						// then you need to reattach the shadowRoot of any children of the cloned element
						if (elInClone.children.length > 0) {
								let markEachChild = function(n) {
								do {
									if (n.nodeType === 1) {
										fixChildren(n);
										rebuildShadowDOMFromOrig(n, testDoc);
										if (n.children.length > 0) {
											markEachChild(n.children[0]);
										}
									}
								} while (n = n.nextSibling)
							};
							markEachChild(elInClone.children[0]);
						}
					}
				}
				if (nodeType === 3) {
					// text node
					var childTextNClone = cloneThisNodeForMarkDown(childN, true);
					node.appendChild(childTextNClone);
				}
			}
		}
	}
	return node; // now contains slot replacements
}

/**
 * Builds out the cloned HTML DOM into a true Virtualised DOM that Access Engine can test
 * @param {*} rootTestNode
 * @param {*} testDoc
 */
export function stage3c_BuildOutShadowDOM(rootTestNode, testDoc) {
	try {
		stage3c_markDownFunc_errors = {};

		let markEach = function(n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {
					rebuildShadowDOMFromOrig(n, testDoc);
					if (n.shadowRoot) {
						// replace slots here as the slot contents has been given the correct position from 3b
						replaceSlotsInShadowDOM(n, n.shadowRoot, testDoc);
						buildOutVirtualDOMNode(n, n.shadowRoot, testDoc);
						n.shadowRoot.innerHTML = "";
					}
					fixChildren(n);
					if (n.children.length > 0) {
						var firstChild = n.children[0];
						if (firstChild !== null) {
							markEach(firstChild);
						}
					}
				}
			} while (n = n.nextSibling)
		};
		markEach(rootTestNode.querySelector('[data-ae_origTagName="body"], [data-ae_origTagName="frameset"]'));
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage3c_markDownFunc_errors', err);
		stage3c_markDownFunc_errors["stage3c_BuildOutShadowDOM"] = err;
		return null;
	}
}