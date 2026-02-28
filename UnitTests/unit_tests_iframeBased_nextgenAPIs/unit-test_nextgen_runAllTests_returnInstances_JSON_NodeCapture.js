const reducer = (testResults, assertion) => (assertion.outcome === 'fail') ? testResults.concat(assertion.testId) : testResults;

describe('Test 1 - Testing nextgen_runAllTests_returnInstances_JSON_NodeCapture for automatic and guided automatic results', function() {
	it('Test 1', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td><span id='target'></span><img src='#'>Germany</td></tr></table>";
		const targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON_NodeCapture(targetParent);
		const resObj = JSON.parse(res);
		let testIds = resObj.reduce(reducer, []);
		expect(testIds.length).toBe(1);
	});
});

describe('Test 2 - Testing nextgen_runAllTests_returnInstances_JSON_NodeCapture for automatic and guided automatic results', function() {
	it('Test 2', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="main"><div><ul><li>Test1</li></ul></div><div><span id="target"></span><ul><span>Test1</span></ul></div><div><img src="#"></div><iframe src="TestPage_Iframe.html"></iframe></div>';
		const targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON_NodeCapture(targetParent);
		const resObj = JSON.parse(res);
		// gets results for automatic tests
		let testIds = resObj.reduce(reducer, []);
		expect(testIds.length).toBe(1);
	});
});

describe('Test 3 - Testing nextgen_runAllTests_returnInstances_JSON_NodeCapture for automatic and guided automatic results', function() {
	it('Test 3', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="main"><span id="target"></span><div><ul><li>Test1</li></ul></div><div><ul><span>Test1</span></ul></div><div><img src="#"></div><iframe src="TestPage_Iframe.html"></iframe></div>';
		const targetParent = document.querySelector("#testing").contentWindow.document.querySelector("#target").parentElement;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		const res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON_NodeCapture(targetParent);
		const resObj = JSON.parse(res);
		// gets results for automatic tests
		let testIds = resObj.reduce(reducer, []);
		expect(testIds.length).toBe(4);
	});
});

describe('Test 4 - Testing nextgen_runAllTests_returnInstances_JSON_NodeCapture for special tags', function() {
	for (const tagName of [{tag:'HEAD', testId: 522}, {tag:'BODY', testId:400}]) {
		it(tagName, () => {
			const iframeWindow = document.querySelector("#testing").contentWindow;
			iframeWindow.document.head.innerHTML = "<title>too short</title>";
			iframeWindow.document.body.innerHTML = "";
			const targetElement = iframeWindow.document.querySelector(tagName.tag);
			LevelAccess_AccessEngine.setWindowUnderTest(iframeWindow);
			const res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON_NodeCapture(targetElement);
			const resObj = JSON.parse(res);
			expect(resObj.length).not.toBeNull();  // we just want to make sure there are no runtime errors
			
			// actually check results
			let testIds = resObj.reduce(reducer, []);
			expect(testIds).toContain(tagName.testId.toString());
		});
	}
});

describe('ENG-984: Color contrast tests should run in node capture mode', function() {
	it('a p node with a style of "font-size: 12px; color: yellow;" should fail color contrast Test 107', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div><p id="target" style="font-size: 12px; color: yellow;">foo</p></div>';
		
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		
		const target = document.querySelector("#testing").contentWindow.document.querySelector("#target");
		const res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON_NodeCapture(target);
		const resObj = JSON.parse(res);
		
		let testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('107');
	});
	
	it('a p node with a style of "font-size: 24px; color: yellow;" should fail color contrast Test 109', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div><p id="target" style="font-size: 24px; color: yellow;">foo</p></div>';
		
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		
		const target = document.querySelector("#testing").contentWindow.document.querySelector("#target");
		const res = LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON_NodeCapture(target);
		const resObj = JSON.parse(res);
		
		let testIds = resObj.reduce(reducer, []);
		expect(testIds).toContain('109');
	});
});