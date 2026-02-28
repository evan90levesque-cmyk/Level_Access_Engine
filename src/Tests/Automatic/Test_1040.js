import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1040
 * @returns {AutoTestShell} testShell
 */
export function test1040() {
	aeKernel.addAutomaticTest("1040", {
		bestPractice:1626,
		testId:1040,
		introduced: "2.20",
		mediaType:mediaTypes.WEB,
		description:"One or more elements that has a role='combobox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-expanded attribute.",
		metaText: "This element (role=combobox) must have the attribute: aria-expanded",
		metaTextDetail: "This {{tag-name}} (role=combobox) must have the attribute: aria-expanded",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]';
			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}:not([aria-expanded])`
			);
		}
	});
}
