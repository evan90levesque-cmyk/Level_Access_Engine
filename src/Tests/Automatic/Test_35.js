import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-35
 * @returns {AutoTestShell} testShell
 */
export function test35() {
	aeKernel.addAutomaticTest("35", {
		bestPractice:941,
		testId:35,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more th elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, were found to be empty.",
		metaText: "This th element should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'th[data-ae_vis][data-ae_avat][data-ae_ar="null"]',
				'th[data-ae_vis][data-ae_avat][data-ae_ar="null"]:empty'
			);
		}
	});
}
