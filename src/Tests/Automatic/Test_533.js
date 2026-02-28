import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-533
 * @returns {AutoTestShell} testShell
 */
export function test533() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("533", {
		bestPractice:2519,
		testId:533,
		introduced: "2.4",
		mediaType: mediaTypes.WEB,
		description:"Two or more nav elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism for providing a calculated accessible name",
		metaText: "This nav does not have an accessible name as required when two or more nav elements are present",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'nav[data-ae_ar="null"][data-ae_vis][data-ae_avat]';

			const testShell = new AutoTestShell(
				null,
				`${relevantCssSelector}:not([data-ae_an])`
			);

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length > 0);
			});

			testShell.set_applicableNodesFunc(function() {
				// if there is more than 1 aside element then the test is applicable
				const applicableNodes = this.querySelectorAll(relevantCssSelector);
				return (applicableNodes.length > 1) ? applicableNodes : [];
			});

			return testShell;
		}
	});
}
