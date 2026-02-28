export let stage3_markDownFunc_errors = {};

/**
 * Pre-testing: Removes data-ae_ attributes from live DOM
 */
export function stage3_cleanUpLiveDOM(testDoc) {
	try {
		stage3_markDownFunc_errors = {};

		const markEachInHead = function (n) {
			do {
				if (n.nodeType === 1) {
					n.removeAttribute("data-ae_removefromclone");

					// check children

					if (n.shadowRoot) {
						const firstChild = n.shadowRoot.firstElementChild;
						if (firstChild) {
							markEachInHead(firstChild);
						}
					}

					if (n.hasChildNodes()) {
						const firstChild = n.firstChild;
						if (firstChild) {
							markEachInHead(firstChild);
						}
					} else if (n.childNodes && n.childNodes.length > 0) {
						const firstChild = n.childNodes[0];
						if (firstChild) {
							markEachInHead(firstChild);
						}
					}
				}
			} while (n = n.nextSibling)
		};
		markEachInHead(testDoc.querySelector("head"));

		const markEach = function (n) {
			do {
				if (n.nodeType === 1) {
					n.removeAttribute("data-ae_durationtoolong");
					n.removeAttribute("data-ae_styles");
					n.removeAttribute("data-ae_shdwrt");
					n.removeAttribute("data-ae_domuel");
					n.removeAttribute("data-ae_domsib");

					// check children

					if (n.shadowRoot) {
						const firstChild = n.shadowRoot.firstElementChild;
						if (firstChild) {
							markEach(firstChild);
						}
					}

					if (n.hasChildNodes()) {
						const firstChild = n.firstChild;
						if (firstChild) {
							markEach(firstChild);
						}
					} else if (n.childNodes && n.childNodes.length > 0) {
						const firstChild = n.childNodes[0];
						if (firstChild) {
							markEach(firstChild);
						}
					}
				}
			} while (n = n.nextSibling)
		};
		markEach(testDoc.querySelector("body, frameset"));

		return 1;
	}
	catch (err) {
		stage3_markDownFunc_errors["markViewable_stage2_CleanUpLiveDOM"] = err;
		return 0;
	}
}