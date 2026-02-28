import {aeUELFunc, aeSibFunc} from "../Utils/aeUtils.js";
import {aeArFunc, isRunningTooLong, clearStartTime, getRuntimeExceededMessage} from "../Markdown/MarkdownUtils/mdUtils.js";
export let stage6_markDownFunc_errors = {};

/**
 * Pre-testing: Marks-up code within head with data-ae_attributes to enable more tests to use CSS selectors
 * @returns {Node}
 */
export function stage6_markDown_clonedDOM(rootTestNode, stage6MarkdownFuncs) {
	try {
		stage6_markDownFunc_errors = {};

		//Decorate HTML element as it is not covered by recursive tree walker
		if (rootTestNode.tagName === "HTML"){
			rootTestNode.setAttribute("data-ae_uel", "html");
		}	
		let addedStage6Funcs = Object.keys(stage6MarkdownFuncs);

		function runOffFunc(n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {
					if (n.tagName === "BODY") {
						// otherwise it roles into body
						break;
					}
					n.setAttribute("data-ae_sib", aeSibFunc(n));
					n.setAttribute("data-ae_uel", aeUELFunc(n));
					n.setAttribute("data-ae_ar", aeArFunc(n));
					
					// each added stage2 func must be standalone, and not rely on any other
					// so, they can be run in any order
					for (let i=addedStage6Funcs.length; i--;) {
						if (isRunningTooLong()) {
							throw getRuntimeExceededMessage();
						}

						var attrToAdd = stage6MarkdownFuncs[addedStage6Funcs[i]](n);
						if (attrToAdd !== null) {
							n.setAttribute(attrToAdd[0], attrToAdd[1]);
						}
					}
					
					if (n.hasChildNodes()) {
						runOffFunc(n.firstChild);
					}
				}
			} while (n = n.nextSibling)
		}
		
		runOffFunc(rootTestNode.querySelector("head"));
		clearStartTime();
		return rootTestNode;
	}
	catch (err) {
		clearStartTime();
		stage6_markDownFunc_errors["stage6_markDown_clonedDOM"] = err;
		return null;
	}
}