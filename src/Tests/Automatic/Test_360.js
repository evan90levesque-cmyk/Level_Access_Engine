import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-360
 * @returns {AutoTestShell} testShell
 */
export function test360() {
	aeKernel.addAutomaticTest("360", {
		bestPractice:1626,
		testId:360,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, have an aria-owns attribute that references the same id value as appears in the aria-owns attribute of another element.",
		metaText: "This element should not have an aria-owns attribute that references the same id value as appears in the aria-owns attribute of another element",
		metaTextDetail: "This {{tag-name}} should not have an aria-owns attribute of {{aria-owns}} that references the same id value as appears in the aria-owns attribute of another element",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-owns]:not([aria-owns=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var sameOwnsValues = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-owns]:not([aria-owns=""])');
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var ariaowns = n.getAttribute("aria-owns");
					var resWithOwns = aeKernel.rootTestNode.querySelectorAll('*[data-ae_vis][data-ae_avat][aria-owns="' + ariaowns.replace(/"/g, '\\"') + '"]');
					if (resWithOwns.length > 1) {
						sameOwnsValues.push(n);
					}
				}
				return sameOwnsValues;
			});
			
			return testShell;
		}
	});
}
