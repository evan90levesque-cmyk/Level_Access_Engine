import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-317
 * @returns {AutoTestShell} testShell
 */
export function test317() {
	aeKernel.addAutomaticTest("317", {
		bestPractice:1626,
		testId:317,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more link elements with an href attribute has a role attribute.",
		metaText: "The role attribute is not allowed on this element",
		metaTextDetail: "The role attribute is not allowed on this {{tag-name}}",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'link',
				'link:not([data-ae_ar="null"])'
			);
		}
	});
}
