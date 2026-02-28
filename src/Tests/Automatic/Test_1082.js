import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://levelaccess.atlassian.net/browse/ENG-1082
 * @returns {AutoTestShell} testShell
 */
export function test1082() {
	aeKernel.addAutomaticTest("1082", {
		bestPractice:1626,
		testId:1082,
		introduced: "2.29",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='menuitemradio' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute.",
		metaText: "This element (role=menuitemradio) does not have an aria-checked attribute",
		metaTextDetail: "This {{tag-name}} (role=menuitemradio) does not have an aria-checked attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemradio"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemradio"]:not([aria-checked])'
			);
		}
	});
}
