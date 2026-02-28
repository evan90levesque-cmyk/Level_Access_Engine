import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-72
 * @returns {AutoTestShell} testShell
 */
export function test72() {
	aeKernel.addAdvisoryAutomaticTest("72", {
		bestPractice:482,
		testId:72,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more u elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
		metaText: "The u element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'u';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis]`
			);
		}
	});
}
