import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-477
 * @returns {AutoTestShell} testShell
 */
export function test477() {
	aeKernel.addAutomaticTest("477", {
		bestPractice:1626,
		testId:477,
		introduced: "2.1",
		mediaType: mediaTypes.WEB,
		description:"One or more body elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-hidden attribute set to the value: 'true'.",
		metaText: "This element has an aria-hidden attribute set to 'true'",
		metaTextDetail: "This {{tag-name}} has an aria-hidden attribute set to 'true'",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'body[data-ae_vis]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[aria-hidden="true"]`
			);
		}
	});
}
