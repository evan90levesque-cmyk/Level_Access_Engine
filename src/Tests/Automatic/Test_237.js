import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {addAEEventAtts} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_addAEEventAtts.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-237
 * @returns {AutoTestShell} testShell
 */
export function test237() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);
	aeKernel.addStage4MarkdownFunc("addAEEventAtts", addAEEventAtts);

	aeKernel.addAutomaticTest("237", {
		bestPractice:1301,
		testId:237,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more A elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This A element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Provide a descriptive accessible name for the anchor element.",
			"fix":{
				"aria-label":null
			}
		},
		testFunc: function() {
			return new AutoTestShell(
				'a[data-ae_vis][data-ae_avat][data-ae_ar="null"][href], a[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_ev]:not([href])',
				'a[data-ae_vis][data-ae_avat][data-ae_ar="null"][href]:not([data-ae_an]), a[data-ae_vis][data-ae_avat][data-ae_ar="null"][data-ae_ev]:not([href]):not([data-ae_an])'
			);
		}
	});
}
