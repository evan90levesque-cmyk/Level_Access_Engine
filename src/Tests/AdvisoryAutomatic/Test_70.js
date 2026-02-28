import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-70
 * @returns {AutoTestShell} testShell
 */
export function test70() {
	aeKernel.addAdvisoryAutomaticTest("70", {
		bestPractice:482,
		testId:70,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more b elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
		metaText: "The b element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'b';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis]`
			);
		}
	});
}
