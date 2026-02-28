import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES, mediaTypes} from "../../Utils/aeUtils";

/**
 * This test will be superseded by a Machine Learning test
 * text that contains the substring ".gif", ".jpg", ".png";
 * text that is "img", "spacer", "alt", "blank", "_", "null", "photo", "image", "corner", "tag", "picture", "header", "histogram", "chart", or "undefined"
 * Jira: https://ssbbart.atlassian.net/browse/ENG-234
 * @returns {AutoTestShell} testShell
 */
export function test234() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("234", {
		bestPractice: 370,
		testId: 234,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more img elements, excluding img elements with an alt attribute set to a null value, children of button | anchor | meter | progress and elements with a role='button | link | checkbox | img | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', without an ARIA-assigned role other than img, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
		metaText: "This element has a suspicious calculated accessible name value",
		metaTextDetail: "This {{tag-name}} has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": "Provide alternative text that describes the content conveyed by the image.",
			"fix": {
				"alt": null,
				"aria-label": false,
				"aria-labelledby": false
			}
		},
		testFunc: function() {
			const baseCssSelector = 'img:not(:where(button img, anchor img, meter img, progress img, [data-ae_ar="button"] img, [data-ae_ar="link"] img, [data-ae_ar="checkbox"] img, [data-ae_ar="img"] img, [data-ae_ar="menuitemcheckbox"] img, [data-ae_ar="menuitemradio"] img, [data-ae_ar="meter"] img, [data-ae_ar="option"] img, [data-ae_ar="progressbar"] img, [data-ae_ar="radio"] img, [data-ae_ar="scrollbar"] img, [data-ae_ar="separator"] img, [data-ae_ar="slider"] img, [data-ae_ar="switch"] img, [data-ae_ar="tab"] img)):where([data-ae_ar="null"], [data-ae_ar="img"])[data-ae_vis][data-ae_avat]';

			const relevantCssSelector = `${baseCssSelector}[data-ae_an]`;

			let testCssSelector = "";
			for (const postfix of IMG_SUSPICIOUS_TEXT_CSS_SELECTOR_POSTFIXES) {
				testCssSelector += `${baseCssSelector}${postfix},`;
			}
			testCssSelector = testCssSelector.substring(0, testCssSelector.length - 1);

			return new AutoTestShell(
				relevantCssSelector,
				testCssSelector
			);
		}
	});
}
