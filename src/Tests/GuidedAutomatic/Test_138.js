import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {addAEEventAtts} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_addAEEventAtts.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-138
 * @returns {AutoTestShell} testShell
 */

export function test138() {
	aeKernel.addStage4MarkdownFunc("addAEEventAtts", addAEEventAtts);

	aeKernel.addGuidedAutomaticTest("138", {
		bestPractice:359,
		testId:138,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM, are only attached to a mouseover event listener, rather than a mouseover and focus event listener pair.",
		metaText: "This element is only attached to a mouseover event listener, rather than a mouseover and focus event listener pair",
		metaTextDetail: "This {{tag-name}} is only attached to a mouseover event listener, rather than a mouseover and focus event listener pair",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_ev*="mouseover"]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				return testUtil_ifDiff(aeKernel.rootTestNode, ['*[data-ae_vis][data-ae_ev*="mouseover"]', '*[data-ae_vis][data-ae_ev*="mouseover"][data-ae_ev*="focus"]']);
			});
			return testShell;
		}
	});
}
