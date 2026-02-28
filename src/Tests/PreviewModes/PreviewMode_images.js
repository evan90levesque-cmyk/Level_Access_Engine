import {aeKernel} from "../../Kernel/AEKernel";

/**
 * Mode: Foreground Images - with accessible names
 * @returns Array Nodes
 */
export function previewMode_images() {
	aeKernel.addPreviewMode("previewMode_images", {
		bestPractice: 0,
		testId      : "previewMode_images",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('img[data-ae_vis], *[data-ae_vis][data-ae_ar="img"], input[type="image"][data-ae_vis], svg[data-ae_vis]');
		}
	});
}