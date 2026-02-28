import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1094
 * @returns {AutoTestShell} testShell
 */
export function test1094() {
	aeKernel.addGuidedAutomaticTest("1094", {
		bestPractice:1626,
		testId:1094,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more div elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an aria-labelledby attribute.",
		metaText: "This div element has an aria-labelledby attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'div[data-ae_ar="null"][data-ae_vis]',
				'div[data-ae_ar="null"][data-ae_vis][aria-labelledby]'
			);
		}
	});
}