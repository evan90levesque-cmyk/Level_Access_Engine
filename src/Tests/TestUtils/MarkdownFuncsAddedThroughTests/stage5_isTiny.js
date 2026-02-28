import {logger} from "../../../Utils/Logger.js";

export function setIsTiny(originalInformation, element) {
	try {
		if (element.hasAttribute("data-ae_tiny")) {
			// we've already determined this element is tiny
			return null;
		}

		const heightString = originalInformation["height"];
		const widthString = originalInformation["width"];
		const isTiny = (heightString === "1px" && widthString === "1px");
		if (!isTiny) {
			return null;
		}

		// element has just been determined to be tiny, so we now know all its descendents are tiny too

		// set 'tiny' attribute on all this element's descendents
		const descendentElements = element.querySelectorAll("*");
		for (let i = 0; i < descendentElements.length; i++) {
			const descendentElement = descendentElements[i];
			descendentElement.setAttribute("data-ae_tiny", "true");
		}

		// set 'tiny' attribute on element
		return ["data-ae_tiny", "true"];
	} catch (err) {
		logger.error("stage5_setIsTiny", err);
		return null;
	}
}
