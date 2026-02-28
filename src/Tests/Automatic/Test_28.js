import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-28
 * @returns {AutoTestShell} testShell
 */
export function test28() {
	aeKernel.addAutomaticTest("28", {
		bestPractice:1626,
		testId:28,
		introduced: "0.9",
		mediaType:mediaTypes.WEB,
		description:"One or more elements that has a role='scrollbar' attribute, not intentionally hidden in the DOM and available to assistive technologies, does not have an aria-controls attribute, an aria-orientation attribute, an aria-valuemax attribute, an aria-valuemin attribute and an aria-valuenow attribute.",
		metaText: "This element (role=scrollbar) must have all of the following attributes: aria-controls | aria-orientation | aria-valuemax | aria-valuemin | aria-valuenow",
		metaTextDetail: "This {{tag-name}} (role=scrollbar) must have all of the following attributes: aria-controls | aria-orientation | aria-valuemax | aria-valuemin | aria-valuenow",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]',
				`*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-controls]), 
				*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-orientation]), 
				*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-valuemax]), 
				*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-valuemin]), 
				*[data-ae_vis][data-ae_avat][data-ae_ar="scrollbar"]:not([aria-valuenow])`
			);
		}
	});
}
