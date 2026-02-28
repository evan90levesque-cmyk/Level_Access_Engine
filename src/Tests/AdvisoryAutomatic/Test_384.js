import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-384
 * @returns {AutoTestShell} testShell
 */
export function test384() {
	aeKernel.addAdvisoryAutomaticTest("384", {
		bestPractice:387,
		testId:384,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements with a role attribute set to a value that starts with 'heading', not intentionally hidden in the DOM and available to assistive technologies, is empty.",
		metaText: "Elements given a role=heading should not be empty",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_ar="heading"][data-ae_vis][data-ae_avat]',
				'*[data-ae_ar="heading"][data-ae_vis][data-ae_avat]:empty'
			);
		}
	});
}
