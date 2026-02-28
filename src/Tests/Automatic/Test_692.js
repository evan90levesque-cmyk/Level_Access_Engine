import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-692
 * @returns {AutoTestShell} testShell
 */
export function test692() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("692", {
		bestPractice:1963,
		testId:692,
		introduced: "2.10",
		mediaType: mediaTypes.ANDROID,
		description:"One or more ImageButton elements does not have a content description.",
		metaText:"This [[object]] element does not have a content description",
		fixType:"",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="image"]',
				// using '[aria-label=""]' instead of ':not([data-ae_an])' here because the accessible name calculation
				// for input elements of type 'image' produces an accessible name even when alt text isn't specified,
				// and Continuum for Android always uses the aria-label attribute to specify alt text,
				// so we can get away with this
				'input[data-ae_ar="null"][data-ae_vis][data-ae_avat][type="image"][aria-label=""]'
			);
		}
	});
}
