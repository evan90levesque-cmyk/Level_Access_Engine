import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-872
 * @returns {AutoTestShell} testShell
 */
export function test872() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("872", {
		bestPractice: 2440,
		testId: 872,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more textarea elements with a placeholder attribute, without an aria-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an accessible name that depends on the placeholder attribute text.",
		metaText: "This textarea should not rely on text in the placeholder attribute for an accessible name",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = "textarea[data-ae_ar='null'][data-ae_vis][data-ae_avat][data-ae_an]";
			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_anp]`
			);
		}
	});
}