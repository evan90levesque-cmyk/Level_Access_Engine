import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {cloneThisNode} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-401 (supercedes 139)
 * @returns {AutoTestShell} testShell
 */
export function test401() {
	aeKernel.addGuidedAutomaticTest("401", {
		bestPractice:387,
		testId:401,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"The first element intended to create a visual heading (created using h1 - h6 elements (without an ARIA-assigned role); or elements with a role attribute set to a value that starts with 'heading' and an aria-level attribute set to an appropriate value), not intentionally hidden in the DOM and available to assistive technologies, does not create a level-1 heading.",
		metaText: "This element creates the only heading in this document, and, as such, should have been a level-1 heading",
		metaTextDetail: "This {{tag-name}} creates the only heading in this document, and, as such, should have been a level-1 heading",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			const headerCssSelector = "h1[data-ae_ar='null'][data-ae_vis]:not(:empty), h2[data-ae_ar='null'][data-ae_vis]:not(:empty), h3[data-ae_ar='null'][data-ae_vis]:not(:empty), h4[data-ae_ar='null'][data-ae_vis]:not(:empty), h5[data-ae_ar='null'][data-ae_vis]:not(:empty), h6[data-ae_ar='null'][data-ae_vis]:not(:empty), *[data-ae_ar='heading'][data-ae_vis][aria-level]:not(:empty)";

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length === 1);
			});

			testShell.set_applicableNodesFunc(function() {
				const applicableNodes = [];

				const res = this.querySelector('body');
				if (res) {
					const headers = res.querySelectorAll(headerCssSelector);
					if (headers.length === 1) {
						applicableNodes.push(headers[0]);
					}
				}

				return applicableNodes;
			});
			
			testShell.set_candidateSetNodesFunc(function() {
				var res = this.querySelector('body');
				var incorrectlyNestedHeaders = [];
				if (res) {
					var headers = res.querySelectorAll(headerCssSelector);
					// turn header text values into a stack of integers
					if (headers.length === 1) {
						var ariaLevel = headers[0].getAttribute("aria-level");
						if (ariaLevel !== null) {
							if (parseInt(ariaLevel) !== 1) {
								incorrectlyNestedHeaders.push(res);
							}
						}
						else {
							if (parseInt(headers[0].tagName[1]) !== 1) {
								incorrectlyNestedHeaders.push(res);
							}
						}
					}
				}
				return incorrectlyNestedHeaders;
			});
			
			return testShell;
		}
	});
}
