describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a lang attribute set to a null value', function() {
   it('an span node with a lang attribute set to a null value should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang=''>Bonjour</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("65");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a span node with a lang attribute set to a null value and a role attribute set to the text value "presentation"', function() {
    it('a span node with a lang attribute set to a null value and a role attribute set to the text value "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='en' role='presentation'>Bonjour</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with a lang attribute set to a null value and a style attribute set to the text value "display:none;"', function() {
    it('a span node with a lang attribute set to a null value and a style attribute set to the text value "display:none;" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='en' style='display:none;'>Bonjour</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span tag that has a lang attribute set to a text value that starts with an IANA primary language value e.g. "en"', function() {
    it('a span tag that has a lang attribute set to a text value that starts with an IANA primary language value  e.g. "en" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='en'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span tag that has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. "cmn"', function() {
    it('a span tag that has a lang attribute set to a text value that starts with a three character IANA primary language value  e.g. "cmn" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='cmn'>㰀栀琀洀氀</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span tags that has a lang attribute set to a text value that starts with an IANA primary language value e.g. "en"', function() {
    it('two span tags that has a lang attribute set to a text value that starts with an IANA primary language value  e.g. "en" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='en'>Test</span><span lang='en'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a span tag that has a lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-CA"', function() {
    it('a span tag that has a lang attribute set to a text value that starts with an IANA primary language value  e.g. "fr-CA" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='fr-CA'>Bonjour</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span tag that has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data"', function() {
    it('a span tag that has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data" should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='data'>Bonjour</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("65,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span tag that has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "d"', function() {
    it('a span tag that has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "d" should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='d'>Bonjour</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("65,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span tag that has a lang attribute set to a text value that is not formatted correctly e.g. "en_us"', function() {
    it('a span tag that has a lang attribute set to a text value that is not formatted correctly e.g. "en_us" should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='en_us'>Bonjour</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("65,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two span tags that has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data"', function() {
    it('two span tags that has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data" should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span lang='data'>Bonjour</span><span lang='data'>Bonjour</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
       expect(res).toBe("65,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("65");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Pass: a span tag that has a lang attribute set to a text value that starts with', function() {
   for (const subtag of Object.keys(LevelAccess_AccessEngine.ACCEPTED_LANGUAGE_SUBTAGS)) {
      it(`"${subtag}" should pass`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = `<span lang='${subtag}'></span>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome("65");
         expect(res).toBe('pass');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("65");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("65");
         expect(res).toBe(null);
         // </variant3>
      });
   }
});