import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-140
 * @returns {AutoTestShell} testShell
 */
export function test140() {
	aeKernel.addAutomaticTest("140", {
		bestPractice:1626,
		testId:140,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='checkbox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false | mixed'.",
		metaText: "This element's (role=checkbox) aria-checked attribute should be set to one of the text values: true | false | mixed",
		metaTextDetail: "This {{tag-name}}'s (role=checkbox) aria-checked attribute should be set to one of the text values: true | false | mixed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="checkbox"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"]):not([aria-checked="mixed"])'
			);
		}
	});
}
