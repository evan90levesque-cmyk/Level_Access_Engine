import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-57
 * @returns {AutoTestShell} testShell
 */
export function test57() {
	aeKernel.addAutomaticTest("57", {
		bestPractice:1626,
		testId:57,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-orientation attribute that is not set to one of the following text values: 'horizontal | vertical'.",
		metaText: "This element's aria-orientation attribute should be set to one of the following text values: horizontal | vertical",
		metaTextDetail: "This {{tag-name}}'s aria-orientation attribute should be set to one of the following text values: horizontal | vertical",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-orientation]',
				'*[data-ae_vis][data-ae_avat][aria-orientation]:not([aria-orientation="horizontal"]):not([aria-orientation="vertical"])'
			);
		}
	});
}
