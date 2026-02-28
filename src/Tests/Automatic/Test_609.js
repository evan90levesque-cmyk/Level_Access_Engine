import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-609
 * @returns {AutoTestShell} testShell
 */
export function test609() {
	aeKernel.addAutomaticTest("609", {
		bestPractice:1626,
		testId:609,
		introduced: "2.6",
		mediaType: mediaTypes.WEB,
		description:"One or more elements with an aria-setsize attribute not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-posinset attribute.",
		metaText: "This element has an aria-setsize attribute but does not have an aria-posinset attribute",
		metaTextDetail: "This {{tag-name}} has an aria-setsize attribute but does not have an aria-posinset attribute",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][aria-setsize]',
				'*[data-ae_vis][data-ae_avat][aria-setsize]:not([aria-posinset])'
			);
		}
	});
}
