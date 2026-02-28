import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-163
 * @returns {AutoTestShell} testShell
 */
export function test163() {
	aeKernel.addAdvisoryAutomaticTest("163", {
		bestPractice:1626,
		testId:163,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='button' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'button[data-ae_vis][data-ae_avat][type="button"]',
				'button[data-ae_vis][data-ae_avat][type="button"][data-ae_ar="button"]'
			);
		}
	});
}
