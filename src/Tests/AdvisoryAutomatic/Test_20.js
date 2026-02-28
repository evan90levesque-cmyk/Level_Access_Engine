import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-20
 * @returns {AutoTestShell} testShell
 */
export function test20() {
	aeKernel.addAdvisoryAutomaticTest("20", {
		bestPractice:343,
		testId:20,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more map elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This map element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'map[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'map[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
