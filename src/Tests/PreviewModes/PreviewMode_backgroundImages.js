import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBackgroundImage_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_getBackgroundImage_fromStyles.js";
import {setBackgroundImage} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage5_backgroundImage.js";

/**
 * Mode: Background Images
 * @returns Array Nodes
 */
export function previewMode_backgroundImages() {
	aeKernel.addStage1MarkdownFunc("getBackgroundImage_FromStyles", getBackgroundImage_FromStyles);
	aeKernel.addStage5MarkdownFunc("setBackgroundImage", setBackgroundImage);

	aeKernel.addPreviewMode("previewMode_backgroundImages", {
		bestPractice: 0,
		testId      : "previewMode_backgroundImages",
		testFunc    : function () {
			return aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_bckimg="true"]');
		}
	});
} 
