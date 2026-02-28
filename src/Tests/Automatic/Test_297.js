import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-297
 * @returns {AutoTestShell} testShell
 */
export function test297() {
	aeKernel.addAutomaticTest("297", {
		bestPractice:1626,
		testId:297,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more iframe elements, not intentionally hidden in the DOM and available to assistive technologies, has a role attribute set to a value that is not: 'banner | complementary | contentinfo | form | main | navigation | search | application | document | img'.",
		metaText: "The role attribute value given to this element is not allowed.  This element's role attribute can be set to one of the following text values: banner | complementary | contentinfo | form | main | navigation | search | application | document | img; or the role attribute can be removed",
		metaTextDetail: "The role attribute value given to this {{tag-name}} is not allowed.  This element's role attribute can be set to one of the following text values: banner | complementary | contentinfo | form | main | navigation | search | application | document | img; or the role attribute can be removed",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'iframe[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"])',
				'iframe[data-ae_vis][data-ae_avat]:not([data-ae_ar="null"]):not([data-ae_ar="banner"]):not([data-ae_ar="complementary"]):not([data-ae_ar="contentinfo"]):not([data-ae_ar="form"]):not([data-ae_ar="main"]):not([data-ae_ar="navigation"]):not([data-ae_ar="search"]):not([data-ae_ar="application"]):not([data-ae_ar="document"]):not([data-ae_ar="img"])'
			);
		}
	});
}
