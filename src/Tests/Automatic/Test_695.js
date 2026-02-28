import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-695
 * @returns {AutoTestShell} testShell
 */
export function test695() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("695", {
		bestPractice:1963,
		testId:695,
		introduced: "2.10",
		mediaType: mediaTypes.ANDROID,
		description:"One or more Button elements does not have text or a content description.",
		metaText: "This [[object]] element does not have text or a content description",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'button[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'button[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])'
			);
		}
	});
}
