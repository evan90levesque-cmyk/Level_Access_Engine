import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-87
 * @returns {AutoTestShell} testShell
 */
export function test87() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("87", {
		bestPractice: 362,
		testId: 87,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more elements with a role attribute set to a value that starts with 'img' or 'graphics', excluding children of button | anchor | meter | progress and elements with a role='link | button | checkbox | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This element (role=img, role=graphics-symbol or role=graphics-document) does not have a mechanism that allows an accessible name value to be calculated",
		metaTextDetail: "This {{tag-name}} (role={{data-ae_ar}}) does not have a mechanism that allows an accessible name value to be calculated",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": "Specify label text that describes the content conveyed by the image.",
			"fix": {
				"aria-label": null,
				"alt": false,
				"aria-labelledby": false
			}
		},
		testFunc: function() {
			const applicabilityExclusionSubSelectors = [
				'button *',
				'a *',
				'meter *',
				'progress *',
				'[role="link"] *',
				'[role="button"] *',
				'[role="checkbox"] *',
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
				'*[data-ae_ar^="img"]',
				'*[data-ae_ar^="graphics"]',
			]
			const failConditionSubSelector = ':not([data-ae_an])';
			const relevantCssSelectorList = relevantBaseCssSelectorList.map(relevantBaseCssSelector => `${relevantBaseCssSelector}${
				applicabilityExclusionSubSelectors.map(subSelector => `:not(${subSelector})`).join('')}[data-ae_vis][data-ae_avat]`
			);

			return new AutoTestShell(
				relevantCssSelectorList.join(','),
				relevantCssSelectorList.map(relevantCssSelector => `${relevantCssSelector}${failConditionSubSelector}`).join(','),
			);
		}
	});
}
