import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-328
 * @returns {AutoTestShell} testShell
 */
export function test328() {
	aeKernel.addAutomaticTest("328", {
		bestPractice:1626,
		testId:328,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements with a required attribute and an aria-required attribute, not intentionally hidden in the DOM and available to assistive technologies, has a different value in its required attribute from its aria-required attribute.",
		metaText: "This element has the 'required' attribute set while the aria-required attribute is set to false",
		metaTextDetail: "This {{tag-name}} has the 'required' attribute set while the aria-required attribute is set to false",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][required][aria-required]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var diffAttValues = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][required][aria-required]');
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var req = n.getAttribute("required");
					var ariareq = n.getAttribute("aria-required");
					if (((req === "") || (req === "required")) && (ariareq === "false")) {
						diffAttValues.push(n);
					}
				}
				return diffAttValues;
			});
			
			return testShell;
		}
	});
}
