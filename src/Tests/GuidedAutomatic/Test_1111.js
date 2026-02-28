import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1111
 * @returns {AutoTestShell} testShell
 */
export function test1111() {
	aeKernel.addGuidedAutomaticTest("1111", {
		bestPractice: 602,
		testId: 1111,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description: "One or more P elements with a tabindex set to 0 or a positive value, excluding those elements with aria-hidden='true', not intentionally hidden in the DOM, lacks a role attribute.",
		metaText: "This P is focusable but lacks a role attribute.",
		fixType: "",
		testFunc: function() {
			const baseCssSelector = 'p[tabindex]:not([tabindex=""]):not([tabindex^="-"]):not([aria-hidden="true"])[data-ae_vis]';
			return new AutoTestShell(
				baseCssSelector,
				`${baseCssSelector}[data-ae_ar="null"]`
			);
		}
	});
}
