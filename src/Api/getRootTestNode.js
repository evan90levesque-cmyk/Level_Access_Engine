import {aeKernel} from "../Kernel/AEKernel.js";
import {getCommonBlockData} from "./nextgenAPIs/getCommonBlockData";

/**
 * Public interface to the Access Engine Kernel object, to enable settings to be changed
 */
export function getRootTestNode() {
	if (aeKernel.rootTestNode) {
		aeKernel.rootTestNode.getCommonBlockData = getCommonBlockData;
	}

	return aeKernel.rootTestNode;
}