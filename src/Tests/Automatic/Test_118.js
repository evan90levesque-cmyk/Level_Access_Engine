import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-118
 * @returns {AutoTestShell} testShell
 */
export function test118() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("118", {
		bestPractice:338,
		testId:118,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='text' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This input (type=text) element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Specify a descriptive label for the text input.",
			"fix":{
				"aria-label":null,
				"aria-labelledby":false
			}
		},
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]',
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="text"]:not([data-ae_an])'
			);
		}
	});
}
