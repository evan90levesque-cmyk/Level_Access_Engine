import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-592
 * @returns {AutoTestShell} testShell
 */
export function test592() {
	aeKernel.addGuidedAutomaticTest("592", {
		bestPractice:1871,
		testId:592,
		introduced: "2.6",
		mediaType: mediaTypes.WEB,
		description:"One or more input elements, excluding input [type=hidden] elements and those elements with a tabindex set to a negative value, without an ARIA-assigned role, not intentionally hidden in the DOM, has an aria-hidden attribute set to the text value: true",
		metaText: "This input element has an aria-hidden attribute set to the value: true",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_ar="null"]',
				'input[data-ae_vis][data-ae_ar="null"]:not([type="hidden"]):not([tabindex^="-"])[aria-hidden="true"]'

			);
		}
	});
}