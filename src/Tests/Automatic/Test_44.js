import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-44
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test44() {
	aeKernel.addAutomaticTest("44", {
		bestPractice:1626,
		testId:44,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more hr elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'hr[data-ae_vis][data-ae_avat]',
				'hr[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
