import { aeKernel } from "../../Kernel/AEKernel.js";
import { AutoTestShell } from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles,
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import { calcAccNamesForCertainElements } from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1563
 * @returns {AutoTestShell} testShell
 */
export function test1563() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("1563", {
		bestPractice: 2440,
		testId: 1563,
		introduced: "2.26",
		mediaType: mediaTypes.WEB,
		description: "One or more input elements with a placeholder attribute and a role='combobox | searchbox | textbox', not intentionally hidden in the DOM and available to assistive technologies, has an accessible name that depends on the placeholder attribute text.",
		metaText: "This input (role=combobox, role=searchbox or role=textbox) should not rely on text in the placeholder attribute for an accessible name",
		metaTextDetail: "This input (role={{data-ae_ar}}) should not rely on text in the placeholder attribute for an accessible name",
		fixType: "",
		testFunc: function () {
			const ariaRoleSelectors = [
				"input[data-ae_ar='combobox']",
				"input[data-ae_ar='searchbox']",
				"input[data-ae_ar='textbox']",
			];

			const relevantCssSelectors = ariaRoleSelectors.map(
				(eachAriaRoleSelector) => eachAriaRoleSelector + "[data-ae_vis][data-ae_avat][data-ae_an]"
			);
			const testedCssSelectors = relevantCssSelectors.map(
				(eachRelevantCssSelector) => eachRelevantCssSelector + "[data-ae_anp]"
			);

			return new AutoTestShell(relevantCssSelectors.join(","), testedCssSelectors.join(","));
		},
	});
}
