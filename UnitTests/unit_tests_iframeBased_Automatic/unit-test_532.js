describe('String N/A: no aside nodes', function() {
    it('no aside nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("532");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("532");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("532");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: one aside node', function() {
    it('one aside node should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<aside>Test</aside>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("532");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("532");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("532");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: one aside node with aria-label text', function() {
    it('one aside node with aria-label text should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<aside aria-label='something'>Test</aside>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("532");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("532");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("532");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two aside nodes have aria-label attributes set to unique text values', function() {
    it('two aside nodes have aria-label attributes set to unique text values should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<aside aria-label='something'>Test</aside><aside aria-label='else'>Test</aside>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("532");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("532");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("532");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two aside nodes have title attributes set to unique text values', function() {
    it('two aside nodes have title attributes set to unique text values should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<aside title='one'>Test</aside><aside title='two'>Some</aside>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("532");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("532");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("532");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: two aside nodes with one having no acessible name', function() {
		it('Two aside nodes with one having no acessible name should be equal to fail', function() {
			document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
			document.querySelector("#testing").contentWindow.document.body.innerHTML = "<aside aria-label='describe'>Test</aside><aside>Mike</aside>";

		   LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		   // <variant1>
		   var res = LevelAccess_AccessEngine.runTest_returnOutcome("532");
		   expect(res).toBe('fail');
		   // </variant1>
		   // <variant2>
		   res = LevelAccess_AccessEngine.runTest_returnNumbers("532");
		   expect(res).toBe("532,1");       
		   // </variant2>
		   // <variant3>
		   res = LevelAccess_AccessEngine.runTest_returnInstances("532");
		   expect(res.instances.length).toBe(1);
		   // </variant3>
	});
});

describe('String Fail: two aside nodes with no accessible name', function() {
	it('Two aside nodes with no accessible name should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<aside>Test</aside><aside>Test</aside>";

	   LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	   // <variant1>
	   var res = LevelAccess_AccessEngine.runTest_returnOutcome("532");
	   expect(res).toBe('fail');
	   // </variant1>
	   // <variant2>
	   res = LevelAccess_AccessEngine.runTest_returnNumbers("532");
	   expect(res).toBe("532,2");
	   // </variant2>
	   // <variant3>
	   res = LevelAccess_AccessEngine.runTest_returnInstances("532");
	   expect(res.instances.length).toBe(2);
	   // </variant3>
	});
});