import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-282
 * @returns {AutoTestShell} testShell
 */
export function test282() {
	aeKernel.addAutomaticTest("282", {
		bestPractice:1626,
		testId:282,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding input type='text | search' elements and elements with a role='combobox | searchbox | textbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-autocomplete attribute.",
		metaText: "The aria-autocomplete attribute is not allowed on this element",
		metaTextDetail: "The aria-autocomplete attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'*[data-ae_ar="combobox"]',
				'*[data-ae_ar="searchbox"]',
				'*[data-ae_ar="textbox"]',
				'input[type="search"]',
				'input[type="text"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-autocomplete]`
			);
		}
	});
}
