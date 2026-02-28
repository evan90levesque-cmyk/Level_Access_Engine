import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-34
 * @returns {AutoTestShell} testShell
 */
export function test34() {
	aeKernel.addAutomaticTest("34", {
		bestPractice: 1342,
		testId: 34,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more blink elements, without an ARIA-assigned role, not intentionally hidden in the DOM, are present in the DOM.",
		metaText: "The blink element is obsolete and should not be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'blink';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="null"][data-ae_vis]`
			);
		}
	});
}
