import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-179
 * @returns {AutoTestShell} testShell
 */
export function test179() {
	aeKernel.addAdvisoryAutomaticTest("179", {
		bestPractice:1626,
		testId:179,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more map elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'map[data-ae_vis][data-ae_avat]',
				'map[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])'
			);
		}
	});
}
