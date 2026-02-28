import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1093
 * @returns {AutoTestShell} testShell
 */
export function test1093() {
	aeKernel.addGuidedAutomaticTest("1093", {
		bestPractice:1626,
		testId:1093,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more span elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an aria-labelledby attribute.",
		metaText: "This span element has an aria-labelledby attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'span[data-ae_ar="null"][data-ae_vis]',
				'span[data-ae_ar="null"][data-ae_vis][aria-labelledby]'
			);
		}
	});
}