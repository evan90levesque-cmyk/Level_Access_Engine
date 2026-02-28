import {fixTypes} from "../../Utils/aeUtils.js";

/**
 *
 * @param {Node} el
 * @param {Number} fixType
 * @param {boolean} domSpec
 * @param {Number} version
 * @returns {{css:string, attNo: number, encoding: array, url: string, version: string, wordArray: array}}
 */
export function getFingerprint(el, fixType, domSpec, version) {
	var fingerprint = {
		"version": version || "1"
	};
	
	if (domSpec === true || fixType === fixTypes.TAG) {
		fingerprint.url = window.location.href;
	}
	
	fingerprint.css      = getCssForFingerprint(el);
	fingerprint.attNo    = el.attributes.length;
	fingerprint.encoding = charFreq(el.innerHTML);
	
	if (fingerprint.version === "1") {
		var innerHTML         = (el.tagName.toLowerCase() === 'html') ? '' : el.innerHTML;
		fingerprint.wordArray = toWordsArray(innerHTML);
	}
	
	return fingerprint;
}

/**
 *
 * @param {String} val
 * @returns {String[]}
 */
function toWordsArray(val) {
	if (val === '') {
		return [];
	}
	
	val = val.replace(/[^a-zA-Z]/g, ' ');
	val = val.replace(/\s\s+/g, ' ');
	return val.trim().split(/\s+/);
}

export function getCssForFingerprint(element) {
	const characterBudget = 2000;
	const qualifyingAttributes = [];

	let numCharactersInQualifyingAttributes = 0;

	const attributes = element.attributes;
	for (let i = attributes.length; i--;) {
		const attribute = attributes[i];

		const shouldAppendAttribute = (
			// ignore the style attribute as it can be altered without changing the accessibility components of an element
			attribute.name !== 'style' &&
			// ignore Engine attributes
			attribute.name.indexOf('data-ae_') === -1 &&
			// ignore AST attributes
			attribute.name.indexOf('data-la-') === -1 &&
			// ignore attributes with a name that contains invalid characters relative to JavaScript's querySelector method
			attribute.name.indexOf(':') === -1 &&
			// ignore attributes with a value that contains CR or LF characters
			attribute.value.indexOf('\r') === -1 &&
			attribute.value.indexOf('\n') === -1 &&
			// ignore 'xmlns' attributes; JavaScript's querySelector method doesn't consistently handle this attribute well
			attribute.name !== 'xmlns'
		);

		if (shouldAppendAttribute) {
			const qualifyingAttribute = {
				name: attribute.name,
				value: attribute.value.replace(/"/g, '\\"')
			};
			numCharactersInQualifyingAttributes += qualifyingAttribute.name.length + qualifyingAttribute.value.length;
			qualifyingAttributes.push(qualifyingAttribute);
		}
	}

	let css = element.tagName.toLowerCase();

	if (numCharactersInQualifyingAttributes <= characterBudget) {
		css = qualifyingAttributes.reduce((accumulator, attribute) => `${accumulator}[${attribute.name}="${attribute.value}"]`, css);
	} else {
		// not all qualifying attributes will fit into our CSS selector given our character budget, so we need to exclude some

		// sort attributes by name + value, shortest first;
		// we want to prioritize inclusion of shorter attributes in our CSS selector over longer ones
		qualifyingAttributes.sort((a, b) => (a.name.length + a.value.length) - (b.name.length + b.value.length));

		let characterBudgetRemaining = characterBudget;
		for (let i = 0; i < qualifyingAttributes.length; i++) {
			const attribute = qualifyingAttributes[i];

			const attributeLength = attribute.name.length + attribute.value.length;
			if (characterBudgetRemaining < attributeLength) {
				// there's no more room for any more of our attributes
				break;
			}

			css += `[${attribute.name}="${attribute.value}"]`;
			characterBudgetRemaining -= attributeLength;
		}
	}

	return css;
}

function toPercentage(number, total) {
	return (total !== 0) ? parseInt(((number / total) * 100).toFixed(0)) : 0;
}

export function charFreq(text) {
	//If the node is empty return an array of zeros
	if (text.trim() === "") {
		var arr = [];
		for (var d=38; d--;) {
			arr.push(0);
		}
		return arr;
	}

	var freq={"a":0, "b":0, "c":0, "d":0, "e":0, "f":0, "g":0, "h":0, "i":0, "j":0, "k":0, "l":0, "m":0, "n":0, "o":0, "p":0, "q":0, "r":0, "s":0, "t":0, "u":0, "v":0, "w":0, "x":0, "y":0, "z":0, "0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "<":0, ">":0};

	var charArray = text.toLowerCase().split('');
	for (var i = 0, len = charArray.length; i < len; i++) {
		var char = charArray[i];
		try {
			if (typeof freq[char] !== "undefined") {
				freq[char] = freq[char] + (i + 1); // simple change from + 1 to plus i - to add position.  Additional + 1 corrects array pos to actual pos.
			}
		} catch(err) {
			//do nothing}
		}
	}
	
	var keys = Object.keys(freq);
	var total = 0;
	for (var k=keys.length; k--;) {
		total = total + freq[keys[k]];
	}
	
	var onehotencoding = [];
	
	for (var a = 0, len_keys = keys.length; a < len_keys; a++) {
		onehotencoding[a] = toPercentage(freq[keys[a]], total);
	}
	return onehotencoding;
}