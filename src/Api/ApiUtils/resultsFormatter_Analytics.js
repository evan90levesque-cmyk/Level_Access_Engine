import {removeAEAttributes} from "../../Utils/aeUtils.js";
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
 * @returns {{}}
 */
export function formatOutcomeForAnalytics(instance, test, type) {
	var outcome  = {};
	
	outcome.t = test.testId;
	outcome.b = test.bestPractice;

	//Special handling for fixType 4
	if(test.fixType.fixType==4){
		//No need for encoding or attNo in this case, always runs against html of whole page
		outcome.css="html";
		outcome.attNo=0;
		outcome.version=2;
		outcome.encoding=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	}else{
		var fingerprint = getFingerprint(removeAEAttributes(instance), undefined, undefined, 2);
		outcome.css = fingerprint.css;
		outcome.attNo = fingerprint.attNo;
		outcome.encoding = fingerprint.encoding;
		outcome.version = fingerprint.version;
	}

	// Always automatic
	outcome.r = 0;

	outcome.uel = instance.getAttribute("data-ae_domuel");

	if(outcome.uel===null){
		outcome.uel=instance.getAttribute("data-ae_uel");
	}

	// handles fixes
	outcome.fixable=(test.fixType==""?0:1);

	return outcome;
}