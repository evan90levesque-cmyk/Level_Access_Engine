import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-182
 * @returns {AutoTestShell} testShell
 */
export function test182() {
	aeKernel.addAutomaticTest("182", {
		bestPractice:1626,
		testId:182,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more meta elements, in the head element in the DOM, has a role attribute and/or an ARIA attribute.",
		metaText: "This element should not have a role attribute and/or an ARIA attribute",
		metaTextDetail: "This {{tag-name}} should not have a role attribute and/or an ARIA attribute",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell(
				'head meta'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var notProper = [];
				
				var addIfFailed = function(meta) {
					if (meta.hasAttribute("role")) {
						notProper.push(meta);
						return 1;
					}
					var meta_attributes = meta.attributes;
					for (var i=meta_attributes.length; i--;) {
						if (meta_attributes[i].name.substring(0, 4).toLowerCase() === "aria") {
							notProper.push(meta);
							return 1;
						}
					}
					return 0;
				};
				
				var metaNodes = aeKernel.rootTestNode.querySelectorAll('meta');
				for (var x=metaNodes.length; x--;) {
					addIfFailed(metaNodes[x]);
				}
				return notProper;
			});
			
			return testShell;
		}
	});
}
