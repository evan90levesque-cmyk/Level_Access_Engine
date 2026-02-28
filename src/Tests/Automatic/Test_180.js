import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-180
 * @returns {AutoTestShell} testShell
 */
export function test180() {
	aeKernel.addAutomaticTest("180", {
		bestPractice:1626,
		testId:180,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more math elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this math element",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'math[data-ae_vis][data-ae_avat]',
				'math[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
