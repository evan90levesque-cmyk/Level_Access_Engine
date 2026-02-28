import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-630
 * @returns {AutoTestShell} testShell
 */
export function test630() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("630", {
		bestPractice:338,
		testId:630,
		introduced: "2.7",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='spinbutton' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name to be calculated.",
		metaText: "This element (role=spinbutton) does not have a mechanism that allows an accessible name value to be calculated",
		metaTextDetail: "This {{tag-name}} (role=spinbutton) does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="spinbutton"]:not([data-ae_an])'
			);
		}
	});
}
