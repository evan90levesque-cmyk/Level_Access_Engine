import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-875
 * @returns {AutoTestShell} testShell
 */
export function test875() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("875", {
		bestPractice: 338,
		testId: 875,
		introduced: "2.16",
		mediaType: mediaTypes.WEB,
		description: "One or more summary elements, without an aria-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value (i.e. under 4 characters long).",
		metaText: "This summary has a suspicious calculated accessible name value",
		metaTextDetail: "This summary has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'summary[data-ae_ar="null"][data-ae_vis][data-ae_avat][data-ae_an]';

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
