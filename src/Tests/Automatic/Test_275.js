import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-275
 * @returns {AutoTestShell} testShell
 */
export function test275() {
	aeKernel.addAutomaticTest("275", {
		bestPractice:1626,
		testId:275,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding elements with a role='row | cell | gridcell | rowheader | columnheader' attribute and TD, TR and TH elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-colindex attribute.",
		metaText: "The aria-colindex attribute is not allowed on this element",
		metaTextDetail: "The aria-colindex attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'*[data-ae_ar="row"]',
				'*[data-ae_ar="cell"]',
				'*[data-ae_ar="gridcell"]',
				'*[data-ae_ar="rowheader"]',
				'*[data-ae_ar="columnheader"]',
				'tr',
				'td',
				'th',
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-colindex]`
			);
		}
	});
}
