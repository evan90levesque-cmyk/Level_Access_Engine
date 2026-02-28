import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-296
 * @returns {AutoTestShell} testShell
 */
export function test296() {
	aeKernel.addAdvisoryAutomaticTest("296", {
		bestPractice:1626,
		testId:296,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more header elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'group'.",
		metaText: "This element has a role attribute that is not set to the following text value: group",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'header[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
				'header[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="group"])'
			);
		}
	});
}
