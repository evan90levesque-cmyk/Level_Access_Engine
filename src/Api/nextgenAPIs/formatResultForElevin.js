import { charFreq, getCssForFingerprint } from '../ApiUtils/getFingerprint';
import { removeAEAttributes, rgbToHex } from '../../Utils/aeUtils';
import { getCommonBlockData } from './getCommonBlockData';

export function formatResultForElevin(instance, test, shouldIncludeElement) {
	let numAttributes = 0;

	const instanceAttributes = instance.attributes;
	for (let i = 0; i < instanceAttributes.length; i++) {
		const attribute = instanceAttributes[i];
		const attributeName = attribute.name;

		if (!attributeName.startsWith("data-ae_")) {
			numAttributes++;
		}
	}

	const result = {};

	//Handle tests with no metaText defined - should not normally happen
	let note = test.metaText;
	if (note == undefined) {
		note = "";
	}

	//Put detailed description with tokens replaced into result
	let detail = test.metaTextDetail;
	//If there isn't a detailed attribute then use the static one
	if (detail == undefined) {
		result.attributeDetail = note;
	} else {
		//If detail contains tokens, replace them with actual values
		// the replacement is done before we remove ae or la attributes - see removeAEAttributes below.
		if (detail.indexOf("{{") !== -1) {
			// {{tag-name}} is replaced with the actual tag name
			detail = detail.replace("{{tag-name}}", instance.tagName);

			// {{optional_data-ae_ar}} is replaced with the aria role and some appended text, if applicable, otherwise it's replaced with an empty string
			detail = detail.replace("{{optional_data-ae_ar}}", (instance.getAttribute("data-ae_ar") !== "null") ? ` with a role of ${instance.getAttribute("data-ae_ar")}` : "");

			// {{attribute-name}} is replaced with actual attribute-name value e.g. {{alt}} would be replaced with alt value
			var pattern = /({{([^}}]+)}})/gi;
			var matches = detail.match(pattern);
			if (matches !== null) {
				for (var i = 0; i < matches.length; i++) {
					var attributeNameToken = matches[i];
					var attributeName = attributeNameToken.replace("{{", "").replace("}}", "");
					var attributeValue = instance.getAttribute(attributeName);
					if (attributeValue !== null) {
						if (attributeName === "data-ae_color" || attributeName === "data-ae_bgcolor") {
							// replace RGB color values with hex color values
							attributeValue = `${rgbToHex(attributeValue)} ${attributeValue}`;
						}
						detail = detail.replace(attributeNameToken, attributeValue);
					}
				}
			}
		}
		result.attributeDetail = detail.substring(0, 2998);
	}

	if (test.fixType && test.fixType.fixType === 4) {
		result.attNo = 0;
		result.css = "html";
		result.encoding = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
	} else {
		result.attNo = numAttributes;
		result.css = getCssForFingerprint(instance);
		result.encoding = charFreq(instance.innerHTML);
	}

	result.uel = instance.getAttribute("data-ae_domuel") || instance.getAttribute("data-ae_uel");
	result.timestamp = (new Date()).toISOString();

	const tagName = instance.getAttribute("data-ae_origTagName") || instance.tagName.toLowerCase();

	if (shouldIncludeElement && !['html', 'head', 'body'].includes(tagName)) {
		const element = removeAEAttributes(instance);
		result.element = element.outerHTML;
	}

	const commonBlockData = getCommonBlockData(instance);
	result.clusteringData = commonBlockData ? commonBlockData.clusteringData : null;

	return result;
}