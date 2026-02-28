import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {addAEEventAtts} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_addAEEventAtts.js";
import {testUtil_ifDiff} from "../../Tests/TestUtils/testUtil_ifDiff.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * NOTE: inclusion of the area element in the na / largecss group is important, as area is by default display:none in Firefox.  Also, it is still seen by screen-reader users / keyboard users if it is display:none in Chrome.
 * Jira: https://ssbbart.atlassian.net/browse/ENG-153
 * @returns {AutoTestShell} testShell
 */
export function test153() {
	aeKernel.addStage4MarkdownFunc("addAEEventAtts", addAEEventAtts);

	aeKernel.addGuidedAutomaticTest("153", {
		bestPractice:359,
		testId:153,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more elements (excluding interaction elements - A elements with an href attribute set to a text value (without an ARIA-assigned role), area elements with an href attribute set to a text value (without an ARIA-assigned role), input elements (without an ARIA-assigned role), select elements (without an ARIA-assigned role), textarea elements (without an ARIA-assigned role), button elements (without an ARIA-assigned role), summary elements (without an ARIA-assigned role), audio elements (without an ARIA-assigned role), video elements(without an ARIA-assigned role)) attached to a click or keyboard event listener, not intentionally hidden in the DOM, do not have a tabindex attribute set to a value greater than, or equal to 0.",
		metaText: "This element does not have a tabindex attribute set to a value greater than, or equal to 0",
		metaTextDetail: "This {{tag-name}} does not have a tabindex attribute set to a value greater than, or equal to 0",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Select the tabindex number corresponding with the correct tab order for this element.",
			"fix":{
				"tabindex":null
			}
		},
		testFunc: function() {
			var testShell = new AutoTestShell(
				'body *[data-ae_vis][data-ae_ev*="click"], body *[data-ae_vis][data-ae_ev*="keypress"], body *[data-ae_vis][data-ae_ev*="keydown"], body *[data-ae_vis][data-ae_ev*="keyup"], area[data-ae_ev*="click"]:not([data-ae_ar="null"]), area[data-ae_ev*="keypress"]:not([data-ae_ar="null"]), area[data-ae_ev*="click"]:not([data-ae_ar="keydown"]), area[data-ae_ev*="click"]:not([data-ae_ar="keyup"])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var notKeyboardAcc = [];
				
				var cssLargeGroup = 'body *[data-ae_vis][data-ae_ev*="click"], body *[data-ae_vis][data-ae_ev*="keypress"], body *[data-ae_vis][data-ae_ev*="keydown"], body *[data-ae_vis][data-ae_ev*="keyup"], area[data-ae_ev*="click"]:not([data-ae_ar="null"]), area[data-ae_ev*="keypress"]:not([data-ae_ar="null"]), area[data-ae_ev*="click"]:not([data-ae_ar="keydown"]), area[data-ae_ev*="click"]:not([data-ae_ar="keyup"])';
				var cssGroupToExcludeFromLargeGroup = 'a[href]:not([href=""])[data-ae_vis], area[href]:not([href=""])[data-ae_ar="null"], input[data-ae_ar="null"][data-ae_vis], select[data-ae_ar="null"][data-ae_vis], textarea[data-ae_ar="null"][data-ae_vis], button[data-ae_ar="null"][data-ae_vis], summary[data-ae_ar="null"][data-ae_vis], audio[data-ae_ar="null"][data-ae_vis], video[data-ae_ar="null"][data-ae_vis]';
				var remainingGroup = testUtil_ifDiff(aeKernel.rootTestNode, [cssLargeGroup, cssGroupToExcludeFromLargeGroup]);
				
				for (var i=remainingGroup.length; i--;) {
					var el = remainingGroup[i];
					var tabIndex = el.getAttribute("tabindex");
					if ((tabIndex === null) || (tabIndex === "") || (isNaN(tabIndex) === true) || (tabIndex < 0)) {
						notKeyboardAcc.push(el);
					}
				}
				return notKeyboardAcc;
			});
			
			return testShell;
		}
	});
}
