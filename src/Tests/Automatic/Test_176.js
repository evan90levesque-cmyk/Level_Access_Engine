import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-176
 * @returns {AutoTestShell} testShell
 */
export function test176() {
	aeKernel.addAutomaticTest("176", {
		bestPractice:1626,
		testId:176,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more label elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'label[data-ae_vis][data-ae_avat]',
				'label[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
