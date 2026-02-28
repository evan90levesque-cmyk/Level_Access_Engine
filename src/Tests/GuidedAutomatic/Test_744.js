import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-744
 * @returns {AutoTestShell} testShell
 */
export function test744() {
	aeKernel.addGuidedAutomaticTest("744", {
		bestPractice:1927,
		testId:744,
		introduced: "2.11",
		mediaType: mediaTypes.IOS,
		description: "One or more UINavigationBar elements does not contain text.",
		metaText: "All UINavigationBar components should contain text.",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'div[data-ae_vis][data-ae_avat][data-xmlnodetype="XCUIElementTypeNavigationBar"]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				var bad = [];
				var nodes = aeKernel.rootTestNode.querySelectorAll('div[data-ae_vis][data-ae_avat][data-xmlnodetype="XCUIElementTypeNavigationBar"]');
				for (var i = 0; i < nodes.length; i++) {
					var node=nodes[i];
					if (node.hasChildNodes()==false) {
						bad.push(node);
					}
				}
				return bad;
			});
		return testShell;
		}
	});
}
