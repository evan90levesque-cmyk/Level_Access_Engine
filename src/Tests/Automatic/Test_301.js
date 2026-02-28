import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-301
 * @returns {AutoTestShell} testShell
 */
export function test301() {
	aeKernel.addAutomaticTest("301", {
		bestPractice:1626,
		testId:301,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='email' elements, excluding those with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'textbox'.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=email",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'input[type="email"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="textbox"]`
			);
		}
	});
}
