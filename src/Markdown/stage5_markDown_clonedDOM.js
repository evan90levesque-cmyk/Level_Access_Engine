import {aeUELFunc, aeSibFunc, retrieveComputedCssStyles} from "../Utils/aeUtils.js";
import {aeArFunc, isRunningTooLong, getRuntimeExceededMessage} from "../Markdown/MarkdownUtils/mdUtils.js";
export let stage5_markDownFunc_errors = {};

/**
 * Pre-testing: Marks-up code with data-ae_attributes to enable more tests to use CSS selectors
 * // Clone html node is marked-down, and all tests run on the clone
 * @returns {Node}
 */
export function stage5_markDown_clonedDOM(rootTestNode, stage5MarkdownFuncs) {
	try {
		stage5_markDownFunc_errors = {};

		let addedStage5Funcs = Object.keys(stage5MarkdownFuncs);

		function runOffFunc(n) {
			do {
				if (isRunningTooLong()) {
					throw getRuntimeExceededMessage();
				}

				if (n.nodeType === 1) {

					n.setAttribute("data-ae_ar", aeArFunc(n));

					var ae_invis = n.getAttribute("data-ae_invis");
					if (ae_invis === null) {
						n.setAttribute("data-ae_vis", "true");
					}
					
					n.setAttribute("data-ae_sib", aeSibFunc(n));
					n.setAttribute("data-ae_uel", aeUELFunc(n));
					
					var originalInformation = retrieveComputedCssStyles(n);
					// each added stage2 func must be standalone, and not rely on any other
					// so, they can be run in any order
					for (let i=addedStage5Funcs.length; i--;) {
						if (isRunningTooLong()) {
							throw getRuntimeExceededMessage();
						}

						var attrToAdd = stage5MarkdownFuncs[addedStage5Funcs[i]](originalInformation, n);
						if (attrToAdd !== null) {
							n.setAttribute(attrToAdd[0], attrToAdd[1]);
						}
					}

					var firstChild = n.firstChild;
					if (firstChild) {
						runOffFunc(firstChild);
					}
				}
				else if (n.nodeType === 3) {
					// to remove <th>&nbsp;</th> issues, and ensure :empty works
					n.textContent = n.textContent.trim();
				}
			} while (n = n.nextSibling)
		}
		runOffFunc(rootTestNode.querySelector("body, frameset"));
		return rootTestNode;
	}
	catch (err) {
		stage5_markDownFunc_errors["stage5_markDown_clonedDOM"] = err;
		return null;
	}
}