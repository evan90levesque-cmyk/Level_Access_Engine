import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";

/**
 * Mode: Headings
 * @returns Array Nodes
 */
export function previewMode_headings() {
	aeKernel.addPreviewMode("previewMode_headings", {
		bestPractice: 0,
		testId      : "previewMode_headings",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('h1[data-ae_vis][data-ae_avat][data-ae_ar="null"], h2[data-ae_vis][data-ae_avat][data-ae_ar="null"], h3[data-ae_vis][data-ae_avat][data-ae_ar="null"], h4[data-ae_vis][data-ae_avat][data-ae_ar="null"], h5[data-ae_vis][data-ae_avat][data-ae_ar="null"], h6[data-ae_vis][data-ae_avat][data-ae_ar="null"], *[data-ae_vis][data-ae_avat][data-ae_ar="heading"]');
		}
	});
}