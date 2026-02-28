import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-591
 * @returns {AutoTestShell} testShell
 */
export function test591() {
	aeKernel.addGuidedAutomaticTest("591", {
		bestPractice:1871,
		testId:591,
		introduced: "2.6",
		mediaType: mediaTypes.WEB,
		description:"One or more A elements, excluding those elements with a tabindex set to a negative value, without an ARIA-assigned role, not intentionally hidden in the DOM, has an aria-hidden attribute set to the text value: true",
		metaText: "The A element has an aria-hidden attribute set to the value: true",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'a[data-ae_vis][data-ae_ar="null"]',
				'a[data-ae_vis][data-ae_ar="null"]:not([tabindex^="-"])[aria-hidden="true"]'
			);
		}
	});
}