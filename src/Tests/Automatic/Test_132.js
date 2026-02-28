import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-132
 * @returns {AutoTestShell} testShell
 */
export function test132() {
	aeKernel.addAutomaticTest("132", {
		bestPractice:1626,
		testId:132,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements that has a role='slider' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute.",
		metaText: "This element (role=slider) must have all of the following attributes: aria-valuemax | aria-valuemin | aria-valuenow",
		metaTextDetail: "This {{tag-name}} (role=slider) must have all of the following attributes: aria-valuemax | aria-valuemin | aria-valuenow",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]',
				'*[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([aria-valuemax]), *[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([aria-valuemin]), *[data-ae_vis][data-ae_avat][data-ae_ar="slider"]:not([aria-valuenow])'
			);
		}
	});
}
