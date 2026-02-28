import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1376
 * @returns {AutoTestShell} testShell
 */
export function test1376() {
	aeKernel.addGuidedAutomaticTest("1376", {
		bestPractice: 364,
		testId: 1376,
		introduced: "2.23",
		mediaType: mediaTypes.WEB,
		description: "A document title element is not located in the DOM.",
		metaText: "This DOM is inside an iframe and does not contain a document title element",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'html[data-ae_iniframe]';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const documentTitle = this.querySelector(`${relevantCssSelector} title:not([data-ae_inshdw]):not(svg title)`);

				if (!documentTitle) {
					badNodes.push(this.querySelector(relevantCssSelector));
				}

				return badNodes;
			});

			return testShell;
		}
	});
}
