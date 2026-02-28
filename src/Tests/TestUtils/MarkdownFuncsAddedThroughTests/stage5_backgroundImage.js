/**
 * Sets the data-ae_bckimg attribute to relevant value
 * @param {*} originalInformation
 */
import {logger} from "../../../Utils/Logger.js";

export function setBackgroundImage(originalInformation, node) {
	// addBackgroundImage
	try {
		var bgImage = originalInformation["background-image"];
		if (bgImage !== undefined) {
			return ["data-ae_bckimg", "true"];
		}
		else {
			return null;
		}
	}
	catch (err) {
		logger.error("stage5_setBackgroundImage", err);
		return null;
	}
}