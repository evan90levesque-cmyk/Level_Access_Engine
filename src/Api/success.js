let success = null;

/**
 * Public interface to get whether or not Engine successfully finished its last DOM capturing (and, if analytics_runAllTests_returnInstances_JSON_timer was invoked, test execution) run without any errors.
 * Returns null if a run hasn't been started yet or if one is still in progress.
 * @returns {boolean}
 */
export function getSuccess() {
	return success;
}

/**
 * @param {boolean} newSuccess
 */
export function setSuccess(newSuccess) {
	success = newSuccess;
}
