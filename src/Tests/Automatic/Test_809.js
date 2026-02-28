import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-809
 * @returns {AutoTestShell} testShell
 */
export function test809() {
	aeKernel.addAutomaticTest("809", {
		bestPractice: 1352,
		testId: 809,
		introduced: "2.14",
		mediaType: mediaTypes.WEB,
		description: "More than one main element, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies is located in the body element.",
		metaText: "This MAIN is one of multiple main elements that appear in the body element.",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			const relevantCssSelector = 'body main[data-ae_ar="null"][data-ae_vis][data-ae_avat]';

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length > 0);
			});

			testShell.set_applicableNodesFunc(function() {
				// if there is more than 1 main element then the test is applicable
				const applicableNodes = this.querySelectorAll(relevantCssSelector);
				return (applicableNodes.length > 1) ? applicableNodes : [];
			});

			testShell.set_candidateSetNodesFunc(function() {
				return this.querySelectorAll(relevantCssSelector);
			});

			return testShell;
		}
	});
}
