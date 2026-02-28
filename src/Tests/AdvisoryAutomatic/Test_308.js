import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-308
 * @returns {AutoTestShell} testShell
 */
export function test308() {
	aeKernel.addAdvisoryAutomaticTest("308", {
		bestPractice:1626,
		testId:308,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='submit' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="submit"]',
				'input[data-ae_vis][data-ae_avat][type="submit"][data-ae_ar="button"]'
			);
		}
	});
}
