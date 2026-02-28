import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-361
 * @returns {AutoTestShell} testShell
 */
export function test361() {
	aeKernel.addAutomaticTest("361", {
		bestPractice:1626,
		testId:361,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'command | composite | input | landmark | range | roletype | section | sectionhead | select | structure | widget | window'.",
		metaText: "Abstract ARIA roles are not allowed on any element",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])';

			const failConditionSubSelectors = [
				'[data-ae_ar="command"]',
				'[data-ae_ar="composite"]',
				'[data-ae_ar="input"]',
				'[data-ae_ar="landmark"]',
				'[data-ae_ar="range"]',
				'[data-ae_ar="roletype"]',
				'[data-ae_ar="section"]',
				'[data-ae_ar="sectionhead"]',
				'[data-ae_ar="select"]',
				'[data-ae_ar="structure"]',
				'[data-ae_ar="widget"]',
				'[data-ae_ar="window"]'
			];

			return new AutoTestShell(
				relevantCssSelector,
				failConditionSubSelectors.map(subSelector => `${relevantCssSelector}${subSelector}`).join(', ')
			);
		}
	});
}
