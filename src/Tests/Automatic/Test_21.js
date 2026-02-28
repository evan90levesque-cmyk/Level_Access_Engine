import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-21
 * @returns {AutoTestShell} testShell
 */
export function test21() {
	aeKernel.addAutomaticTest("21", {
		bestPractice:1626,
		testId:21,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assistive technologies, has an aria-live attribute that is not set to one of the following text values: 'off | polite | assertive'.",
		metaText: "This element's aria-live attribute should be set to one of the following text values: off | polite | assertive",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-live]',
				'*[data-ae_vis][data-ae_avat][aria-live]:not([aria-live="off"]):not([aria-live="polite"]):not([aria-live="assertive"])'
			);
		}
	});
}
