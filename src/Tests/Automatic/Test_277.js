import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-277
 * @returns {AutoTestShell} testShell
 */
export function test277() {
	aeKernel.addAutomaticTest("277", {
		bestPractice:1626,
		testId:277,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding textarea elements (without an ARIA-assigned role), input type='email | tel | search | text | url' elements with no list attribute (without an ARIA-assigned role), input type='password' elements (without an ARIA-assigned role), and elements with a role='combobox | textbox | searchbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-placeholder attribute.",
		metaText: "The aria-placeholder attribute is not allowed on this element",
		metaTextDetail: "The aria-placeholder attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'textarea[data-ae_ar="null"]',
				'input[type="email"]:not([list])[data-ae_ar="null"]',
				'input[type="tel"]:not([list])[data-ae_ar="null"]',
				'input[type="search"]:not([list])[data-ae_ar="null"]',
				'input[type="text"]:not([list])[data-ae_ar="null"]',
				'input[type="url"]:not([list])[data-ae_ar="null"]',
				'input[type="email"]:not([list])[data-ae_ar="null"]',
				'input[type="password"][data-ae_ar="null"]',
				'*[data-ae_ar="combobox"]',
				'*[data-ae_ar="textbox"]',
				'*[data-ae_ar="searchbox"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-placeholder]`
			);
		}
	});
}
