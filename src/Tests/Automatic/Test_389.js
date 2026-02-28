import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-389
 * @returns {AutoTestShell} testShell
 */
export function test389() {
	aeKernel.addAutomaticTest("389", {
		bestPractice:361,
		testId:389,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more th elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, with a rowspan attribute set to a value of '0'; or '2' or more, does not have a scope attribute set to a text value of 'rowgroup'; or an id attribute set to a non-null value.",
		metaText: "This header cell does not have a scope attribute set to a text value of: rowgroup; or alternatively an id attribute set to a non-null text value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'th[data-ae_vis][data-ae_avat][data-ae_ar="null"][rowspan]:not([rowspan="1"]):not([rowspan=""])',
				'th[data-ae_vis][data-ae_avat][data-ae_ar="null"][rowspan]:not([rowspan="1"]):not([rowspan=""]):not([scope="rowgroup"]):not([id]), th[data-ae_vis][data-ae_avat][data-ae_ar="null"][rowspan]:not([rowspan="1"]):not([scope="rowgroup"])[id=""]'
			);
		}
	});
}
