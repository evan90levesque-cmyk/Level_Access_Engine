import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {identifiesDataTables} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_identifiesDataTables.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-387
 * @returns {AutoTestShell} testShell
 */
export function test387() {
	aeKernel.addStage4MarkdownFunc("identifiesDataTables", identifiesDataTables);

	aeKernel.addAutomaticTest("387", {
		bestPractice:375,
		testId:387,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more table elements that hold table data, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain one or more th elements (without an ARIA-assigned role); th elements with a role set to: 'rowheader | columnheader'; or td elements with a role set to: 'rowheader | columnheader'.",
		metaText: "This element does not contain one or more: th elements (without an ARIA-assigned role); th elements with a role set to: rowheader | columnheader; or td elements with a role set to: rowheader | columnheader",
		metaTextDetail: "This {{tag-name}} does not contain one or more: th elements (without an ARIA-assigned role); th elements with a role set to: rowheader | columnheader; or td elements with a role set to: rowheader | columnheader",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'table[data-ae_vis][data-ae_avat][data-ae_dtab][data-ae_ar="null"]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var tables = [];
				var res = aeKernel.rootTestNode.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_dtab][data-ae_ar="null"]');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var refNode = n.querySelectorAll("th[data-ae_vis][data-ae_avat][data-ae_ar='null'], th[data-ae_vis][data-ae_avat][data-ae_ar='rowheader'], th[data-ae_vis][data-ae_avat][data-ae_ar='columnheader'], td[data-ae_vis][data-ae_avat][data-ae_ar='rowheader'], td[data-ae_vis][data-ae_avat][data-ae_ar='columnheader']");
					var refNodeLength = refNode.length;
					if (refNodeLength === 0) {
						tables.push(n);
					}
				}
				
				return tables;
			});
			
			return testShell;
		}
	});
}
