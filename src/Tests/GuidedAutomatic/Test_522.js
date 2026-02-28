import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-522
 * @returns {AutoTestShell} testShell
 */
export function test522() {
	aeKernel.addGuidedAutomaticTest("522", {
		bestPractice: 542,
		testId: 522,
		introduced: "2.3",
		mediaType: mediaTypes.WEB,
		description: "The first document title element located has a suspicious value.",
		metaText: "This title has a suspicious value",
		fixType: {
			"fixType": 3,
			"domSpec": true,
			"helperText": 'Specify a descriptive title for the page.',
			"fix": {
				"innerHTML": null
			}
		},
		testFunc: function() {
			const testShell = new AutoTestShell();

			const relevantCssSelector = 'html title:not([data-ae_inshdw]), body title:not([data-ae_inshdw]), head title:not([data-ae_inshdw])';

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length === 1);
			});

			testShell.set_applicableNodesFunc(function() {
				const t = this.querySelector(relevantCssSelector);
				return (!!t && t.childNodes.length > 0) ? [t] : [];
			});
			
			testShell.set_candidateSetNodesFunc(function() {
				const badNodes = [];

				const titles = this.querySelectorAll(relevantCssSelector);
				for (let i = 0; i < titles.length; i++) {
					const title = titles[i];

					// title elements that are descendants of SVGs aren't document title elements
					const svgAncestor = title.closest('svg');
					if (!svgAncestor) {
						const s = title.innerHTML.toLowerCase();
						if (s.length < 11 || s.length > 150 || s.indexOf('enter the title of your html document here') !== -1 || s.indexOf('untitled document') !== -1 || s.indexOf('untitled page') !== -1) {
							badNodes.push(title);
						}
						break;
					}
				}

				return badNodes;
			});
			
			return testShell;
		}
	});
}
