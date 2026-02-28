describe('String N/A: no map nodes', function() {
    it('no map nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a map node with a role attribute set to the text value "presentation"', function() {
    it('a map node with a role attribute set to the text value "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<map name='test' role='presentation'></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a map node with a style attribute set to the text value "display:none;"', function() {
    it('a map node with a style attribute set to the text value "display:none;" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<map name='test' style='display:none;'></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a map node without a name attribute', function() {
    it('a map node without a name attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<map></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a map node with a name attribute set to a null value', function() {
    it('a map node with a name attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<map name=''></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a map node with a name attribute set to a text value, preceded by an img with an usemap attribute set to the maps name preceded by a #', function() {
    it('a map node with a name attribute set to a text value, preceded by an img with an usemap attribute set to the maps name preceded by a # should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img usemap='#test'><map name='test'><area href='#'></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two map nodes with a name attribute set to a text value, preceded by an img with an usemap attribute set to the maps name preceded by a #', function() {
    it('two map nodes with a name attribute set to a text value, preceded by an img with an usemap attribute set to the maps name preceded by a # should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img usemap='#test1'><map name='test1'><area href='#'></map><img usemap='#test2'><map name='test2'><area href='#'></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two map nodes, one with a name attribute set to a text value with a double quotation mark, preceded by an img with an usemap attribute set to the maps name preceded by a #', function() {
   it('two map nodes, one with a name attribute set to a text value with a double quotation mark, preceded by an img with an usemap attribute set to the maps name preceded by a # should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img usemap='#test1\"'><map name='test1\"'><area href='#'></map><img usemap='#test2'><map name='test2'><area href='#'></map>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("86");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a map node with a name attribute set to a text value, not preceded by an img', function() {
    it('a map node with a name attribute set to a text value, not preceded by an img should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<map name='test'><area href='#'></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("86,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two map nodes with a name attribute set to a text value, not preceded by an img', function() {
    it('two map nodes with a name attribute set to a text value, not preceded by an img should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<map name='test'><area href='#'></map><map name='test'><area href='#'></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("86,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: a map node with a name attribute set to a text value, not preceded by an img with an usemap attribute set to the maps name preceded by a #', function() {
    it('a map node with a name attribute set to a text value, not preceded by an img with an usemap attribute set to the maps name preceded by a # should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img usemap='#incorrect'><map name='test'><area href='#'></map>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("86");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("86");
       expect(res).toBe("86,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("86");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});