import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-690
 * @returns {AutoTestShell} testShell
 */
export function test690() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("690", {
		bestPractice:1584,
		testId:690,
		introduced: "2.10",
		mediaType: mediaTypes.IOS,
		description:"One or more Image elements does not have an accessible label.",
		metaText:"This [[object]] element does not have an accessible label",
		fixType:"",
		testFunc: function() {
			return new AutoTestShell(
				'img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""])',
				'img[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an]), img[data-ae_ar="img"][data-ae_vis][data-ae_avat]:not([alt=""]):not([data-ae_an])'
			);
		}
	});
}
