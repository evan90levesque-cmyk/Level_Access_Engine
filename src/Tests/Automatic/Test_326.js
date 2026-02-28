import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-326
 * @returns {AutoTestShell} testShell
 */
export function test326() {
	aeKernel.addAutomaticTest("326", {
		bestPractice:1626,
		testId:326,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more video elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'application'.",
		metaText: "Role of 'application' on this video element is usually inappropriate",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'video[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
				'video[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="application"])'
			);
		}
	});
}
