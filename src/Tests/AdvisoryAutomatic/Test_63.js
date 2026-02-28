import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-63
 * @returns {AutoTestShell} testShell
 */
export function test63() {
	aeKernel.addAdvisoryAutomaticTest("63", {
		bestPractice:433,
		testId:63,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more acronym elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, is present.",
		metaText: "The acronym element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'acronym';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis][data-ae_avat]`
			);
		}
	});
}
