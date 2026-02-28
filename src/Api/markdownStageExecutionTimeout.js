let markdownStageExecutionTimeout = null;  // this timeout is disabled by default
let didMarkdownStageExecutionTimeOut = false;

/**
 * Public interface to get the markdown stage execution timeout.
 * @returns {number}
 */
export function getMarkdownStageExecutionTimeout() {
	return markdownStageExecutionTimeout;
}

/**
 * Public interface to set the markdown stage execution timeout.
 * Set to null to disable timeout functionality.
 * @param {number} newMarkdownStageExecutionTimeout
 */
export function setMarkdownStageExecutionTimeout(newMarkdownStageExecutionTimeout) {
	markdownStageExecutionTimeout = newMarkdownStageExecutionTimeout;
}

/**
 * Public interface to get whether the markdown stage timeout occurred.
 * @returns {boolean}
 */
export function getDidMarkdownStageExecutionTimeOut() {
	return didMarkdownStageExecutionTimeOut;
}

/**
 * Internal interface to set whether the markdown stage timeout occurred.
 * @param {boolean} newDidMarkdownStageExecutionTimeOut
 */
export function setDidMarkdownStageExecutionTimeOut(newDidMarkdownStageExecutionTimeOut) {
	didMarkdownStageExecutionTimeOut = newDidMarkdownStageExecutionTimeOut;
}
