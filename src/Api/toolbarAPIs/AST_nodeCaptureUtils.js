import {stage0_markDown_liveDOM_domuels} from "../../Markdown/stage0_markDown_liveDOM_domuels";
import {stage3_cleanUpLiveDOM} from "../../Markdown/stage3_cleanUp_liveDOM";

/**
 * Returns JSON stringified array of nmr tests with content to check
 * For use with ACCESS Assistant
 * @returns {Array} of nmr tests with content to check
 */
export function ast_nodeCapture_markdown() {
	stage0_markDown_liveDOM_domuels(window.document);
}

/**
 * Returns JSON stringified array of nmr tests with content to check
 * For use with ACCESS Assistant
 * @returns {Array} of nmr tests with content to check
 */
export function ast_nodeCapture_cleanup() {
	stage3_cleanUpLiveDOM(window.document);
}