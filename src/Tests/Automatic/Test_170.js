import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-170
 * @returns {AutoTestShell} testShell
 */
export function test170() {
	aeKernel.addAutomaticTest("170", {
		bestPractice:1626,
		testId:170,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='month' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}} with type=month",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="month"]',
				'input[data-ae_vis][data-ae_avat][type="month"]:not([data-ae_ar="null"])'
			);
		}
	});
}
