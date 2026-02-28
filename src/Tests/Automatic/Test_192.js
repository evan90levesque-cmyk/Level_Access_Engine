import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-192
 * @returns {AutoTestShell} testShell
 */
export function test192() {
	aeKernel.addAutomaticTest("192", {
		bestPractice:1626,
		testId:192,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more style elements has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'style',
				'style:not([data-ae_ar="null"])'
			);
		}
	});
}
