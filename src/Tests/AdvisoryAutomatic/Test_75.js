import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-75
 * @returns {AutoTestShell} testShell
 */
export function test75() {
	aeKernel.addAdvisoryAutomaticTest("75", {
		bestPractice:393,
		testId:75,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more ol elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This ol element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'ol[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'ol[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
