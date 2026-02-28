import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-249
 * @returns {AutoTestShell} testShell
 */
export function test249() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("249", {
		bestPractice:363,
		testId:249,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more object elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This object element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'object[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'object[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not([data-ae_an])'
			);
		}
	});
}
