import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-392
 * @returns {AutoTestShell} testShell
 */
export function test392() {
	aeKernel.addAutomaticTest("392", {
		bestPractice:361,
		testId:392,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more th elements that is in a table in which other elements contain scope attributes set to a non-null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, with a rowspan attribute set to a value of '0'; or '2' or more; does not have a scope attribute set to a text value of 'rowgroup'.",
		metaText: "This header cell does not have a scope attribute set to a text value of: rowgroup",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			testShell.set_applicabilityTest(function() {
				const res = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < res.length; i++) {
					const n = res[i];

					const refNodes = n.querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])');
					if (refNodes.length > 0) {
						return true;
					}
				}

				return false;
			});

			testShell.set_applicableNodesFunc(function() {
				const applicableNodes = [];

				const res = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < res.length; i++) {
					const n = res[i];

					const refNodes = n.querySelectorAll('th[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""]), td[data-ae_ar="null"][data-ae_vis][data-ae_avat][scope]:not([scope=""])');
					for (let j = 0; j < refNodes.length; j++) {
						const refNode = refNodes[j];

						applicableNodes.push(refNode);
					}
				}

				return applicableNodes;
			});

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const failConditionSubSelectors = [
					':not([scope])[rowspan]:not([rowspan="1"])',
					'[scope=""][rowspan]:not([rowspan="1"])',
					'[scope]:not([scope=""]):not([scope="rowgroup"])[rowspan]:not([rowspan="1"])'
				];

				const res = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < res.length; i++) {
					const n = res[i];

					const refNodes = n.querySelectorAll(failConditionSubSelectors.map(subSelector => `th[data-ae_ar="null"][data-ae_vis][data-ae_avat]${subSelector}`).join(', '));
					for (let j = 0; j < refNodes.length; j++) {
						const refNode = refNodes[j];

						badNodes.push(refNode);
					}
				}

				return badNodes;
			});
			
			return testShell;
		}
	});
}
