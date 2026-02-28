import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-306
 * @returns {AutoTestShell} testShell
 */
export function test306() {
	aeKernel.addAdvisoryAutomaticTest("306", {
		bestPractice:1626,
		testId:306,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='reset' element, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="reset"]',
				'input[data-ae_vis][data-ae_avat][type="reset"][data-ae_ar="button"]'
			);
		}
	});
}
