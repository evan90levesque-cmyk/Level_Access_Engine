import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1010
 * @returns {AutoTestShell} testShell
 */
export function test1010() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("1010", {
		bestPractice: 2519,
		testId: 1010,
		introduced: "2.19",
		mediaType: mediaTypes.WEB,
		description: "One or more elements that has a role='region' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
		metaText: "This element (role=region) does not have a mechanism that allows an accessible name value to be calculated",
		metaTextDetail: "This {{tag-name}} (role=region) does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = "*[data-ae_ar='region'][data-ae_vis][data-ae_avat]";
			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}:not([data-ae_an])`
			);
		}
	});
}