import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-39
 * @returns {AutoTestShell} testShell
 */
export function test39() {
	aeKernel.addGuidedAutomaticTest("39", {
		bestPractice: 2042,
		testId: 39,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more audio elements without a muted attribute and with an autoplay attribute, without an ARIA-assigned role, not intentionally hidden in the DOM, has a duration greater than 3 seconds.",
		metaText: "This audio element is not muted, has autoplay and has a duration that is greater than 3 seconds",
		fixType: "",
		testFunc: function() {
			const baseCssSelector = 'audio:not([muted])[autoplay][data-ae_ar="null"][data-ae_vis]';
			return new AutoTestShell(
				baseCssSelector,
				`${baseCssSelector}[data-ae_durationtoolong]`
			);
		}
	});
}
