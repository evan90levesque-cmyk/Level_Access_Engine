import {getParent} from "../../../Utils/aeUtils.js";
import {logger} from "../../../Utils/Logger.js";
import {extractRGB, INPUT_TYPE_EXCLUSIONS_FOR_COLOR_CONTRAST_TESTING} from "../testUtil_colorContrast";
import {retrieveComputedCssStyles} from "../../../Utils/aeUtils";

function isRelevantBackgroundColor(backgroundColor) {
	if (!backgroundColor) {
		return false;
	}

	if (!backgroundColor.startsWith("rgb")) {
		return false;
	}

	const alpha = extractRGB(backgroundColor)[3];
	if (alpha !== null && alpha <= 0) {
		return false;
	}

	return true;
}

/**
 * Sets the data-ae_bgcolor attribute to relevant background color
 * @param {{}} originalInformation
 * @param node
 */
export function setBackgroundColor(originalInformation, node) {
	try {
		let backgroundColor;

		const nodeBackgroundColor = originalInformation["background-color"];
		if (isRelevantBackgroundColor(nodeBackgroundColor)) {
			// use the target node's background color
			backgroundColor = nodeBackgroundColor;
		} else {
			// use the nearest relevant background color up the ancestry tree for the target node, if available
			for (let ancestorNode = node; ancestorNode = getParent(ancestorNode);) {
				let ancestorNodeBackgroundColor = ancestorNode.getAttribute("data-ae_bgcolor");
				if (ancestorNodeBackgroundColor) {
					// reuse the background color we've already assigned to this ancestor node
					backgroundColor = ancestorNodeBackgroundColor;
					break;
				} else {
					const ancestorNodeComputedStyles = retrieveComputedCssStyles(ancestorNode);
					ancestorNodeBackgroundColor = ancestorNodeComputedStyles["background-color"];
					if (isRelevantBackgroundColor(ancestorNodeBackgroundColor)) {
						backgroundColor = ancestorNodeBackgroundColor;
						break;
					}
				}
			}

			if (!backgroundColor) {
				// fall back to assuming a white background
				backgroundColor = "rgb(255, 255, 255)";
			}
		}

		return ["data-ae_bgcolor", backgroundColor];
	} catch (err) {
		logger.error("stage5_setBackgroundColor", err);
		return null;
	}
}

/**
 * Sets the data-ae_color attribute to relevant text color
 * @param {{}} originalInformation
 * @param node
 */
export function setTextColor(originalInformation, node) {
	try {
		// Text contrast
		if (hasText(node)) {
			const fontWeight = originalInformation["font-weight"];
			const fontSize = originalInformation["font-size"];
			if ((fontWeight !== undefined) && (fontSize !== undefined)) {				
				if ((fontWeight === "normal") || (parseInt(fontWeight) < 700)) {
					// if text is less that 18 point then 4.5:1
					// set color attributes for use in util_colourContrast
					return ["data-ae_color", originalInformation["color"]];
				}
				if ((fontWeight === "bold") || (parseInt(fontWeight) >= 700)) {
					// if text is less that 14 point then 4.5:1
					// set color attributes for use in util_colourContrast
					return ["data-ae_color", originalInformation["color"]];
				}
			}
		}

		return null;
	} catch (err) {
		logger.error("stage5_setTextColor", err);
		return null;
	}
}

function inPoints(fontSize) {
	let pt = 18;
	if (fontSize.indexOf("px") !== -1) {
		fontSize = parseFloat(fontSize.replace("px", ""));
		pt = 3/4 * fontSize;
	} else if (fontSize.indexOf("em") !== -1) {
		fontSize = parseFloat(fontSize.replace("em", ""));
		pt = 12 * fontSize;
	} else if (fontSize.indexOf("%") !== -1) {
		fontSize = parseFloat(fontSize.replace("%", ""));
		pt = fontSize/(100/12);
	}
	return pt;
}

/**
 * Calculates the relevant contrast ratio selector for text
 * @param {{}} originalInformation
 * @param node
 */
export function setRelevantContrastRatioForText(originalInformation, node) {
	try {
		// Text contrast
		if (hasText(node)) {
			const fontWeight = originalInformation["font-weight"];
			const fontSize = originalInformation["font-size"];
			if ((fontWeight !== undefined) && (fontSize !== undefined)) {
				const fontSizeInPoints = inPoints(fontSize);
				if ((fontWeight === "normal") || (parseInt(fontWeight) < 700)) {
					// if text is less that 18 point then 4.5:1
					// set color attributes for use in util_colourContrast
					if (fontSizeInPoints < 18) {
						return ["data-ae_ts", "4.5"];
					}
					// if text is 18 point or larger then 3:1
					else {
						return ["data-ae_ts", "3"];
					}
				}
				if ((fontWeight === "bold") || (parseInt(fontWeight) >= 700)) {
					// if text is less that 14 point then 4.5:1
					// set color attributes for use in util_colourContrast
					if (fontSizeInPoints < 14) {
						return ["data-ae_ts", "4.5"];
					}
					// if text is 14 point or larger then 3:1
					else {
						return ["data-ae_ts", "3"];
					}
				}
			}
		}

		return null;
	} catch (err) {
		logger.error("stage5_setRelevantContrastRatioForText", err);
		return null;
	}
}

/**
 * Returns true if the element has text, otherwise returns false.
 *
 * @param {Element} element
 * @return {boolean}
 */
function hasText(element) {
	const textContent = element.textContent;
	if (textContent && textContent.trim()) {
		return true;
	}

	const inputValueAttributeValue = (element.tagName === "INPUT" && !INPUT_TYPE_EXCLUSIONS_FOR_COLOR_CONTRAST_TESTING.includes(element.type)) ? element.value : null;
	if (inputValueAttributeValue && inputValueAttributeValue.trim()) {
		return true;
	}

	return false;
}