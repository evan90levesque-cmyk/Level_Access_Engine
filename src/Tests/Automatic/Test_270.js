import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-270
 * @returns {AutoTestShell} testShell
 */
export function test270() {
	aeKernel.addAutomaticTest("270", {
		bestPractice:1626,
		testId:270,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding datalist elements (without an ARIA-assigned role), select elements (without an ARIA-assigned role), textarea elements (without an ARIA-assigned role), input type='checkbox | color | date | datetime-local | email | file | month | number | password | radio | range | search | tel | text | time | url | week' elements (without an ARIA-assigned role), and elements with a role='searchbox | spinbutton | textbox | combobox | columnheader | rowheader | gridcell | listbox | radiogroup | tree | treegrid' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-required attribute.",
		metaText: "The aria-required attribute is not allowed on this element",
		metaTextDetail: "The aria-required attribute is not allowed on this {{tag-name}}",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":'Select "Save" to remove the aria-required attribute, or "Cancel" if the fix should not be applied.',
			"fix":{
				"aria-required":false
			}
		},
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'datalist[data-ae_ar="null"]',
				'select[data-ae_ar="null"]',
				'textarea[data-ae_ar="null"]',
				'input[type="checkbox"][data-ae_ar="null"]',
				'input[type="color"][data-ae_ar="null"]',
				'input[type="date"][data-ae_ar="null"]',
				'input[type="datetime-local"][data-ae_ar="null"]',
				'input[type="email"][data-ae_ar="null"]',
				'input[type="file"][data-ae_ar="null"]',
				'input[type="month"][data-ae_ar="null"]',
				'input[type="number"][data-ae_ar="null"]',
				'input[type="password"][data-ae_ar="null"]',
				'input[type="radio"][data-ae_ar="null"]',
				'input[type="range"][data-ae_ar="null"]',
				'input[type="search"][data-ae_ar="null"]',
				'input[type="tel"][data-ae_ar="null"]',
				'input[type="text"][data-ae_ar="null"]',
				'input[type="time"][data-ae_ar="null"]',
				'input[type="url"][data-ae_ar="null"]',
				'input[type="week"][data-ae_ar="null"]',
				'*[data-ae_ar="checkbox"]',
				'*[data-ae_ar="combobox"]',
				'*[data-ae_ar="columnheader"]',
				'*[data-ae_ar="gridcell"]',
				'*[data-ae_ar="listbox"]',
				'*[data-ae_ar="radiogroup"]',
				'*[data-ae_ar="rowheader"]',
				'*[data-ae_ar="searchbox"]',
				'*[data-ae_ar="spinbutton"]',
				'*[data-ae_ar="textbox"]',
				'*[data-ae_ar="tree"]',
				'*[data-ae_ar="treegrid"]',

				//Input with no type is an implicit type=text
				'input[data-ae_ar="null"]:not([type=null])'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-required]`
			);
		}
	});
}
