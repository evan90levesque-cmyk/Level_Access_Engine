import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1109
 * @returns {AutoTestShell} testShell
 */
export function test1109() {
	aeKernel.addGuidedAutomaticTest("1109", {
		bestPractice: 602,
		testId: 1109,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description: "One or more SPAN elements with a tabindex set to 0 or a positive value, excluding those elements with aria-hidden='true', not intentionally hidden in the DOM, lacks a role attribute.",
		metaText: "This SPAN is focusable but lacks a role attribute.",
		fixType: "",
		testFunc: function() {
			const baseCssSelector = 'span[tabindex]:not([tabindex=""]):not([tabindex^="-"]):not([aria-hidden="true"])[data-ae_vis]';
			return new AutoTestShell(
				baseCssSelector,
				`${baseCssSelector}[data-ae_ar="null"]`
			);
		}
	});
}
