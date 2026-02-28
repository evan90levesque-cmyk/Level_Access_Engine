import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * (To be replaced with Machine Learning)
 * Jira: https://ssbbart.atlassian.net/browse/ENG-710
 * @returns {AutoTestShell} testShell
 */
export function test710() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("710", {
		bestPractice: 338,
		testId: 710,
		introduced: "2.13",
		mediaType: mediaTypes.WEB,
		description: "One or more input type='text' elements, without an aria-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious accessible name value (i.e. under 4 characters long).",
		metaText: "This input (type=text) element has a suspicious calculated accessible name value",
		metaTextDetail: "This input (type=text) element has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'input[type="text"][data-ae_ar="null"][data-ae_vis][data-ae_avat][data-ae_an]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var suspiciousText = [];
				var res = aeKernel.rootTestNode.querySelectorAll('input[type="text"][data-ae_ar="null"][data-ae_vis][data-ae_avat][data-ae_an]');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var result = res[i];
					var accName = result.getAttribute("data-ae_an");
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
