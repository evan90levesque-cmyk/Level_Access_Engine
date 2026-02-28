import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-41
 * @returns {AutoTestShell} testShell
 */
export function test41() {
	aeKernel.addAutomaticTest("41", {
		bestPractice:1626,
		testId:41,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements that has a role='switch' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false'.",
		metaText: "This element (role=switch) does not have an aria-checked attribute set to one of the text values: true | false",
		metaTextDetail: "This {{tag-name}} (role=switch) does not have an aria-checked attribute set to one of the text values: true | false",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="switch"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="switch"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])'
			);
		}
	});
}
