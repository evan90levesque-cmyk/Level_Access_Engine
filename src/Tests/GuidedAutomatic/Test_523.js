import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import {identifiesDataTables} from "../../Tests/TestUtils/MarkdownFuncsAddedThroughTests/stage4_identifiesDataTables.js";
import { mediaTypes } from "../../Utils/aeUtils.js";

/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-523
 * @returns {AutoTestShell} testShell
 */
export function test523() {
	aeKernel.addStage4MarkdownFunc("identifiesDataTables", identifiesDataTables);

	aeKernel.addGuidedAutomaticTest("523", {
		bestPractice: 1775,
		testId: 523,
		introduced: "2.3",
		mediaType: mediaTypes.WEB,
		description: "One or more table elements seemingly used to layout content, rather than present data, not intentionally hidden in the DOM and available to assistive technologies, does not have a role='presentation' attribute.",
		metaText: "This table appears to be used for layout but does not have a role of presentation",
		fixType:{
			"fixType": 1,
			"domSpec": false,
			"helperText": 'Select "Save" to add the role of "presentation" if this table is used for layout purposes, or "Cancel" if the fix should not be applied.',
			"fix": {
				"role": "presentation"
			}
		},
		testFunc: function() {
			return new AutoTestShell(
				'table[data-ae_vis][data-ae_avat]:not([data-ae_dtab])',
				'table[data-ae_vis][data-ae_avat]:not([data-ae_dtab]):not([data-ae_ar="presentation"])'
			);
		}
	});
}
