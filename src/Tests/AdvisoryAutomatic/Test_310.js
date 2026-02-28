import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-310
 * @returns {AutoTestShell} testShell
 */
export function test310() {
	aeKernel.addAdvisoryAutomaticTest("310", {
		bestPractice:1626,
		testId:310,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='text', excluding those with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'textbox | combobox'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'input[type="text"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="textbox"], ${relevantCssSelector}[data-ae_ar="combobox"]`
			);
		}
	});
}
