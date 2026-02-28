import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-284
 * @returns {AutoTestShell} testShell
 */
export function test284() {
	aeKernel.addAutomaticTest("284", {
		bestPractice:1626,
		testId:284,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more audio elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'application'.",
		metaText: "Role of 'application' on this audio element is usually inappropriate",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'audio[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
				'audio[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="application"])'
			);
		}
	});
}
