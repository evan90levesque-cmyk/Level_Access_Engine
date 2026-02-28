import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1106
 * @returns {AutoTestShell} testShell
 */
export function test1106() {
	aeKernel.addAutomaticTest("1106", {
		bestPractice:1456,
		testId:1106,
		introduced: "2.21",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='none' or role='presentation' attribute, excluding those elements with aria-hidden='true', not intentionally hidden in the DOM, has an aria-labelledby attribute.",
		metaText: "This element (role=presentation or none) has an aria-labelledby attribute.",
		metaTextDetail:"This {{tag-name}} (role={{data-ae_ar}}) has an aria-labelledby attribute.",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[role="none"]:not([data-ae_at_hidden])[data-ae_vis],*[role="presentation"]:not([data-ae_at_hidden])[data-ae_vis]',
				'*[role="none"]:not([data-ae_at_hidden])[data-ae_vis][aria-labelledby],*[role="presentation"]:not([data-ae_at_hidden])[data-ae_vis][aria-labelledby]'
			);
		}
	});
}
