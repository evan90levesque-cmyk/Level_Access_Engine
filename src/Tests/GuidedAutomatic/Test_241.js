import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * This test will be superseded by a Machine Learning test
 * text that is less than 4 characters;
 * text that is less than 10 characters long or less, and contains the substring "more", "click here", "...", "…";
 * text that is longer than 150 characters
 * Jira: https://ssbbart.atlassian.net/browse/ENG-241
 * @returns {AutoTestShell} testShell
 */
export function test241() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("241", {
		bestPractice: 1301,
		testId: 241,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements that have a role='link' attribute, not intentionally hidden in the DOM and available to assistive technologies, has suspicious text as an accessible name value.",
		metaText: "This element (role=link) has a suspicious calculated accessible name value",
		metaTextDetail: "This {{tag-name}} (role=link) has a suspicious calculated accessible name value of: {{data-ae_an}}",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": 'Provide a descriptive accessible name for the anchor element.',
			"fix": {
				"aria-label": null,
				"aria-labelledby": false
			}
		},
		testFunc: function() {
			const relevantCssSelector = '*[data-ae_vis][data-ae_avat][data-ae_ar="link"][data-ae_an]';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const suspiciousText = [];

				const res = aeKernel.rootTestNode.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < res.length; i++) {
					const result = res[i];
					const accName = result.getAttribute("data-ae_an");
					const accNameLen = accName.length;
					if (
						(accNameLen < 4) ||
						((accNameLen < 11) && ((accName.indexOf("more") !== -1 /* includes "read more" */) || (accName.indexOf("click here") !== -1) || (accName.indexOf("...") !== -1) || (accName.indexOf("…") !== -1))) ||
						(accNameLen > 150)
					) {
						suspiciousText.push(result);
					}
				}

				return suspiciousText;
			});

			return testShell;
		}
	});
}
