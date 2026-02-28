import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-67
 * @returns {AutoTestShell} testShell
 */
export function test67() {
	aeKernel.addAutomaticTest("67", {
		bestPractice:1626,
		testId:67,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-valuenow attribute that is not set to 0, or a + / - integer.",
		metaText: "This element has an aria-valuenow attribute that is not set to a + / - integer",
		metaTextDetail: "This {{tag-name}} has an aria-valuenow attribute that is not set to a + / - integer",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-valuenow]:not([aria-valuenow=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadValues = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-valuenow]:not([aria-valuenow=""])');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var val = n.getAttribute("aria-valuenow");
					// check if this is a + / - integer / float
					if (isNaN(val) === true) {
						nodesWithBadValues.push(n);
					}
				}
				
				return nodesWithBadValues;
			});
			
			return testShell;
		}
	});
}
