import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1077
 * @returns {AutoTestShell} testShell
 */
export function test1077() {
	aeKernel.addAutomaticTest("1077", {
		bestPractice:1626,
		testId:1077,
		introduced: "2.21",
		mediaType:mediaTypes.WEB,
		description:"One or more elements that has a role='option' attribute, not intentionally hidden in the DOM and available to assistive technologies, has an aria-checked attribute not set to one of the text values: 'true | false'.",
		metaText: "This element (role=option) has an aria-checked attribute not set to one of the text values: true | false",
		metaTextDetail: "This {{tag-name}} (role=option) does not have an aria-checked attribute set to one of the text values: true | false",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="option"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="option"][aria-checked]:not([aria-checked="true"]):not([aria-checked="false"])'
			);
		}
	});
}
