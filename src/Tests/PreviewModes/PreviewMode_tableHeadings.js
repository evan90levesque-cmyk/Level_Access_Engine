import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";

/**
 * Mode: Table Headings
 * @returns Array Nodes
 */
export function previewMode_tableHeadings() {
	aeKernel.addPreviewMode("previewMode_tableHeadings", {
		bestPractice: 0,
		testId      : "previewMode_tableHeadings",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('th[data-ae_vis][data-ae_avat][data-ae_ar="null"], *[data-ae_vis][data-ae_avat][data-ae_ar="rowheader"], *[data-ae_vis][data-ae_avat][data-ae_ar="columnheader"], *[data-ae_vis][data-ae_avat][data-ae_ar="grid"]');
		}
	});
}