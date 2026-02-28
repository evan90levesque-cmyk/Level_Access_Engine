import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-247
 * @returns {AutoTestShell} testShell
 */
export function test247() {
	aeKernel.addAdvisoryAutomaticTest("247", {
		bestPractice:482,
		testId:247,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more i elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
		metaText: "The i element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'i';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis]`
			);
		}
	});
}
