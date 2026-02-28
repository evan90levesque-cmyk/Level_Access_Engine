import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1097
 * @returns {AutoTestShell} testShell
 */
export function test1097() {
	aeKernel.addAutomaticTest("1097", {
		bestPractice:1626,
		testId:1097,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more A elements with an href attribute set to a text value, not intentionally hidden in the DOM, has a role='presentation' attribute.",
		metaText: "This A has a role attribute set to 'presentation'",
		fixType: "",
		testFunc: function() {
			const relevantCssSelector = 'a[href]:not([href=""])[data-ae_vis]';

			return new AutoTestShell(
				relevantCssSelector,
				`${relevantCssSelector}[data-ae_ar="presentation"]`
			);
		}
	});
}
