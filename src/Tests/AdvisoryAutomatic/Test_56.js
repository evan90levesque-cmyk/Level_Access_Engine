import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-56
 * @returns {AutoTestShell} testShell
 */
export function test56() {
	aeKernel.addAdvisoryAutomaticTest("56", {
		bestPractice:393,
		testId:56,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more ul elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This ul element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'ul[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'ul[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
