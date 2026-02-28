import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-304
 * @returns {AutoTestShell} testShell
 */
export function test304() {
	aeKernel.addAutomaticTest("304", {
		bestPractice:1626,
		testId:304,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='password' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this input with type=password",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="password"]',
				'input[data-ae_vis][data-ae_avat][type="password"]:not([data-ae_ar="null"])'
			);
		}
	});
}
