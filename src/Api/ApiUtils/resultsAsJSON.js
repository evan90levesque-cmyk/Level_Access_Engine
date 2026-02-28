/**
 *
 */
export let resultsAsJSON = {
	/**
	 *
	 * @param {String} text
	 * @param {Function} reviver {optional}
	 * @returns {*}
	 */
	parse: function (text, reviver) {
		if (typeof text === 'string' && typeof text.evalJSON === 'function') {
			return text.evalJSON();
		}
		return JSON.parseJSON(text, reviver);
	},
	
	/**
	 *
	 * @param {Object} value The value to convert to a JSON string.
	 * @param {Function} replacer {optional}
	 * @param {String|Number} space {optional}
	 * @returns {*|string}
	 */
	stringify: function (value, replacer, space) {
		if (typeof value !== 'undefined' && typeof value.toJSON === 'function') {
			return value.toJSON();
		}
		return JSON.stringify(value, replacer, space);
	}
};