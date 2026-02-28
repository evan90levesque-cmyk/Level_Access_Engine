import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-312
 * @returns {AutoTestShell} testShell
 */
export function test312() {
	aeKernel.addAutomaticTest("312", {
		bestPractice:1626,
		testId:312,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='search' elements with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'combobox'.",
		metaText: "This element has a redundant role attribute",
		metaTextDetail: "This {{tag-name}} with type=search has a redundant role attribute of: {{data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="search"][list]:not([list=""])',
				'input[data-ae_vis][data-ae_avat][type="search"][list]:not([list=""])[data-ae_ar="combobox"]'
			);
		}
	});
}
