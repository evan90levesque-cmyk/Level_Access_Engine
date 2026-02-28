describe('String N/A: no nav nodes', function() {
    it('no nav nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("533");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("533");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("533");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: one nav node', function() {
    it('one nav node should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<nav>Test</nav>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("533");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("533");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("533");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: one nav node with aria-label text', function() {
    it('one nav node with aria-label text should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<nav aria-label='something'>Test</nav>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("533");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("533");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("533");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two nav nodes have aria-label attributes set to unique text values', function() {
    it('two nav nodes have aria-label attributes set to unique text values should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<nav aria-label='something'>Test</nav><nav aria-label='else'>Test</nav>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("533");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("533");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("533");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two nav nodes have title attributes set to unique text values', function() {
    it('two nav nodes have title attributes set to unique text values should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<nav title='one'>Test</nav><nav title='two'>Some</nav>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("533");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("533");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("533");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: two nav nodes with one having no acessible name', function() {
		it('Two nav nodes with one having no acessible name should be equal to fail', function() {
			document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
			document.querySelector("#testing").contentWindow.document.body.innerHTML = "<nav aria-label='describe'>Test</nav><nav>Mike</nav>";

		   LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		   // <variant1>
		   var res = LevelAccess_AccessEngine.runTest_returnOutcome("533");
		   expect(res).toBe('fail');
		   // </variant1>
		   // <variant2>
		   res = LevelAccess_AccessEngine.runTest_returnNumbers("533");
		   expect(res).toBe("533,1");       
		   // </variant2>
		   // <variant3>
		   res = LevelAccess_AccessEngine.runTest_returnInstances("533");
		   expect(res.instances.length).toBe(1);
		   // </variant3>
	});
});

describe('String Fail: two nav nodes with no accessible name', function() {
	it('Two nav nodes with no accessible name should be equal to fail', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<nav>Test</nav><nav>Test</nav>";

	   LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
	   // <variant1>
	   var res = LevelAccess_AccessEngine.runTest_returnOutcome("533");
	   expect(res).toBe('fail');
	   // </variant1>
	   // <variant2>
	   res = LevelAccess_AccessEngine.runTest_returnNumbers("533");
	   expect(res).toBe("533,2");
	   // </variant2>
	   // <variant3>
	   res = LevelAccess_AccessEngine.runTest_returnInstances("533");
	   expect(res.instances.length).toBe(2);
	   // </variant3>
	});
});