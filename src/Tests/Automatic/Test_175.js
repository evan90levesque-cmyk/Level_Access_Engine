import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-175
 * @returns {AutoTestShell} testShell
 */
export function test175() {
	aeKernel.addAutomaticTest("175", {
		bestPractice:1626,
		testId:175,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more keygen elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'keygen[data-ae_vis][data-ae_avat]',
				'keygen[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
