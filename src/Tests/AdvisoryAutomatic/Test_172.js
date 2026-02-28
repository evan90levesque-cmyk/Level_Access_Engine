import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-172
 * @returns {AutoTestShell} testShell
 */
export function test172() {
	aeKernel.addAdvisoryAutomaticTest("172", {
		bestPractice:1626,
		testId:172,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='radio' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'radio...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="radio"]',
				'input[data-ae_vis][data-ae_avat][type="radio"][data-ae_ar="radio"]'
			);
		}
	});
}
