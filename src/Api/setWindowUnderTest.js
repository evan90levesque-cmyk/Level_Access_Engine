import {aeKernel} from "../Kernel/AEKernel.js";

/**
 * Public interface to the Access Engine Kernel object, to enable settings to be changed
 * @param {Window} testWind
 */
export function setWindowUnderTest(testWind) {
	aeKernel.setWindowUnderTest(testWind);
}