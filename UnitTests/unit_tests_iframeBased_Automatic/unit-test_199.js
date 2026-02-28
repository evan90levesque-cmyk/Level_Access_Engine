describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("199");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("199");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("199");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a title node in the head', function() {
    it('a title node in the head should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title></title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("199");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("199");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("199");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a title node in the head with a role="input"', function() {
    it('a title node in the head with a role="input" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "<title role='input'></title>";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("199");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("199");
       expect(res).toBe("199,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("199");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: a title node in the body', function() {
   it('a title node in the body should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title></title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("199");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("199");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("199");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a title node in the body with a role="input"', function() {
   it('a title node in the body with a role="input" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<title role='input'></title>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("199");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("199");
      expect(res).toBe("199,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("199");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: an svg with a title element with a role="input" that is empty and a document title element that is not empty', function() {
   it('an svg with a title element with a role="input" that is empty and a document title element that is not empty should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg">
            <title role='input'></title>
         </svg>
         <title>Test</title>
      `;

      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("199");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("199");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("199");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a div with an empty title element in the body tested via runAllTests_returnInstances_JSON_NodeCapture', function() {
   it('a div with an empty title element in the body tested via runAllTests_returnInstances_JSON_NodeCapture should be equal to fail', function() {
      document.head.innerHTML = "";
      document.body.innerHTML = '<div><title id="target"></title></div>';
      var targetParent = document.querySelector("#target").parentElement;
      LevelAccess_AccessEngine.setWindowUnderTest(window);
      var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(targetParent);
      var resObj = JSON.parse(res);
      expect(resObj.length).toBe(1);
   });
});