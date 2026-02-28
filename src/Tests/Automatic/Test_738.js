import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {getBefore_FromStyles, getAfter_FromStyles} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage1_beforeAfter_fromStyles.js";
import {calcAccNamesForCertainElements} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_calcAccNamesDescriptionsForCertainElements.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-738
 * @returns {AutoTestShell} testShell
 */
export function test738() {
	aeKernel.addStage1MarkdownFunc("getBefore_FromStyles", getBefore_FromStyles);
	aeKernel.addStage1MarkdownFunc("getAfter_FromStyles", getAfter_FromStyles);
	aeKernel.addStage4MarkdownFunc("calcAccNamesForCertainElements", calcAccNamesForCertainElements);

	aeKernel.addAutomaticTest("738", {
		bestPractice:1352,
		testId:738,
		introduced: "2.11",
		mediaType: mediaTypes.WEB,
		description:"One or more fieldset elements, not intentionally hidden in the DOM and available to assistive technologies, has a legend which is not the first child of the fieldset.",
		metaText: "This fieldset element has a legend element but it is not the first child of the fieldset",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'fieldset[data-ae_vis][data-ae_avat]'
			);

			testShell.set_candidateSetNodesFunc(function() {
				var badNodes = [];
				var res = aeKernel.rootTestNode.querySelectorAll("fieldset[data-ae_vis][data-ae_avat]");
				
				for (var i = 0, len_res = res.length; i < len_res; i++) {
					var result = res[i];
					//Does the fieldset have a legend?
					if(result.querySelectorAll("legend").length>0){
						//Is the legend not the first child
						if(result.firstElementChild.tagName!="LEGEND"){
							badNodes.push(result);
						}
					}
				}
				return badNodes;
			});
			
			return testShell;
		}
	});
}
