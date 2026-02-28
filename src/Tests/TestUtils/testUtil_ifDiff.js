/**
 * Finds the set of elements that is in a large group defined by a CSS selector, but not in a smaller group also defined by a CSS selector.
 * @param {Array} funcArgs
 * @returns {Array}
 */
export function testUtil_ifDiff(rootTestNode, funcArgs) {
	var diff = [];
	var res1 = rootTestNode.querySelectorAll(funcArgs[0]);
	var res2 = rootTestNode.querySelectorAll(funcArgs[1]);
	//need to optimise following - is there a way to cast to an array?
	var res2AsArray = [];
	for (var x = 0, len_res2 = res2.length; x < len_res2; x++) {
		res2AsArray[res2AsArray.length] = res2[x];
	}
	for (var i = 0, len_res1 = res1.length; i < len_res1; i++) {
		var res = res1[i];
		if (res2AsArray.indexOf(res) === -1) {
			diff[diff.length] = res;
		}
	}
	return diff;
};