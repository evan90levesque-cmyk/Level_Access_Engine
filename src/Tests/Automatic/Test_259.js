import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-259
 * @returns {AutoTestShell} testShell
 */
export function test259() {
	aeKernel.addAutomaticTest("259", {
		bestPractice:1626,
		testId:259,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='menuitemradio' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-checked attribute set to one of the text values: 'true | false'.",
		metaText: "This element (role=menuitemradio) needs an aria-checked attribute and that attribute needs to be the text value of either 'true' or 'false'",
		metaTextDetail: "This {{tag-name}} (role=menuitemradio) needs an aria-checked attribute and that attribute needs to be the text value of either 'true' or 'false'",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemradio"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="menuitemradio"]:not([aria-checked="true"]):not([aria-checked="false"])'
			);
		}
	});
}
