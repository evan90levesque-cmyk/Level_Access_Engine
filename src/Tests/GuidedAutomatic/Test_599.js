import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-599
 * @returns {AutoTestShell} testShell
 */
export function test599() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("599", {
		bestPractice:476,
		testId:599,
		introduced: "2.11",
		mediaType: mediaTypes.WEB,
		description:"One or more canvas elements, excluding children of button | meter and elements with a role='button | checkbox | img | menuitemcheckbox | menuitemradio | meter | option | progressbar | radio | scrollbar | separator | slider | switch | tab', without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious accessible name value (i.e. under 4 characters long).",
		metaText: "This canvas element has a suspicious calculated accessible name value",
		metaTextDetail: "This canvas element has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'canvas:not(:where(button canvas, meter canvas, [data-ae_ar="button"] canvas, [data-ae_ar="checkbox"] canvas, [data-ae_ar="img"] canvas, [data-ae_ar="menuitemcheckbox"] canvas, [data-ae_ar="menuitemradio"] canvas, [data-ae_ar="meter"] canvas, [data-ae_ar="option"] canvas, [data-ae_ar="progressbar"] canvas, [data-ae_ar="radio"] canvas, [data-ae_ar="scrollbar"] canvas, [data-ae_ar="separator"] canvas, [data-ae_ar="slider"] canvas, [data-ae_ar="switch"] canvas, [data-ae_ar="tab"] canvas))[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an]'
			);

			testShell.set_candidateSetNodesFunc(function() {
				var suspiciousText = [];
				var res = aeKernel.rootTestNode.querySelectorAll("canvas[data-ae_vis][data-ae_avat][data-ae_ar='null'][data-ae_an]");
				
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
