import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-10
 * @returns {AutoTestShell} testShell
 */
export function test10() {
	aeKernel.addAdvisoryAutomaticTest("10", {
		bestPractice:1626,
		testId:10,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more button elements with a type='menu' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'button[data-ae_vis][data-ae_avat][type="menu"]',
				'button[data-ae_vis][data-ae_avat][type="menu"][data-ae_ar="button"]'
			);
		}
	});
}
