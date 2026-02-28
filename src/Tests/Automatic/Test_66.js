import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-66
 * @returns {AutoTestShell} testShell
 */
export function test66() {
	aeKernel.addAutomaticTest("66", {
		bestPractice:1626,
		testId:66,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description:"One or more head elements, has a role attribute and/or an aria attribute.",
		metaText: "This element has a role attribute and/or an aria attribute",
		metaTextDetail: "This {{tag-name}} has a role attribute and/or an aria attribute",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell(
				'head'
			);

			testShell.set_candidateSetNodesFunc(function() {
				var notProper = [];
				var head = this.querySelector('head');
				if (head.hasAttribute("role")) {
					notProper.push(head);
					return notProper;
				}
				var head_attributes = head.attributes;
				for (var i=head_attributes.length; i--;) {
					if (head_attributes[i].name.substring(0, 4).toLowerCase() === "aria") {
						notProper.push(head);
						return notProper;
					}
				}
				return notProper;
			});
			
			return testShell;
		}
	});
}
