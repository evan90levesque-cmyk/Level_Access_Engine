import {aeKernel} from "../Kernel/AEKernel.js";

/**
 * Public interface to the Access Engine version
 */
export function getVersion() {
	return aeKernel.version;
}