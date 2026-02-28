import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-68
 * @returns {AutoTestShell} testShell
 */
export function test68() {
	aeKernel.addAdvisoryAutomaticTest("68", {
		bestPractice:482,
		testId:68,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more s elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
		metaText: "The s element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 's';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis]`
			);
		}
	});
}
