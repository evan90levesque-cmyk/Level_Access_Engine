import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1112
 * @returns {AutoTestShell} testShell
 */
export function test1112() {
	aeKernel.addGuidedAutomaticTest("1112", {
		bestPractice: 602,
		testId: 1112,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description: "One or more A elements with a tabindex set to 0 or a positive value, excluding those elements with aria-hidden='true' or an href attribute set to a text value, not intentionally hidden in the DOM, lacks a role attribute.",
		metaText: "This A is focusable but lacks either an href or role attribute.",
		fixType: "",
		testFunc: function() {
			//All the anchors with a non-negative tabindex and an href that is empty
			const baseCssSelector1 = 'a[tabindex]:not([tabindex=""]):not([tabindex^="-"]):not([aria-hidden="true"])[href][href=""][data-ae_vis]';
			//All the anchors with a non-negative tabindex and no href
			const baseCssSelector2='a[tabindex]:not([tabindex=""]):not([tabindex^="-"]):not([aria-hidden="true"]):not([href])[data-ae_vis]';
			return new AutoTestShell(
				`${baseCssSelector1},${baseCssSelector2}`,
				`${baseCssSelector1}[data-ae_ar="null"],${baseCssSelector2}[data-ae_ar="null"]`
			);
		}
	});
}
