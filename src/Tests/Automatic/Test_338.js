import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-338
 * @returns {AutoTestShell} testShell
 */
export function test338() {
	aeKernel.addAutomaticTest("338", {
		bestPractice:1626,
		testId:338,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='checkbox' attribute, excluding elements with a disabled attribute; or aria-disabled attribute set to a 'true' value, not intentionally hidden in the DOM and available to assistive technologies, does not have a tabindex attribute set to 0 or a negative value",
		metaText: "This element (role=checkbox) does not have a tabindex attribute set to 0 or a negative value",
		metaTextDetail: "This {{tag-name}} (role=checkbox) does not have a tabindex attribute set to 0 or a negative value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not([disabled]):not([aria-disabled="true"])',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]:not([disabled]):not([aria-disabled="true"])[tabindex]:not([tabindex=""]):not([tabindex="0"]):not([tabindex^="-"])'
			);
		}
	});
}
