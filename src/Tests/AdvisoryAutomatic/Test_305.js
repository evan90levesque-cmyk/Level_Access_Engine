import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-305
 * @returns {AutoTestShell} testShell
 */
export function test305() {
	aeKernel.addAdvisoryAutomaticTest("305", {
		bestPractice:1626,
		testId:305,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='range' elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'slider'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="range"]',
				'input[data-ae_vis][data-ae_avat][type="range"][data-ae_ar="slider"]'
			);
		}
	});
}
