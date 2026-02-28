import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-396
 * @returns {AutoTestShell} testShell
 */
export function test396() {
	aeKernel.addAutomaticTest("396", {
		bestPractice: 464,
		testId: 396,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description: "One or more dd elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent.",
		metaText: "This element does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent",
		metaTextDetail: "This {{tag-name}} does not have a dl element (without an ARIA-assigned role) as a parent or a parent div's parent",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell(
				'dd[data-ae_ar="null"][data-ae_vis][data-ae_avat]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				return testUtil_ifDiff(aeKernel.rootTestNode, ['dd[data-ae_ar="null"][data-ae_vis][data-ae_avat]', 'dl[data-ae_ar="null"][data-ae_vis][data-ae_avat] > dd[data-ae_ar="null"][data-ae_vis][data-ae_avat], dl[data-ae_ar="null"][data-ae_vis][data-ae_avat] > div[data-ae_ar="null"][data-ae_vis][data-ae_avat] > dd[data-ae_ar="null"][data-ae_vis][data-ae_avat]']);
			});
			return testShell;
		}
	});
}
