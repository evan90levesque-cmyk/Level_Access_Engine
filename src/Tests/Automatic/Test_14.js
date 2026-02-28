import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-14
 * @returns {AutoTestShell} testShell
 */
export function test14() {
	aeKernel.addAutomaticTest("14", {
		bestPractice:1626,
		testId:14,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements, excluding th elements (without an ARIA-assigned role), and elements with a role='rowheader... | columnheader...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-sort attribute.",
		metaText: "The aria-sort attribute is not allowed on this element",
		metaTextDetail: "The aria-sort attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*:not(th[data-ae_ar="null"]):not([data-ae_ar="rowheader"]):not([data-ae_ar="columnheader"])[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-sort]`
			);
		}
	});
}
