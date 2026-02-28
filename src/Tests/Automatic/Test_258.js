import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-258
 * @returns {AutoTestShell} testShell
 */
export function test258() {
	aeKernel.addAutomaticTest("258", {
		bestPractice:1626,
		testId:258,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='menuitemcheckbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false | mixed'.",
		metaText: "This element (role=menuitemcheckbox) should have the aria-checked attribute set to one of the following text values: true | false | mixed",
		metaTextDetail: "This {{tag-name}} (role=menuitemcheckbox) should have the aria-checked attribute set to one of the following text values: true | false | mixed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemcheckbox"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemcheckbox"]:not([aria-checked="true"]):not([aria-checked="false"]):not([aria-checked="mixed"])'
			);
		}
	});
}
