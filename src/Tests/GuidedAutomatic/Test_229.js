import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * To be superceded by Machine Learning
 * Jira: https://levelaccess.atlassian.net/browse/ENG-229
 * @returns {AutoTestShell} testShell
 */
export function test229() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("229", {
		bestPractice:523,
		testId:229,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more frame elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a suspicious calculated accessible name value.",
		metaText: "This frame element has a suspicious calculated accessible name value",
		metaTextDetail: "This frame element has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Specify a descriptive label for the frame.",
			"fix":{
				"aria-label":null,
				"aria-labelledby":false
			}
		},
		testFunc: function() {
			return new AutoTestShell(
				'frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an]',
				'frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="title"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="frame"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="top"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="bottom"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="left"], frame[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_an="right"]'
			);
		}
	});
}
