import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {isValidIdOrName} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-290
 * @returns {AutoTestShell} testShell
 */
export function test290() {
	aeKernel.addAutomaticTest("290", {
		bestPractice:1626,
		testId:290,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute that is not set to a valid id.",
		metaText: "This element has an aria-activedescendant attribute that is set to an invalid id",
		metaTextDetail: "This {{tag-name}} has an aria-activedescendant attribute that is set to an invalid id of {{aria-activedescendant}}",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-activedescendant]:not([aria-activedescendant=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadIds = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-activedescendant]:not([aria-activedescendant=""])');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var detailsId = n.getAttribute("aria-activedescendant");
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
