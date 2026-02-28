describe('String N/A: no canvas nodes', function() {
    it('no canvas nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: canvas node with style set to a "display:none" text value', function() {
    it('canvas node with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas style='display:none'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: canvas node with a role set to a text value that starts with presentation', function() {
    it('canvas node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas role='presentation'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: canvas node containing text longer than 3 characters', function() {
    it('canvas node containing text longer than 3 characters should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas>test</canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: canvas node with an aria-labelledby attribute longer than 3 characters', function() {
    it('canvas node with an aria-labelledby attribute longer than 3 characters should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>test</span><canvas aria-labelledby='label1'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: canvas node with an aria-label attribute longer than 3 characters', function() {
    it('canvas node with an aria-label attribute longer than 3 characters should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas aria-label='test'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: canvas node with a title attribute longer than 3 characters', function() {
    it('canvas node with a title attribute longer than 3 characters should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas title='test'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: canvas node containing text shorter than 4 characters', function() {
    it('canvas node containing text shorter than 4 characters should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas>go</canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: canvas node with aria-label attribute shorter than 4 characters', function() {
    it('canvas node without an aria-label attribute shorter than 4 characters should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas aria-label='go'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("599,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: canvas node with a title attribute shorter than 4 characters', function() {
    it('canvas node without a title attribute shorter than 4 characters should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<canvas title='go'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("599,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: canvas node with an aria-labelledby attribute shorter than 4 characters', function() {
    it('canvas node with an aria-labelledby attribute shorter than 4 characters should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>go</span><canvas aria-labelledby='label1'></canvas>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
       expect(res).toBe("599,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("599");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String N/A: canvas node inside excluded elements', function() {
   const testCases = [
      { element: 'button', html: '<button><canvas aria-label="go"></canvas></button>' },
      { element: 'meter', html: '<meter><canvas aria-label="go"></canvas></meter>' }
   ];

   testCases.forEach(({ element, html }) => {
      it(`canvas node inside ${element} should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("599");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});

describe('String N/A: canvas node inside elements with excluded roles', function() {
   const testCases = [
      { role: 'button', html: '<div role="button"><canvas aria-label="go"></canvas></div>' },
      { role: 'checkbox', html: '<div role="checkbox"><canvas aria-label="go"></canvas></div>' },
      { role: 'img', html: '<div role="img"><canvas aria-label="go"></canvas></div>' },
      { role: 'menuitemcheckbox', html: '<div role="menuitemcheckbox"><canvas aria-label="go"></canvas></div>' },
      { role: 'menuitemradio', html: '<div role="menuitemradio"><canvas aria-label="go"></canvas></div>' },
      { role: 'meter', html: '<div role="meter"><canvas aria-label="go"></canvas></div>' },
      { role: 'option', html: '<div role="option"><canvas aria-label="go"></canvas></div>' },
      { role: 'progressbar', html: '<div role="progressbar"><canvas aria-label="go"></canvas></div>' },
      { role: 'radio', html: '<div role="radio"><canvas aria-label="go"></canvas></div>' },
      { role: 'scrollbar', html: '<div role="scrollbar"><canvas aria-label="go"></canvas></div>' },
      { role: 'separator', html: '<div role="separator"><canvas aria-label="go"></canvas></div>' },
      { role: 'slider', html: '<div role="slider"><canvas aria-label="go"></canvas></div>' },
      { role: 'switch', html: '<div role="switch"><canvas aria-label="go"></canvas></div>' },
      { role: 'tab', html: '<div role="tab"><canvas aria-label="go"></canvas></div>' }
   ];

   testCases.forEach(({ role, html }) => {
      it(`canvas node inside element with role="${role}" should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("599");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("599");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("599");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});
