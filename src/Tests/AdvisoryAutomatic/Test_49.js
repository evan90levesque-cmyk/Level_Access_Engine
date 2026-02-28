import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-49
 * @returns {AutoTestShell} testShell
 */
export function test49() {
	aeKernel.addAdvisoryAutomaticTest("49", {
		bestPractice:415,
		testId:49,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more caption elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This caption element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'caption[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'caption[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
