import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-394
 * @returns {AutoTestShell} testShell
 */
export function test394() {
	aeKernel.addAutomaticTest("394", {
		bestPractice:361,
		testId:394,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more th elements that is in a table in which other elements contain headers attributes set to a non-null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have an id attribute set to a non-null value.",
		metaText: "This element does not have an id attribute set to a non-null text value",
		metaTextDetail: "This {{tag-name}} does not have an id attribute set to a non-null text value",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			testShell.set_applicabilityTest(function() {
				const tables = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < tables.length; i++) {
					const currentTable = tables[i];

					const refNodes = currentTable.querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');
					if (refNodes.length > 0) {
						return true;
					}
				}

				return false;
			});

			testShell.set_applicableNodesFunc(function() {
				const applicableNodes = [];

				const tables = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < tables.length; i++) {
					const currentTable = tables[i];

					const refNodes = currentTable.querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');
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
					':not([id])',
					'[id=""]'
				];

				const tables = this.querySelectorAll('table[data-ae_ar="null"][data-ae_vis][data-ae_avat]');

				for (let i = 0; i < tables.length; i++) {
					const currentTable = tables[i];
					const nodesWithHeaders = currentTable.querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');

					if (!nodesWithHeaders.length) {
						// https://levelaccess-internal.atlassian.net/browse/ENG-1136
						// if there are more than one table, we skip the ones without "headers" attribute usage
						break;
					}

					const refNodes = currentTable.querySelectorAll(failConditionSubSelectors.map(subSelector => `th[data-ae_ar="null"][data-ae_vis][data-ae_avat]${subSelector}`).join(', '));
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
