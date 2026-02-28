import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {identifiesDataTables} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_identifiesDataTables.js";

/**
 * Mode: Table Headings
 * @returns Array Nodes
 */
export function previewMode_tables() {
	aeKernel.addStage4MarkdownFunc("identifiesDataTables", identifiesDataTables);

	aeKernel.addPreviewMode("previewMode_tables", {
		bestPractice: 0,
		testId      : "previewMode_tables",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('table[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_dtab="true"], *[data-ae_vis][data-ae_avat][data-ae_ar="grid"][data-ae_dtab="true"], *[data-ae_vis][data-ae_avat][data-ae_ar="table"][data-ae_dtab="true"]');
		}
	});
}
