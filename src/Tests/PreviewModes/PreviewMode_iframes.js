import {aeKernel} from "../../Kernel/AEKernel.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";

/**
 * Mode: Iframes
 * @returns Array Nodes
 */
export function previewMode_iframes() {
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);	

	aeKernel.addPreviewMode("previewMode_iframes", {
		bestPractice       : 0,
		testId             : "previewMode_iframes",
		collectMetaDataFunc: function (instance) {
			return {
				"accNameMechanism": null,
				"accNameValue"    : instance.getAttribute("data-ae_an")
			};
		},
		testFunc           : function () {
			return aeKernel.rootTestNode.querySelectorAll('iframe[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an]');
		}
	});
}
