import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-368
 * @returns {AutoTestShell} testShell
 */
export function test368() {
	aeKernel.addAutomaticTest("368", {
		bestPractice:2049,
		testId:368,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more track elements with a kind='subtitles' attribute, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a label attribute set to a text value.",
		metaText: "This element does not have a label attribute set to a text value",
		metaTextDetail: "This {{tag-name}} does not have a label attribute set to a text value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"]',
				'track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"]:not([label]),track[data-ae_ar="null"][data-ae_vis][data-ae_avat][kind="subtitles"][label=""]'
			);
		}
	});
}
