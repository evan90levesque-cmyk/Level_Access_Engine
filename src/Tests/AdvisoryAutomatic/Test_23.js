import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-23
 * @returns {AutoTestShell} testShell
 */
export function test23() {
	aeKernel.addAdvisoryAutomaticTest("23", {
		bestPractice:2042,
		testId:23,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more video elements, without an ARIA-assigned role, not intentionally hidden in the DOM, were found to have a loop attribute.",
		metaText: "This video element should not have a loop attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'video[data-ae_vis][data-ae_ar="null"]',
				'video[data-ae_vis][data-ae_ar="null"][loop]'
			);
		}
	});
}
