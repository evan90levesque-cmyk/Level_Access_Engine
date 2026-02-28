import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-79
 * datalist is display:none by default
 * @returns {AutoTestShell} testShell
 */
export function test79() {
	aeKernel.addAdvisoryAutomaticTest("79", {
		bestPractice:1626,
		testId:79,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more dialog elements with an open attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to the value: 'dialog...'.",
		metaText: "This element has a redundant role attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'dialog[data-ae_vis][data-ae_avat][open]',
				'dialog[data-ae_vis][data-ae_avat][open][data-ae_ar="dialog"]'
			);
		}
	});
}
