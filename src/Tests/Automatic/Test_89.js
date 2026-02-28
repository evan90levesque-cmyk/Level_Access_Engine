import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-89
 * @returns {AutoTestShell} testShell
 */
export function test89() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("89", {
		bestPractice:362,
		testId:89,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more img elements, excluding img elements with an alt attribute set to a null value, children of button | anchor | meter | progress and elements with a role='button | link | checkbox | img | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', without an ARIA-assigned role other than img, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This img element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText": "Provide alternative text that describes the content conveyed by the image.",
			"fix":{
				"alt":null,
				"aria-label":false,
				"aria-labelledby":false
			}
		},
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'button *',
				'a *',
				'meter *',
				'progress *',
				'[role="button"] *',
				'[role="link"] *',
				'[role="checkbox"] *',
				'[role="img"] *',
				'[role="menuitemcheckbox"] *',
				'[role="menuitemradio"] *',
				'[role="meter"] *',
				'[role="option"] *',
				'[role="progressbar"] *',
				'[role="radio"] *',
				'[role="scrollbar"] *',
				'[role="separator"] *',
				'[role="slider"] *',
				'[role="switch"] *',
				'[role="tab"] *',
			];
			const relevantBaseCssSelectorList = [
				'img[data-ae_ar="null"]',
				'img[data-ae_ar="img"]',
			]
			const failConditionSubSelector = ':not([data-ae_an])';
			const relevantCssSelectorList = relevantBaseCssSelectorList.map(relevantBaseCssSelector => `${relevantBaseCssSelector}${
				applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]:not([alt=""])`
			);

			return new AutoTestShell(
				relevantCssSelectorList.join(','),
				relevantCssSelectorList.map(relevantCssSelector => `${relevantCssSelector}${failConditionSubSelector}`).join(','),
			);
		}
	});
}
