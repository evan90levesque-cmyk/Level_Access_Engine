import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";

/**
 * Mode: Lists
 * @returns Array Nodes
 */
export function previewMode_lists() {
	aeKernel.addPreviewMode("previewMode_lists", {
		bestPractice: 0,
		testId      : "previewMode_lists",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('ul[data-ae_vis][data-ae_avat][data-ae_ar="null"], ol[data-ae_vis][data-ae_avat][data-ae_ar="null"], dl[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
		}
	});
} 