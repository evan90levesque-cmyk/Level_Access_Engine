import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-101
 * @returns {AutoTestShell} testShell
 */
export function test101() {
	aeKernel.addAutomaticTest("101", {
		bestPractice:429,
		testId:101,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "The root html element, excluding root elements in iframes, does not have a lang attribute",
		metaText: "This element does not have a lang attribute",
		metaTextDetail: "This {{tag-name}} does not have a lang attribute",
		fixType: {
			"fixType":4,
			"domSpec":false,
			"helperText":"Enter the appropriate language value for the page.",
			"fix":{
				"lang":null
			}
		},
		testFunc: function() {
			
			// head is used as rootTestNode is html - so cannot be reached by querySelector
			// head is a good indicator that an entire page has been selected - with regard to nodeCapture
			
			var testShell = new AutoTestShell('head');
			const inIframeSelector = 'html[data-ae_iniframe], head[data-ae_iniframe], body[data-ae_iniframe]'

			testShell.set_candidateSetNodesFunc(function() {
				var notProper = [];
				if (!this.querySelector(inIframeSelector) && aeKernel.rootTestNode.hasAttribute("lang") === false) {
					notProper.push(aeKernel.rootTestNode);
				}
				return notProper;
			});
			
			return testShell;
		}
	});
}
