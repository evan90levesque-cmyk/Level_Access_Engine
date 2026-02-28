import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";

/**
 * Mode: Table Data
 * @returns Array Nodes
 */
export function previewMode_tableCells() {
	aeKernel.addPreviewMode("previewMode_tableCells", {
		bestPractice: 0,
		testId      : "previewMode_tableData",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('td[data-ae_vis][data-ae_avat][data-ae_ar="null"], *[data-ae_vis][data-ae_avat][data-ae_ar="cell"], *[data-ae_vis][data-ae_avat][data-ae_ar="gridcell"]');
		}
	});
}