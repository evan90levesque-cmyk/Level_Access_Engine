import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-276
 * @returns {AutoTestShell} testShell
 */
export function test276() {
	aeKernel.addAutomaticTest("276", {
		bestPractice:1626,
		testId:276,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding elements with a role='cell | columnheader | gridcell | rowheader' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-colspan attribute.",
		metaText: "The aria-colspan attribute is not allowed on this element",
		metaTextDetail: "The aria-colspan attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'*[data-ae_ar="cell"]',
				'*[data-ae_ar="columnheader"]',
				'*[data-ae_ar="gridcell"]',
				'*[data-ae_ar="rowheader"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-colspan]`
			);
		}
	});
}
