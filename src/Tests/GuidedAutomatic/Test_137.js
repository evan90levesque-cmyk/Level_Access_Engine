import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {addAEEventAtts} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_addAEEventAtts.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-137
 * @returns {AutoTestShell} testShell
 */
export function test137() {
	aeKernel.addStage4MarkdownFunc("addAEEventAtts", addAEEventAtts);

	aeKernel.addGuidedAutomaticTest("137", {
		bestPractice:359,
		testId:137,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM, are only attached to a mouse event listener (mousedown or mouseup), rather than a mouse event listener and key event ('keypress' | 'keydown' | 'keyup') listener pair.",
		metaText: "This element is only attached to a mouse event listener (mousedown or mouseup), rather than a mouse event listener and key event (keypress | keydown | keyup) listener pair",
		metaTextDetail: "This {{tag-name}} is only attached to a mouse event listener (mousedown or mouseup), rather than a mouse event listener and key event (keypress | keydown | keyup) listener pair",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_ev*="mousedown"],*[data-ae_vis][data-ae_ev*="mouseup"]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				return testUtil_ifDiff(aeKernel.rootTestNode, ['*[data-ae_vis][data-ae_ev*="mousedown"],*[data-ae_vis][data-ae_ev*="mouseup"]', '*[data-ae_vis][data-ae_ev*="mousedown"][data-ae_ev*="keypress"], *[data-ae_vis][data-ae_ev*="mousedown"][data-ae_ev*="keydown"], *[data-ae_vis][data-ae_ev*="mousedown"][data-ae_ev*="keyup"],*[data-ae_vis][data-ae_ev*="mouseup"][data-ae_ev*="keypress"], *[data-ae_vis][data-ae_ev*="mouseup"][data-ae_ev*="keydown"], *[data-ae_vis][data-ae_ev*="mouseup"][data-ae_ev*="keyup"]']);
			});
			return testShell;
		}
	});
}
