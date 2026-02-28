import { testTypes, getOriginalBoundsFromStyle } from "../../Utils/aeUtils.js";

/**
* Returns opening xml tag only of instance with original attributes + values restored
* @returns {String}
*/
export function origAndroidXmlFromHTML(node) {
	var origXml = "<" + node.getAttribute("data-xmlnodetype") + ' resource-id="';
	if(node.hasAttribute("data-resource-id")){
		origXml+= node.getAttribute("data-resource-id").replace(/"/g, '\\"');
	}
	origXml+='" ';

	//Only process xmlattmapping if it actually exists
	if(node.hasAttribute("data-xmlattmapping")){
		var attMappingPieces = node.getAttribute("data-xmlattmapping").split(";");
		for (var i = 0, len_mapping = attMappingPieces.length; i < len_mapping; i++) {
			var attSet = attMappingPieces[i];
			if (attSet.indexOf(":") !== -1) {
				var atts = attSet.split(":");
				var xmlAtt = atts[0]; // gets html attribute
				var htmlAtt = atts[1]; // gets html attribute
				var xmlAttValue = node.getAttribute(htmlAtt);
				if (xmlAttValue !== null) {
					origXml = origXml + xmlAtt + '="' + xmlAttValue.replace(/"/g, '\\"') + '" ';
				}
			}
		}
	}

	var bounds = getOriginalBoundsFromStyle(node.getAttribute("style"));
	origXml = origXml + 'bounds="[' + bounds.left + ',' + bounds.top + '][' + bounds.right + ',' + bounds.bottom + ']" ';
	// don't close the tag as it could be self-closing or not self-closing.
	return origXml.trimRight() + "...";
}

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
 * @returns {{}}
 */
export function formatOutcomeForAccessContinuumMobileAndroid(instance, test, type) {
	var outcome  = {};
	
	outcome.engineTestId   = test.testId;
	outcome.bestPracticeId = test.bestPractice;

	// HTML from XML will contain the mapping of xml attributes to HTML attributes used when creating the HTML from the XML
	// original xml component name is in data-xmlNodeType attribute
	// mapping is in data-xmlAttMapping attribute
	// mapping data looks like label:aria-label;name:src;width:css-width;height:css-height;x:css-top;y:css-left;
	// So we just have to reverse the mapping

	let element;
	if (instance.hasAttribute("data-xmlnodetype")) {
		element = origAndroidXmlFromHTML(instance).substring(0, 2998);  // data-base takes string to 3000
	} else {
		element = null;
	}
	outcome.element = element;
	
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

	// Note - might want XPATH - but xpath is costly to generate; and to use
	// outcome.path = "";

	var note = test.metaText;

	let attributeDetail;
	if (note !== undefined) {
		if (instance.hasAttribute("data-xmlnodetype")) {
			attributeDetail = note.replace("[[object]]", instance.getAttribute("data-xmlnodetype").split("android.widget.")[1]);
		} else {
			attributeDetail = note;
		}
	} else {
		attributeDetail = "";
	}
	outcome.attributeDetail = attributeDetail;

	return outcome;
}


