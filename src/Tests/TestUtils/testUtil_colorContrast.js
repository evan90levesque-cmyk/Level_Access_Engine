/**
 * Defines which input types should be excluded from color contrast testing
 * @type {string[]}
 */
export const INPUT_TYPE_EXCLUSIONS_FOR_COLOR_CONTRAST_TESTING = [
	'checkbox',
	'color',
	'radio',
	'range',
	'hidden'
];

/**
 * used in colour contrast calc
 * @param {String} rgbCssStyle
 * @returns {Number[]}
 */
export function extractRGB(rgbCssStyle) {
	const rgb = rgbCssStyle.replace(/rgba?\(/gi, "").replace(")", "");
	const rgbArray = rgb.split(/, ?/);
	const alpha = (rgbArray.length >= 4) ? parseInt(rgbArray[3]) : null;
	return [parseInt(rgbArray[0]), parseInt(rgbArray[1]), parseInt(rgbArray[2]), alpha];
}

/**
 * used in colour contrast calc
 * @param {Node} rgbIntValue
 * @returns {Number}
 */
function calc_RGBvalues(rgbIntValue) {
	var x = 0;
	if (rgbIntValue <= 0.04045) {
		x = rgbIntValue / 12.92;
	}
	else {
		x = Math.pow(((rgbIntValue + 0.055) / 1.055), 2.4);
	}
	return x;
}

/**
 * used in colour contrast calc
 * @param {Node} rgbIntValues
 * @returns {Number}
 */
function cal_Luminance(rgbIntValues) {
	var R_sRGB = rgbIntValues[0]/255;
	var G_sRGB = rgbIntValues[1]/255;
	var B_sRGB = rgbIntValues[2]/255;
	
	var R = calc_RGBvalues(R_sRGB);
	var G = calc_RGBvalues(G_sRGB);
	var B = calc_RGBvalues(B_sRGB);
	
	return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}


/**
 * Calculates the Contrast ratio for a text node (nodeType 3) against the background color of the first ancestor with a non-transparent background.
 * @param {Node} nodeUnderTest
 * @returns {Number}
 */
function util_calc_ContrastRatio(nodeUnderTest) {
	// if background is rgba it means transparent, so you have to go back to parent that has a background that is not rgba
	var textColour = nodeUnderTest.getAttribute("data-ae_color");
	var text_extractedRGB = extractRGB(textColour);
	var L_text = cal_Luminance(text_extractedRGB);
	// gets ancestor with non-transparent color
	var backgroundColour = nodeUnderTest.getAttribute("data-ae_bgcolor");
	// get background from parent
	var bg_extractedRGB = extractRGB(backgroundColour);
	var L_bgColour = cal_Luminance(bg_extractedRGB);
	var contrastRatio = 0;
	if (L_text < L_bgColour) {
		contrastRatio = (L_bgColour + 0.05) / (L_text + 0.05);
	}
	else {
		contrastRatio = (L_text + 0.05) / (L_bgColour + 0.05);
	}
	return contrastRatio;
}

/**
 * Finds text nodes (nodeType 3) which contain text.
 * @returns {Array}
 */
function get_targetNodes(rootTestNode, relevantCssSelector) {
	const nodesOfInterest = [];

	const containsCharsOfInterest = (str) => {
		return str.match(/[0-9a-zA-Z]/g) !== null;
	};

	const nodes = rootTestNode.querySelectorAll(relevantCssSelector);
	for (let i = 0; i < nodes.length; i++) {
		const node = nodes[i];

		if (node.nodeType === 1 && node.tagName === "INPUT" && !INPUT_TYPE_EXCLUSIONS_FOR_COLOR_CONTRAST_TESTING.includes(node.type)) {
			if (node.value && containsCharsOfInterest(node.value)) {
				nodesOfInterest.push(node);
			}
		} else if (node.firstChild !== null) {
			let n = node.firstChild;
			do {
				if (n.nodeType === 3 && n.nodeValue && containsCharsOfInterest(n.nodeValue)) {
					nodesOfInterest.push(node);
					break;
				}
			} while (n = n.nextSibling)
		}
	}

	return nodesOfInterest;
}

/**
 * Finds the set of nodes with a text / background color ratio under the specified luminosity.
 * @returns {Node[]}
 */
export function testUtil_colorContrast(rootTestNode, relevantCssSelector, relLumRatio) {
	var nodesWithColourContrastIssues = [];
	// this is for text sizes - minimum contrast ratio for text that is less than 18 point (if not bold) and less than 14 point (if bold)
	// TODO: will need to check if bold in css
	
	// 1st - Text Node (i.e. rootTestNode.querySelector("#xTest").children.length === 0 && rootTestNode.querySelector("#xTest").firstChild !== null then firstChild.data.trim()!=""), then that is the target node
	// 2nd - if background is rgba it means transparent, so you have to go back to parent that has a background that is not rgba

	var textNodes = get_targetNodes(rootTestNode, relevantCssSelector);
	
	for (var i = 0, len_textNodes = textNodes.length; i < len_textNodes; i++) {
		var contrastRatio = util_calc_ContrastRatio(textNodes[i]);
		textNodes[i].setAttribute("data-ae_cr", Math.round(contrastRatio * 1000) / 1000);
		if (contrastRatio < relLumRatio) {
			nodesWithColourContrastIssues[nodesWithColourContrastIssues.length] = textNodes[i];
		}
	}
	return nodesWithColourContrastIssues;
}