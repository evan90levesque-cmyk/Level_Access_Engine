import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-736
 * @returns {AutoTestShell} testShell
 */
export function test736() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("736", {
		bestPractice:1893,
		testId:736,
		introduced: "2.13",
		mediaType: mediaTypes.WEB,
		description:"One or more elements with a role='dialog' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This element (role=dialog) does not have a mechanism that allows an accessible name value to be calculated",
		metaTextDetail: "This {{tag-name}} (role=dialog) does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="dialog"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="dialog"]:not([data-ae_an])'
			);
		}
	});
}
