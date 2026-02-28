import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-483
 * @returns {AutoTestShell} testShell
 */
export function test483() {
	aeKernel.addGuidedAutomaticTest("483", {
		bestPractice:2049,
		testId:483,
		introduced: "2.1",
		mediaType: mediaTypes.WEB,
		description:"One or more video elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a track element with kind set to captions as a direct child element",
		metaText: "This video element does not have a track with kind=captions",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'video[data-ae_vis][data-ae_avat][data-ae_ar="null"]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				var bad = [];
				var nodes = aeKernel.rootTestNode.querySelectorAll('video[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
				for (var i = 0; i < nodes.length; i++) {
					var node=nodes[i];
					if (node.querySelector('track[kind="captions"]')===null) {
						bad.push(node);
					}
				}
				return bad;
			});
		return testShell;
		}
	});
}
