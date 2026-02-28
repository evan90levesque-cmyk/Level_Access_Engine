import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-271
 * @returns {AutoTestShell} testShell
 */
export function test271() {
	aeKernel.addAutomaticTest("271", {
		bestPractice:1626,
		testId:271,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding table elements and elements with a role='table | grid | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-rowcount attribute.",
		metaText: "The aria-rowcount attribute is not allowed on this element",
		metaTextDetail: "The aria-rowcount attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'table',
				'[data-ae_ar="table"]',
				'[data-ae_ar="grid"]',
				'[data-ae_ar="treegrid"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-rowcount]`
			);
		}
	});
}
