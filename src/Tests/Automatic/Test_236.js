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
 * Jira: https://ssbbart.atlassian.net/browse/ENG-236
 * @returns {AutoTestShell} testShell
 */
export function test236() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("236", {
		bestPractice: 370,
		testId: 236,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more svg elements, excluding children of button | anchor | meter | progress and elements with a role='button | link | checkbox | img | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
		metaText: "This svg element has a suspicious calculated accessible name value",
		metaTextDetail: "This svg element has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": "Provide text that describes the content conveyed by the SVG.",
			"fix": {
				"alt": false,
				"aria-label": null,
				"aria-labelledby": false
			}
		},
		testFunc: function() {
			const baseCssSelector = 'svg:not(:where(button svg, anchor svg, meter svg, progress svg, [data-ae_ar="button"] svg, [data-ae_ar="link"] svg, [data-ae_ar="checkbox"] svg, [data-ae_ar="img"] svg, [data-ae_ar="menuitemcheckbox"] svg, [data-ae_ar="menuitemradio"] svg, [data-ae_ar="meter"] svg, [data-ae_ar="option"] svg, [data-ae_ar="progressbar"] svg, [data-ae_ar="radio"] svg, [data-ae_ar="scrollbar"] svg, [data-ae_ar="separator"] svg, [data-ae_ar="slider"] svg, [data-ae_ar="switch"] svg, [data-ae_ar="tab"] svg))[data-ae_ar="null"][data-ae_vis][data-ae_avat]';

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
