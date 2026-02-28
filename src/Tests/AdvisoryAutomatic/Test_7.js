import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-7
 * @returns {AutoTestShell} testShell
 */
export function test7() {
	aeKernel.addAdvisoryAutomaticTest("7", {
		bestPractice:1626,
		testId:7,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more body elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'document...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'body[data-ae_vis][data-ae_avat]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="document"]`
			);
		}
	});
}
