import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-61
 * @returns {AutoTestShell} testShell
 */
export function test61() {
	aeKernel.addAutomaticTest("61", {
		bestPractice:347,
		testId:61,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more meta elements, in the head element, that had an http-equiv attribute set to the text value 'refresh' did not have a zero second time limit set in their content attribute.",
		metaText: "This meta element has an http-equiv attribute set to the value: refresh; with a content attribute set greater than zero seconds",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'head meta[http-equiv="refresh"][content]';

			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var notAllowed = [];
				var res = aeKernel.rootTestNode.querySelectorAll(`${relevantCssSelector}:not([content=""])`);
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var result = res[i];
					var content = result.getAttribute("content");
					var semiColonPos = content.indexOf(";");
					if (semiColonPos !== -1) {
						var charAfterSemiColon = content.substring(0, semiColonPos);
						if (charAfterSemiColon !== "0") {
							notAllowed.push(result);
						}
					}
				}
				return notAllowed;
			});
			
			return testShell;
		}
	});
}
