import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-278
 * @returns {AutoTestShell} testShell
 */
export function test278() {
	aeKernel.addAutomaticTest("278", {
		bestPractice:1626,
		testId:278,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, excluding dialog elements (without an ARIA-assigned role) and elements with a role='alertdialog | dialog' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-modal attribute.",
		metaText: "The aria-modal attribute is not allowed on this element",
		metaTextDetail: "The aria-modal attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'dialog[data-ae_ar="null"]',
				'*[data-ae_ar="alertdialog"]',
				'*[data-ae_ar="dialog"]'
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-modal]`
			);
		}
	});
}
