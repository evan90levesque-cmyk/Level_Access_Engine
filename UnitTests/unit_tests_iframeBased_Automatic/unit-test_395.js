describe('String N/A: no th nodes', function() {
    it('no th nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: th element with id attribute set to non-null value "hello" and a td element with headers attribute that references th id', function() {
    it('th element with id attribute set to non-null value "hello" and a td element with headers attribute that references th id should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td headers='hello'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two rows - header row contains an empty td as first element; otherwise, all fine', function() {
    it('two rows - header row contains an empty td as first element; otherwise, all fine should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td></td><th id='hello1'>Hello</th><th id='hello2'>Hello</th></tr><tr><th id='hello3'>Hello</th><td headers='hello1 hello3'>Hello</td><td headers='hello2 hello3'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two th elements with id attribute set to non-null value "hello" and a td element with headers attribute that references th id', function() {
    it('two th elements with id attribute set to non-null value "hello" and a td element with headers attribute that references th id should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td headers='hello'>Hello</td></tr><tr><th id='hello1'>Hello</th><td headers='hello1'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two tables on the same page. The first is using "headers" and "id" attributes, the second is not', function() {
	it('two tables where the first is using id/headers attributes with non-null values and the second is not using them at all should pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
			<div>
				<table>
					<tr>
						<th id='hello'>Hello</th>
						<td headers='hello'>Hello</td>
					</tr>
					<tr>
						<th id='hello1'>Hello</th>
						<td headers='hello1'>Hello</td>
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
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
		expect(res).toBe('pass');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("395");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe('String Fail: two tables on the same page. The first is using "headers" and "id" attributes, the second is not', function() {
	it('two tables where in the first - one td element without headers attribute should fail. The second table without id/headers attributes should not affect the results', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `
			<div>
				<table>
					<tr>
						<th id='hello'>Hello</th>
						<td headers='hello'>Hello</td>
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
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
		expect(res).toBe('fail');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
		expect(res).toBe("395,1");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("395");
		expect(res.instances.length).toBe(1);
		// </variant3>
	});
});

describe('String Fail: th element with id attribute and a td element without headers attribute', function() {
    it('th element with id attribute and a td element without headers attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td>Hello</td><td headers='hello'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("395,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two th elements with id attribute and a td element without headers attribute', function() {
    it('two th elements with id attribute and a td element without headers attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td>Hello</td><td>Hello</td><td headers='hello'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("395,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: th element with id attribute and a td element with headers attribute set to null value', function() {
    it('th element with id attribute set to null value and a td element with headers attribute that references th id should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td headers=''>Hello</td><td headers='hello'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("395,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res.instances.length).toBe(1);
       expect(res.instances[0].tagName).toBe("TD");
       // </variant3>
    });
});

describe('String Fail: two rows - header row contains an empty td as first element; otherwise, missing headers in second row', function() {
    it('two rows - header row contains an empty td as first element; otherwise, missing headers in second row should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td></td><th id='hello1'>Hello</th><th id='hello2'>Hello</th></tr><tr><th id='hello3'>Hello</th><td>Hello</td><td headers='hello2 hello3'>Hello</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("395");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("395");
       expect(res).toBe("395,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("395");
       expect(res.instances.length).toBe(1);
       expect(res.instances[0].tagName).toBe("TD");
       // </variant3>
    });
});