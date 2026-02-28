import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-53
 * @returns {AutoTestShell} testShell
 */
export function test53() {
	aeKernel.addAutomaticTest("53", {
		bestPractice:1626,
		testId:53,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-relevant attribute that is set to a value that contains values other than: 'additions | additions text | additions removals | all | removals | text'.",
		metaText: "This element's aria-relevant attribute should only include one or more of the following text values: additions | additions text | additions removals | all | removals | text",
		metaTextDetail: "This {{tag-name}}'s aria-relevant attribute should only include one or more of the following text values: additions | additions text | additions removals | all | removals | text",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-relevant]',
				'*[data-ae_vis][data-ae_avat][aria-relevant]:not([aria-relevant="additions"]):not([aria-relevant="additions text"]):not([aria-relevant="additions removals"]):not([aria-relevant="all"]):not([aria-relevant="removals"]):not([aria-relevant="text"])'
			);
		}
	});
}
