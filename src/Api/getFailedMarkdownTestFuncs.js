import {aeKernel} from "../Kernel/AEKernel.js";

/**
 * Public interface to the Access Engine Kernel object, to enable markdownFuncs_failedToRun to be collected
 */
export function getMarkdownFuncs_failedToRun() {
	return aeKernel.markdownFuncs_failedToRun;
};

/**
 * Public interface to the Access Engine Kernel object, to enable tests_failedToRun to be collected
 */
export function getTests_failedToRun() {
	return aeKernel.tests_failedToRun;
};