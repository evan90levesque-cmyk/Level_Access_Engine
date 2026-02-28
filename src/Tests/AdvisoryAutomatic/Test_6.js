import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-6
 * @returns {AutoTestShell} testShell
 */
export function test6() {
	aeKernel.addAdvisoryAutomaticTest("6", {
		bestPractice:1626,
		testId:6,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more article elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'article...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'article[data-ae_vis][data-ae_avat]',
				'article[data-ae_vis][data-ae_avat][data-ae_ar="article"]'
			);
		}
	});
}
