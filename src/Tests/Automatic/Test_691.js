import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-691
 * @returns {AutoTestShell} testShell
 */
export function test691() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("691", {
		bestPractice:1963,
		testId:691,
		introduced: "2.10",
		mediaType: mediaTypes.ANDROID,
		description:"One or more EditText elements does not have hint or default text.",
		metaText:"This [[object]] element does not have hint or default text",
		fixType:"",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]',
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]:not([data-ae_an])'
			);
		}
	});
}
