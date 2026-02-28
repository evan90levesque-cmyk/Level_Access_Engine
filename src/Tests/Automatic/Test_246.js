import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {correctChildren} from "../../Tests/TestUtils/testUtil_correctChildren.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-246
 * @returns {AutoTestShell} testShell
 */
export function test246() {
	aeKernel.addAutomaticTest("246", {
		bestPractice:393,
		testId:246,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more ul elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, does not contain only li, script or template elements (without an ARIA-assigned role); or elements with a role='listitem' attribute; as direct child elements.",
		metaText: "This element should only contain li elements (without an ARIA-assigned role), script elements (without an ARIA-assigned role) or template elements (without an ARIA-assigned role); or elements with a role=listitem attribute; as direct child elements",
		metaTextDetail: "This {{tag-name}} should only contain li elements (without an ARIA-assigned role), script elements (without an ARIA-assigned role) or template elements (without an ARIA-assigned role); or elements with a role=listitem attribute; as direct child elements",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'ul[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				return correctChildren("ul", { LI: 1, SCRIPT: 1, TEMPLATE: 1 }, aeKernel.rootTestNode, null);
			});
			
			return testShell;
		}
	});
}