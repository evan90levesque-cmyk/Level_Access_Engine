import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-311
 * @returns {AutoTestShell} testShell
 */
export function test311() {
	aeKernel.addAutomaticTest("311", {
		bestPractice:1626,
		testId:311,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='text' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
		metaText: "This element has a redundant role attribute",
		metaTextDetail: "This {{tag-name}} with type=text has a redundant role attribute of: {{data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="text"][list]:not([list=""])',
				'input[data-ae_vis][data-ae_avat][type="text"][list]:not([list=""])[data-ae_ar="combobox"]'
			);
		}
	});
}
