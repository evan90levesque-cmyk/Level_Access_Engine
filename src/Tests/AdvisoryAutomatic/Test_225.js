import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-225
 * @returns {AutoTestShell} testShell
 */
export function test225() {
	aeKernel.addAdvisoryAutomaticTest("225", {
		bestPractice:338,
		testId:225,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more label elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This label element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'label[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'label[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
