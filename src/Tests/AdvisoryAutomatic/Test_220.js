import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	calcAccDescriptionsForCertainElements,
	calcAccNamesForCertainElements
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * (To be replaced with Machine Learning)
 * Jira: https://ssbbart.atlassian.net/browse/ENG-220
 * @returns {AutoTestShell} testShell
 */
export function test220() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);
	aeKernel.addStage4MarkdownFunc("calcAccDescriptionsForCertainElements", calcAccDescriptionsForCertainElements);

	aeKernel.addAdvisoryAutomaticTest("220", {
		bestPractice: 398,
		testId: 220,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more A elements that have a target attribute set to the text value '_blank', without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a calculated accessible name or description value that includes a warning to the user that a new window will open i.e. 'new window'.",
		metaText: "This element does not have a calculated accessible name or description value that includes a warning to the user that it will cause a new window to be opened when activated i.e. new window",
		metaTextDetail: "This {{tag-name}} does not have a calculated accessible name or description value that includes a warning to the user that it will cause a new window to be opened when activated i.e. new window",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'a[data-ae_vis][data-ae_avat][data-ae_ar="null"][target="_blank"]';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const pattern = /new window|tab/;
				const badNodeCandidates = aeKernel.rootTestNode.querySelectorAll(`${relevantCssSelector}[data-ae_an], ${relevantCssSelector}[data-ae_ad]`);
				for (let i = 0; i < badNodeCandidates.length; i++) {
					const badNodeCandidate = badNodeCandidates[i];

					if (!pattern.test(badNodeCandidate.getAttribute('data-ae_an')) && !pattern.test(badNodeCandidate.getAttribute('data-ae_ad'))) {
						badNodes.push(badNodeCandidate);
					}
				}

				return badNodes;
			});
			
			return testShell;
		}
	});
}
