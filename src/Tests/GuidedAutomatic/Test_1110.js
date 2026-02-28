import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1110
 * @returns {AutoTestShell} testShell
 */
export function test1110() {
	aeKernel.addGuidedAutomaticTest("1110", {
		bestPractice: 602,
		testId: 1110,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description: "One or more DIV elements with a tabindex set to 0 or a positive value, excluding those elements with aria-hidden='true', not intentionally hidden in the DOM, lacks a role attribute.",
		metaText: "This DIV is focusable but lacks a role attribute.",
		fixType: "",
		testFunc: function() {
			const baseCssSelector = 'div[tabindex]:not([tabindex=""]):not([tabindex^="-"]):not([aria-hidden="true"])[data-ae_vis]';
			return new AutoTestShell(
				baseCssSelector,
				`${baseCssSelector}[data-ae_ar="null"]`
			);
		}
	});
}
