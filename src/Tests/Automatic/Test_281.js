import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-281
 * @returns {AutoTestShell} testShell
 */
export function test281() {
	aeKernel.addAutomaticTest("281", {
		bestPractice: 1626,
		testId: 281,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding button elements (without an ARIA-assigned role), input type='button | image | reset | submit' elements (without an ARIA-assigned role), summary elements (without an ARIA-assigned role), A elements with an href attribute (without an ARIA-assigned role), area elements with an href attribute (without an ARIA-assigned role), hr elements (without an ARIA-assigned role) and elements with a role='application | button | checkbox | columnheader | combobox | gridcell | link | listbox | menuitem | menuitemcheckbox | menuitemradio | row | rowheader | switch | tab | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-expanded attribute.",
		metaText: "The aria-expanded attribute is not allowed on this element",
		metaTextDetail: "The aria-expanded attribute is not allowed on this {{tag-name}}",
		fixType: "",
		
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'button[data-ae_ar="null"]',
				'input[type="button"][data-ae_ar="null"]',
				'input[type="image"][data-ae_ar="null"]',
				'input[type="reset"][data-ae_ar="null"]',
				'input[type="submit"][data-ae_ar="null"]',
				'summary[data-ae_ar="null"]',
				'a[href][data-ae_ar="null"]',
				'area[href][data-ae_ar="null"]',
				'hr[data-ae_ar="null"]',
				'*[data-ae_ar="application"]',
				'*[data-ae_ar="button"]',
				'*[data-ae_ar="checkbox"]',
				'*[data-ae_ar="columnheader"]',
				'*[data-ae_ar="combobox"]',
				'*[data-ae_ar="gridcell"]',
				'*[data-ae_ar="link"]',
				'*[data-ae_ar="listbox"]',
				'*[data-ae_ar="menuitem"]',
				'*[data-ae_ar="menuitemcheckbox"]',
				'*[data-ae_ar="menuitemcheckradio"]',
				'*[data-ae_ar="row"]',
				'*[data-ae_ar="rowheader"]',
				'*[data-ae_ar="switch"]',
				'*[data-ae_ar="tab"]',
				'*[data-ae_ar="treeitem"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-expanded]`
			);
		}
	});
}
