import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-48
 * @returns {AutoTestShell} testShell
 */
export function test48() {
	aeKernel.addAutomaticTest("48", {
		bestPractice: 414,
		testId: 48,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more tr elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, contains two or more descendant elements (without an ARIA-assigned role) that have been given a scope attribute set to the text value 'row'.",
		metaText: "This element should not contain two or more descendant elements (without an ARIA-assigned role) that have been given a scope attribute set to the text value: row",
		metaTextDetail: "This {{tag-name}} should not contain two or more descendant elements (without an ARIA-assigned role) that have been given a scope attribute set to the text value: row",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'tr[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				const notAllowed = [];

				const res = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < res.length; i++) {
					const result = res[i];

					let numBadChildren = 0;

					const tableAncestor = result.closest('table');
					const childrenWithScope = result.querySelectorAll('*[data-ae_ar="null"][scope="row"]');
					for (let j = 0; j < childrenWithScope.length; j++) {
						const childWithScope = childrenWithScope[j];

						// ignore nested tables; the elements in nested tables have either already been checked or will be checked by a different iteration of the outer 'for' loop
						const childWithScopeTableAncestor = childWithScope.closest('table');
						if (childWithScopeTableAncestor !== tableAncestor) {
							continue;
						}

						numBadChildren++;
					}

					if (numBadChildren >= 2) {
						notAllowed.push(result);
					}
				}

				return notAllowed;
			});
			
			return testShell;
		}
	});
}
