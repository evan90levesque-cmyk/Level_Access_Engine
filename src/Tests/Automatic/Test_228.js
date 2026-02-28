import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-228
 * @returns {AutoTestShell} testShell
 */
export function test228() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("228", {
		bestPractice: 523,
		testId: 228,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more iframe elements, excluding those elements with aria-hidden='true' or tabindex set to a negative value, not intentionally hidden in the DOM, does not have a mechanism that allows an accessible name value to be calculated.",
		metaText: "This iframe element does not have a mechanism that allows an accessible name value to be calculated",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": "Specify a descriptive label for the iframe.",
			"fix": {
				"aria-label": null,
				"aria-labelledby": false
			}
		},
		testFunc: function() {
			const relevantCssSelector = 'iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis]';
			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}:not([data-ae_an])`
			);
		}
	});
}
