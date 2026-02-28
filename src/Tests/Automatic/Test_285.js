import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-285
 * @returns {AutoTestShell} testShell
 */
export function test285() {
	aeKernel.addAutomaticTest("285", {
		bestPractice:1626,
		testId:285,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more button elements, excluding those with a role='button' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'checkbox | link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: checkbox | link |menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
		metaTextDetail: "The role of '{{data-ae_ar}}' given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: checkbox | link |menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'button[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="button"])',
				'button[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="button"]):not([data-ae_ar="checkbox"]):not([data-ae_ar="link"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="radio"]):not([data-ae_ar="switch"]):not([data-ae_ar="tab"]):not([data-ae_ar="combobox"]):not([data-ae_ar="option"]):not([data-ae_ar="treeitem"])'
			);
		}
	});
}
