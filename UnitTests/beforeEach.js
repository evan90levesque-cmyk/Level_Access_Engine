/**
 * Code which will run before each test
 * File to be included by default in all karma conf files.
 */

function iframeLoaded(iframe) {
	return new Promise((resolve, reject) => {
	  iframe.addEventListener("load", () => {
		resolve(iframe);
	  });
	  iframe.addEventListener("error", (error) => {
		reject(error);
	  });
	});
}
  
beforeEach(async function() {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 36000000;  // default is 5000

	// Prevent page reloads during tests
	window.onbeforeunload = jasmine.createSpy();

	let testingIframe = document.querySelector("#testing");
	if (testingIframe === null) {
		// runs once if no iframe exists
		testingIframe = document.createElement("iframe");
		testingIframe.id = "testing";
		document.body.appendChild(testingIframe);
	} else {
		// runs each time if the testing iframe exists

		const testingHtml = testingIframe.contentWindow.document.getElementsByTagName('html')[0];
		const htmlAttributes = testingHtml.attributes;
		for (let i = 0; i < htmlAttributes.length; i++) {
			testingHtml.removeAttribute(htmlAttributes[i].name);
		}

		const testingBody = testingIframe.contentWindow.document.body;
		const bodyAttributes = testingBody.attributes;
		for (let i = 0; i < bodyAttributes.length; i++) {
			testingBody.removeAttribute(bodyAttributes[i].name);
		}

		const testingHead = testingIframe.contentWindow.document.head;
		const headAttributes = testingHead.attributes;
		for (let i = 0; i < headAttributes.length; i++) {
			testingHead.removeAttribute(headAttributes[i].name);
		}
	}

	testingIframe.src = "about:blank";
	await iframeLoaded(testingIframe);
});