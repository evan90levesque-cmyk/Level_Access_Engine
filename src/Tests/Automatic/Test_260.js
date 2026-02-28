import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-260
 * @returns {AutoTestShell} testShell
 */
export function test260() {
	aeKernel.addAutomaticTest("260", {
		bestPractice: 1626,
		testId: 260,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding heading, TABLE, TR, and LI elements and elements with a role='grid | heading | listitem | row | tablist | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-level attribute.",
		metaText: "The aria-level attribute is not allowed on this element",
		metaTextDetail: "The aria-level attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'table',
				'li',
				'tr',
				'*[data-ae_ar="grid"]',
				'*[data-ae_ar="heading"]',
				'*[data-ae_ar="listitem"]',
				'*[data-ae_ar="row"]',
				'*[data-ae_ar="tablist"]',
				'*[data-ae_ar="treeitem"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-level]`
			);
		}
	});
}
