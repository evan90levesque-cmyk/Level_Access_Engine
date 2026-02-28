import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-298
 * @returns {AutoTestShell} testShell
 */
export function test298() {
	aeKernel.addAutomaticTest("298", {
		bestPractice:1626,
		testId:298,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more input type='button' elements, excluding those with a role='button' attribute, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
		metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: link | menuitem | menuitemcheckbox | menuitemradio | radio | switch | tab | combobox | option | treeitem; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'input[data-ae_vis][data-ae_avat][type="button"]:not([data-ae_ar="null"]):not([data-ae_ar="button"])',
				'input[data-ae_vis][data-ae_avat][type="button"]:not([data-ae_ar="null"]):not([data-ae_ar="button"]):not([data-ae_ar="link"]):not([data-ae_ar="menuitem"]):not([data-ae_ar="menuitemcheckbox"]):not([data-ae_ar="menuitemradio"]):not([data-ae_ar="option"]):not([data-ae_ar="radio"]):not([data-ae_ar="tab"]):not([data-ae_ar="switch"]):not([data-ae_ar="treeitem"]):not([data-ae_ar="combobox"])'
			);
		}
	});
}
