import {cloneThisNodeForMarkDown} from "../Utils/aeUtils.js";
import {logger} from "../Utils/Logger.js";
import {detectShadowDOM} from "./stage1_markDown_liveDOM_copyInfo";

export let stage2_markDownFunc_errors = {};

/**
 * Pre-testing: Clones HTML Node
 * @param {HTMLDocument} testDoc
 * @returns {Node}
 */
export function stage2_cloneDOM(testDoc) {
	try {
		stage2_markDownFunc_errors = {};

		let clone;

		// if shadow DOM isn't present, we can now safely clone the page DOM using its string representation to produce a new HTML document,
		// otherwise we first need to use Engine's custom cloning mechanism before cloning the page DOM using its string representation in stage3d;
		// shadow DOM isn't natively included in the page DOM's string representation
		if (detectShadowDOM === false) {
			const innerHTMLByUEL = {};

			// temporarily strip contents of noscript elements from live DOM,
			// persisting them to memory for restoration after the live DOM has been cloned
			const noscriptElements = testDoc.querySelectorAll('noscript');
			for (let i = 0; i < noscriptElements.length; i++) {
				const element = noscriptElements[i];

				const uel = element.getAttribute('data-ae_domuel');
				innerHTMLByUEL[uel] = element.innerHTML;

				element.innerHTML = '';
			}

			clone = new DOMParser().parseFromString(testDoc.documentElement.outerHTML, "text/html").documentElement;

			// restore saved contents of noscript elements from live DOM
			const noscriptUELs = Object.keys(innerHTMLByUEL);
			for (let i = 0; i < noscriptUELs.length; i++) {
				const uel = noscriptUELs[i];
				const innerHTML = innerHTMLByUEL[uel];

				const element = testDoc.querySelector(uel);
				if (element) {
					element.innerHTML = innerHTML;
				}
			}

			// strip contents of script and style elements
			const nodesToStrip = clone.querySelectorAll('script, style, template');
			for (let i = 0; i < nodesToStrip.length; i++) {
				const nodeToStrip = nodesToStrip[i];
				nodeToStrip.innerHTML = '';
			}
		} else {
			clone = cloneThisNodeForMarkDown(testDoc.documentElement, true);
		}

		// delete any elements marked for removal from cloned DOM
		const nodesToRemoveFromClone = clone.querySelectorAll('*[data-ae_removefromclone]');
		for (let i = 0; i < nodesToRemoveFromClone.length; i++) {
			const nodeToRemoveFromClone = nodesToRemoveFromClone[i];
			nodeToRemoveFromClone.parentNode.removeChild(nodeToRemoveFromClone);
		}

		return clone;
	}
	catch (err) {
		logger.error('Error', 'stage2_cloneDOM', err);
		stage2_markDownFunc_errors["stage2_cloneDOM"] = err;
		return null;
	}
}