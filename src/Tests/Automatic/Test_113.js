import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-113
 * @returns {AutoTestShell} testShell
 */
export function test113() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("113", {
		bestPractice:338,
		testId:113,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more textarea elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This textarea element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Specify a descriptive label for the textarea.",
			"fix":{
				"aria-label":null,
				"aria-labelledby":false
			}
		},
		testFunc: function() {
			return new AutoTestShell(
				'textarea[data-ae_ar="null"][data-ae_vis][data-ae_avat]',
				'textarea[data-ae_ar="null"][data-ae_vis][data-ae_avat]:not([data-ae_an])'
			);
		}
	});
}
