import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-248
 * @returns {AutoTestShell} testShell
 */
export function test248() {
	aeKernel.addGuidedAutomaticTest("248", {
		bestPractice:410,
		testId:248,
		introduced: "1.0",
		mediaType: mediaTypes.WEB,
		description:"One or more frameset elements, not intentionally hidden in the DOM, has a cols attribute value that includes absolute units.",
		metaText: "This element has a cols attribute value in absolute units. Percentage based units need to be used",
		metaTextDetail: "This {{tag-name}} has a cols attribute value in absolute units. Percentage based units need to be used",
		fixType: "",
		testFunc: function() {
			var testShell = new AutoTestShell(
				'frameset[data-ae_vis][cols]:not([cols=""])'
			);
			
			testShell.set_candidateSetNodesFunc(function() {
				var framesetWithAbsolCols = [];
				var framesets = aeKernel.rootTestNode.querySelectorAll('frameset[data-ae_vis][cols]:not([cols=""])');
				for (var i = 0, len_framesets = framesets.length; i < len_framesets; i++) {
					var frameset = framesets[i];
					var cols = frameset.getAttribute("cols");
					if (cols) {
						var colValues = cols.split(/\s*,\s*/);
						for (var j=colValues.length; j--;) {
							var colValue = colValues[j].trim().toLowerCase();
							if (isNaN(colValue) === false || (colValue.indexOf("px") !== -1)) {
								framesetWithAbsolCols.push(frameset);
								break;
							}
						}
					}
				}
				return framesetWithAbsolCols;
			});
			
			return testShell;
		}
	});
}
