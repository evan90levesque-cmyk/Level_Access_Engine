import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-199
 * @returns {AutoTestShell} testShell
 */
export function test199() {
	aeKernel.addAutomaticTest("199", {
		bestPractice: 1626,
		testId: 199,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more document title elements has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'title:not([data-ae_inshdw])';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);

			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const titles = aeKernel.rootTestNode.querySelectorAll(`${relevantCssSelector}:not([data-ae_ar="null"])`);
				for (let i = 0; i < titles.length; i++) {
					const title = titles[i];

					// title elements that are descendants of SVGs aren't document title elements
					const svgAncestor = title.closest('svg');
					if (!svgAncestor) {
						badNodes.push(title);
					}
				}

				return badNodes;
			});

			return testShell;
		}
	});
}
