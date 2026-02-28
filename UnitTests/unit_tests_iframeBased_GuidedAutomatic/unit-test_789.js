describe('String N/A: no meta nodes', function() {
   it('no meta nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("789");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("789");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("789");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a meta node with no content attribute', function() {
   it('a meta node with no content attribute should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("789");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("789");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("789");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a meta node with a http-equiv attribute value of "ScreenOrientation"', function() {
   it('a meta node with a http-equiv attribute value of "ScreenOrientation" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta http-equiv='ScreenOrientation'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("789");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("789");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("789");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a meta node with a http-equiv attribute value of "ScreenOrientation" and a content attribute value that does not include the text "autoRotate:disabled"', function() {
   it('a meta node with a http-equiv attribute value of "ScreenOrientation" and a content attribute value of "autoRotate:disabled" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta http-equiv='ScreenOrientation' content=''>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("789");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("789");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("789");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a meta node with a http-equiv attribute value of "ScreenOrientation" and a content attribute value of "autoRotate:disabled"', function() {
   it('a meta node with a http-equiv attribute value of "ScreenOrientation" and a content attribute value of "autoRotate:disabled" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta http-equiv='ScreenOrientation' content='autoRotate:disabled'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("789");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("789");
      expect(res).toBe("789,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("789");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});
