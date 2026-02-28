import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";
import {testUtil_ifDiff} from "../TestUtils/testUtil_ifDiff";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-745
 * @returns {AutoTestShell} testShell
 */
export function test745() {
	aeKernel.addGuidedAutomaticTest("745", {
		bestPractice: 3293,
		testId: 745,
		introduced: "2.11",
		mediaType: mediaTypes.IOS,
		description: "One or more Button, Switch, TextField, SecureTextField, SearchField, TextView, or Slider elements is less than 6 points away from (and may be overlapping) another element.",
		metaText: "This [[object]] is less than 6 points away from (and may be overlapping) another element",
		fixType: "",
		testFunc: function() {
			var cssScrollView = '[data-xmlnodetype="XCUIElementTypeScrollView"]';
			var cssLargeGroup = '[data-xmlnodetype="XCUIElementTypeButton"],[data-xmlnodetype="XCUIElementTypeSwitch"],[data-xmlnodetype="XCUIElementTypeTextField"],[data-xmlnodetype="XCUIElementTypeSecureTextField"],[data-xmlnodetype="XCUIElementTypeSearchField"],[data-xmlnodetype="XCUIElementTypeTextView"],[data-xmlnodetype="XCUIElementTypeSlider"]';
			// compute a CSS selector that is identical to cssLargeGroup, but prefixes each sub-selector with a scroll view (cssScrollView) using a space as a combinator;
			// this resulting CSS selector selects nodes we're interested in testing that are inside/descendants of scroll views
			var cssGroupToExcludeFromLargeGroup = cssScrollView + ' ' + cssLargeGroup.split(',').join(',' + cssScrollView + ' ');

			var testShell = new AutoTestShell(cssLargeGroup);
			testShell.set_candidateSetNodesFunc(function() {
				var bucketedNodesToTest = [];

				// for each scroll view, bucket all its descendant nodes that we want to test
				var scrollViewNodes = aeKernel.rootTestNode.querySelectorAll(cssScrollView);
				for (var i = 0; i < scrollViewNodes.length; i++) {
					var scrollViewNode = scrollViewNodes[i];
					bucketedNodesToTest.push(scrollViewNode.querySelectorAll(cssLargeGroup));
				}

				// bucket all nodes that we want to test that are not descendants of scroll views
				var nodesToTestNotInScrollView = testUtil_ifDiff(aeKernel.rootTestNode, [cssLargeGroup, cssGroupToExcludeFromLargeGroup]);
				bucketedNodesToTest.push(nodesToTestNotInScrollView);

				var badNodes = [];
				var ALLOWED_MARGIN = 3;  // equates to 6 points of separation between elements (3 + 3)

				for (i = 0; i < bucketedNodesToTest.length; i++) {
					var nodes = bucketedNodesToTest[i];

					var badNodeIndices = {};  // keep track of which nodes we flag so that we don't create duplicate violations

					for (var j = 0; j < nodes.length; j++) {
						if (badNodeIndices[j]) {
							// node1 has already been flagged
							continue;
						}

						for (var k = 0; k < nodes.length; k++) {
							if (j === k) {
								// don't compare a node to itself
								continue;
							}

							if (badNodeIndices[k]) {
								// node2 has already been flagged
								continue;
							}

							var node1 = nodes[j];
							var node1Top = parseInt(node1.style.top, 10);
							var node1Left = parseInt(node1.style.left, 10);
							var node1Width = parseInt(node1.style.width, 10);
							var node1Height = parseInt(node1.style.height, 10);
							var node1TopWithMargin = node1Top - ALLOWED_MARGIN;
							var node1LeftWithMargin = node1Left - ALLOWED_MARGIN;
							var node1RightWithMargin = node1Left + node1Width + ALLOWED_MARGIN;
							var node1BottomWithMargin = node1Top + node1Height + ALLOWED_MARGIN;

							var node2 = nodes[k];
							var node2Top = parseInt(node2.style.top, 10);
							var node2Left = parseInt(node2.style.left, 10);
							var node2Width = parseInt(node2.style.width, 10);
							var node2Height = parseInt(node2.style.height, 10);
							var node2TopWithMargin = node2Top - ALLOWED_MARGIN;
							var node2LeftWithMargin = node2Left - ALLOWED_MARGIN;
							var node2RightWithMargin = node2Left + node2Width + ALLOWED_MARGIN;
							var node2BottomWithMargin = node2Top + node2Height + ALLOWED_MARGIN;

							var isOverlapping = !(node1RightWithMargin <= node2LeftWithMargin || node1LeftWithMargin >= node2RightWithMargin || node1BottomWithMargin <= node2TopWithMargin || node1TopWithMargin >= node2BottomWithMargin);
							if (isOverlapping) {
								if (!badNodeIndices[j]) {
									badNodes.push(node1);
									badNodeIndices[j] = true;
								}
								if (!badNodeIndices[k]) {
									badNodes.push(node2);
									badNodeIndices[k] = true;
								}
							}
						}
					}
				}

				return badNodes;
			});
			return testShell;
		}
	});
}
