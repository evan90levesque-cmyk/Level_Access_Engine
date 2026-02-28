import {cloneThisNode} from "../../Utils/aeUtils.js";

/**
 * Finds the set of heading nodes (hx, or role="heading") within a node defined by a CSS selector that are not properly labelled.
 * @param {String} cssSelector
 * @returns {Array}
 */
export function testUtil_approNestedHeadings(rootTestNode, cssSelector) {
	var res = rootTestNode.querySelectorAll(cssSelector);
	var incorrectlyNestedHeaders = [];
	for (var i = 0, len_res = res.length; i < len_res; i++) {
		var clone = cloneThisNode(res[i], true);
		// Also we need to include <div role="heading" aria-level="x"> what happens if aria-level is not there?
		var headers = clone.querySelectorAll("h1[data-ae_ar='null'][data-ae_vis]:not(:empty), h2[data-ae_ar='null'][data-ae_vis]:not(:empty), h3[data-ae_ar='null'][data-ae_vis]:not(:empty), h4[data-ae_ar='null'][data-ae_vis]:not(:empty), h5[data-ae_ar='null'][data-ae_vis]:not(:empty), h6[data-ae_ar='null'][data-ae_vis]:not(:empty), *[data-ae_ar='heading'][data-ae_vis][aria-level]:not(:empty)");
		var headersAsInts = [];
		// turn header text values into a stack of integers
		for (var k = 0, len_headers = headers.length; k < len_headers; k++) {
			var ariaLevel = headers[k].getAttribute("aria-level");
			if (ariaLevel !== null) {
				headersAsInts[headersAsInts.length] = parseInt(ariaLevel);
			}
			else {
				headersAsInts[headersAsInts.length] = parseInt(headers[k].tagName[1]);
			}
		}
		// process the heading levels as integers
		var numHeads = headersAsInts.length;
		if (numHeads === 0) {
			incorrectlyNestedHeaders[incorrectlyNestedHeaders.length] = res[i];
			return incorrectlyNestedHeaders;
		}
		if (numHeads === 1) {
			if (headersAsInts[0] !== 1) {
				incorrectlyNestedHeaders[incorrectlyNestedHeaders.length] = res[i];
				return incorrectlyNestedHeaders;
			}
		}
		if (numHeads > 1) {
			for (var m = 0; m < numHeads; m++) {
				var currHeadNum = headersAsInts[m];
				if (m === 0) {
					if (headersAsInts[m] !== 1) {
						incorrectlyNestedHeaders[incorrectlyNestedHeaders.length] = res[i];
						return incorrectlyNestedHeaders;
					}
				}
				else if ((currHeadNum !== 1) && ((currHeadNum <= headersAsInts[m - 1])||(currHeadNum === headersAsInts[m - 1] + 1))) {
					return [];
				}
				else {
					incorrectlyNestedHeaders[incorrectlyNestedHeaders.length] = res[i];
					return incorrectlyNestedHeaders;
				}
			}
		}
	}
	return incorrectlyNestedHeaders;
};