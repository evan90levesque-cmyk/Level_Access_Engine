describe('a noscript node with an iframe node inside of it', function() {
	it('should not have any children and be marked as invisible by Engine, i.e. the noscript node should not have a "data-ae_vis" attribute', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<noscript id="noscript"><iframe id="iframe" src="#" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';

		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();

		const rootTestNode = LevelAccess_AccessEngine.getRootTestNode();
		expect(rootTestNode.querySelector("#noscript").hasAttribute("data-ae_vis")).toBe(false);
		expect(rootTestNode.querySelector("#iframe")).toBe(null);
	});
});

describe('ENG-999', function() {
	it('verify a noscript element inside the head whose child is an img element with a style of "display: none;" is not flagged as lacking an accessible name', function() {
		const testingWindow = document.querySelector("#testing").contentWindow;
		const testingDocument = testingWindow.document;

		testingDocument.head.innerHTML = '<noscript><img src="#" style="display: none;"></noscript>';
		testingDocument.body.innerHTML = '';

		LevelAccess_AccessEngine.setWindowUnderTest(testingWindow);
		const outcome = LevelAccess_AccessEngine.runTest_returnOutcome("89");
		expect(outcome).toBe('na');
	});
});
