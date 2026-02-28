import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1105
 * @returns {AutoTestShell} testShell
 */

export function test1105() {
	aeKernel.addAutomaticTest("1105", {
		bestPractice:1456,
		testId:1105,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='none' or role='presentation' attribute, excluding those elements with aria-hidden='true', not intentionally hidden in the DOM, has an aria-label attribute.",
		metaText: "This element (role=presentation or none) has an aria-label attribute.",
		metaTextDetail:"This {{tag-name}} (role={{data-ae_ar}}) has an aria-label attribute.",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[role="none"]:not([data-ae_at_hidden])[data-ae_vis],*[role="presentation"]:not([data-ae_at_hidden])[data-ae_vis]',
				'*[role="none"]:not([data-ae_at_hidden])[data-ae_vis][aria-label],*[role="presentation"]:not([data-ae_at_hidden])[data-ae_vis][aria-label]'
			);
		}
	});
}
