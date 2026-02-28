import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-40
 * @returns {AutoTestShell} testShell
 */
export function test40() {
	aeKernel.addAutomaticTest("40", {
		bestPractice:2049,
		testId:40,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more track elements with a kind='captions' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a label attribute set to a text value.",
		metaText: "This element does not have a label attribute set to a text value",
		metaTextDetail: "This {{tag-name}} does not have a label attribute set to a text value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"]',
				'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"]:not([label]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="captions"][label=""]'
			);
		}
	});
}
