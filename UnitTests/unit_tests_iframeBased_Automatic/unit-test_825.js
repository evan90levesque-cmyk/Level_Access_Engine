describe('String N/A: no th nodes', function() {
   it('no th nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
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
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: td element with a headers attribute not available to assistive technology', function() {
   it('td element with a headers attribute not available to assistive technology should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td headers='hello' aria-hidden='true'>Hello</td><td>Hello</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
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
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
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
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: th element with id attribute set to non-null value "hello" and a td element with headers attribute that references th id with extraneous spaces', function() {
   it('th element with id attribute set to non-null value "hello" and a td element with headers attribute that references th id with extraneous spaces should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td headers=' hello '>Hello</td><td>Hello</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
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
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});


describe('String Pass: two th elements with id attribute set to non-null value "header1" and "header2" and a td element with headers attribute that is references th ids with extraneous spaces', function() {
   it('two th elements with id attribute set to non-null value "header1" and "header2" and a td element with headers attribute that references th ids with extraneous spaces should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='hello'>Hello</th><td headers='header1'>Hello</td><td>Hello</td></tr><tr><th id='header2'>Hello</th><td headers='   header1   header2  '>Hello</td><td>Hello</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});


describe('String Pass: th element without id attribute and a td element with headers attribute that references an id that does not exist', function() {
   it('th element without id attribute and a td element with headers attribute that references an id that does not exist should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Hello</th><td headers='hello'>Hello</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two th elements without id attributes and two td elements with headers attributes that reference ids that do not exist', function() {
   it('two th elements without id attributes and two td elements with headers attributes that reference ids that do not exist should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Hello</th><td headers='hello'>Hello</td></tr><tr><th>Hello</th><td headers='hello1'>Hello</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: th element with id attribute set to null value and a td element with headers attribute that references an id that does not exist', function() {
   it('th element with id attribute set to null value and a td element with headers attribute that references an id that does not exist should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id=''>Hello</th><td headers='hello'>Hello</td><td>Hello</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a td element with a headers attribute that references the id attribute of a div element outside the table of the td element', function() {
   it('a td element with a headers attribute that references the id attribute of a div element outside the table of the td element should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="foo">Some Text</div><table><thead><tr><th id="bar">Noise</th></tr></thead><tbody><tr><td headers="foo">pop</td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("825,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a td element with a headers attribute that references both the id attribute of a div element outside the table and the id attribute of a th element inside the table', function() {
   it('a td element with a headers attribute that references both the id attribute of a div element outside the table and the id attribute of a th element inside the table should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="foo">Some Text</div><table><thead><tr><th id="bar">Noise</th></tr></thead><tbody><tr><td headers="foo bar">pop</td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("825,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a td element with a headers attribute that references both the id attribute of a div element with a quotation mark outside the table and the id attribute of a th element inside the table', function() {
   it('a td element with a headers attribute that references both the id attribute of a div element with a quotation mark outside the table and the id attribute of a th element inside the table should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="foo\'">Some Text</div><table><thead><tr><th id="bar">Noise</th></tr></thead><tbody><tr><td headers="foo\' bar">pop</td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("825,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: a td element with a headers attribute that references the id attribute of two th elements inside the table', function() {
   it('a td element with a headers attribute that references the id attribute of two th elements inside the table should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="foo">Some Text</div><table><thead><tr><th id="bar">Noise</th><th id="biz">Another Noise</th></tr></thead><tbody><tr><td headers="bar biz">pop</td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("825");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("825");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("825");
      expect(res).toBe(null);
      // </variant3>
   });
});