import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {testUtil_colorContrast} from "../TestUtils/testUtil_colorContrast";
import {
	getBackgroundColor_FromStyles,
	getColor_FromStyles,
	getFontSize_FromStyles,
	getFontWeight_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_textColor_fromStyles";
import {
	getHeight_FromStyles,
	getWidth_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_dimensions_fromStyles";
import {colorContrast} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_colorContrast";
import {
	setBackgroundColor,
	setRelevantContrastRatioForText,
	setTextColor
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage5_backgroundColor";
import {setIsTiny} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage5_isTiny";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-107
 * @returns {AutoTestShell} testShell
 */
export function test107() {
	aeKernel.addStage1MarkdownFunc("getBackgroundColor_FromStyles", getBackgroundColor_FromStyles);
	aeKernel.addStage1MarkdownFunc("getFontSize_FromStyles", getFontSize_FromStyles);
	aeKernel.addStage1MarkdownFunc("getFontWeight_FromStyles", getFontWeight_FromStyles);
	aeKernel.addStage1MarkdownFunc("getColor_FromStyles", getColor_FromStyles);
	aeKernel.addStage1MarkdownFunc("getHeight_FromStyles", getHeight_FromStyles);
	aeKernel.addStage1MarkdownFunc("getWidth_FromStyles", getWidth_FromStyles);
	aeKernel.addStage4MarkdownFunc("colorContrast", colorContrast);
	aeKernel.addStage5MarkdownFunc("setBackgroundColor", setBackgroundColor);
	aeKernel.addStage5MarkdownFunc("setTextColor", setTextColor);
	aeKernel.addStage5MarkdownFunc("setRelevantContrastRatioForText", setRelevantContrastRatioForText);
	aeKernel.addStage5MarkdownFunc("setIsTiny", setIsTiny);

	aeKernel.addGuidedAutomaticTest("107", {
		bestPractice: 368,
		testId: 107,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding option elements and elements with a size of 1px by 1px, not intentionally hidden in the DOM, contains text less than 18 point in size; or bold text less than 14 point in size has a luminosity contrast ratio below 4.5:1.",
		metaText: "This element contains text that is less than 18 point in size; or bold text less than 14 point in size that has a luminosity contrast ratio below 4.5:1",
		metaTextDetail: "This {{tag-name}} contains text with a background color of {{data-ae_bgcolor}} and foreground color of {{data-ae_color}} that is less than 18 point in size; or bold text less than 14 point in size that has a luminosity contrast ratio of {{data-ae_cr}}, which is below 4.5:1",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*:not(body):not(option):not([data-ae_tiny])[data-ae_vis]:not(script):not(noscript):not(title)[data-ae_ts="4.5"]';
			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			testShell.set_candidateSetNodesFunc(function() {
				return testUtil_colorContrast(aeKernel.rootTestNode, relevantCssSelector, 4.5);
			});
			return testShell;
		}
	});
}
