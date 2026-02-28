import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-445
 * @returns {AutoTestShell} testShell
 */
export function test445() {
	aeKernel.addGuidedAutomaticTest("445", {
		bestPractice:1871,
		testId:445,
		introduced: "2.1",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM and available to assitive technologies were found to have a role set to application.",
		metaText: "Role of 'application' on this element is usually inappropriate",
		metaTextDetail: "Role of 'application' on this {{tag-name}} is usually inappropriate",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat][role]',
				'*[data-ae_vis][data-ae_avat][role="application"]'
			);
		}
	});
}
