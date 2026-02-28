import {retrieveComputedCssStyles} from "../../../Utils/aeUtils.js";
import {logger} from "../../../Utils/Logger.js";
import {isRunningTooLong, getRuntimeExceededMessage} from "../../../Markdown/MarkdownUtils/mdUtils";

// import this file through:
// http://localhost:5103/BreakingAccessEngine/AccessEngine_Models/AccessEngine_Kernel/Tests/TestUtils/AutomaticUtils/MarkdownFuncsAddedThroughTests/stage4_addAEEventAtts.js

export let stage4_addAEEventAtts_errors = [];

/*
 * Pre-Testing: Finds elements that have events added in code behind and adds an "data-ae_ev" attribute
 * @returns {Number}
 */
export function addAEEventAtts(rootTestNode) {
	try {
		var els = rootTestNode.querySelectorAll("*[data-ae_styles*='events;'], *[onclick]:not([onclick='']), *[ondblclick]:not([ondblclick='']), *[onmouseout]:not([onmouseout='']), *[onmouseover]:not([onmouseover='']), *[onmousedown]:not([onmousedown='']), *[onmouseup]:not([onmouseup='']), *[onkeydown]:not([onkeydown='']), *[onkeypress]:not([onkeypress='']), *[onkeyup]:not([onkeyup='']), *[onblur]:not([onblur='']), *[onfocus]:not([onfocus=''])");
		
		for (var i=els.length; i--;) {
			if (isRunningTooLong()) {
				throw getRuntimeExceededMessage();
			}

			var el = els[i];
			var eventList = [];
			
			var originalInformation = retrieveComputedCssStyles(el);
			
			var events = originalInformation["events"];
			if (events) {
				eventList = eventList.concat(events.split(','));
			}
			
			var intrinsicEvents = ["onclick", "ondblclick", "onmouseout", "onmouseover", "onmousedown", "onmouseup", "onkeydown", "onkeypress", "onkeyup", "onblur", "onfocus"];
			for (var k=intrinsicEvents.length; k--;) {
				var intEv = intrinsicEvents[k];
				var evntVal = el.getAttribute(intEv);
				if (evntVal) {
					var shortIntEv = intEv.substr(2);
					if (eventList.indexOf(shortIntEv) === -1) {
						eventList.push(shortIntEv);
					}
				}
			}
			el.setAttribute("data-ae_ev", eventList.toString());
		}
		return rootTestNode;
	}
	catch (err) {
		logger.error(err);
		stage4_addAEEventAtts_errors.push("stage4_addAEEventAtts");
		return null;
	}
};