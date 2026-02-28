import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-993
 * @returns {AutoTestShell} testShell
 */
export function test993() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("993", {
		bestPractice: 523,
		testId: 993,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description: "One or more iframe elements with tabindex set to a negative value, excluding those elements with aria-hidden='true', not intentionally hidden in the DOM, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This iframe element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'iframe[tabindex^="-"]:not([aria-hidden="true"])[data-ae_vis]';
			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}:not([data-ae_an])`
			);
		}
	});
}
