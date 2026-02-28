import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-307
 * @returns {AutoTestShell} testShell
 */
export function test307() {
	aeKernel.addAdvisoryAutomaticTest("307", {
		bestPractice:1626,
		testId:307,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='search' element, excluding those with a list attribute set to a non-null value, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'searchbox'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'input[type="search"]:not([list]:not([list=""]))[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="searchbox"]`
			);
		}
	});
}
