/*
 * Creates an instance of AutoTestShell which is used as the basis for all AccessEngine tests
 * @constructor
 * @this {AutoTestShell}
 */

// TODO - we need to set rootTestNode prior to the test being run

export class AutoTestShell {
	constructor(isRelevantCssSelector) {
		this._isRelevantCssSelector     = isRelevantCssSelector;
		this._rootTestNode              = null;
		this._result                    = {};
		this._candidateSetNodesFuncArgs = null;
		this._relevantNodes             = 0;
		this._numberOfRelevantNodes     = 0;
		this._cssSelector               = arguments[1];
		this._applicabilityTestArgs     = null;
		this._applicableNodesFuncArgs   = null;
	}
	
	// Getters / Setters
	
	get rootTestNode() {
		return this._rootTestNode;
	}
	
	set rootTestNode(rootTestNode) {
		this._rootTestNode = rootTestNode;
	}
	
	get numberOfRelevantNodes() {
		return this._numberOfRelevantNodes;
	}
	
	set numberOfRelevantNodes(numberOfRelevantNodes) {
		this._numberOfRelevantNodes = numberOfRelevantNodes;
	}
	
	get relevantNodes() {
		return this._relevantNodes;
	}
	
	set relevantNodes(relevantNodes) {
		this._relevantNodes = relevantNodes;
	}
	
	/**
	 * Default function that allows a candidate set to be collected from a cssSelector.
	 * @return {Element[]} The candidate set.
	 */
	candidateSetNodesFunc() {
		return this.querySelectorAll(this._cssSelector);
	}
	
	/**
	 * Function allows the default candidateSetNodes function to be overwritten, with a custom Candidate Set collector function.
	 * @param {Function} func The custom Candidate Set collector function.
	 * @param {Array=} funcArgs The arguments that are needed for the custom Candidate Set collector function.
	 * @return {NodeList} The candidate set.
	 */
	set_candidateSetNodesFunc(func, funcArgs) {
		this.candidateSetNodesFunc = func;
		if (funcArgs) {
			this._candidateSetNodesFuncArgs = funcArgs;
		}
	}
	
	/**
	 * Default applicability test function that determines if a check function is applicable based on one or more nodes being returned from a css selector.
	 * @return {Boolean} A true | false outcome.
	 */
	applicabilityTest() {
		return (this.querySelector(this._isRelevantCssSelector) != null);
	}
	
	/**
	 * Function allows the default applicabilityTest function to be overwritten, with a custom function.
	 * @param {Function} func The custom function.
	 * @param {Array=} funcArgs The arguments that are needed for the custom function.
	 */
	set_applicabilityTest(func, funcArgs) {
		this.applicabilityTest = func;
		if (funcArgs) {
			this._applicabilityTestArgs = funcArgs;
		}
	}

	/**
	 * Default function that allows an applicability set to be collected from a cssSelector.
	 * @return {Element[]} The applicability set.
	 */
	applicableNodesFunc() {
		return this.querySelectorAll(this._isRelevantCssSelector);
	}

	/**
	 * Function allows the default applicableNodesFunc function to be overwritten, with a custom Applicability Set collector function.
	 * @param {Function} func The custom Applicability Set collector function.
	 * @param {Array=} funcArgs The arguments that are needed for the custom Applicability Set collector function.
	 * @return {NodeList} The applicability set.
	 */
	set_applicableNodesFunc(func, funcArgs) {
		this.applicableNodesFunc = func;
		if (funcArgs) {
			this._applicableNodesFuncArgs = funcArgs;
		}
	}
	
	/**
	 * Default function that determines if a check is pass or fail, based on one or more nodes being returned the Candidate Set collector function.
	 * @return {string} A "pass | fail" outcome.
	 */
	passFailFunc() {
		let outcome = "pass";
		if (this._numberOfRelevantNodes > 0) {
			outcome = "fail";
		}
		return outcome;
	}
	
	/**
	 * Default function that determines if a check is pass or fail, and if failed the number of fail instances, based on one or more nodes being returned the Candidate Set collector function.
	 * @return {string} A "pass | fail, no. issues" outcome.
	 */
	numberIssuesFunc() {
		let outcome = "pass";
		if (this._numberOfRelevantNodes > 0) {
			outcome = ["fail", this._numberOfRelevantNodes];
		}
		return outcome;
	}
	
	/**
	 * Default function that determines if a check is pass or fail, and if failed the fail instances, based on one or more nodes being returned the Candidate Set collector function.
	 * @return {String|Array} A [pass | fail, instances]" outcome.
	 */
	issueInstancesFunc() {
		// default function
		let outcome = "pass";
		if (this._numberOfRelevantNodes > 0) {
			outcome = ["fail", this._relevantNodes];
		}
		return outcome;
	}
	
	/**
	 * Function determines the outcome of the test function, with 3 possible outcomes.
	 * Variant 1 - na | pass | fail
	 * Variant 2 - na | pass | fail, number of issues
	 * Variant 3 - na | pass | fail, instances
	 * @param {result}
	 */
	getResult() {
		if (this.applicabilityTest() === false) {
			this._result.outcome = "na";
			return this._result;
		}
		
		this._relevantNodes = this.candidateSetNodesFunc(this._candidateSetNodesFuncArgs);
		
		// can remove when complete
		this._numberOfRelevantNodes = this._relevantNodes.length;
		
		// arguments[0] is collectType
		// Built with comments like this to enable automated build into 3 variants - underscore.js template mark-down
		
		// <% if (dev) { %>
		if (arguments[0] === undefined) {
			// <% } %>
			// <% if (var1) { %>
			this._result.outcome = this.passFailFunc();
			// <% } %>
			// <% if (dev) { %>
		}
		// <% } %>
		// <% if (dev) { %>
		if (arguments[0] === "numbers") {
			// <% } %>
			// <% if (var2) { %>
			const outcome = this.numberIssuesFunc();
			if (typeof outcome === "string") {
				this._result.outcome = outcome;
			}
			else {
				this._result.outcome        = outcome[0];
				this._result.numberOfIssues = outcome[1];
			}
			// <% } %>
			// <% if (dev) { %>
		}
		// <% } %>
		// <% if (dev) { %>
		if (arguments[0] === "instances") {
			// <% } %>
			// <% if (var3) { %>
			const outcome = this.issueInstancesFunc(this._relevantNodes);
			if (typeof outcome === "string") {
				this._result.outcome = outcome;
			}
			else {
				this._result.outcome   = outcome[0];
				this._result.instances = outcome[1];
			}
			// <% } %>
			// <% if (dev) { %>
		}
		// <% } %>
		return this._result;
	}

	getNextGenResultsMetadata() {
		const isApplicable = this.applicabilityTest(this._applicabilityTestArgs);

		let outcome;
		if (isApplicable) {
			this._relevantNodes         = Array.from(this.candidateSetNodesFunc(this._candidateSetNodesFuncArgs));
			this._numberOfRelevantNodes = this._relevantNodes.length;
			outcome                     = (this._numberOfRelevantNodes <= 0) ? "pass" : "fail";
		} else {
			this._relevantNodes         = [];
			this._numberOfRelevantNodes = 0;
			outcome                     = "na";
		}

		return {
			outcome: outcome,
			failingNodes: this._relevantNodes
		};
	}

	/**
	 * An extension of this._rootTestNode.querySelector that also operates over the root test node, not just its children.
	 * @return {Element}
	 */
	querySelector(cssSelector) {
		// source: https://stackoverflow.com/a/60831454
		return this._rootTestNode.matches(cssSelector) && this._rootTestNode || this._rootTestNode.querySelector(cssSelector);
	}

	/**
	 * An extension of this._rootTestNode.querySelectorAll that also operates over the root test node, not just its children.
	 * @return {Element[]}
	 */
	querySelectorAll(cssSelector) {
		// source: https://stackoverflow.com/a/59838990
		return [this._rootTestNode, ...this._rootTestNode.querySelectorAll(cssSelector)].filter(el => el.matches(cssSelector));
	}
}