import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-73
 * @returns {AutoTestShell} testShell
 */
export function test73() {
	aeKernel.addAdvisoryAutomaticTest("73", {
		bestPractice:482,
		testId:73,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more small elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
		metaText: "The small element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'small';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis]`
			);
		}
	});
}
