import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-257
 * @returns {AutoTestShell} testShell
 */
export function test257() {
	aeKernel.addAutomaticTest("257", {
		bestPractice: 1626,
		testId: 257,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding input elements with type='checkbox | radio' and elements with a role='checkbox | option | radio | switch | menuitemcheckbox | menuitemradio | treeitem' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-checked attribute.",
		metaText: "The aria-checked attribute is not allowed on this element",
		metaTextDetail: "The aria-checked attribute is not allowed on this {{tag-name}}{{optional_data-ae_ar}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'input[type="checkbox"]',
				'input[type="radio"]',
				'*[data-ae_ar="checkbox"]',
				'*[data-ae_ar="option"]',
				'*[data-ae_ar="radio"]',
				'*[data-ae_ar="switch"]',
				'*[data-ae_ar="menuitemcheckbox"]',
				'*[data-ae_ar="menuitemradio"]',
				'*[data-ae_ar="treeitem"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-checked]`
			);
		}
	});
}
