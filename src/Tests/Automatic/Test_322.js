import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-322
 * @returns {AutoTestShell} testShell
 */
export function test322() {
	aeKernel.addAutomaticTest("322", {
		bestPractice:1626,
		testId:322,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more picture elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'picture[data-ae_vis][data-ae_avat]',
				'picture[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
