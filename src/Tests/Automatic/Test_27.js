import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-27
 * @returns {AutoTestShell} testShell
 */
export function test27() {
	aeKernel.addAutomaticTest("27", {
		bestPractice:1626,
		testId:27,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements that has a role='option' attribute and is a child of an element with a aria-multiselectable attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-selected attribute set one of the text values: 'true | false'.",
		metaText: "This element (role=option) does not have an aria-selected attribute set to one of the text values: true | false",
		metaTextDetail: "This {{tag-name}} (role=option) does not have an aria-selected attribute set to one of the text values: true | false",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-multiselectable] *[data-ae_vis][data-ae_avat][data-ae_ar="option"]',
				'*[data-ae_vis][data-ae_avat][aria-multiselectable] *[data-ae_vis][data-ae_avat][data-ae_ar="option"][aria-selected]:not([aria-selected="true"]):not([aria-selected="false"])'
			);
		}
	});
}
