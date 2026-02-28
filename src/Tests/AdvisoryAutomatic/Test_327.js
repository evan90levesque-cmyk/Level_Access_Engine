import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-327
 * @returns {AutoTestShell} testShell
 */
export function test327() {
	aeKernel.addAdvisoryAutomaticTest("327", {
		bestPractice:362,
		testId:327,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more picture elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have an img element as its last child element.",
		metaText: "This element does not have an img element as its last child element",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'picture[data-ae_vis][data-ae_avat][data-ae_ar="null"]'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var pictureNoImgLastChild = [];
				var res = aeKernel.rootTestNode.querySelectorAll('picture[data-ae_vis][data-ae_avat][data-ae_ar="null"]');
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var n = res[i];
					var imgLastChild = n.querySelector('img[data-ae_ar="null"]:last-child');
					if (imgLastChild === null) {
						pictureNoImgLastChild.push(n);
					}
				}
				return pictureNoImgLastChild;
			});
			
			return testShell;
		}
	});
}
