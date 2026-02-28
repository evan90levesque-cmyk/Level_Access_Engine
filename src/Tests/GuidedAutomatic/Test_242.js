import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-242
 * @returns {AutoTestShell} testShell
 */
export function test242() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("242", {
		bestPractice: 1301,
		testId: 242,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more A elements with a unique href value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, have an accessible name value that is not unique.",
		metaText: "This A element has an accessible name that is the same as another A element but doesn't go to the same HREF.",
		metaTextDetail: "This A element has an accessible name of '{{data-ae_an}}' that is the same as another A element but doesn't go to the same HREF.",
		fixType: {
			"fixType": 1,
			"domSpec": false,
			"helperText": "Provide a descriptive accessible name for this element.",
			"fix": {
				"aria-label": null,
				"aria-labelledby": false
			}
		},
		testFunc: function() {
			const testShell = new AutoTestShell();

			const relevantCssSelector = 'a[href]:not([href=""])[data-ae_ar="null"][data-ae_vis][data-ae_avat][data-ae_an]';

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length > 1);
			});

			testShell.set_applicableNodesFunc(function() {
				return this.querySelectorAll(relevantCssSelector);
			});
			
			testShell.set_candidateSetNodesFunc(function() {
				let suspiciousLinks = [];

				const linksByAccessibleName = {};

				// group all relevant links by their accessible name

				const links = this.querySelectorAll(relevantCssSelector);

				for (let i = 0; i < links.length; i++) {
					const link = links[i];
					link.href = link.href.replace(/\/$/, '');
					
					const accessibleName = link.getAttribute("data-ae_an");

					if (linksByAccessibleName[accessibleName] == null) {
						linksByAccessibleName[accessibleName] = [link];
					} else {
						linksByAccessibleName[accessibleName].push(link);
					}
				}

				// flag any relevant links that have a duplicative accessible name

				const accessibleNames = Object.keys(linksByAccessibleName);
				for (let i = 0; i < accessibleNames.length; i++) {
					const accessibleName = accessibleNames[i];
					const links = linksByAccessibleName[accessibleName];

					if (links.length > 1) {
						let isSuspicious = false;

						// all links should have the same href, otherwise they're suspicious
						let firstHref = null;
						for (let j = 0; j < links.length; j++) {
							const link = links[j];
							const href = link.getAttribute("href");

							if (firstHref === null) {
								firstHref = href;
							} else if (href !== firstHref) {
								isSuspicious = true;
								break;
							}
						}

						if (isSuspicious) {
							suspiciousLinks = suspiciousLinks.concat(links);
						}
					}
				}

				return suspiciousLinks;
			});
			
			return testShell;
		}
	});
}
