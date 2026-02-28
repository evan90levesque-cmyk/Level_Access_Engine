import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-76
 * @returns {AutoTestShell} testShell
 */
export function test76() {
	aeKernel.addAdvisoryAutomaticTest("76", {
		bestPractice:393,
		testId:76,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more dl elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This dl element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'dl[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'dl[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
