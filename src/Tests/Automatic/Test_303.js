import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-303
 * @returns {AutoTestShell} testShell
 */
export function test303() {
	aeKernel.addAutomaticTest("303", {
		bestPractice:1626,
		testId:303,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='number' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'spinbutton'.",
		metaText: "This element has a redundant role attribute",
		metaTextDetail: "This {{tag-name}} with type=number has a redundant role attribute of: {{data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="number"]',
				'input[data-ae_vis][data-ae_avat][type="number"][data-ae_ar="spinbutton"]'
			);
		}
	});
}
