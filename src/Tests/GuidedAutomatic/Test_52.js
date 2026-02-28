import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-52
 * @returns {AutoTestShell} testShell
 */
export function test52() {
	aeKernel.addGuidedAutomaticTest("52", {
		bestPractice: 410,
		testId: 52,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more iframe elements with a width > 1, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a width attribute set to a value that does not end with '%'.",
		metaText: "This element has a width attribute value in absolute units. Percentage based units need to be used",
		metaTextDetail: "This {{tag-name}} has a width attribute value in absolute units. Percentage based units need to be used",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'iframe[data-ae_vis][data-ae_avat][data-ae_ar="null"]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[width]:not([width=""]):not([width="1"]):not([width="1px"]):not([width$="%"])`
			);
		}
	});
}
