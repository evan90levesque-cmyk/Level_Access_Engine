import {aeKernel} from "../../Kernel/AEKernel.js";
import {AutoTestShell} from "../../Models/AutoTestShell.js";
import { mediaTypes } from "../../Utils/aeUtils.js";
/**
 * Jira: https://ssbbart.atlassian.net/browse/ENG-740
 * @returns {AutoTestShell} testShell
 */
export function test740() {
	aeKernel.addAutomaticTest("740", {
		bestPractice:1962,
		testId:740,
		introduced: "2.11",
		mediaType:mediaTypes.ANDROID,
		description:"One or more Button, CheckBox, DatePicker, EditText, ImageView, RadioButton, RadioGroup, SearchView, Switch, ToggleButton, TimePicker, or VideoView elements is not focusable.",
		metaText: "This [[object]] is not focusable. The element may not be accessible by assistive technology.",
		fixType:"",
		testFunc: function() {
			return new AutoTestShell(
				'*[data-ae_vis][data-ae_avat]',

				//Button; CheckBox; DatePicker; EditText; ImageView; RadioButton; RadioGroup; SearchView; Switch; ToggleButton; TimePicker; VideoView.
				'*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.Button"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.CheckBox"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.DatePicker"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.EditText"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.ImageView"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.RadioButton"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.RadioGroup"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.SearchView"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.Switch"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.ToggleButton"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.TimePicker"][disabled],*[data-ae_vis][data-ae_avat][data-xmlnodetype="android.widget.VideoView"][disabled]'
			);
		}
	});
}
