import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-600
 * @returns {AutoTestShell} testShell
 */
export function test600() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("600", {
		bestPractice:476,
		testId:600,
		introduced: "2.11",
		mediaType: mediaTypes.WEB,
		description:"One or more embed elements, without an aria-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious accessible name value (i.e. under 4 characters long).",
		metaText: "This embed element has a suspicious calculated accessible name value",
		metaTextDetail: "This embed element has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'embed[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an]'
			);

			testShell.set_candidateSetNodesFunc(function() {
				var suspiciousText = [];
				var res = aeKernel.rootTestNode.querySelectorAll("embed[data-ae_vis][data-ae_avat][data-ae_ar='null'][data-ae_an]");
				
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
