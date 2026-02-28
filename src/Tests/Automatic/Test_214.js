import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {identifiesDataTables} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_identifiesDataTables.js";
import {cloneThisNode, mediaTypes} from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-214
 * @returns {AutoTestShell} testShell
 */
export function test214() {
	aeKernel.addStage4MarkdownFunc("identifiesDataTables", identifiesDataTables);

	aeKernel.addAutomaticTest("214", {
		bestPractice:590,
		testId:214,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more th elements in a data-table, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, contains at least one table element (without an ARIA-assigned role).",
		metaText: "Data table header cells should not contain a table element (without an ARIA-assigned role)",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] th[data-ae_vis][data-ae_avat][data-ae_ar="null"]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				// clone body
				// var clone = aeKernel.rootTestNode.querySelector("body").cloneNode(true);
				const testNode = aeKernel.rootTestNode.querySelector("body") || aeKernel.rootTestNode;  // fall back to using root node if body element is not a child of root node
				var clone = cloneThisNode(testNode, true);
				
				// so we don't pick up th elements within the nested tables
				var tableInTH = clone.querySelector("th[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)");
				while (tableInTH) {
					tableInTH.innerHTML = "";
					tableInTH = clone.querySelector("th[data-ae_vis][data-ae_avat][data-ae_ar='null'] table[data-ae_vis][data-ae_avat][data-ae_ar='null']:not(:empty)");
				}
				
				var thElementsThatContainTables = [];
				
				var res = clone.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"] th[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var thOfInterest = res[i];
					var thContainsTables = thOfInterest.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
					if (thContainsTables.length > 0) {
						thElementsThatContainTables.push(thOfInterest);
					}
				}
				
				return thElementsThatContainTables;
			});
			
			return testShell;
		}
	});
}
