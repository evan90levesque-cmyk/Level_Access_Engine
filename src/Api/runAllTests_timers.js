import {aeKernel} from "../Kernel/AEKernel.js";
import {testTypes, mediaTypes} from "../Utils/aeUtils.js";
import {timer_api_shell} from "../Api/ApiUtils/timerAPIShell.js";

/**
 * We need to expose test_outcomes through the api, but not by importing and exposing aeKernel
 * Hence this step
 */
export let test_outcomes = aeKernel.test_outcomes;

/**
 * Returns variant 3 test result for all tests
 * @param {Number} testType
 * @param {function} callback
 * @returns {Object} The outcomes object holds results for each "fail" test that has instances in terms of "bp id, [array of failing node instances]", with test name as a key
 */
export function runAllTests_returnFailedNumbers_timers(testType = testTypes.AUTOMATIC, callback) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	test_outcomes                      = {};

	var processTest = function (test) {

		//This is a web API so only run tests of type WEB
		if(test.mediaType==mediaTypes.WEB){

			var testId = test.testId;
			try {
				var testFunc = test.testFunc();
				// needed to add this
				testFunc.rootTestNode = aeKernel.rootTestNode;
				var testRes = testFunc.getResult("numbers");
				if (testRes.outcome === "fail") {
					test_outcomes[testId] = testRes.numberOfIssues;
				}
			}
			catch (err) {
				aeKernel.tests_failedToRun[testId] = err; // for resilience
			}
		}
	};
	
	timer_api_shell(testType, processTest, callback)
}

/**
 * Returns variant 3 test result for all tests - tests are run asyncronously using timers so they are non-blocking
 * @param {Number} testType
 * @param {function} callback
 * @returns {Object} The outcomes object holds results for each "fail" test that has instances in terms of "bp id, [array of failing node instances]", with test name as a key
 */
export function runAllTests_returnInstances_timers(testType = testTypes.AUTOMATIC, callback) {
	aeKernel.markdownFuncs_failedToRun = {}; // for resilience
	aeKernel.tests_failedToRun         = {}; // for resilience
	test_outcomes                      = {};

	var processTest = function (test) {

		//This is a web API so only run tests of type WEB
		if(test.mediaType==mediaTypes.WEB){

			var outcome = [];
			var testId = test.testId;
			try {
				var testFunc = test.testFunc();
				// needed to add this
				testFunc.rootTestNode = aeKernel.rootTestNode;
				var testRes = testFunc.getResult("instances");
				if (testRes.outcome === "fail") {
					var len = outcome.length;
					outcome[len] = testId;
					outcome[len + 1] = testRes.instances;
					test_outcomes[testId] = outcome;
				}
			}
			catch (err) {
				aeKernel.tests_failedToRun[testId] = err; // for resilience
			}
		}
	};
	
	timer_api_shell(testType, processTest, callback)
}

export function test_stages(stageNumber) {
	aeKernel.markdownFuncs_failedToRun = []; // for resilience
	aeKernel.tests_failedToRun = []; // for resilience

	function stage0_capture_proxy() {
		return aeKernel.stage0_capture();
	}

	function stage1_capture_proxy() {
		return aeKernel.stage1_capture();
	}

	function stage2_capture_proxy() {
		return aeKernel.stage2_capture();
	}

	function stage3a_capture_proxy() {
		return aeKernel.stage3a_capture();
	}

	function stage3c_capture_proxy() {
		return aeKernel.stage3c_capture();
	}

	function stage3d_capture_proxy() {
		return aeKernel.stage3d_capture();
	}

	function stage3_capture_proxy() {
		return aeKernel.stage3_capture();
	}

	function stage4_capture_proxy() {
		return aeKernel.stage4_capture();
	}

	function stage5_capture_proxy() {
		return aeKernel.stage5_capture();
	}

	function stage6_capture_proxy() {
		return aeKernel.stage6_capture();
	}

	aeKernel.updateSuccess(null);

	const tasks = [];
	switch (stageNumber) {
		case "stage0":
			tasks.push(
				stage0_capture_proxy
			);
			break;
		case "stage1":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy
			);
			break;
		case "stage2":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy
			);
			break;
		case "stage3a":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy,
				stage3a_capture_proxy
			);
			break;
		case "stage3c":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy,
				stage3a_capture_proxy,
				stage3c_capture_proxy
			);
			break;
		case "stage3d":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy,
				stage3a_capture_proxy,
				stage3c_capture_proxy,
				stage3d_capture_proxy
			);
			break;
		case "stage3":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy,
				stage3a_capture_proxy,
				stage3c_capture_proxy,
				stage3d_capture_proxy,
				stage3_capture_proxy
			);
			break;
		case "stage4":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy,
				stage3a_capture_proxy,
				stage3c_capture_proxy,
				stage3d_capture_proxy,
				stage3_capture_proxy,
				stage4_capture_proxy
			);
			break;
		case "stage5":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy,
				stage3a_capture_proxy,
				stage3c_capture_proxy,
				stage3d_capture_proxy,
				stage3_capture_proxy,
				stage4_capture_proxy,
				stage5_capture_proxy
			);
			break;
		case "stage6":
			tasks.push(
				stage0_capture_proxy,
				stage1_capture_proxy,
				stage2_capture_proxy,
				stage3a_capture_proxy,
				stage3c_capture_proxy,
				stage3d_capture_proxy,
				stage3_capture_proxy,
				stage4_capture_proxy,
				stage5_capture_proxy,
				stage6_capture_proxy
			);
			break;
	}

	try {
		for (let i = 0; i < tasks.length; i++) {
			const task = tasks[i];
			if (!task()) {
				return null;
			}
		}
	} finally {
		if (aeKernel.isLiveDOMMarkedUp) {
			stage3_capture_proxy();
		}
	}

	aeKernel.updateSuccess();
	
	return aeKernel.rootTestNode;
}
