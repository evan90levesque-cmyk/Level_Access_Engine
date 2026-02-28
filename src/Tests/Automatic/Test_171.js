import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-171
 * @returns {AutoTestShell} testShell
 */
export function test171() {
	aeKernel.addAutomaticTest("171", {
		bestPractice:1626,
		testId:171,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='radio' elements, excluding those with a role='radio...' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'menuitemradio...'.",
		metaText: "This element has a role attribute that is not set to the following text value:  menuitemradio",
		metaTextDetail: "This {{tag-name}} with type=radio has a role attribute that is not set to the following text value:  menuitemradio",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="radio"]:not([data-ae_ar="null"]):not([data-ae_ar="radio"])',
				'input[data-ae_vis][data-ae_avat][type="radio"]:not([data-ae_ar="null"]):not([data-ae_ar="radio"])[role]:not([data-ae_ar="menuitemradio"])'
			);
		}
	});
}
