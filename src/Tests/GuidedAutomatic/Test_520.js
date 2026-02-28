import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * To be superceded by Machine Learning
 * Jira: https://levelaccess.atlassian.net/browse/ENG-520
 * @returns {AutoTestShell} testShell
 */
export function test520() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("520", {
		bestPractice: 523,
		testId: 520,
		introduced: "2.3",
		mediaType: mediaTypes.WEB,
		description: "One or more iframe elements, excluding those elements with aria-hidden='true' or tabindex set to a negative value, not intentionally hidden in the DOM, has a suspicious calculated accessible name value.",
		metaText: "This iframe element has a suspicious calculated accessible name value",
		metaTextDetail: "This iframe element has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: {
			"fixType": 1,
			"domSpec": true,
			"helperText": "Specify a descriptive label for the frame.",
			"fix": {
				"aria-label": null,
				"aria-labelledby": false 
			}
		},
		testFunc: function() {
			const relevantCssSelectorPrefix = 'iframe:not([aria-hidden="true"]):not([tabindex^="-"])[data-ae_vis]';
			return new AutoTestShell(
				`${relevantCssSelectorPrefix}[data-ae_an]`,
				`${relevantCssSelectorPrefix}[data-ae_an="title"], ${relevantCssSelectorPrefix}[data-ae_an="frame"], ${relevantCssSelectorPrefix}[data-ae_an="iframe"], ${relevantCssSelectorPrefix}[data-ae_an="top"], ${relevantCssSelectorPrefix}[data-ae_an="bottom"], ${relevantCssSelectorPrefix}[data-ae_an="left"], ${relevantCssSelectorPrefix}[data-ae_an="right"]`
			);
		}
	});
}
