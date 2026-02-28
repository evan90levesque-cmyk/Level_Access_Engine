import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-11
 * @returns {AutoTestShell} testShell
 */
export function test11() {
	aeKernel.addAdvisoryAutomaticTest("11", {
		bestPractice:1626,
		testId:11,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more button elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'button...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'button[data-ae_vis][data-ae_avat]',
				'button[data-ae_vis][data-ae_avat][data-ae_ar="button"]'
			);
		}
	});
}
