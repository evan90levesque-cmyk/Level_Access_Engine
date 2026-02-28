describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an a node, no accessible name', function() {
    it('an a node, no accessible name should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an a node with a quotation mark in its href, no accessible name', function() {
   it('an a node with a quotation mark in its href, no accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href=\"#'\"></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("242");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an a node with a style set to a text value "display:none"', function() {
    it('an a node with a style set to a text value "display:none" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' style='display:none' aria-label='alternative'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an a node with a role set to a text value "presentation"', function() {
    it('an a node with a style set to a text value "display:none" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' role='presentation' aria-label='alternative'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two links with the same href but different labels', function() {
    it('two links with the same href but different labels should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' aria-label='alternative1'></a><a href='#' aria-label='alternative2'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an a node with an accessible name calculation set to a non-suspicious text value', function() {
    it('an a node with an accessible name calculation set to a non-suspicious text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#1' aria-label='good alternative'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two a nodes with different acc name text value', function() {
    it('two a nodes with different acc name text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#1' aria-label='good alternative1'></a><a href='#2' aria-label='good alternative2'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: three a nodes with different acc name text value', function() {
    it('three a nodes with different acc name text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#1' aria-label='good alternative1'></a><a href='#2' aria-label='good alternative2'></a><a href='#3' aria-label='good alternative3'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: two a nodes with the same acc name text value but different href values', function() {
    it('two a nodes with the same acc name text value but different href values should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#1' aria-label='generic'></a><a href='#2' aria-label='generic'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("242,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: three a nodes with the same acc name text value but different href values', function() {
    it('three a nodes with the same acc name text value but different href values should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#1' aria-label='generic'></a><a href='#2' aria-label='generic'></a><a href='#3' aria-label='generic'></a><a href='#4' aria-label='this is a good value'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
       expect(res).toBe("242,3");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("242");
       expect(res.instances.length).toBe(3);
       // </variant3>
    });
});

describe('String Fail: three a nodes with the same acc name text value but different href values that include double quotation marks', function() {
   it('three a nodes with the same acc name text value but different href values that include double quotation marks should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='tel:\"(202)555-0036\"' aria-label='generic'></a><a href='tel:\"(202)555-0380\"' aria-label='generic'></a><a href='tel:\"(202)555-0465\"' aria-label='generic'></a><a href='tel:\"(202)555-0824\"' aria-label='this is a good value'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
      expect(res).toBe("242,3");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("242");
      expect(res.instances.length).toBe(3);
      // </variant3>
   });
});

describe('String Fail: three a nodes, all of which have the same acc name text value, and two of which have different href values', function() {
   it('three a nodes, all of which have the same acc name text value, and two of which have different href values should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='foo'>Something</a><a href='foo'>Something</a><a href='bar'>Something</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
      expect(res).toBe("242,3");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("242");
      expect(res.instances.length).toBe(3);
      // </variant3>
   });
});

describe('String Pass: two identical a nodes', function() {
   it('two identical a nodes should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='foo'>Something</a><a href='foo'>Something</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("242");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two a nodes, one of which has a href value that ends with a slash', function() {
   it('two a nodes, one of which has a href value that ends with a slash should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='foo/bar'>Something</a><a href='foo/bar/'>Something</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome("242");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("242");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("242");
      expect(res).toBe(null);
      // </variant3>
   });
});