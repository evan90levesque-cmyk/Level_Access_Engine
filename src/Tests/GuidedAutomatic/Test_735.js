import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * (To be replaced with Machine Learning)
 * Jira: https://ssbbart.atlassian.net/browse/ENG-735
 * @returns {AutoTestShell} testShell
 */
export function test735() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("735", {
		bestPractice: 1893,
		testId: 735,
		introduced: "2.13",
		mediaType: mediaTypes.WEB,
		description: "One or more dialog elements with an open attribute, without an aria-assigned role and available to assistive technologies, has a suspicious calculated accessible name value (i.e. under 4 characters long).",
		metaText: "This dialog has a suspicious calculated accessible name value",
		metaTextDetail: "This dialog has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'dialog[open][data-ae_ar="null"][data-ae_avat][data-ae_an]';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const suspiciousText = [];
				const res = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				
				for (let i = 0, len_res = res.length; i < len_res; i++) {
					const result = res[i];
					const accName = result.getAttribute("data-ae_an");
					if (accName.length < 4) {
						suspiciousText.push(result);
					}
				}
				
				return suspiciousText;
			});
			
			return testShell;
		}
	});
}