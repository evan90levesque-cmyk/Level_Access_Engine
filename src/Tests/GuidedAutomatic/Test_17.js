import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-17
 * @returns {AutoTestShell} testShell
 */
export function test17() {
	aeKernel.addGuidedAutomaticTest("17", {
		bestPractice: 2042,
		testId: 17,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more video elements without a muted attribute and with an autoplay attribute, without an ARIA-assigned role, not intentionally hidden in the DOM, has a duration greater than 3 seconds.",
		metaText: "This video element is not muted, has autoplay and has a duration that is greater than 3 seconds",
		fixType: "",
		testFunc: function() {
			const baseCssSelector = 'video:not([muted])[autoplay][data-ae_ar="null"][data-ae_vis]';
			return new AutoTestShell(
				baseCssSelector,
				`${baseCssSelector}[data-ae_durationtoolong]`
			);
		}
	});
}
