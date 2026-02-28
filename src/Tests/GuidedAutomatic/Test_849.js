import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-849
 * @returns {AutoTestShell} testShell
 */
export function test849() {
	aeKernel.addGuidedAutomaticTest("849", {
		bestPractice: 1626,
		testId: 849,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more input type='radio' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an aria-checked attribute.",
		metaText: "This input (type=radio) should not have an aria-checked attribute, as it has a native semantic checked state",
		metaTextDetail: "This input (type=radio) should not have an aria-checked attribute, as it has a native semantic checked state",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'input[type="radio"][data-ae_ar="null"][data-ae_vis][data-ae_avat]';
			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-checked]`
			);
		}
	});
}
