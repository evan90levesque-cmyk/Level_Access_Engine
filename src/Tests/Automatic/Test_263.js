import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-263
 * @returns {AutoTestShell} testShell
 */
export function test263() {
	aeKernel.addAutomaticTest("263", {
		bestPractice: 1626,
		testId: 263,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding input elements (without an ARIA-assigned role), select elements (without an ARIA-assigned role), textarea elements (without an ARIA-assigned role) and elements with a role='checkbox | columnheader | combobox | grid | gridcell | listbox | menuitemcheckbox | menuitemradio | radiogroup | rowheader | searchbox | slider | spinbutton | switch | textbox | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-readonly attribute.",
		metaText: "The aria-readonly attribute is not allowed on this element",
		metaTextDetail: "The aria-readonly attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'input[data-ae_ar="null"]',
				'select[data-ae_ar="null"]',
				'textarea[data-ae_ar="null"]',
				'*[data-ae_ar="checkbox"]',
				'*[data-ae_ar="columnheader"]',
				'*[data-ae_ar="combobox"]',
				'*[data-ae_ar="grid"]',
				'*[data-ae_ar="gridcell"]',
				'*[data-ae_ar="listbox"]',
				'*[data-ae_ar="menuitemcheckbox"]',
				'*[data-ae_ar="menuitemradio"]',
				'*[data-ae_ar="radiogroup"]',
				'*[data-ae_ar="rowheader"]',
				'*[data-ae_ar="searchbox"]',
				'*[data-ae_ar="slider"]',
				'*[data-ae_ar="spinbutton"]',
				'*[data-ae_ar="switch"]',
				'*[data-ae_ar="textbox"]',
				'*[data-ae_ar="treegrid"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-readonly]`
			);
		}
	});
}
