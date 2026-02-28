import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes, isInt} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-706
 * @returns {AutoTestShell} testShell
 */
export function test706() {
	aeKernel.addAutomaticTest("706", {
		bestPractice: 1626,
		testId: 706,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-posinset attribute that is not set to an integer value that is greater than, or equal to, 1.",
		metaText: "This element has an aria-posinset attribute that is not set to an integer value that is greater than, or equal to, 1",
		metaTextDetail: "This {{tag-name}} has an aria-posinset attribute of {{aria-posinset}}, which is not an integer value greater than, or equal to, 1",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_vis][data-ae_avat][aria-posinset]:not([aria-posinset=""])';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const nodesWithBadValues = [];

				const res = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < res.length; i++) {
					const node = res[i];
					const attributeValue = node.getAttribute("aria-posinset");
					if (!isInt(attributeValue) || attributeValue < 1) {
						nodesWithBadValues.push(node);
					}
				}
				
				return nodesWithBadValues;
			});
			
			return testShell;
		}
	});
}
