import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-99
 * @returns {AutoTestShell} testShell
 */
export function test99() {
	aeKernel.addAutomaticTest("99", {
		bestPractice:464,
		testId:99,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more li elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); or element with a role set to the value 'list' as a parent.",
		metaText: "This element does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); or element with a role set to the value: list as a parent",
		metaTextDetail: "This {{tag-name}} does not have a ul element (without an ARIA-assigned role); ol element (without an ARIA-assigned role); or element with a role set to the value: list as a parent",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'li[data-ae_ar="null"][data-ae_vis][data-ae_avat]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				return testUtil_ifDiff(aeKernel.rootTestNode, ['li[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'ol[data-ae_ar="null"][data-ae_vis][data-ae_avat] > li[data-ae_ar="null"][data-ae_vis][data-ae_avat], ul[data-ae_ar="null"][data-ae_vis][data-ae_avat] > li[data-ae_ar="null"][data-ae_vis][data-ae_avat], *[data-ae_vis][data-ae_avat][data-ae_ar="list"] > li[data-ae_ar="null"][data-ae_vis][data-ae_avat]']);
			});
			return testShell;
		}
	});
}
