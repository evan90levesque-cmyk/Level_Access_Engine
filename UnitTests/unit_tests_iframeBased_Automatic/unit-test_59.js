describe('String N/A: no meta nodes', function() {
    it('no meta nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("59");
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
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("59");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a meta node with a content attribute value that does not include the text "maximum-scale=1.0"', function() {
    it('a meta node with a content attribute value that does not include the text "maximum-scale=1.0" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta content=''>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("59");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a meta node with a content attribute value that is set to the text "maximum-scale=0.5"', function() {
    it('a meta node with a content attribute value that is set to the text "maximum-scale=0.5" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta content='maximum-scale=0.5'>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
       expect(res).toBe("59,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("59");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a meta node with a content attribute value that is set to the text "maximum-scale=1.0"', function() {
    it('a meta node with a content attribute value that is set to the text "maximum-scale=1.0" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta content='maximum-scale=1.0'>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
       expect(res).toBe("59,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("59");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a meta node with a content attribute value that is set to the text "maximum-scale=1"', function() {
   it('a meta node with a content attribute value that is set to the text "maximum-scale=1" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta content='maximum-scale=1'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("59,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: a meta node with a content attribute value that is set to the text "maximum-scale=10.0"', function() {
   it('a meta node with a content attribute value that is set to the text "maximum-scale=10.0" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta content='maximum-scale=10.0'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a meta node with a content attribute value that includes the text "maximum-scale=1.0"', function() {
    it('a meta node with a content attribute value that includes the text "maximum-scale=1.0" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
       expect(res).toBe("59,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("59");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a meta node with a content attribute value that includes the text "maximum-scale=1"', function() {
   it('a meta node with a content attribute value that includes the text "maximum-scale=1" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("59,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a meta node with a content attribute value that includes the text "maximum-scale=1" followed by a space', function() {
   it('a meta node with a content attribute value that includes the text "maximum-scale=1" followed by a space should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1 , user-scalable=no'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("59,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a meta node with a content attribute value that has the text "maximum-scale=1" at the end of the string', function() {
   it('a meta node with a content attribute value that has the text "maximum-scale=1" at the end of the string should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("59,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: a meta node with a content attribute value that includes the text "maximum-scale=10.0"', function() {
   it('a meta node with a content attribute value that includes the text "maximum-scale=10.0" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=10.0, user-scalable=no'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a meta node with a content attribute value that includes the text "maximum-scale=yes"', function() {
   it('a meta node with a content attribute value that includes the text "maximum-scale=1" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=yes, user-scalable=no'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("59,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a meta node with a content attribute value that includes the text "maximum-scale=-1"', function() {
   it('a meta node with a content attribute value that includes the text "maximum-scale=1" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=-1, user-scalable=no'>";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("59");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("59");
      expect(res).toBe("59,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("59");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});