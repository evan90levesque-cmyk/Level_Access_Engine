import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-261
 * @returns {AutoTestShell} testShell
 */
export function test261() {
	aeKernel.addAutomaticTest("261", {
		bestPractice:1626,
		testId:261,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding elements with a role='grid | listbox | tablist | tree | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-multiselectable attribute.",
		metaText: "The aria-multiselectable attribute is not allowed on this element",
		metaTextDetail: "The aria-multiselectable attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'*[data-ae_ar="grid"]',
				'*[data-ae_ar="listbox"]',
				'*[data-ae_ar="tablist"]',
				'*[data-ae_ar="tree"]',
				'*[data-ae_ar="treegrid"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-multiselectable]`
			);
		}
	});
}
