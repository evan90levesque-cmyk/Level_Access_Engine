import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-590
 * @returns {AutoTestShell} testShell
 */
export function test590() {
	aeKernel.addGuidedAutomaticTest("590", {
		bestPractice:1871,
		testId:590,
		introduced: "2.6",
		mediaType: mediaTypes.WEB,
		description:"One or more button elements, excluding input [type=hidden] elements and those elements with a tabindex set to a negative value, without an ARIA-assigned role, not intentionally hidden in the DOM, has an aria-hidden attribute set to the text value: true",
		metaText: "The button element has an aria-hidden attribute set to the value: true",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'button[data-ae_vis][data-ae_ar="null"]',
				'button[data-ae_vis][data-ae_ar="null"]:not([type="hidden"]):not([tabindex^="-"])[aria-hidden="true"]'
			);
		}
	});
}