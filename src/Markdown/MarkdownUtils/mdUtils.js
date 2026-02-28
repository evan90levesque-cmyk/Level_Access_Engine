import {getMarkdownStageExecutionTimeout, setDidMarkdownStageExecutionTimeOut} from '../../Api/markdownStageExecutionTimeout';

// CSS Block Styles indexed from:
// https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context
// (copied from CalcNames.js)
export const blockStyles = {
	display: ["block", "grid", "table", "flow-root", "flex"],
	position: ["absolute", "fixed"],
	float: ["left", "right", "inline"],
	clear: ["left", "right", "both", "inline"],
	overflow: ["hidden", "scroll", "auto"],
	"column-count": ["!auto"],
	"column-width": ["!auto"],
	"column-span": ["all"],
	contain: ["layout", "content", "strict"]
};

/**
 * Stage 5 markdown function, which sets data-ae_ar
 * @param {Element} node
 */
export function aeArFunc(node) {
	var ae_ar = node.getAttribute("data-ae_ar");
	if (ae_ar === null) {
		return "null";
	}
	return ae_ar;
}

/**
 * Stage 1 + 3b core markdown function, which detects css visibility rule
 * @param {{}} styleFromOriginal
 * @param {{}} originalElement
 */
export function visibilityFunc(styleFromOriginal, originalElement) {
	let visibility = styleFromOriginal["visibility"];
	if (visibility === "hidden") {
		return "visibility;hidden";
	}
	if (originalElement && originalElement.getAttribute("style") && originalElement.getAttribute("style").replace(/\s/g,'').includes("visibility:visible")) {
		return "visibility;visible";
	}
	return null;
}

// at the start of markdown stage execution, invoke resetStartTime() to start our stopwatch
// periodically during markdown stage execution, invoke isRunningTooLong() to check to see if cumulative execution is taking too long
// if it is, abort execution, otherwise continue until execution has finished or we hit the time limit--whichever comes first
// either way, at the end of the markdown stage execution, invoke clearStartTime() to stop our stopwatch
let startTime;
export function resetStartTime() {
	startTime = performance.now();
	setDidMarkdownStageExecutionTimeOut(false);
}
export function isRunningTooLong() {
	if (getMarkdownStageExecutionTimeout() && startTime) {
		const didMarkdownStageExecutionTimeOut = ((performance.now() - startTime) > getMarkdownStageExecutionTimeout());
		if (didMarkdownStageExecutionTimeOut) {
			setDidMarkdownStageExecutionTimeOut(didMarkdownStageExecutionTimeOut);
		}
		return didMarkdownStageExecutionTimeOut;
	} else {
		return false;
	}
}
export function clearStartTime() {
	startTime = null;
	setDidMarkdownStageExecutionTimeOut(false);
}
export function getRuntimeExceededMessage() {
	return `markdown runtime execution limit of ${getMarkdownStageExecutionTimeout()}ms exceeded`;
}
