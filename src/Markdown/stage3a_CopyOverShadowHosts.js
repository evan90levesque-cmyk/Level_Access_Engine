import {rebuildShadowDOMFromOrig} from "../Utils/aeUtils.js";
import {logger} from "../Utils/Logger.js";
import {isRunningTooLong, getRuntimeExceededMessage} from "./MarkdownUtils/mdUtils";

export let stage3a_markDownFunc_errors = {};

/**
 * Function to transfer in only the top level shadowRoots from elements which have shadowRoots in the live DOM.
 * Adding the shadowRoots for top-level elements automatically pull in all nested shadowDOMs. [This is not correct]
 * ShadowRoots from heavily nested web components are not pulled in - really just ones in the first level
 */
export function stage3a_CopyOverShadowHosts(rootTestNode, testDoc) {
	try {
		stage3a_markDownFunc_errors = {};

		let markEach = function (n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {
					
					rebuildShadowDOMFromOrig(n, testDoc);
					
					if (n.shadowRoot) {
						// IMPORTANT: this makes it recursive
						var firstChild = n.shadowRoot.firstElementChild;
						if (firstChild !== null) {
							markEach(n.shadowRoot.firstElementChild);
						}
					}

					if (n.hasChildNodes()) {
						if (n.firstChild !== null) {
							markEach(n.firstChild);
						}
					}
					// slot - even if it has children returns false
					else {
						if (n.childNodes) {
							if (n.childNodes.length > 0) {
								markEach(n.childNodes[0]);
							}
						}
					}
				}
			} while (n = n.nextSibling)
		};
		// we have not reverted back to original element tagNames yet
		markEach(rootTestNode.querySelector('[data-ae_origTagName="body"], [data-ae_origTagName="frameset"]'));
		return rootTestNode;
	}
	catch (err) {
		logger.error('Error', 'stage3a_markDownFunc_errors', err);
		stage3a_markDownFunc_errors["markViewable_stage3a_MarkDownDOM"] = err;
		return null;
	}
}