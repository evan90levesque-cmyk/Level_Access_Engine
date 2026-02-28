import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
import {testUtil_ariaAttributeLookupTable} from "../../Tests/TestUtils/testUtil_ariaAttributeLookupTable.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-1066
 * @returns {AutoTestShell} testShell
 */
export function test1066() {
	aeKernel.addAutomaticTest("1066", {
		bestPractice:1626,
		testId:1066,
		introduced: "2.20",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM, has an attribute starting with 'aria-' that is not valid.",
		metaText: "This element has one or more aria attributes which are not valid.",
		metaTextDetail: "This {{tag-name}} has one or more aria attributes which are not valid.",
		fixType: "",
		testFunc: function() {
			//Have body as part of applicability as there shouldn't be aria atributes in the head
			const relevantCssSelector = 'body *[data-ae_vis]';
			const testShell = new AutoTestShell(
				relevantCssSelector
			);
			testShell.set_candidateSetNodesFunc(function() {
				const notProper = [];
				//Get all the visible nodes that have an aria- attribute. There currently is not a CSS way to do this
				const res = [...aeKernel.rootTestNode.querySelectorAll(relevantCssSelector)].filter(tag => [...tag.attributes].filter(({ name }) => name.startsWith("aria-")).length > 0);
				for (let i = 0, len_res = res.length; i < len_res; i++) {
					const result = res[i];
					//For each element that has aria attributes, verify all the aria-* attributes are on the allowed list
					//TODO Might be possible to combine this filter with the above one and eliminate the loop
					if([...result.attributes].filter(atr => atr.name.startsWith("aria-")).filter(atr => !testUtil_ariaAttributeLookupTable[atr.name]).length>0) {
						notProper[notProper.length] = result;
					}
				}
				return notProper;
			});
			return testShell;
		}
	});
}
