import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-58
 * @returns {AutoTestShell} testShell
 */
export function test58() {
	aeKernel.addGuidedAutomaticTest("58", {
		bestPractice: 410,
		testId: 58,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more iframe elements with a height > 1, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a height attribute set to a value that does not end with '%'.",
		metaText: "This element has a height attribute value in absolute units. Percentage based units need to be used",
		metaTextDetail: "This {{tag-name}} has a height attribute value in absolute units. Percentage based units need to be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'iframe[data-ae_vis][data-ae_avat][data-ae_ar="null"]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[height]:not([height=""]):not([height="1"]):not([height="1px"]):not([height$="%"])`
			);
		}
	});
}
