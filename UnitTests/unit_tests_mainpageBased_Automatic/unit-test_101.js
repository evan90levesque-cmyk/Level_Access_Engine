describe(`String Pass (main page): the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"en\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"en\" should be equal to pass`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "";
      document.querySelector("html").setAttribute("lang", "en");
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"en\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"en\" should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "en");
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. \"cmn\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. \"cmn\" should be equal to pass`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "<a href='hello.html'>㰀栀琀洀氀</a>";
      document.querySelector("html").setAttribute("lang", "cmn");
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. \"cmn\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that starts with a three character IANA primary language value e.g. \"cmn\" should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='hello.html'>㰀栀琀洀氀</a>";
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "cmn");
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"fr-CA\" (French as used in Canada)`, function () {
   it(`the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"fr-CA\" (French as used in Canada) should be equal to pass`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "";
      document.querySelector("html").setAttribute("lang", "fr-CA");
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"fr-CA\" (French as used in Canada)`, function () {
   it(`the root html tag has a lang attribute set to a text value that starts with an IANA primary language value e.g. \"fr-CA\" (French as used in Canada) should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "fr-CA");
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"data\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"data\" should be equal to pass`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "";
      document.querySelector("html").setAttribute("lang", "data");
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (iframe): the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"data\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"data\" should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "data");
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Fail (main page): the root html tag has no lang attribute`, function () {
   it(`the root html tag has no lang attribute should be equal to fail`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "";
      document.querySelector("html").removeAttribute("lang");
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("fail");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("101,1")
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res.instances.length).toBe(1)
      // </variant3>
   });
});

describe(`String Pass (iframe): the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"data\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"data\" should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.querySelector("html").removeAttribute("lang");
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe(`String Pass (main page): the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"\" should be equal to pass`, function () {
      document.head.innerHTML = "";
      document.body.innerHTML = "";
      document.querySelector("html").setAttribute("lang", "");
      LevelAccess_AccessEngine.setWindowUnderTest(window);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("")
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null)
      // </variant3>
   });
});

describe(`String Pass (iframe): the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"\"`, function () {
   it(`the root html tag has a lang attribute set to a text value that does not start with an IANA primary language value e.g. \"\" should be equal to pass`, function () {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.querySelector("html").setAttribute("lang", "");
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("101");
      expect(res).toBe("pass");
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("101");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("101");
      expect(res).toBe(null);
      // </variant3>
   });
});
