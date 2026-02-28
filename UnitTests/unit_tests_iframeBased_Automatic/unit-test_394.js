describe('String N/A: no th nodes', function() {
    it('no th nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: td element with a headers attribute not visible in the displayed content', function() {
    it('td element with a headers attribute not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td headers='hello' style='display:none'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: td element with a headers attribute not available to assistive technology', function() {
    it('td element with a headers attribute not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td headers='hellow' aria-hidden='true'>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: no nodes with headers attribute', function() {
    it('no nodes with headers attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Hello</th><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: th element with id attribute set to non-null value "hello" and a td element with headers attribute that references th id', function() {
    it('th element with id attribute set to non-null value "hello" and a td element with headers attribute that references th id should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td headers='hello'>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two th elements with id attribute set to non-null value "hello" and a td element with headers attribute that references th id', function() {
    it('two th elements with id attribute set to non-null value "hello" and a td element with headers attribute that references th id should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td headers='hello'>Hello</td><td>Hello</td></tr><tr><th id='hello1'>Hello</th><td headers='hello1'>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two tables on the same page with and without usage of "headers" and "id" attributes', function() {
	it('two tables where one is utilizing "id"/"headers" attributes and the other is not. The first should pass, the second should not affect the test', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
			<div>
				<table>
					<tr>
						<th id='hello'>Hello</th>
						<td headers='hello'>Hello</td>
						<td>Hello</td>
					</tr>
					<tr>
						<th id='hello1'>Hello</th>
						<td headers='hello1'>Hello</td>
						<td>Hello</td>
					</tr>
				</table>
				<table>
					<tr>
						<th>HelloSecond</th>
						<td>HelloSecond</td>
						<td>HelloSecond</td>
					</tr>
					<tr>
						<th>HelloSecond</th>
						<td>HelloSecond</td>
						<td>HelloSecond</td>
					</tr>
				</table>
			</div>
		`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
		expect(res).toBe('pass');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("394");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe('String Fail: two tables on the same page with and without usage of "headers" and "id" attributes', function() {
	it('two tables where one is utilizing "id"/"headers" attributes and the other is not. The first should fail. The second table without id/headers attributes should not affect the results', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
			<div>
				<table>
					<tr>
						<th id='hello'>Hello</th>
						<td headers='hello'>Hello</td>
						<td>Hello</td>
					</tr>
					<tr>
						<th>Hello</th>
						<td headers='hello1'>Hello</td>
						<td>Hello</td>
					</tr>
				</table>
				<table>
					<tr>
						<th>HelloSecond</th>
						<td>HelloSecond</td>
						<td>HelloSecond</td>
					</tr>
					<tr>
						<th>HelloSecond</th>
						<td>HelloSecond</td>
						<td>HelloSecond</td>
					</tr>
				</table>
			</div>
		`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
		expect(res).toBe('fail');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
		expect(res).toBe("394,1");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("394");
		expect(res.instances.length).toBe(1);
		// </variant3>
	});
});

describe('String Fail: th element without id attribute and a td element with headers attribute that references th id', function() {
    it('th element without id attribute and a td element with headers attribute that references th id should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Hello</th><td headers='hello'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("394,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two th elements without id attribute and a td element with headers attribute that references th id', function() {
    it('two th elements without id attribute and a td element with headers attribute that references th id should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Hello</th><td headers='hello'>Hello</td></tr><tr><th>Hello</th><td headers='hello1'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("394,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: th element with id attribute set to null value and a td element with headers attribute that references th id', function() {
    it('th element with id attribute set to null value and a td element with headers attribute that references th id should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id=''>Hello</th><td headers='hello'>Hello</td><td>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("394");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("394");
       expect(res).toBe("394,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("394");
       expect(res.instances.length).toBe(1);
       expect(res.instances[0].tagName).toBe("TH");
       // </variant3>
    });
});