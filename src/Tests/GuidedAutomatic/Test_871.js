import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {
	getAfter_FromStyles,
	getBefore_FromStyles
} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles";
import {calcAccNamesForCertainElements} from "../TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-871
 * @returns {AutoTestShell} testShell
 */
export function test871() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addGuidedAutomaticTest("871", {
		bestPractice: 523,
		testId: 871,
		introduced: "2.16",
		mediaType: mediaTypes.WEB,
		description: "Two or more iframe elements with a unique src value, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, have an accessible name value that is not unique.",
		metaText: "This iframe element has an accessible name that is not unique",
		metaTextDetail: "This iframe element has an accessible name of '{{data-ae_an}}' that is not unique",
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

			const baseCssSelector = 'iframe[data-ae_ar="null"][data-ae_vis][data-ae_avat][data-ae_an]';

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length > 0);
			});

			testShell.set_applicableNodesFunc(function() {
				const applicableNodes = [];

				// if there is more than 1 applicable iframe element then the test is applicable
				const iframes = this.querySelectorAll(baseCssSelector);
				if (iframes.length > 1) {
					for (let i = 0; i < iframes.length; i++) {
						const iframe = iframes[i];
						let src = iframe.getAttribute('src');
						if (src) {
							src = src.replace(/\/$/g, "");  // src attribute values whose only difference is a trailing forward slash are effectively equal
							if (this.querySelectorAll(`${baseCssSelector}[src="${src.replace(/"/g, '\\"')}"], ${baseCssSelector}[src="${src.replace(/"/g, '\\"')}/"]`).length === 1) {
								applicableNodes.push(iframe);
							}
						}
					}
				}

				return (applicableNodes.length > 1) ? applicableNodes : [];
			});
			
			testShell.set_candidateSetNodesFunc(function() {
				const suspiciousIframes = [];

				const iframes = this.querySelectorAll(baseCssSelector);
				if (iframes.length > 1) {
					// you create an object to hold accNames
					// you run through all the iframes, and each time the same accName is found you add 1 so accName1 = 1; accName2 = 4, etc...
					// then you run through the iframes again, and for any that have > 1 you have the issues
					const accNames = {};
					for (let i = iframes.length; i--;) {
						const accName = iframes[i].getAttribute('data-ae_an');
						if (accNames[accName] === undefined) {
							accNames[accName] = 1;
						} else {
							accNames[accName] = accNames[accName] + 1;
						}
					}

					for (let i = 0; i < iframes.length; i++) {
						const iframe = iframes[i];
						let src = iframe.getAttribute('src');
						if (src) {
							src = src.replace(/\/$/g, "");  // src attribute values whose only difference is a trailing forward slash are effectively equal
							if (this.querySelectorAll(`${baseCssSelector}[src="${src.replace(/"/g, '\\"')}"], ${baseCssSelector}[src="${src.replace(/"/g, '\\"')}/"]`).length === 1) {
								// for each iframe element with a unique src value
								const accName = iframe.getAttribute('data-ae_an');
								if (accNames[accName] > 1) {
									suspiciousIframes.push(iframe);
								}
							}
						}
					}
				}

				return suspiciousIframes;
			});
			
			return testShell;
		}
	});
}
