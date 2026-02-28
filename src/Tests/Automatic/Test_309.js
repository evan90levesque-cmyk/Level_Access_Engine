import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-309
 * @returns {AutoTestShell} testShell
 */
export function test309() {
	aeKernel.addAutomaticTest("309", {
		bestPractice:1626,
		testId:309,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='tel' elements, excluding those with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'textbox'.",
		metaText: "This element has a redundant role attribute",
		metaTextDetail: "This {{tag-name}} with type=tel has a redundant role attribute of: {{data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'input[type="tel"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="textbox"]`
			);
		}
	});
}
