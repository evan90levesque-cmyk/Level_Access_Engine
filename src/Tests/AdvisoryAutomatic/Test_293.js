import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-293
 * @returns {AutoTestShell} testShell
 */
export function test293() {
	aeKernel.addAdvisoryAutomaticTest("293", {
		bestPractice:1626,
		testId:293,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more footer elements, excluding children of article elements (without an ARIA-assigned role) or section elements (without an ARIA-assigned role), not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'contentinfo'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'footer:not(article[data-ae_ar="null"] footer):not(section[data-ae_ar="null"] footer)[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="contentinfo"]`
			);
		}
	});
}
