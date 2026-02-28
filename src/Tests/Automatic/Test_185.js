import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-185
 * @returns {AutoTestShell} testShell
 */
export function test185() {
	aeKernel.addAutomaticTest("185", {
		bestPractice:1626,
		testId:185,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more noscript elements, available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'noscript[data-ae_avat]',
				'noscript[data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
