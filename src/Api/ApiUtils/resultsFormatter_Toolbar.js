import {removeAEAttributes, rgbToHex, testTypes} from "../../Utils/aeUtils.js";
import {getFingerprint} from "./getFingerprint";

/**
 * AMP data model
 * 0 instance_id - bind later
 * 1 module_id - bind later
 * 2 violation_id - bestPractice
 * 3 line_number - cannot supply
 * 4 element - outerHTML up to 3000 characters
 * 5 attribute - ??? Access Engine Test ID: initially plain English of Access Engine Test. getRichData() {} key id returns functions for getting text?
 * 6 test_result - VIOLATION_FAILED = 0; VIOLATION_PASSED = 1; VIOLATION_NOT_APPLICABLE = 2
 * 7 css cssSelector
 * @param instance
 * @param test
 * @param type
 * @param {Number} version
 * @returns {{}}
 */
export function formatOutcomeForToolbar(instance, test, type, version) {
	let outcome = {};
	//If version not specified set it to latest one, currently 2.
	let ver = version || 2;
	
	outcome.engineTestId   = test.testId;
	outcome.bestPracticeId = test.bestPractice;
	
	let note = test.metaText;
	if (note !== undefined) {
		outcome.attribute = note;
	}
	else {
		outcome.attribute = "";
	}

	let detail=test.metaTextDetail;
	//If there isn't a detailed attribute then use the static one
	if(detail==undefined){
		outcome.attributeDetail=outcome.attribute;
	}else{
		//If detail contains tokens, replace them with actual values
		// the replacement is done before we remove ae or la attributes - see removeAEAttributes below.
		if (detail.indexOf("{{") !== -1){
			// {{tag-name}} is replaced with the tag name
			detail = detail.replace("{{tag-name}}", instance.tagName);
			// {{optional_data-ae_ar}} is replaced with the aria role and some prefixing text, if applicable, otherwise it's replaced with an empty string
			detail = detail.replace("{{optional_data-ae_ar}}", (instance.getAttribute("data-ae_ar") !== "null") ? ` with a role of ${instance.getAttribute("data-ae_ar")}` : "");
			// {{attribute-name}} is replaced with the attribute-name value e.g. {{alt}} would be replaced with alt value
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
		outcome.attributeDetail = detail.substring(0, 2998);
	}

	let element     = removeAEAttributes(instance);
	outcome.element = element.outerHTML.substring(0, 2998);  // data-base takes string to 3000
	
	switch (type) {
		case testTypes.GUIDED_AUTOMATIC:
			outcome.testResult = 3;
			break;
		
		case testTypes.AUTOMATIC:
		case testTypes.ADVISORY:
		case testTypes.MANUAL:
		case testTypes.PREVIEW_MODE:
		default: // Everything besides GA should be considered a failure
			outcome.testResult = 0;
			break;
	}
	
	// outcome.path = instance.getAttribute("data-ae_uel");
	// change due to building in support for web components
	outcome.path = instance.getAttribute("data-ae_domuel");
	
	if (outcome.path === null) {
		outcome.path = instance.getAttribute("data-ae_uel");
	}

	// handles fixes
	let fixType = test.fixType;
	if (fixType !== undefined) {
		outcome.fixType     = fixType;
		//Special handling for fixType 4
		if(fixType.fixType==4){
			//No need for encoding or attNo in this case, always runs against html of whole page
			outcome.fingerprint={attNo:0,css:"html",version:2,encoding:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};
		}else{
			outcome.fingerprint = getFingerprint(element, (fixType.fixType !== undefined) ? fixType.fixType : -1, (fixType.domSpec !== undefined) ? fixType.domSpec : false, ver);
		}
	}
	else {
		outcome.fixType = "";
	}
	
	return outcome;
}
