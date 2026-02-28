import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-265
 * @returns {AutoTestShell} testShell
 */
export function test265() {
	aeKernel.addAutomaticTest("265", {
		bestPractice:1626,
		testId:265,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-sort attribute that is not set to one of the following text values: 'ascending | descending | none | other'.",
		metaText: "This element's aria-sort attribute should be set to one of the following text values: ascending | descending | none | other",
		metaTextDetail: "This {{tag-name}}'s aria-sort attribute should be set to one of the following text values: ascending | descending | none | other",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-sort]',
				'*[data-ae_vis][data-ae_avat][aria-sort]:not([aria-sort="ascending"]):not([aria-sort="descending"]):not([aria-sort="none"]):not([aria-sort="other"])'
			);
		}
	});
}
