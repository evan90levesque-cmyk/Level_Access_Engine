import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-490
 * @returns {AutoTestShell} testShell
 */
export function test490() {
	aeKernel.addGuidedAutomaticTest("490", {
		bestPractice:551,
		testId:490,
		introduced: "2.2",
		mediaType: mediaTypes.WEB,
		description:"Two or more label elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, have a for attribute with a non-unique value.",
		metaText: "This label element has a for attribute set to a non-unique value, which is not well supported by assistive technologies.",
		metaTextDetail: "This label element has a for attribute set to a non-unique value of {{for}}, which is not well supported by assistive technologies.",
		fixType: "",
		testFunc: function() {
			const testShell = new AutoTestShell();

			const relevantCssSelector = 'label[data-ae_vis][data-ae_avat][data-ae_ar="null"][for]:not([for=""])';

			testShell.set_applicabilityTest(function() {
				return (this.applicableNodesFunc(this._applicableNodesFuncArgs).length > 0);
			});

			testShell.set_applicableNodesFunc(function() {
				// if there is more than 1 label element then the test is applicable
				const applicableNodes = this.querySelectorAll(relevantCssSelector);
				return (applicableNodes.length > 1) ? applicableNodes : [];
			});

			testShell.set_candidateSetNodesFunc(function() {
				var notUnique = [];
				var nodeStore = {};
				var res = this.querySelectorAll(relevantCssSelector);
				if(res.length>1){
					for (var i = 0; i < res.length; i++) {
						var n = res[i];
						var thefor = n.getAttribute("for");
						try {
							nodeStore[thefor].push(n);
						}
						catch(err) {
							nodeStore[thefor] = [];
							nodeStore[thefor].push(n);
						}
					}
					
					var keys = Object.keys(nodeStore);
					for (var j = 0; j < keys.length; j++) {
						// collecting all duplicated keys
						var nArray = nodeStore[keys[j]];
						if (nArray.length > 1) {
							notUnique = notUnique.concat(nArray)
						}
					}
				}
				return notUnique;
			});
			
			return testShell;
		}
	});
}
