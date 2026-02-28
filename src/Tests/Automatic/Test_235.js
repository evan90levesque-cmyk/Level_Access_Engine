import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES, mediaTypes} from "../../Utils/aeUtils";

/**
 * text that contains the substring ".gif", ".jpg", ".png";
 * text that is "img", "spacer", "alt", "blank", "_", "null", "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", "undefined".
 * Jira: https://ssbbart.atlassian.net/browse/ENG-235
 * @returns {AutoTestShell} testShell
 */
export function test235() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("235", {
		bestPractice: 370,
		testId: 235,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements with a role attribute set to a value that starts with 'img' or 'graphics', not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
		metaText: "This element (role=img, role=graphics-symbol or role=graphics-document) has a suspicious calculated accessible name value",
		metaTextDetail: "This {{tag-name}} (role={{data-ae_ar}}) has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": 'Provide alternative text that describes the content conveyed by the image.',
			"fix": {
				"aria-label": null,
				"aria-labelledby": false
			}
		},
		testFunc: function() {
			const prefixes = [
				'*[data-ae_ar^="img"][data-ae_vis][data-ae_avat]',
				'*[data-ae_ar^="graphics"][data-ae_vis][data-ae_avat]'
			];

			let relevantCssSelector = "";
			let testCssSelector = "";
			for (const prefix of prefixes) {
				relevantCssSelector += `${prefix}[data-ae_an],`;

				for (const postfix of IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES) {
					testCssSelector += `${prefix}${postfix},`;
				}
			}
			relevantCssSelector = relevantCssSelector.substring(0, relevantCssSelector.length - 1);
			testCssSelector = testCssSelector.substring(0, testCssSelector.length - 1);

			return new AutoTestShell(
				relevantCssSelector,
				testCssSelector
			);
		}
	});
}
