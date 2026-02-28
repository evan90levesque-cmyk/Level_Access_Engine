import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {isValidIdOrName} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-386
 * @returns {AutoTestShell} testShell
 */
export function test386() {
	aeKernel.addAutomaticTest("386", {
		bestPractice:361,
		testId:386,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more td elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a headers attribute value that includes one or more invalid ids.",
		metaText: "This data cell has a headers attribute value that includes one or more invalid ids",
		metaTextDetail: "This data cell has a headers attribute value of '{{headers}}' that includes one or more invalid ids",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'td[data-ae_vis][data-ae_avat][headers]:not([headers=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadIds = [];
				var res = aeKernel.rootTestNode.querySelectorAll('td[data-ae_vis][data-ae_avat][headers]:not([headers=""])');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var headersIds = n.getAttribute("headers").trim().split(/\s+/);
					for (var j = 0, len_headersIds = headersIds.length; j < len_headersIds; j++) {
						var headersId = headersIds[j];
						if (isValidIdOrName(headersId) === true) {
							// "[id=" is used in place of "#" + id as ids can included colons which breaks css selector, although is valid html
							var refNode = aeKernel.rootTestNode.querySelectorAll("[id='" + headersId.replace(/'/g, "\\'") + "']");
							var refNodeLength = refNode.length;
							if (refNodeLength === 0) {
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
