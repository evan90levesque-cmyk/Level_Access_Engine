import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-390
 * @returns {AutoTestShell} testShell
 */
export function test390() {
	aeKernel.addAutomaticTest("390", {
		bestPractice:361,
		testId:390,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more th elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, with a colspan attribute set to a value of '0'; or '2' or more, does not have a scope attribute set to a text value of 'colgroup'; or an id attribute set to a non-null value.",
		metaText: "This header cell does not have a scope attribute set to a text value of: colgroup; or alternatively an id attribute set to a non-null text value",
		fixType: "",
		testFunc: function() {
			return new AutoTestShell(
				'th[data-ae_vis][data-ae_avat][data-ae_ar="null"][colspan]:not([colspan="1"]):not([colspan=""])',
				'th[data-ae_vis][data-ae_avat][data-ae_ar="null"][colspan]:not([colspan="1"]):not([colspan=""]):not([scope="colgroup"]):not([id]), th[data-ae_vis][data-ae_avat][data-ae_ar="null"][colspan]:not([colspan="1"]):not([scope="colgroup"])[id=""]'
			);
		}
	});
}
