import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-204
 * @returns {AutoTestShell} testShell
 */
export function test204() {
	aeKernel.addAdvisoryAutomaticTest("204", {
		bestPractice:1626,
		testId:204,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more ul elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'list...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'ul[data-ae_vis][data-ae_avat]',
				'ul[data-ae_vis][data-ae_avat][data-ae_ar="list"]'
			);
		}
	});
}
