import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-283
 * @returns {AutoTestShell} testShell
 */
export function test283() {
	aeKernel.addAutomaticTest("283", {
		bestPractice:1626,
		testId:283,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding details elements (without an ARIA-assigned role), optgroup elements (without an ARIA-assigned role), input type = 'password' elements, input type='email | tel | text | url' elements with no list attribute (without an ARIA-assigned role), textarea elements (without an ARIA-assigned role), and elements with a role='composite | group | textbox | application | combobox | grid | listbox | menu | menubar | radiogroup | row | searchbox | spinbutton | tablist | toolbar | tree | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute.",
		metaText: "The aria-activedescendant attribute is not allowed on this element",
		metaTextDetail: "The aria-activedescendant attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'details[data-ae_ar="null"]',
				'optgroup[data-ae_ar="null"]',
				'input[type="password"][data-ae_ar="null"]',
				'input[type="email"]:not([list])[data-ae_ar="null"]',
				'input[type="tel"]:not([list])[data-ae_ar="null"]',
				'input[type="text"]:not([list])[data-ae_ar="null"]',
				'input[type="url"]:not([list])[data-ae_ar="null"]',
				'textarea[data-ae_ar="null"]',
				'*[data-ae_ar="composite"]',
				'*[data-ae_ar="group"]',
				'*[data-ae_ar="textbox"]',
				'*[data-ae_ar="application"]',
				'*[data-ae_ar="combobox"]',
				'*[data-ae_ar="grid"]',
				'*[data-ae_ar="listbox"]',
				'*[data-ae_ar="menu"]',
				'*[data-ae_ar="menubar"]',
				'*[data-ae_ar="radiogroup"]',
				'*[data-ae_ar="row"]',
				'*[data-ae_ar="searchbox"]',
				'*[data-ae_ar="spinbutton"]',
				'*[data-ae_ar="tablist"]',
				'*[data-ae_ar="toolbar"]',
				'*[data-ae_ar="tree"]',
				'*[data-ae_ar="treegrid"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-activedescendant]`
			);
		}
	});
}
