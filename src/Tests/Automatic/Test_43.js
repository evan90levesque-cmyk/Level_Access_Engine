import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-43
 * @returns {AutoTestShell} testShell
 */
export function test43() {
	aeKernel.addAutomaticTest("43", {
		bestPractice: 441,
		testId: 43,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more marquee elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
		metaText: "The marquee element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'marquee';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis]`
			);
		}
	});
}
