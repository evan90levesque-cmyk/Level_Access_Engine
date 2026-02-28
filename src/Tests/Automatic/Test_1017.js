import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1017
 * @returns {AutoTestShell} testShell
 */
export function test1017() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("1017", {
		bestPractice: 2554,
		testId: 1017,
		introduced: "2.19",
		mediaType: mediaTypes.WEB,
		description: "One or more elements that has a role='progressbar' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
		metaText: "This element (role=progressbar) does not have a mechanism that allows an accessible name value to be calculated",
		metaTextDetail: "This {{tag-name}} (role=progressbar) does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_vis][data-ae_avat][data-ae_ar="progressbar"]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}:not([data-ae_an])`
			);
		}
	});
}
