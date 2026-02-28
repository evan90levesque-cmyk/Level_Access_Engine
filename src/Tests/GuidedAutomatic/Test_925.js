import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-925
 * @returns {AutoTestShell} testShell
 */
export function test925() {
	aeKernel.addGuidedAutomaticTest("925", {
		bestPractice: 1301,
		testId: 925,
		introduced: "2.17",
		mediaType: mediaTypes.WEB,
		description: "One or more A elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an alt attribute.",
		metaText: "This A element has an alt attribute",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'a[data-ae_ar="null"][data-ae_vis][data-ae_avat]';
			return new AutoTestShell(
				`${relevantCssSelector}`,
				`${relevantCssSelector}[alt]`
			);
		}
	});
}
