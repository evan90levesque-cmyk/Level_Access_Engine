import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-59
 * @returns {AutoTestShell} testShell
 */
export function test59() {
	aeKernel.addAutomaticTest("59", {
		bestPractice: 410,
		testId: 59,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more meta elements, in the head element, has a content attribute set to a value that includes an instruction that sets the viewport's maximum-scale to less than 2 e.g. 'maximum-scale=1.0'.",
		metaText: "This element has a content attribute set to a value that includes an instruction that sets the viewport's maximum-scale to less than 2",
		metaTextDetail: "This {{tag-name}} has a content attribute set to a value that includes an instruction that sets the viewport's maximum-scale to less than 2",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": 'Select "Save" to change the viewport content attribute to "width=device-width, initial-scale=1.0", or "Cancel" if the fix should not be applied.',
			"fix": {
				"content": "width=device-width, initial-scale=1.0"
			}
		},
		testFunc: function() {
			const relevantCssSelector = 'head meta[content]';

			const failConditionSubSelectors = [
				'[content*="maximum-scale=0"]',
				'[content*="maximum-scale=1,"]',
				'[content*="maximum-scale=1 "]',
				'[content$="maximum-scale=1"]',
				'[content*="maximum-scale=1."]',
				'[content*="maximum-scale=yes"]',
				'[content*="maximum-scale=-"]'
			];

			return new AutoTestShell(
				relevantCssSelector,
				failConditionSubSelectors.map(subSelector => `${relevantCssSelector}${subSelector}`).join(', ')
			);
		}
	});
}
