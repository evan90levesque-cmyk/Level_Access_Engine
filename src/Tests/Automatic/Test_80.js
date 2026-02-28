import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-80
 * @returns {AutoTestShell} testShell
 */
export function test80() {
	aeKernel.addAutomaticTest("80", {
		bestPractice: 1626,
		testId: 80,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more dialog elements with an open attribute, excluding those with a role='dialog...' attribute and available to assistive technologies, has a role attribute set to a value that is not: 'alertdialog...'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to the text value: alertdialog; or the role attribute can be removed",
		metaTextDetail: "The role attribute value of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  This element's role attribute can be set to the text value: alertdialog; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'dialog[open]:not([data-ae_ar="null"]):not([data-ae_ar="dialog"])[data-ae_avat]',
				'dialog[open]:not([data-ae_ar="null"]):not([data-ae_ar="dialog"])[data-ae_avat]:not([data-ae_ar="alertdialog"])'
			);
		}
	});
}
