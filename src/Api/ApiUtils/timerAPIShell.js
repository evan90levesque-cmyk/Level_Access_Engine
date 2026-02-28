import {aeKernel} from "../../Kernel/AEKernel.js";

/**
 * Returns variant 3 test result for all tests
 * @param {Number} testType
 * @param {function} processTest
 * @param {function} callback
 * @returns {Object} The outcomes object holds results for each "fail" test that has instances in terms of "bp id, [array of failing node instances]", with test name as a key
 */
export function timer_api_shell(testType, processTest, callback) {
	function runTestsWithTimers() {
		// deal with tests
		// extract tests in batches of 8
		const tests = aeKernel.getTestsToRun(testType);
		const testIds = Object.keys(tests);
		const testsLength = testIds.length;
		let batchOne_iterations = testsLength % 8;
		let remainingIterations = Math.floor(testsLength / 8);
		let i = testsLength - 1;
		
		function timer_tests() {
			// deal with remainders first e.g. if number of tests is not perfectly divisible by 8
			if (batchOne_iterations > 0) {
				while (batchOne_iterations) {
					processTest(tests[testIds[i--]]);
					batchOne_iterations--;
				}
				setTimeout(timer_tests, 25);
			}
			// run remaining tests in batches of 8
			if ((batchOne_iterations === 0) && (remainingIterations > 0)) {
				processTest(tests[testIds[i--]]);
				processTest(tests[testIds[i--]]);
				processTest(tests[testIds[i--]]);
				processTest(tests[testIds[i--]]);
				processTest(tests[testIds[i--]]);
				processTest(tests[testIds[i--]]);
				processTest(tests[testIds[i--]]);
				processTest(tests[testIds[i--]]);
				remainingIterations--;
				if (remainingIterations > 0) {
					setTimeout(timer_tests, 25);
				} else {
					aeKernel.updateSuccess();
					if (callback) {
						callback();
					}
				}
			}
		}
		
		if ((batchOne_iterations > 0) && (remainingIterations === 0)) {
			// there are less than 8 tests
			while (batchOne_iterations) {
				processTest(tests[testIds[i--]]);
				batchOne_iterations--;
			}

			aeKernel.updateSuccess();
			if (callback) {
				callback();
			}
		} else {
			// there are more than 8 tests
			setTimeout(timer_tests, 25);
		}
	}
	
	// proxy functions needed otherwise object variables become divorced 
	
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
	
	const tasks = [
		stage0_capture_proxy,
		stage1_capture_proxy,
		stage2_capture_proxy,
		stage3a_capture_proxy,
		stage3c_capture_proxy,
		stage3d_capture_proxy,
		stage3_capture_proxy,
		stage4_capture_proxy,
		stage5_capture_proxy,
		stage6_capture_proxy,
		runTestsWithTimers
	];
	
	// deal with tasks
	
	function timer_tasks() {
		try {
			const task = tasks.shift();
			if (task() && tasks.length > 0) {
				setTimeout(timer_tasks, 25);
			}
		} finally {
			if (aeKernel.isLiveDOMMarkedUp) {
				stage3_capture_proxy();
			}
		}
	}

	setTimeout(timer_tasks, 25);
	
	return 1;
}