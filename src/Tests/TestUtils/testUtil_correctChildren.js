/**
 * Determines if target nodes contain only the specified tag types withh role exceptions
 * @param {String} tag of parent to test
 * @param {*} allowed object literal list of allowed children for the particular tag where each allowed child type has an associated value of 1 ie {LI:1,TEMPLATE:1}
 * @param {Object} rootTestNode DOM structure to fish the tag and children from for testing
 * @param {function} testChildFilter optional function for filtering children inside a given parent identified by the tag param
 * @returns {Node[]} Array of bad nodes
 */
export function correctChildren(tag, allowed, rootTestNode, testChildFilter) {
	const badnodes = [];

	const nodes = rootTestNode.querySelectorAll(tag+'[data-ae_vis][data-ae_avat][data-ae_ar="null"]:not(:empty)');
	for (let i = 0; i < nodes.length; i++) {
		const tagchildren = nodes[i].children;

		let fail = false;
		for (let j = 0; j < tagchildren.length && fail === false; j++) {
			const testchild = tagchildren[j];

			const role = testchild.getAttribute("data-ae_ar");

			if (testchild.tagName === "LI" && role === "listitem") {
				// redundant, but okay
				continue;
			}

			if (allowed[testchild.tagName]) {
				//Child type on the allowed list but needs to not have a role
				if (role !== "null" || (testChildFilter && !testChildFilter(tagchildren, testchild))) {
					badnodes.push(nodes[i]);
					fail = true;
				}
			} else {
				//Child type not on the allowed list but it's still legit of it has a listitem role
				if (role !== "listitem") {
					badnodes.push(nodes[i]);
					fail = true;
				}
			}
		}
	}

	return badnodes;
}