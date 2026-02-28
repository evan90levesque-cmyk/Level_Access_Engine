import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-527
 * @returns {AutoTestShell} testShell
 */
export function test527() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("527", {
		bestPractice:2519,
		testId:527,
		introduced: "2.3",
		mediaType: mediaTypes.WEB,
		description:"Two or more aside elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, have accessible names that are non-unique values",
		metaText: "This aside does not have a unique accessible name as required when two or more aside elements are present",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			const relevantCssSelector = 'aside[data-ae_ar="null"][data-ae_vis][data-ae_avat]';

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length > 0);
			});

			testShell.set_applicableNodesFunc(function() {
				// if there is more than 1 aside element then the test is applicable
				const applicableNodes = this.querySelectorAll(relevantCssSelector);
				return (applicableNodes.length > 1) ? applicableNodes : [];
			});

			testShell.set_candidateSetNodesFunc(function() {
				var notUnique = [];
				var nodeStore = {};
				var res = this.querySelectorAll(relevantCssSelector);
				if(res.length>1){
					for (var i = 0; i < res.length; i++) {
						var n = res[i];
						var thean = n.getAttribute("data-ae_an");
						try {
							nodeStore[thean].push(n);
						}
						catch(err) {
							nodeStore[thean] = [];
							nodeStore[thean].push(n);
						}
					}
					
					var keys = Object.keys(nodeStore);
					for (var j = 0; j < keys.length; j++) {
						// collecting all duplicated keys
						var nArray = nodeStore[keys[j]];
						if (nArray.length > 1) {
							notUnique = notUnique.concat(nArray)
						}
					}
				}
				return notUnique;
			});
			return testShell;
		}
	});
}
