import {visibilityFunc, isRunningTooLong, getRuntimeExceededMessage} from "../Markdown/MarkdownUtils/mdUtils.js";
import {logger} from "../Utils/Logger.js";
import {blockStyles} from "../Markdown/MarkdownUtils/mdUtils";

export let detectShadowDOM = null;
export let stage1_markDownFunc_errors = {};

/**
 * Pre-testing: Marks down DOM with computed styles info - DOM in live DOM for massive speed increase 1000 times faster
 * e.g. ComputedStyles and events from node code
 * ; is used in place of : as we create an object from the attribute in stage 2
 * done in separate stage as it needs to be fast - this 1000 times faster than the previous stage1 solutions.  Fastest as to mark down original dom with attributes that hold computed styles you don't need uels - as info is transferred in clone
 * @returns {Number}
 */
export function stage1_markDown_liveDOM_copyInfo(testWind, testDoc, stage1MarkdownFuncs) {
	try {
		detectShadowDOM = false;
		stage1_markDownFunc_errors = {};

		// run test dependent functions
		// collect all functions added to 
		let addedStage1Funcs = Object.keys(stage1MarkdownFuncs);

		let markEach = function(n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {
					let styleFromOriginal = testWind.getComputedStyle(n, null);

					let oI = [];

					let visibility = visibilityFunc(styleFromOriginal, n);
					if (visibility !== null) {
						oI.push(visibility);
					}

					for (let prop in blockStyles) {
						const propValue = styleFromOriginal.getPropertyValue(prop);
						if (propValue) {
							oI.push(`${prop};${propValue}`);
						}
					}

					// each added stage1 func must be standalone, and not rely on any other
					// so, they can be run in any order
					for (let i=addedStage1Funcs.length; i--;) {
						if (isRunningTooLong()) {
							throw getRuntimeExceededMessage();
						}

						try {
							// each added function has same interface
							let extractedData = stage1MarkdownFuncs[addedStage1Funcs[i]](styleFromOriginal, testWind, n);
							if (extractedData !== null) {
								oI.push(extractedData);
							}
						}
						catch (err) {
							logger.error('Error', err);
							stage1_markDownFunc_errors.push("name of function");
						}
					}

					n.setAttribute("data-ae_styles", oI.join(";"));

					// runs recursively through all shadowRoots and nodes
					if (n.shadowRoot) {
						if (detectShadowDOM === false) {
							detectShadowDOM = true;
						}
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
		
		markEach(testDoc.querySelector("body, frameset"));
		return 1;
	}
	catch (err) {
		logger.error('Error', 'stage1_markDown_liveDOM_copyInfo', err);
		stage1_markDownFunc_errors["markViewable_stage1_MarkDownDOM"] = err;
		return 0;
	}
}