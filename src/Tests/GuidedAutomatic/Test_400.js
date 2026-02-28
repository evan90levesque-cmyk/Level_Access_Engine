import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {cloneThisNode} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-400 (supercedes 139)
 * @returns {AutoTestShell} testShell
 */
export function test400() {
	aeKernel.addGuidedAutomaticTest("400", {
		bestPractice:457,
		testId:400,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"The body element does not contain elements that form a heading structure (i.e. h1-h6 elements; or elements given a role=heading).",
		metaText: "The body element does not contain elements that form a heading structure (i.e. h1-h6 elements; or elements given a role=heading)",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell(
				'body'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var res = this.querySelector('body');
				var incorrectlyNestedHeaders = [];
				if (res) {
					var headers = res.querySelectorAll("h1[data-ae_ar='null'][data-ae_vis]:not(:empty), h2[data-ae_ar='null'][data-ae_vis]:not(:empty), h3[data-ae_ar='null'][data-ae_vis]:not(:empty), h4[data-ae_ar='null'][data-ae_vis]:not(:empty), h5[data-ae_ar='null'][data-ae_vis]:not(:empty), h6[data-ae_ar='null'][data-ae_vis]:not(:empty), *[data-ae_ar='heading'][data-ae_vis][aria-level]:not(:empty)");
					if (headers.length === 0) {
						incorrectlyNestedHeaders.push(res);
					}
				}
				return incorrectlyNestedHeaders;
			});
			
			return testShell;
		}
	});
}
