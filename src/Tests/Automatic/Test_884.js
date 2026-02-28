import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-884
 * @returns {AutoTestShell} testShell
 */
export function test884() {
	aeKernel.addAutomaticTest("884", {
		bestPractice: 364,
		testId: 884,
		introduced: "2.16",
		mediaType: mediaTypes.WEB,
		description: "A document title element is not located in a non-iframe DOM.",
		metaText: "This DOM is not inside an iframe and does not contain a document title element",
		fixType: {
			"fixType": 2,
			"domSpec": true,
			"helperText": "Specify a unique and descriptive title for the page.",
			"fix": {
				"targetCssSelector": "head",
				"create": "title",
				"innerHTML": null
			}
		},
		testFunc: function() {
			const relevantCssSelector = 'html:not([data-ae_iniframe])';

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
