import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {isValidIdOrName} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-95
 * @returns {AutoTestShell} testShell
 */
export function test95() {
	aeKernel.addAutomaticTest("95", {
		bestPractice:1626,
		testId:95,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-labelledby attribute value that includes one or more invalid ids.",
		metaText: "This element has an aria-labelledby attribute value that includes one or more invalid ids",
		metaTextDetail: "This {{tag-name}} has an aria-labelledby attribute value of '{{aria-labelledby}}', which includes one or more invalid ids",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Provide the ID of an element which contains the label content for this element.",
			"fix":{
				"aria-labelledby":null
			}
		},
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-labelledby]:not([aria-labelledby=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadIds = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-labelledby]:not([aria-labelledby=""])');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					const labelledByIds = n.getAttribute("aria-labelledby")?.trim().split(/\s+/) || [];
					for (var j = 0, len_labelledByIds = labelledByIds.length; j < len_labelledByIds; j++) {
						var labelledById = labelledByIds[j];
						if (isValidIdOrName(labelledById) === true) {
							// "[id=" is used in place of "#" + id as ids can included colons which breaks css selector, although is valid html
							var refNode = aeKernel.rootTestNode.querySelectorAll("[id='" + labelledById.replace(/'/g, "\\'") + "']");
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
