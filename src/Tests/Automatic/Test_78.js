import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {isValidIdOrName} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-78
 * Template Test: 3853
 * @returns {AutoTestShell} testShell
 */
export function test78() {
	aeKernel.addAutomaticTest("78", {
		bestPractice:1626,
		testId:78,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-flowto attribute value that includes one or more invalid ids.",
		metaText: "This element has an aria-flowto attribute value that includes one or more invalid ids",
		metaTextDetail: "This {{tag-name}} has an aria-flowto attribute value of '{{aria-flowto}}', which includes one or more invalid ids",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-flowto]:not([aria-flowto=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadIds = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-flowto]:not([aria-flowto=""])');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var labelledByIds = n.getAttribute("aria-flowto").trim().split(/\s+/);
					for (var j = 0, len_labelledByIds = labelledByIds.length; j < len_labelledByIds; j++) {
						var labelledById = labelledByIds[j];
						if (isValidIdOrName(labelledById) === true) {
							// "[id=" is used in place of "#" + id as ids can included colons which breaks css selector, although is valid html
							var refNode = aeKernel.rootTestNode.querySelectorAll("[id='" + labelledById.replace(/'/g, "\\'") + "']");
							var refNodeLength = refNode.length;
							if ((refNodeLength === 0)) {
								nodesWithBadIds.push(n);
								break;
							}
						}
						else {
							nodesWithBadIds.push(n);
							break;
						}
					}
				}
				
				return nodesWithBadIds;
			});
			
			return testShell;
		}
	});
}
