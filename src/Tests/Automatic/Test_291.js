import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {isValidIdOrName} from "../../Utils/aeUtils.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-291
 * @returns {AutoTestShell} testShell
 */
export function test291() {
	aeKernel.addAutomaticTest("291", {
		bestPractice:1626,
		testId:291,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-activedescendant attribute that references an id of an element that has an aria-activedescendant attribute set to a non-null value.",
		metaText: "This element should not have an aria-activedescendant attribute that references an element that also has an aria-activedescendant attribute",
		metaTextDetail: "This {{tag-name}} should not have an aria-activedescendant attribute of {{aria-activedescendant}} that references an element that also has an aria-activedescendant attribute",
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
						var refNode = aeKernel.rootTestNode.querySelector("[id='" + detailsId.replace(/'/g, "\\'") + "']");
						if (refNode !== null) {
							// aria-activedescendant is used to reference a single id
							var desHasAriaDes = refNode.getAttribute("aria-activedescendant");
							if ((desHasAriaDes !== null) && (desHasAriaDes !== "")) {
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
