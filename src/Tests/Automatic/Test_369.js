import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-369
 * @returns {AutoTestShell} testShell
 */
export function test369() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("369", {
		bestPractice:338,
		testId:369,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='password' elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This input (type=password) element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Provide a descriptive label for the password field. ",
			"fix":{
				"aria-label":null,
				"aria-labelledby":false
			}
		},
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="password"]',
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="password"]:not([data-ae_an])'
			);
		}
	});
}
