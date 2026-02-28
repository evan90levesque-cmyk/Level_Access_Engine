import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-164
 * @returns {AutoTestShell} testShell
 */
export function test164() {
	aeKernel.addAdvisoryAutomaticTest("164", {
		bestPractice:1626,
		testId:164,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='checkbox' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'checkbox...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="checkbox"]',
				'input[data-ae_vis][data-ae_avat][type="checkbox"][data-ae_ar="checkbox"]'
			);
		}
	});
}
