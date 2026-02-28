import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-329
 * @returns {AutoTestShell} testShell
 */
export function test329() {
	aeKernel.addAutomaticTest("329", {
		bestPractice: 1626,
		testId: 329,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more elements with a readonly attribute and an aria-readonly attribute, not intentionally hidden in the DOM and available to assistive technologies, has a mismatch between the value of its readonly attribute and its aria-readonly attribute.",
		metaText: "This element has a mismatch between the value of its readonly and aria-readonly attributes",
		metaTextDetail: "This {{tag-name}} has a mismatch between the value of its readonly and aria-readonly attributes",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][readonly][aria-readonly]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var diffAttValues = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][readonly][aria-readonly]');
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var read = n.hasAttribute("readonly") ? "true" : "false";
					var ariaread = n.getAttribute("aria-readonly");
					if (read !== ariaread) {
						diffAttValues.push(n);
					}
				}
				return diffAttValues;
			});
			
			return testShell;
		}
	});
}
