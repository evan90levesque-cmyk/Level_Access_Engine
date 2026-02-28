describe('String Pass: the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "en"', function() {
    it('the root html tag has a lang attribute set to a text value that starts with an IANA primary language value  e.g. "en" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='hello.html'>Test</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("647");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("647");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("647");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. "cmn"', function() {
    it('the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value  e.g. "cmn" should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "cmn");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='hello.html'>㰀栀琀洀氀</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("647");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("647");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("647");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-CA" (French as used in Canada)', function() {
    it('the root html tag has a lang attribute set to a text value that starts with an IANA primary language value  e.g. "fr-CA"  (French as used in Canada) should be a pass', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "fr-CA");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("647");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("647");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("647");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data"', function() {
    it('the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data" should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "data");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("647");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("647");
       expect(res).toBe("647,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("647");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String NA: the root html tag has no lang attribute ', function() {
    it('the root html tag has no lang attribute should be a NA', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").removeAttribute("lang");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("647");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("647");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("647");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data"', function() {
    it('the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. "data" should be a fail', function() {
       document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "");
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("647");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("647");
       expect(res).toBe("647,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("647");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: the root html has a lang attribute set to a text value that starts with', function() {
   for (const subtag of Object.keys(LevelAccess_AccessEngine.ACCEPTED_LANGUAGE_SUBTAGS)) {
      it(`"${subtag}" should pass`, function() {
         document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", subtag);
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome("647");
         expect(res).toBe('pass');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("647");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("647");
         expect(res).toBe(null);
         // </variant3>
      });
   }
});