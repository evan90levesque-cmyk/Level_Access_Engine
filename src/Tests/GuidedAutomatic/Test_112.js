import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {addAEEventAtts} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_addAEEventAtts.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-112
 * @returns {AutoTestShell} testShell
 */
export function test112() {
	aeKernel.addStage4MarkdownFunc("addAEEventAtts", addAEEventAtts);

	aeKernel.addGuidedAutomaticTest("112", {
		bestPractice: 359,
		testId: 112,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, excluding A elements with an href attribute set to a text value; input elements; area elements; or button elements, not intentionally hidden in the DOM, are only attached to a click event listener, rather than a click and key event ('keypress' | 'keydown' | 'keyup') listener pair.",
		metaText: "This element is only attached to a click event listener, rather than a click and key event (keypress | keydown | keyup) listener pair",
		metaTextDetail: "This {{tag-name}} is only attached to a click event listener, rather than a click and key event (keypress | keydown | keyup) listener pair",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell(
				'*:not(input):not(area):not(button)[data-ae_vis][data-ae_ev*="click"]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				const issues = [];
				const res = testUtil_ifDiff(aeKernel.rootTestNode, ['*[data-ae_vis][data-ae_ev*="click"]', '*[data-ae_vis][data-ae_ev*="click"][data-ae_ev*="keypress"], *[data-ae_vis][data-ae_ev*="click"][data-ae_ev*="keydown"], *[data-ae_vis][data-ae_ev*="click"][data-ae_ev*="keyup"]']);
				// remove exclusions - as it is too difficult to remove them by css alone
				for (let i = 0, len_res = res.length; i < len_res; i++) {
					const result = res[i];
					switch (result.tagName) {
						case "A":
							const href = result.getAttribute("href");
							if ((href === null) || (href === "")) {
								issues.push(result);
							}
							break;
						case "INPUT":
							break;
						case "AREA":
							break;
						case "BUTTON":
							break;
						default:
							issues.push(result);
							break;
					}
				}
				return issues;
			});
			return testShell;
		}
	});
}
