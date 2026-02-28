import {aeKernel} from "../Kernel/AEKernel.js";
import {testTypes} from "../Utils/aeUtils.js"

/**
 * Public interface to get a catalog of data about the tests
 */
export function getTestInfo(columns) {
	//If no columns then they want everything so set it to empty for robustness
	if(typeof columns==='undefined'){
		var columns={};
	}
	
	//If we are not passed any testTypes then accumulate a list of all of them
	//Except negative values as there are no AMP equivalents for those
	//In practice, there are only test types 4 and 5.
	if(columns.testType==null){
	    columns.testType=[];
	    for(var i in testTypes){
    	    if(testTypes[i]>-2){
       	    	columns.testType.push(testTypes[i]);
        	}
    	}
	}

	//If we are not passed any columns to display, show all of them
	if (columns.columns == null) {
		columns.columns = ["bestPractice", "metaText", "testType", "description", "fixType", "mediaType", "introduced"];
	}

	var results = {};

	//Accumulate all the available tests for each requested testType
	for(var k=0;k<columns.testType.length;k++){
	    var testType=columns.testType[k];
	    var tests=aeKernel.getTestsToRun(testType);

		//Walk through each test available for a particular testType
	    for(var i in tests){
			var row = {};
			//Accumulate the requested attributes for a particular test
        	for(var j=0;j<columns.columns.length;j++){
	            //Special handling of column testType as it's not actually an attribute of the test javascript struct
	            if(columns.columns[j]=="testType"){
	                row["testType"] = testType;
	            }else{
    	            row[columns.columns[j]]=tests[i][columns.columns[j]]
    	        }
    	    }
			results[tests[i]["testId"]] = row;
    	}
	}
	return results;
}