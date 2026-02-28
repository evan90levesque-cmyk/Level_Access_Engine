import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-272
 * @returns {AutoTestShell} testShell
 */
export function test272() {
	aeKernel.addAutomaticTest("272", {
		bestPractice:1626,
		testId:272,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding TR, TD and TH elements and elements with a role='row | cell | gridcell | rowheader | columnheader' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-rowindex attribute.",
		metaText: "The aria-rowindex attribute is not allowed on this element",
		metaTextDetail: "The aria-rowindex attribute is not allowed on this {{tag-name}}",
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
				`${relevantCssSelector}[aria-rowindex]`
			);
		}
	});
}
