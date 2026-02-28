import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-168
 * @returns {AutoTestShell} testShell
 */
export function test168() {
	aeKernel.addAutomaticTest("168", {
		bestPractice:1626,
		testId:168,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='file' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=file",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="file"]',
				'input[data-ae_vis][data-ae_avat][type="file"]:not([data-ae_ar="null"])'
			);
		}
	});
}
