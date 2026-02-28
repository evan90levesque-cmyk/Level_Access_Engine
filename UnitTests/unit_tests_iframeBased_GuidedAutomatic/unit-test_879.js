describe('String Pass: p node with lang attribute set to a text value that starts with an IANA primary language value e.g. "en"', function() {
    it('p node with lang attribute set to a text value that starts with an IANA primary language value e.g. "en" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='en'></p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("879");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: p node with lang attribute set to a text value that starts with a three character IANA primary language value e.g. "cmn"', function() {
    it('p node with lang attribute set to a text value that starts with a three character IANA primary language value e.g. "cmn" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='cmn'></p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("879");
       expect(res).toBe(null);
       // </variant3>
    });
});

//fr-CA now on allowed list from ENG-996
describe('String N/A: p node with lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-CA" (French as used in Canada)', function() {
    it('p node with lang attribute set to a text value that starts with an IANA primary language value e.g. "fr-CA" (French as used in Canada) should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='fr-CA'></p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("879");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: p node with lang attribute set to a text value that does not start with an IANA primary language value e.g. "data"', function() {
    it('p node with lang attribute set to a text value that does not start with an IANA primary language value e.g. "data" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='data'></p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("879");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: p node with no lang attribute', function() {
    it('p node with no lang attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p></p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("879");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: p node with lang attribute set to an empty string', function() {
    it('p node with lang attribute set to an empty string should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang=''></p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("879");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: p node with lang attribute set to a text value that starts with an IANA primary language value followed by just a hyphen, e.g. "en-"', function() {
   it('p node with lang attribute set to a text value that starts with an IANA primary language value followed by just a hyphen, e.g. "en-" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='en-'></p>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("879");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: p node with lang attribute set to a text value that starts with an IANA primary language value followed by a hyphen and an invalid extended subtag, e.g. "en-test"', function() {
   it('p node with lang attribute set to a text value that starts with an IANA primary language value followed by a hyphen and an invalid extended subtag, e.g. "en-test" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='en-test'></p>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
      expect(res).toBe("879,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("879");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

//While fr-be is legit, it's not on our minimal commonly used allowed list
describe('String Fail: p node with lang attribute set to a text value that starts with an IANA primary language value followed by a hyphen and an invalid extended subtag, e.g. "fr-be"', function() {
   it('p node with lang attribute set to a text value that starts with an IANA primary language value followed by a hyphen and an invalid extended subtag, e.g. "fr-be" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='fr-be'></p>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
      expect(res).toBe("879,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("879");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: p node with lang attribute set to "en-us"', function() {
   it('p node with lang attribute set to "en-us" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='en-us'></p>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("879");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: p node with lang attribute set to capitalized "en-US"', function() {
	it('p node with lang attribute set to "en-US" should be equal to pass', function() {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p lang='en-US'></p>";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("879");
		expect(res).toBe('na');
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("879");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("879");
		expect(res).toBe(null);
		// </variant3>
	});
});