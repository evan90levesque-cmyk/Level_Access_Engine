import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {testUtil_ariaRoleLookupTable} from "../../Tests/TestUtils/testUtil_ariaRoleLookupTable.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-412
 * @returns {AutoTestShell} testShell
 */
export function test412() {
	aeKernel.addAutomaticTest("412", {
		bestPractice:1626,
		testId:412,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more elements, not intentionally hidden in the DOM, has a role attribute set to an invalid aria role value.",
		metaText: "The role attribute value given to this element is not allowed, as it is not a valid aria role.",
		metaTextDetail: "The role attribute of {{data-ae_ar}} given to this {{tag-name}} is not allowed, as it is not a valid aria role.",
		fixType: {
			"fixType":1,
			"domSpec":false,
			"helperText":"Specify a valid aria role for this element.",
			"fix":{
				"role":null
			}
		},
		testFunc: function() {
			var testShell = new AutoTestShell(
				'*[data-ae_ar]:not([data-ae_ar="null"])[data-ae_vis]'
			);
			testShell.set_candidateSetNodesFunc(function() {
				var notProper = [];
				var res = aeKernel.rootTestNode.querySelectorAll('*[data-ae_ar]:not([data-ae_ar="null"])[data-ae_vis]');
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var result = res[i];
					var role=result.getAttribute("data-ae_ar").toLowerCase();
					if (testUtil_ariaRoleLookupTable[role] !== true) {
						//ENG-412 Exception made for span, div and p to allow role="text"
						var tag=result.tagName.toLowerCase();
						if (!(['span', 'div', 'p'].includes(tag) && role === 'text')) {
							notProper[notProper.length] = result;
						}
					}
				}
				return notProper;
			});
			return testShell;
		}
	});
}
