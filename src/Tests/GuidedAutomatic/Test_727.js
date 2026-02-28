import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * (To be replaced with Machine Learning)
 * Jira: https://ssbbart.atlassian.net/browse/ENG-727
 * @returns {AutoTestShell} testShell
 */
export function test727() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("727", {
		bestPractice:343,
		testId:727,
		introduced: "2.14",
		mediaType: mediaTypes.WEB,
		description:"One or more area elements, excluding children of button | meter and elements with a role='button | checkbox | img | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', without an ARIA-assigned role and available to assistive technologies, has a suspicious calculated accessible name value (i.e. under 4 characters long)",
		metaText: "This area has a suspicious calculated accessible name value",
		metaTextDetail: "This area has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: "",
		//We don't check for visibility because Firefox secretly hides all area elements
		//The visibility requirement would render this test unusable for Spiders (currently runs on Firefox) or AST on Firefox
		testFunc: function() {
			var testShell = new AutoTestShell(
				'area:not(:where(button area, meter area, [data-ae_ar="button"] area, [data-ae_ar="checkbox"] area, [data-ae_ar="img"] area, [data-ae_ar="menuitemcheckbox"] area, [data-ae_ar="menuitemradio"] area, [data-ae_ar="meter"] area, [data-ae_ar="option"] area, [data-ae_ar="progressbar"] area, [data-ae_ar="radio"] area, [data-ae_ar="scrollbar"] area, [data-ae_ar="separator"] area, [data-ae_ar="slider"] area, [data-ae_ar="switch"] area, [data-ae_ar="tab"] area))[data-ae_ar="null"][data-ae_avat][data-ae_an]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var suspiciousText = [];
				var res = aeKernel.rootTestNode.querySelectorAll('area[data-ae_ar="null"][data-ae_avat][data-ae_an]');
				
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