import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-111
 * @returns {AutoTestShell} testShell
 */
export function test111() {
	aeKernel.addAdvisoryAutomaticTest("111", {
		bestPractice:338,
		testId:111,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more label elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an A element as a child.",
		metaText: "This element should not have an A element as a child",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'label[data-ae_ar="null"][data-ae_vis][data-ae_avat]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				var notProper = [];
				var res = aeKernel.rootTestNode.querySelectorAll('label[data-ae_ar="null"][data-ae_vis][data-ae_avat]');
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var result = res[i];
					var res1 = result.querySelector('a');
					if (res1 !== null) {
						notProper[notProper.length] = res[i];
					}
				}
				return notProper;
			});
			return testShell;
		}
	});
}
