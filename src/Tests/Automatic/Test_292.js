import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {isValidIdOrName} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-292
 * @returns {AutoTestShell} testShell
 */
export function test292() {
	aeKernel.addAutomaticTest("292", {
		bestPractice:1626,
		testId:292,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute that references the elements own id value.",
		metaText: "This element should not have an aria-activedescendant attribute that references its own id",
		metaTextDetail: "This {{tag-name}} should not have an aria-activedescendant attribute that references its own id of {{aria-activedescendant}}",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][id]:not([id=""])[aria-activedescendant]:not([aria-activedescendant=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var nodesWithBadIds = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][id]:not([id=""])[aria-activedescendant]:not([aria-activedescendant=""])');
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var detailsId = n.getAttribute("aria-activedescendant");
					if (isValidIdOrName(detailsId) === true) {
						// "[id=" is used in place of "#" + id as ids can included colons which breaks css selector, although is valid html
						var refNode = aeKernel.rootTestNode.querySelector("[id='" + detailsId.replace(/'/g, "\\'") + "']");
						if (refNode !== null) {
							// aria-activedescendant is used to reference a single id
							if (refNode.isEqualNode(n) === true) {
								nodesWithBadIds.push(n);
							}
						}
					}
				}
				return nodesWithBadIds;
			});
			
			return testShell;
		}
	});
}
