import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {identifiesDataTables} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_identifiesDataTables.js";
import {cloneThisNode, mediaTypes} from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-388
 * @returns {AutoTestShell} testShell
 */
export function test388() {
	aeKernel.addStage4MarkdownFunc("identifiesDataTables", identifiesDataTables);

	aeKernel.addAutomaticTest("388", {
		bestPractice:590,
		testId:388,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more td elements in a data-table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, contains at least one table element (without an ARIA-assigned role).",
		metaText: "Table data cells should not contain a table element (without an ARIA-assigned role)",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] td[data-ae_vis][data-ae_avat][data-ae_ar="null"]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				// clone body
				// var clone = aeKernel.rootTestNode.querySelector("body").cloneNode(true);
				const testNode = aeKernel.rootTestNode.querySelector("body") || aeKernel.rootTestNode;  // fall back to using root node if body element is not a child of root node
				var clone = cloneThisNode(testNode, true);
				
				// so we don't pick up th elements within the nested tables
				var tableInTD = clone.querySelector("td[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)");
				while (tableInTD) {
					tableInTD.innerHTML = "";
					tableInTD = clone.querySelector("td[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)");
				}
				
				var tdElementsThatContainTables = [];
				
				var res = clone.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] td[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var tdOfInterest = res[i];
					var tdContainsTables = tdOfInterest.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
					if (tdContainsTables.length > 0) {
						tdElementsThatContainTables.push(tdOfInterest);
					}
				}
				
				return tdElementsThatContainTables;
			});
			
			return testShell;
		}
	});
}
