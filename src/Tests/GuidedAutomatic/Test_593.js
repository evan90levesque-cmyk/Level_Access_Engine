import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-593
 * @returns {AutoTestShell} testShell
 */
export function test593() {
	aeKernel.addGuidedAutomaticTest("593", {
		bestPractice:1871,
		testId:593,
		introduced: "2.7",
		mediaType: mediaTypes.WEB,
		description:"One or more select elements, excluding those elements with a tabindex set to a negative value, without an ARIA-assigned role, not intentionally hidden in the DOM, has an aria-hidden attribute set to the text value: true.",
		metaText: "This select element has an aria-hidden attribute set to the value: true",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'select:not([tabindex^="-"])[data-ae_ar="null"][data-ae_vis]',
				'select:not([tabindex^="-"])[data-ae_ar="null"][data-ae_vis][aria-hidden="true"]'
			);
		}
	});
}