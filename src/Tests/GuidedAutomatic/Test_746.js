import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-746
 * @returns {AutoTestShell} testShell
 */
export function test746() {
	aeKernel.addGuidedAutomaticTest("746", {
		bestPractice: 1918,
		testId: 746,
		introduced: "2.11",
		mediaType: mediaTypes.IOS,
		description: "One or more Button, Switch, TextField, SecureTextField, SearchField, TextView, or Slider elements is less than 44 points in height and/or width.",
		metaText: "This [[object]] is less than 44 points in height and/or width",
		fixType: "",
		testFunc: function() {
			var cssSelector = '[data-xmlnodetype="XCUIElementTypeButton"],[data-xmlnodetype="XCUIElementTypeSwitch"],[data-xmlnodetype="XCUIElementTypeTextField"],[data-xmlnodetype="XCUIElementTypeSecureTextField"],[data-xmlnodetype="XCUIElementTypeSearchField"],[data-xmlnodetype="XCUIElementTypeTextView"],[data-xmlnodetype="XCUIElementTypeSlider"]';
			var testShell = new AutoTestShell(cssSelector);
			testShell.set_candidateSetNodesFunc(function() {
				var bad = [];
				var nodes = aeKernel.rootTestNode.querySelectorAll(cssSelector);
				for (var i = 0; i < nodes.length; i++) {
					var node = nodes[i];
					if (node.getAttribute('data-xmlnodetype') === 'XCUIElementTypeSearchField') {
						// XCUIElementTypeSearchField elements are wrapped in XCUIElementTypeOther elements that define the focus area for the search field,
						// so when determining if a search field is large enough, use the XCUIElementTypeOther element's size, not the size of the XCUIElementTypeSearchField inside of it
						node = node.parentNode;
					}

					var width = parseInt(node.style.width, 10);
					var height = parseInt(node.style.height, 10);
					if (width < 44 || height < 44) {
						bad.push(node);
					}
				}
				return bad;
			});
			return testShell;
		}
	});
}
