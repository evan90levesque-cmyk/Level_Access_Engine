import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-315
 * @returns {AutoTestShell} testShell
 */
export function test315() {
	aeKernel.addAutomaticTest("315", {
		bestPractice:1626,
		testId:315,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='email' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
		metaText: "This element has a redundant role attribute",
		metaTextDetail: "This {{tag-name}} with type=email has a redundant role attribute of: {{data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="email"][list]:not([list=""])',
				'input[data-ae_vis][data-ae_avat][type="email"][list]:not([list=""])[data-ae_ar="combobox"]'
			);
		}
	});
}
