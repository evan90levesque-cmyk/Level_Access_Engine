import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-734
 * @returns {AutoTestShell} testShell
 */
export function test734() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("734", {
		bestPractice: 1893,
		testId: 734,
		introduced: "2.13",
		mediaType: mediaTypes.WEB,
		description: "One or more dialog elements with an open attribute, without an ARIA-assigned role and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This dialog element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'dialog[open][data-ae_ar="null"][data-ae_avat]',
				'dialog[open][data-ae_ar="null"][data-ae_avat]:not([data-ae_an])'
			);
		}
	});
}