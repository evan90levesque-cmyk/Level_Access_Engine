import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-13
 * @returns {AutoTestShell} testShell
 */
export function test13() {
	aeKernel.addAdvisoryAutomaticTest("13", {
		bestPractice:2042,
		testId:13,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more audio elements, without an ARIA-assigned role, not intentionally hidden in the DOM, were found to have a loop attribute.",
		metaText: "This audio element should not have a loop attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'audio[data-ae_vis][data-ae_ar="null"]',
				'audio[data-ae_vis][data-ae_ar="null"][loop]'
			);
		}
	});
}
