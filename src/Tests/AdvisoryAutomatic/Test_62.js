import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-62
 * @returns {AutoTestShell} testShell
 */
export function test62() {
	aeKernel.addAdvisoryAutomaticTest("62", {
		bestPractice:1626,
		testId:62,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more header elements, excluding children of article elements or section elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'banner'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'header:not(article header):not(section header)[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="banner"]`
			);
		}
	});
}
