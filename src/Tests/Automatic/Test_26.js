import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-26
 * @returns {AutoTestShell} testShell
 */
export function test26() {
	aeKernel.addAutomaticTest("26", {
		bestPractice:1626,
		testId:26,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements that has a role='radio' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false'.",
		metaText: "This element (role=radio) does not have an aria-checked attribute set to one of the text values: true | false",
		metaTextDetail: "This {{tag-name}} (role=radio) does not have an aria-checked attribute set to one of the text values: true | false",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="radio"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="radio"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])'
			);
		}
	});
}
