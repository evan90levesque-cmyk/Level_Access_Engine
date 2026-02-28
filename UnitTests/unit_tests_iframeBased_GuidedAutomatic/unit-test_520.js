describe('String N/A: iframe node with style set to a "display:none" text value', function() {
    it('iframe node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe style="display:none" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with a role set to a text value that starts with presentation and a title attribute set to "this is a descriptive title"', function() {
    it('iframe node with a role set to a text value that starts with presentation and a title attribute set to "this is a descriptive title" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe title="this is a descriptive title" role="presentation" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with an aria-label attribute set to the text value "this is a descriptive title"', function() {
    it('iframe node with an aria-label attribute set to the text value "this is a descriptive title" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe aria-label="this is a descriptive title" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: iframe node with a title attribute set to the text value "this is a descriptive title"', function() {
    it('iframe node with a title attribute set to the text value "this is a descriptive title" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe title="this is a descriptive title" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: iframe node with an aria-label attribute set to the text value "title"', function() {
    it('iframe node with an aria-label attribute set to the text value "title" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe aria-label="title" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("520,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: iframe node with an aria-label attribute set to the text value "iframe"', function() {
    it('iframe node with an aria-label attribute set to the text value "iframe" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe aria-label="iframe" id="test" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("520,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: iframe node with an aria-label attribute set to the text value "top"', function() {
    it('iframe node with an aria-label attribute set to the text value "top" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe aria-label="top" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("520,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: iframe node with a title attribute set to the text value "bottom"', function() {
    it('iframe node with a title attribute set to the text value "bottom" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe title="bottom" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("520,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: iframe node with a title attribute set to the text value "left"', function() {
    it('iframe node with a title attribute set to the text value "left" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe title="left" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("520,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: iframe node with a title attribute set to the text value "right"', function() {
    it('iframe node with a title attribute set to the text value "right" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<iframe title="right" src="#"></iframe>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
       expect(res).toBe("520,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("520");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String N/A: an iframe with aria-hidden set to "true" and a title attribute set to "this is a descriptive title"', function() {
   it('an iframe with aria-hidden set to "true" and a title attribute set to "this is a descriptive title" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe title="this is a descriptive title" aria-hidden="true" src="#">';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("520");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an iframe with tabindex set to "-1" and a title attribute set to "this is a descriptive title"', function() {
   it('an iframe with tabindex set to "-1" and a title attribute set to "this is a descriptive title" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.outerHTML = '<iframe title="this is a descriptive title" tabindex="-1" src="#">';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome("520");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("520");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("520");
      expect(res).toBe(null);
      // </variant3>
   });
});