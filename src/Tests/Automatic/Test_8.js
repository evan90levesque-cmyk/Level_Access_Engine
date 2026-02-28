import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {isValidIdOrName, mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-8
 * @returns {AutoTestShell} testShell
 */
export function test8() {
	aeKernel.addAutomaticTest("8", {
		bestPractice:1626,
		testId:8,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-details attribute that is not set to a valid id.",
		metaText: "This element has an aria-details attribute that is set to an invalid id",
		metaTextDetail: "This {{tag-name}} has an aria-details attribute that is set to an invalid id of {{aria-details}}",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-details]:not([aria-details=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadIds = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-details]:not([aria-details=""])');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var detailsId = n.getAttribute("aria-details");
					if (isValidIdOrName(detailsId) === true) {
						// "[id=" is used in place of "#" + id as ids can included colons which breaks css selector, although is valid html
						var refNode = aeKernel.rootTestNode.querySelectorAll("[id='" + detailsId.replace(/'/g, "\\'") + "']");
						var refNodeLength = refNode.length;
						if (refNodeLength === 0) {
							nodesWithBadIds.push(n);
						}
					}
					else {
						nodesWithBadIds.push(n);
					}
				}
				
				return nodesWithBadIds;
			});
			
			return testShell;
		}
	});
}
