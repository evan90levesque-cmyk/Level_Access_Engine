import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-152
 * @returns {AutoTestShell} testShell
 */
export function test152() {
	aeKernel.addAutomaticTest("152", {
		bestPractice: 364,
		testId: 152,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "The first document title element located, excluding title elements in SVG elements or iframes, was found to be empty.",
		metaText: "This title element should not be empty",
		fixType: {
			"fixType": 3,
			"domSpec": true,
			"helperText": "Specify a unique and descriptive title for the page.",
			"fix": {
				"innerHTML": null
			}
		},
		testFunc: function() {
			const relevantCssSelector = 'html title:not(svg title):not([data-ae_inshdw]), head title:not(svg title):not([data-ae_inshdw]), body title:not(svg title):not([data-ae_inshdw])';
			const inIframeSelector = 'html[data-ae_iniframe], head[data-ae_iniframe], body[data-ae_iniframe]'

			const testShell = new AutoTestShell(
				relevantCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const firstTitle = this.querySelector(relevantCssSelector);
				if (!this.querySelector(inIframeSelector) && firstTitle.childNodes.length <= 0) {
					badNodes.push(firstTitle);
				}

				return badNodes;
			});

			return testShell;
		}
	});
}
