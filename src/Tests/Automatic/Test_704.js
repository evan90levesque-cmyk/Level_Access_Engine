import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes, isInt} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-704
 * @returns {AutoTestShell} testShell
 */
export function test704() {
	aeKernel.addAutomaticTest("704", {
		bestPractice: 1626,
		testId: 704,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-setsize attribute set to a non-integer value.",
		metaText: "This element has an aria-setsize attribute that is set to a non-integer value",
		metaTextDetail: "This {{tag-name}} has an aria-setsize attribute that is set to a non-integer value",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_vis][data-ae_avat][aria-setsize]:not([aria-setsize=""])';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const nodesWithBadValues = [];

				const res = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < res.length; i++) {
					const node = res[i];
					const attributeValue = node.getAttribute("aria-setsize");
					if (!isInt(attributeValue)) {
						nodesWithBadValues.push(node);
					}
				}
				
				return nodesWithBadValues;
			});
			
			return testShell;
		}
	});
}
