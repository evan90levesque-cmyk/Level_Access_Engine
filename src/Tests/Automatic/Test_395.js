import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {identifiesDataTables} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_identifiesDataTables";
import { mediaTypes } from "../../Utils/aeUtils.js";
import {testUtil_ifDiff} from "../TestUtils/testUtil_ifDiff";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-395
 * @returns {AutoTestShell} testShell
 */
export function test395() {
	aeKernel.addStage4MarkdownFunc("identifiesDataTables", identifiesDataTables);

	aeKernel.addAutomaticTest("395", {
		bestPractice:361,
		testId:395,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more td elements (excluding, if present, an empty td element which is found as the first element in the first row) in a data-table in which other elements contain headers attributes set to a non-null value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a headers attribute set to a non-null value.",
		metaText: "This element does not have a headers attribute set to a non-null text value",
		metaTextDetail: "This {{tag-name}} does not have a headers attribute set to a non-null text value",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			testShell.set_applicabilityTest(function() {
				const res = this.querySelectorAll('table[data-ae_dtab="true"][data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < res.length; i++) {
					const n = res[i];

					const refNodes = n.querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');
					if (refNodes.length > 0) {
						return true;
					}
				}

				return false;
			});

			testShell.set_applicableNodesFunc(function() {
				const applicableNodes = [];

				const res = this.querySelectorAll('table[data-ae_dtab="true"][data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < res.length; i++) {
					const n = res[i];

					const refNodes = n.querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');
					for (let j = 0; j < refNodes.length; j++) {
						const refNode = refNodes[j];

						applicableNodes.push(refNode);
					}
				}

				return applicableNodes;
			});

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const tables = this.querySelectorAll('table[data-ae_dtab="true"][data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (let i = 0; i < tables.length; i++) {
					const currentTable = tables[i];
					const nodesWithHeaders = currentTable.querySelectorAll('td[data-ae_ar="null"][data-ae_vis][data-ae_avat][headers]:not([headers=""])');

					if (!nodesWithHeaders.length) {
						// https://levelaccess-internal.atlassian.net/browse/ENG-1136
						// if there are more than one table, we skip the ones without "headers" attribute usage
						break;
					}

					const refNodes = testUtil_ifDiff(currentTable, [
						"td[data-ae_vis][data-ae_avat][data-ae_ar='null']:not([headers]), td[data-ae_vis][data-ae_avat][data-ae_ar='null'][headers='']",
						"tr[data-ae_vis][data-ae_avat][data-ae_ar='null']:first-child td:first-child:empty"
					]);

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
