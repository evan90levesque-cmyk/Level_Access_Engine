import {aeDOMUELFunc, aeDOMSibFunc, dummyImage} from "../Utils/aeUtils.js";
import {logger} from "../Utils/Logger.js";
import {resetStartTime, isRunningTooLong, getRuntimeExceededMessage} from "./MarkdownUtils/mdUtils";

export let stage0_markDownFunc_errors = {};

/**
 * Pre-testing: Marks down DOM with computed styles info - DOM in live DOM for massive speed increase 1000 times faster
 * e.g. ComputedStyles and events from node code
 * ; is used in place of : as we create an object from the attribute in stage 2
 * done in separate stage as it needs to be fast - this 1000 times faster than the previous stage1 solutions.  Fastest as to mark down original dom with attributes that hold computed styles you don't need uels - as info is transferred in clone
 * @returns {Number}
 */
export function stage0_markDown_liveDOM_domuels(testDoc) {
	try {
		resetStartTime();

		stage0_markDownFunc_errors = {};

		const headNode = testDoc.querySelector('head');
		if (headNode) {
			const firstHeadChild = headNode.firstChild;
			if (firstHeadChild) {
				const markEachInHead = function(n) {
					do {
						if (isRunningTooLong()) {
							throw getRuntimeExceededMessage();
						}

						if (n.nodeType !== 1) {
							continue;
						}

						// any element that's not allowed to be in a head element according to the html spec should be flagged for removal from our eventual clone of this DOM
						if (!['base', 'link', 'meta', 'noscript', 'script', 'style', 'template', 'title'].includes(n.tagName.toLowerCase())) {
							n.setAttribute('data-ae_removefromclone', 'true');
						}

						// check children

						if (n.shadowRoot) {
							const firstChild = n.shadowRoot.firstElementChild;
							if (firstChild) {
								markEachInHead(firstChild);
							}
						}

						if (n.hasChildNodes()) {
							const firstChild = n.firstChild;
							if (firstChild) {
								markEachInHead(firstChild);
							}
						} else if (n.childNodes && n.childNodes.length > 0) {
							const firstChild = n.childNodes[0];
							if (firstChild) {
								markEachInHead(firstChild);
							}
						}
					} while (n = n.nextSibling);
				};
				markEachInHead(firstHeadChild);
			}
		}

		let markEach = function(n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {
					if (n.hasAttribute("data-ae_ignore") && n.hasAttribute("src")) {
						// The data-ae_ignore attribute tags an img element for special beacon/tracking handling so the src is not fetched more than once.
						// These elements will have their normal src replaced with a data URL that prevents any future hits to the server when the DOM is cloned.
						// The URL is left in this inert state because restoring it would cause another fetch and a false tally on the tracking system.
						n.setAttribute("src", dummyImage);
					}

					if (n.tagName && ["audio", "video"].includes(n.tagName.toLowerCase())) {
						const duration = n.duration;
						if (duration && duration > 3) {
							n.setAttribute("data-ae_durationtoolong", duration);
						}
					}

					// IMPORTANT: For Web Components
					// sib needs calculating before aeDOMUELFunc, as aeDOMUELFunc needs sib number
					n.setAttribute("data-ae_domsib", aeDOMSibFunc(n));
					
					var calcUel = aeDOMUELFunc(n);
					n.setAttribute("data-ae_domuel", calcUel);
					if (n.shadowRoot) {
						n.setAttribute("data-ae_shdwrt", calcUel);
						// need to paint all nodes in all shadowRoots.
						// this makes it recursive
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
			} while (n = n.nextSibling);
		};

		markEach(testDoc.querySelector("body, frameset"));
		return 1;
	}
	catch (err) {
		logger.error('Error', 'stage0_markDown_liveDOM_domuels', err);
		stage0_markDownFunc_errors["markViewable_stage0_MarkDownDOM"] = err;
		return 0;
	}
}