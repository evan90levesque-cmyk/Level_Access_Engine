import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-726
 * @returns {AutoTestShell} testShell
 */
export function test726() {
	aeKernel.addAutomaticTest("726", {
		bestPractice: 456,
		testId: 726,
		introduced: "2.15",
		mediaType: mediaTypes.WEB,
		description: "One or more IFRAME elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has a src attribute set to an image file reference.",
		metaText: "This element has a src attribute set to an image file reference",
		metaTextDetail: "This {{tag-name}} has a src attribute set to an image file reference",
		fixType: "",
		testFunc: function() {
			//Checks for various known image file endings.
			//Will ignore src with url parameters so that src="viewer.html?foo=bob.png" will not be flagged
			//Will not flag src="image.png?foo=bar" but we've not seen that in the wild
			return new AutoTestShell(
				"iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src]:not([src=''])",
				"iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.gif']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.GIF']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.jpg']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.JPG']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.jpeg']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.JPEG']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.bmp']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.BMP']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.png']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.PNG']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.tiff']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.TIFF']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.eps']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.EPS']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.pcx']:not([src*='?']):not([src*='.htm']), iframe[data-ae_ar='null'][data-ae_vis][data-ae_avat][src$='.PCX']:not([src*='?']):not([src*='.htm'])"
			);
		}
	});
}
