describe('String Pass: the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "en"', function() {
    it('the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "en" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("880");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. "cmn"', function() {
    it('the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. "cmn" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "cmn");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("880");
       expect(res).toBe(null);
       // </variant3>
    });
});

//fr-CA now on allowed list from ENG-996
describe('String N/A: the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-CA" (French as used in Canada)', function() {
    it('the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-CA" (French as used in Canada) should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "fr-CA");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("880");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data"', function() {
    it('the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "data");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("880");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: the root html tag has no lang attribute', function() {
    it('the root html tag has no lang attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").removeAttribute("lang");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("880");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: the root html tag has a lang attribute set to an empty string', function() {
    it('the root html tag has a lang attribute set to an empty string should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("880");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: the root html tag has a lang attribute set to a text value that starts with an IANA primary language value followed by just a hyphen, e.g. "en-"', function() {
   it('the root html tag has a lang attribute set to a text value that starts with an IANA primary language value followed by just a hyphen, e.g. "en-" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en-");
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("880");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: the root html tag has a lang attribute set to a text value that starts with an IANA primary language value followed by a hyphen and an invalid extended subtag, e.g. "en-test"', function() {
   it('the root html tag has a lang attribute set to a text value that starts with an IANA primary language value followed by a hyphen and an invalid extended subtag, e.g. "en-test" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en-test");
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
      expect(res).toBe("880,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("880");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

//While fr-be is legit, it's not on our minimal commonly used allowed list
describe('String Fail: the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-be" (French as used in Belgium)', function() {
   it('the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-be" (French as used in Canada) should be equal to NA', function() {
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "fr-be");
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
      expect(res).toBe("880,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("880");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: the root html tag has a lang attribute set to "en-us"', function() {
   it('the root html tag has a lang attribute set to "en-us" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en-us");
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("880");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: the root html tag has a lang attribute set to capitalized "en-US"', function() {
   it('the root html tag has a lang attribute set to "en-US" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en-US");
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("880");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("880");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("880");
      expect(res).toBe(null);
      // </variant3>
   });
});