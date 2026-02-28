import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-54
 * @returns {AutoTestShell} testShell
 */
export function test54() {
	aeKernel.addAutomaticTest("54", {
		bestPractice:1626,
		testId:54,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-atomic attribute that is not set to one of the text values: 'true | false'.",
		metaText: "This element's aria-atomic attribute should be set to one of the following text values: true | false",
		metaTextDetail: "This {{tag-name}}'s aria-atomic attribute should be set to one of the following text values: true | false",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-atomic]',
				'*[data-ae_vis][data-ae_avat][aria-atomic]:not([aria-atomic="true"]):not([aria-atomic="false"])'
			);
		}
	});
}
