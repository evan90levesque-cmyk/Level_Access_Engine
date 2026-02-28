import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-268
 * @returns {AutoTestShell} testShell
 */
export function test268() {
	aeKernel.addAutomaticTest("268", {
		bestPractice:1626,
		testId:268,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding elements with a role='progressbar | scrollbar | slider | spinbutton | meter' attribute, elements with a role='separator' and a tabindex, meter elements, progress elements, input type='range' elements and input type='number' elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuemin attribute.",
		metaText: "The aria-valuemin attribute is not allowed on this element",
		metaTextDetail: "The aria-valuemin attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'*[data-ae_ar="progressbar"]',
				'*[data-ae_ar="scrollbar"]',
				'*[data-ae_ar="slider"]',
				'*[data-ae_ar="spinbutton"]',
				'*[data-ae_ar="meter"]',
				'*[data-ae_ar="separator"][tabindex]',
				'input[type="range"]',
				'input[type="number"]',
				'meter',
				'progress',
			];

			const relevantCssSelector = `*${applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`;

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-valuemin]`
			);
		}
	});
}
