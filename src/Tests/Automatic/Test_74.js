import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * NOTE: aria-level='' is applicable as it defaults to aria-level='0' in IE
 * Jira: https://ssbbart.atlassian.net/browse/ENG-74
 * @returns {AutoTestShell} testShell
 */
export function test74() {
	aeKernel.addAutomaticTest("74", {
		bestPractice:1626,
		testId:74,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-level attribute that is not set to an integer value that is greater than, or equal to, 1.",
		metaText: "This element has an aria-level attribute that is not set to an integer value that is greater than, or equal to, 1",
		metaTextDetail: "This {{tag-name}} has an aria-level attribute of {{aria-level}}, which is not an integer value greater than, or equal to, 1",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-level]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadValues = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-level]');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var val = n.getAttribute("aria-level");
					// check if this is a + / - integer / float
					if (isNaN(val) === false) {
						var num = parseFloat(val);
						// isInteger is not supported in IE so we use ((num ^ 0) === num) === false)
						if ((num <= 0) || (((num ^ 0) === num) === false)) {
							nodesWithBadValues.push(n);
						}
					}
					else {
						nodesWithBadValues.push(n);
					}
				}
				
				return nodesWithBadValues;
			});
			
			return testShell;
		}
	});
}
