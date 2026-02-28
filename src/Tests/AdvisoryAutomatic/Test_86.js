import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-86
 * @returns {AutoTestShell} testShell
 */
export function test86() {
	aeKernel.addAdvisoryAutomaticTest("86", {
		bestPractice:343,
		testId:86,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more map elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, are not preceded by an img element (without an ARIA-assigned role) that has a usemap attribute set to the same text value as their name attribute preceded by the '#' character.",
		metaText: "This element is not preceded by an img element (without an ARIA-assigned role) that has a usemap attribute set to the same text value as their name attribute preceded by the character: #",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'map[data-ae_vis][data-ae_avat][data-ae_ar="null"][name]:not([name=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var notPreceded = [];
				var res = aeKernel.rootTestNode.querySelectorAll('map[data-ae_vis][data-ae_avat][data-ae_ar="null"][name]:not([name=""])');
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var name = res[i].getAttribute("name");
					var addRes = aeKernel.rootTestNode.querySelector('img[data-ae_ar="null"][usemap="#' + name.replace(/"/g, '\\"') + '"][data-ae_vis][data-ae_avat]~map[data-ae_ar="null"][name="' + name.replace(/"/g, '\\"') + '"]');
					// due to querySelector, rather than querySelectorAll.  querySelector is null if nothing is found
					if (addRes === null) {
						notPreceded[notPreceded.length] = res[i];
					}
				}
				return notPreceded;
			});
			
			return testShell;
		}
	});
}
