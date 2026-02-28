import {testTypes, cloneThisNode} from "../Utils/aeUtils.js";
import {stage0_markDown_liveDOM_domuels, stage0_markDownFunc_errors} from "../Markdown/stage0_markDown_liveDOM_domuels.js";
import {stage1_markDown_liveDOM_copyInfo, stage1_markDownFunc_errors, detectShadowDOM} from "../Markdown/stage1_markDown_liveDOM_copyInfo.js";
import {stage2_cloneDOM, stage2_markDownFunc_errors} from "../Markdown/stage2_cloneDOM.js";
import {stage3_cleanUpLiveDOM, stage3_markDownFunc_errors} from "../Markdown/stage3_cleanUp_liveDOM.js";
import {stage3a_CopyOverShadowHosts, stage3a_markDownFunc_errors} from "../Markdown/stage3a_CopyOverShadowHosts.js";
import {stage3c_BuildOutShadowDOM, stage3c_markDownFunc_errors} from "../Markdown/stage3c_BuildOutShadowDOM.js";
import {stage3d_RevertElementsToOrigTagName, stage3d_markDownFunc_errors} from "../Markdown/stage3d_RevertElementsToOrigTagName.js";
import {stage4_markDown_clonedDOM, stage4_markDownFunc_errors} from "../Markdown/stage4_markDown_clonedDOM.js";
import {stage5_markDown_clonedDOM, stage5_markDownFunc_errors} from "../Markdown/stage5_markDown_clonedDOM.js";
import {stage6_markDown_clonedDOM, stage6_markDownFunc_errors} from "../Markdown/stage6_markDown_clonedDOM.js";
import {setSuccess} from "../Api/success";

/**
 * Access Engine Kernel
 */
class AEKernel {
	/**
	 * @singleton
	 * @returns {AEKernel}
	 */
	constructor() {
		if (!AEKernel.instance) {
			this._version                   = "antProjectVersion";
			this._stage1MarkdownFuncs       = {};
			this._stage2MarkdownFuncs       = {};
			this._stage4MarkdownFuncs       = {};
			this._stage5MarkdownFuncs       = {};
			this._stage6MarkdownFuncs       = {};
			this._rootTestNode              = null;
			this._automaticTests            = {};
			this._guidedAutomaticTests      = {}; // might only be needed in extended object
			this._advisoryAutomaticTests    = {}; // might only be needed in extended object
			this._previewModes              = {}; // might only be needed in extended object
			this._window                    = window; // default is current Window
			this._document                  = document; // default is current Document
			this._markdownFuncs_failedToRun = {};
			this._tests_failedToRun         = {};
			this._test_outcomes             = {}; // used for collecting results from timer apis
			this._test_analytics_outcomes   = []; // used for collecting results from timer apis in Analytics V3
			this._getTestInfo				= {}; // get data about all the tests
			this._isLiveDOMMarkedUp         = false;
			AEKernel.instance               = this;
		}
		
		return AEKernel.instance;
	}
	
	/* ******************************************************************************** */
	/* Getters / Setters */
	/* ******************************************************************************** */
	
	/**
	 *
	 * @returns {string}
	 */
	get version() {
		return this._version;
	}
	
	/**
	 *
	 * @param {string} version
	 */
	set version(version) {
		this._version = version;
	}
	
	/**
	 * @returns {function[]}
	 */
	get stage1MarkdownFuncs() {
		return this._stage1MarkdownFuncs;
	}
	
	/**
	 * @returns {function[]}
	 */
	get stage2MarkdownFuncs() {
		return this._stage2MarkdownFuncs;
	}
	
	/**
	 *
	 * @returns {Window|*}
	 */
	get window() {
		return this._window;
	}
	
	/**
	 *
	 * @returns {HTMLDocument}
	 */
	get document() {
		return this._document;
	}
	
	/**
	 *
	 * @returns {Array}
	 */
	get markdownFuncs_failedToRun() {
		return this._markdownFuncs_failedToRun;
	}
	
	/**
	 *
	 * @param {Array} markdownFuncs_failedToRun
	 */
	set markdownFuncs_failedToRun(markdownFuncs_failedToRun) {
		this._markdownFuncs_failedToRun = markdownFuncs_failedToRun;
	}
	
	/**
	 *
	 * @returns {Array}
	 */
	get tests_failedToRun() {
		return this._tests_failedToRun;
	}
	
	/**
	 *
	 * @param {Array} tests_failedToRun
	 */
	set tests_failedToRun(tests_failedToRun) {
		this._tests_failedToRun = tests_failedToRun;
	}
	
	/**
	 * @returns {Node}
	 */
	get rootTestNode() {
		return this._rootTestNode;
	}
	
	/**
	 * @param {Node} rootTestNode
	 */
	set rootTestNode(rootTestNode) {
		this._rootTestNode = rootTestNode;
	}
	
	/**
	 * @returns {function[]}
	 */
	get stage4MarkdownFuncs() {
		return this._stage4MarkdownFuncs;
	}
	
	/**
	 * @param {function[]} stage4MarkdownFuncs
	 */
	set stage4MarkdownFuncs(stage4MarkdownFuncs) {
		this._stage4MarkdownFuncs = stage4MarkdownFuncs;
	}
	
	/**
	 * @returns {function[]}
	 */
	get stage5MarkdownFuncs() {
		return this._stage5MarkdownFuncs;
	}
	
	/**
	 * @param {function[]} stage5MarkdownFuncs
	 */
	set stage5MarkdownFuncs(stage5MarkdownFuncs) {
		this._stage5MarkdownFuncs = stage5MarkdownFuncs;
	}
	
	/**
	 * @returns {function[]}
	 */
	get stage6MarkdownFuncs() {
		return this._stage6MarkdownFuncs;
	}
	
	/**
	 * @param {function[]} stage6MarkdownFuncs
	 */
	set stage6MarkdownFuncs(stage6MarkdownFuncs) {
		this._stage6MarkdownFuncs = stage6MarkdownFuncs;
	}
	
	/* needed for timer API */
	/**
	 * @returns {{}}
	 */
	get test_outcomes() {
		return this._test_outcomes;
	}
	
	/**
	 * @param {{}} test_outcomes
	 */
	set test_outcomes(test_outcomes) {
		this._test_outcomes = test_outcomes;
	}

	/* needed for analytics timer API */
	/**
	 * @returns {{}}
	 */
	get test_analytics_outcomes() {
		return this._test_analytics_outcomes;
	}
	
	/**
	 * @param {{}} test_analytics_outcomes
	 */
	set test_analytics_outcomes(test_analytics_outcomes) {
		this._test_analytics_outcomes = test_analytics_outcomes;
	}

	get isLiveDOMMarkedUp() {
		return this._isLiveDOMMarkedUp;
	}

	set isLiveDOMMarkedUp(isLiveDOMMarkedUp) {
		this._isLiveDOMMarkedUp = isLiveDOMMarkedUp;
	}
	
	/* ******************************************************************************** */
	
	/**
	 * Change the window and document under test
	 * If you are using window.opener model from Access Analyst you will want to run Access Engine from the new window.
	 * Doing this allows you to set these properties, and hold the code for AccessEngine away from the test page - does not have to be included in the page being tested.
	 * Inheriting a constructor can be tricky so this is here for objects that extend AccessEngine
	 *
	 * @param {Window} refWindow
	 */
	setWindowUnderTest(refWindow) {
		this._window   = refWindow;
		this._document = refWindow.document;
	};
	
	/**
	 * Change rootTestNode is needed for nodeCapture APIs
	 *
	 * @param {Node} testNode
	 */
	setRootTestNode(testNode) {
		this._rootTestNode = testNode;
	};
	
	/**
	 * Provides a clone of the current root test node
	 * We may want to enable it to be stored in the toolbar, for record / playback analysis
	 *
	 * @returns {Node}
	 */
	getCloneRootTestNode() {
		return cloneThisNode(this._rootTestNode, true);
	};
	
	/**
	 * Add failed to run functions to relevant holder
	 * @param {Obj} targetCollectionToAddTo
	 * @param {Obj} collectionOfFuncsWhichFailedToRun
	 */
	addFailedToRunFuncs(targetCollectionToAddTo, collectionOfFuncsWhichFailedToRun) {
		var funcNames = Object.keys(collectionOfFuncsWhichFailedToRun);
		for (var i = funcNames.length; i--;) {
			var funcName = funcNames[i];
			targetCollectionToAddTo[funcName] = collectionOfFuncsWhichFailedToRun[funcName];
		}
	};

	/**
	 * Add Stage1 test dependent Markdown Func
	 * Runs on live DOM
	 * @param {String} name
	 * @param {function} func
	 */
	addStage1MarkdownFunc(name, func) {
		this._stage1MarkdownFuncs[name] = func;
	}
	
	/**
	 * Add Stage 4 test dependent Markdown Func
	 * Runs on cloned DOM
	 * @param {String} name
	 * @param {function} func
	 */
	addStage4MarkdownFunc(name, func) {
		this._stage4MarkdownFuncs[name] = func;
	}
	
	/**
	 * Add Stage 5 test dependent Markdown Func
	 * Runs on cloned DOM
	 * @param {String} name
	 * @param {function} func
	 */
	addStage5MarkdownFunc(name, func) {
		this._stage5MarkdownFuncs[name] = func;
	}
	
	/**
	 * Add Stage 6 test dependent Markdown Func
	 * Runs on cloned DOM
	 * @param {String} name
	 * @param {function} func
	 */
	addStage6MarkdownFunc(name, func) {
		this._stage6MarkdownFuncs[name] = func;
	}
	
	/* split stages for DOM capture to work with async api calls */
	
	/**
	 *
	 */
	stage0_capture() {
		// markdown live DOM + all nested ShadowDOMs
		// we do full tree search of DOM + shadowRoots 
		// defining which elements should have a shadowRoot
		const result = stage0_markDown_liveDOM_domuels(this.document);
		this.isLiveDOMMarkedUp = true;
		this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage0_markDownFunc_errors);
		return result;
	}
	
	/**
	 *
	 */
	stage1_capture() {
		// markdown live DOM
		// add style information on only nodes in the live DOM
		const result = stage1_markDown_liveDOM_copyInfo(this.window, this.document, this.stage1MarkdownFuncs);
		this.isLiveDOMMarkedUp = true;
		this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage1_markDownFunc_errors);
		return result;
	}
	
	/**
	 *
	 */
	stage2_capture() {
		// clone the DOM node
		this.rootTestNode = stage2_cloneDOM(this.document);
		this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage2_markDownFunc_errors);
		return this.rootTestNode;
	}
	
	/**
	 *
	 */
	stage3a_capture() {
		if (detectShadowDOM === true) {
			// Build out ShadowDOM
			this.rootTestNode = stage3a_CopyOverShadowHosts(this.rootTestNode, this.document);
			this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage3a_markDownFunc_errors);
		}
		return this.rootTestNode;
	}
	
	/**
	 *
	 */
	stage3c_capture() {
		if (detectShadowDOM === true) {
			// Build out ShadowDOM
			this.rootTestNode = stage3c_BuildOutShadowDOM(this.rootTestNode, this.document);
			this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage3c_markDownFunc_errors);
		}
		return this.rootTestNode;
	}
	
	/**
	 *
	 */
	stage3d_capture() {
		if (detectShadowDOM === true) {
			// Copy across DOM information from shadowDOM web components, just like we do in stage 1
			this.rootTestNode = stage3d_RevertElementsToOrigTagName(this.rootTestNode);
			this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage3d_markDownFunc_errors);
		}
		return this.rootTestNode;
	}
	
	/**
	 *
	 */
	stage3_capture() {
		// clean-up live DOM
		const result = stage3_cleanUpLiveDOM(this.document);

		if (result) {
			this.isLiveDOMMarkedUp = false;
		}

		this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage3_markDownFunc_errors);
		return result;
	}
	
	/**
	 *
	 */
	stage4_capture() {
		// markdown built-out cloned node - bulk 
		this.rootTestNode = stage4_markDown_clonedDOM(this.rootTestNode, this.stage4MarkdownFuncs, this);
		this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage4_markDownFunc_errors);
		return this.rootTestNode;
	}
	
	/**
	 *
	 */
	stage5_capture() {
		// markdown cloned node - tree search in body
		this.rootTestNode = stage5_markDown_clonedDOM(this.rootTestNode, this.stage5MarkdownFuncs);
		this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage5_markDownFunc_errors);
		return this.rootTestNode;
	}
	
	/**
	 *
	 */
	stage6_capture() {
		// markdown cloned node - tree search in head
		this.rootTestNode = stage6_markDown_clonedDOM(this.rootTestNode, this.stage6MarkdownFuncs);
		this.addFailedToRunFuncs(this._markdownFuncs_failedToRun, stage6_markDownFunc_errors);
		return this.rootTestNode;
	}
	
	/**
	 * Captures DOM for testing - allowing multi-DOM testing
	 * for sync apis
	 */
	captureDOM() {
		const tasks = [
			this.stage0_capture,
			this.stage1_capture,
			this.stage2_capture,
			this.stage3a_capture,
			this.stage3c_capture,
			this.stage3d_capture,
			this.stage3_capture,  // clean-up happens after clone has been created, as shadowRoots need to be copied into the clone
			this.stage4_capture,
			this.stage5_capture,
			this.stage6_capture
		];

		try {
			for (let i = 0; i < tasks.length; i++) {
				const task = tasks[i];
				if (!task.bind(this)()) {
					return false;
				}
			}
		} finally {
			if (this.isLiveDOMMarkedUp) {
				this.stage3_capture.bind(this)();
			}
		}

		return true;
	};
	
	/**
	 * @param {String} testId
	 * @param {{}} testObj
	 */
	addAutomaticTest(testId, testObj) {
		this._automaticTests[testId] = testObj;
	}
	
	/**
	 * @param {String} testId
	 * @param {{}} testObj
	 */
	addGuidedAutomaticTest(testId, testObj) {
		this._guidedAutomaticTests[testId] = testObj;
	}
	
	/**
	 * @param {String} testId
	 * @param {{}} testObj
	 */
	addAdvisoryAutomaticTest(testId, testObj) {
		this._advisoryAutomaticTests[testId] = testObj;
	}
	
	/**
	 * @param {String} previewModeId
	 * @param {{}} previewModeObj
	 */
	addPreviewMode(previewModeId, previewModeObj) {
		this._previewModes[previewModeId] = previewModeObj;
	}
	
	/**
	 * Gets a single test from test id
	 *
	 * @param {String} testId
	 */
	getTestToRun(testId) {
		let test = this._automaticTests[testId];
		if (test === undefined) {
			test = this._guidedAutomaticTests[testId];
		}
		else {
			return test;
		}
		if (test === undefined) {
			test = this._previewModes[testId];
		}
		else {
			return test;
		}
		if (test === undefined) {
			test = this._advisoryAutomaticTests[testId];
		}
		else {
			return test;
		}
		if (test === undefined) {
			return null;
		}
		return test;
	}
	
	/**
	 * Gets a list of tests according to enum test type
	 * @param {Number} testType
	 */
	getTestsToRun(testType) {
		let tests = null;
		switch (testType) {
			case testTypes.AUTOMATIC:
				tests = this._automaticTests;
				break;
			case testTypes.GUIDED_AUTOMATIC:
				tests = this._guidedAutomaticTests;
				break;
			case testTypes.PREVIEW_MODE:
				tests = this._previewModes;
				break;
			case testTypes.ADVISORY:
				tests = this._advisoryAutomaticTests;
				break;
		}
		return tests;
	}

	/**
	 * Provide catalog of test data
	 * @returns {object}
	 * @param {object} columns
	 */
	getTestInfo(columns) {
		return this._getTestInfo;
	}

	/**
	 * Updates the public flag that indicates whether or not test execution (including DOM capturing) was successful.
	 * If no boolean is passed in as a parameter to this function, then the value to update with is derived from the 'failedToRun' objects that are populated during execution if any errors occur.
	 * @param {Boolean?} success
	 */
	updateSuccess(success = undefined) {
		setSuccess((success === undefined) ? (Object.keys(this._markdownFuncs_failedToRun).length === 0 && Object.keys(this._tests_failedToRun).length === 0) : success);
	}

	isInIframe() {
		try {
			return this._window.self !== this._window.top;
		} catch(err) {
			return true;
		}
	}
}

/**
 * @const
 * @type {AEKernel}
 */
const aeKernel = new AEKernel();
// Object.freeze(aeKernel); // cannot change variables with this in place
export {aeKernel};