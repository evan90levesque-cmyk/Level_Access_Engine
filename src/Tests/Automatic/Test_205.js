import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-205
 * @returns {AutoTestShell} testShell
 */
export function test205() {
	aeKernel.addAutomaticTest("205", {
		bestPractice:1626,
		testId:205,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements with a disabled attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-disabled attribute.",
		metaText: "This element does not need an aria-disabled attribute, as it has a disabled attribute",
		metaTextDetail: "This {{tag-name}} does not need an aria-disabled attribute, as it has a disabled attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'body *[data-ae_vis][data-ae_avat]',
				'body *[data-ae_vis][data-ae_avat][disabled][aria-disabled]'
			);
		}
	});
}
