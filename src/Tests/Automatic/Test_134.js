import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-134
 * @returns {AutoTestShell} testShell
 */
export function test134() {
	aeKernel.addAutomaticTest("134", {
		bestPractice:1626,
		testId:134,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='combobox' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-expanded attribute set to one of the text values: 'true | false'.",
		metaText: "This element's (role=combobox) aria-expanded attribute should be set to one of the text values: true | false",
		metaTextDetail: "This {{tag-name}}'s (role=combobox) aria-expanded attribute should be set to one of the text values: true | false",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="combobox"][aria-expanded]:not([aria-expanded="true"]):not([aria-expanded="false"])'
			);
		}
	});
}
