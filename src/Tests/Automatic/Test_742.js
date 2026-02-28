import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-742
 * @returns {AutoTestShell} testShell
 */
export function test742() {
	aeKernel.addAutomaticTest("742", {
		bestPractice:2615,
		testId:742,
		introduced: "2.11",
		mediaType:mediaTypes.ANDROID,
		description:"One or more RadioButton elements is not an immediate child of a RadioGroup element.",
		metaText: "This [[object]] should be properly grouped within a RadioGroup element to establish a relationship between buttons and to the group container.",
		fixType:"",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'div[data-xmlnodetype="android.widget.RadioButton"][data-ae_vis][data-ae_avat]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				var bad = [];
				//Get all the radio buttons
				var res = aeKernel.rootTestNode.querySelectorAll('div[data-xmlnodetype="android.widget.RadioButton"][data-ae_vis][data-ae_avat]');
				//Loop through each one and check if parent is a RadioGroup
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var result = res[i];
					var nodeType = result.parentNode.getAttribute("data-xmlnodetype");
					if (nodeType!="android.widget.RadioGroup") {
						bad.push(result);
					}
				}
				return bad;
			});
			
			return testShell;

		}
	});
}
