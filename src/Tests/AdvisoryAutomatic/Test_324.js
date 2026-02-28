import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-324
 * @returns {AutoTestShell} testShell
 */
export function test324() {
	aeKernel.addAdvisoryAutomaticTest("324", {
		bestPractice:1626,
		testId:324,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more textarea elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'textbox'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'textarea[data-ae_vis][data-ae_avat]',
				'textarea[data-ae_vis][data-ae_avat][data-ae_ar="textbox"]'
			);
		}
	});
}
