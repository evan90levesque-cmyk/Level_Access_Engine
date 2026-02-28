import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-29
 * @returns {AutoTestShell} testShell
 */
export function test29() {
	aeKernel.addAdvisoryAutomaticTest("29", {
		bestPractice:907,
		testId:29,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more tr elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This tr element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'tr[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'tr[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
