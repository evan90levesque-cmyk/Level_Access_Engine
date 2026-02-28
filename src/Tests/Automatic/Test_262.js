import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-262
 * @returns {AutoTestShell} testShell
 */
export function test262() {
	aeKernel.addAutomaticTest("262", {
		bestPractice:1626,
		testId:262,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding elements with a role='menu | menubar | scrollbar | separator | slider | tablist | tree | toolbar | radiogroup | treegrid | combobox | listbox' attribute and input type='range' elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-orientation attribute.",
		metaText: "The aria-orientation attribute is not allowed on this element",
		metaTextDetail: "The aria-orientation attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'*[data-ae_ar="menu"]',
				'*[data-ae_ar="menubar"]',
				'*[data-ae_ar="scrollbar"]',
				'*[data-ae_ar="separator"]',
				'*[data-ae_ar="slider"]',
				'*[data-ae_ar="tablist"]',
				'*[data-ae_ar="tree"]',
				'*[data-ae_ar="toolbar"]',
				'*[data-ae_ar="radiogroup"]',
				'*[data-ae_ar="treegrid"]',
				'*[data-ae_ar="combobox"]',
				'*[data-ae_ar="listbox"]',
				'input[type="range"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-orientation]`
			);
		}
	});
}
