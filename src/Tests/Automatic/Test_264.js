import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-264
 * @returns {AutoTestShell} testShell
 */
export function test264() {
	aeKernel.addAutomaticTest("264", {
		bestPractice: 1626,
		testId: 264,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding excluding OPTION,TR, TD and TH elements and elements with a role='gridcell | option | row | tab | columnheader | rowheader | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-selected attribute.",
		metaText: "The aria-selected attribute is not allowed on this element",
		metaTextDetail: "The aria-selected attribute is not allowed on this {{tag-name}}{{optional_data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'tr',
				'td',
				'th',
				'option',
				'*[data-ae_ar="gridcell"]',
				'*[data-ae_ar="option"]',
				'*[data-ae_ar="row"]',
				'*[data-ae_ar="tab"]',
				'*[data-ae_ar="columnheader"]',
				'*[data-ae_ar="rowheader"]',
				'*[data-ae_ar="treeitem"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-selected]`
			);
		}
	});
}
