import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1375
 * @returns {AutoTestShell} testShell
 */
export function test1375() {
	aeKernel.addGuidedAutomaticTest("1375", {
		bestPractice: 364,
		testId: 1375,
		introduced: "2.23",
		mediaType: mediaTypes.WEB,
		description: "The first document title element located in an iframe, excluding title elements in SVG elements, was found to be empty.",
		metaText: "This title element is in an iframe and should not be empty",
		fixType: "",
		testFunc: function() {
			const commonSelector = 'title:not(svg title):not([data-ae_inshdw])';
			const relevantCssSelector = `html[data-ae_iniframe] ${commonSelector}, head[data-ae_iniframe] ${commonSelector}, body[data-ae_iniframe] ${commonSelector}`;

			const testShell = new AutoTestShell(
				relevantCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const firstTitle = this.querySelector(relevantCssSelector);
				if (firstTitle.childNodes.length === 0) {
					badNodes.push(firstTitle);
				}

				return badNodes;
			});

			return testShell;
		}
	});
}
