import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";

/**
 * Mode: Elements with lang attributes
 * @returns Array Nodes
 */
export function previewMode_elsWithLangAttribs() {
	aeKernel.addPreviewMode("previewMode_elsWithLangAttribs", {
		bestPractice: 0,
		testId      : "previewMode_elsWithLangAttribs",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][lang]');
		}
	});
}