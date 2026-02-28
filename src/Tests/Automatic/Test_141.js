import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {mediaTypes} from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-141
 * @returns {AutoTestShell} testShell
 */
export function test141() {
	aeKernel.addAutomaticTest("141", {
		bestPractice: 401,
		testId: 141,
		introduced: "0.9",
		mediaType: mediaTypes.WEB,
		description: "One or more A elements, without an ARIA-assigned role, not intentionally hidden in the DOM and available to assistive technologies, has an href attribute set to an image file reference.",
		metaText: "This A element has an href attribute set to an image file reference",
		fixType: "",
		testFunc: function() {
			//Checks for various known image file endings.
			//Will ignore href with url parameters so that href="viewer.html?foo=bob.png" will not be flagged
			//Will not flag href="image.png?foo=bar" but we've not seen that in the wild
			return new AutoTestShell(
				"a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href]:not([href=''])",
				"a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.gif']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.GIF']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.jpg']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.JPG']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.jpeg']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.JPEG']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.bmp']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.BMP']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.png']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.PNG']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.tiff']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.TIFF']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.eps']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.EPS']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.pcx']:not([href*='?']):not([href*='.htm']), a[data-ae_ar='null'][data-ae_vis][data-ae_avat][href$='.PCX']:not([href*='?']):not([href*='.htm'])"
			);
		}
	});
}
