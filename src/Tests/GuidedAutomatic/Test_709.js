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
 * Jira: https://ssbbart.atlassian.net/browse/ENG-709
 * @returns {AutoTestShell} testShell
 */
export function test709() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("709", {
		bestPractice: 332,
		testId: 709,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more elements that has a role='radiogroup' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious accessible name value (i.e. under 4 characters long).",
		metaText: "This element (role=radiogroup) has a suspicious accessible name",
		metaTextDetail: "This {{tag-name}} (role=radiogroup) has a suspicious accessible name value of: {{data-ae_an}}",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_ar="radiogroup"][data-ae_vis][data-ae_avat][data-ae_an]';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const relevantNodes = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < relevantNodes.length; i++) {
					const relevantNode = relevantNodes[i];

					const accName = relevantNode.getAttribute('data-ae_an');
					if (accName.length < 4) {
						badNodes.push(relevantNode);
					}
				}
				
				return badNodes;
			});
			
			return testShell;
		}
	});
}
