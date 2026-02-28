import {aeKernel} from "../../Kernel/AEKernel.js";

export function ast_getTestById(testId) {
	return aeKernel.getTestToRun(testId);
}
