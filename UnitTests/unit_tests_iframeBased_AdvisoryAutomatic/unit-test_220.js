describe('String N/A: no a elements', function() {
    it('no a elements should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: no a elements with a target attribute', function() {
    it('no a elements with a target attribute should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>Hello</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a element with target set to "_blank" with style set to a "display:none" text value', function() {
    it('a element with target set to "_blank" with style set to a "display:none" text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' style='display:none'>Hello</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a element with target set to "_blank" with a role set to a text value that starts with presentation', function() {
    it('a element with target set to "_blank" with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' role='presentation'>Hello</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new window"', function() {
    it('a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new window" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new window</span><a href='#' target='_blank' aria-labelledby='label1'>Hello</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});
describe('String Pass: a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new window/tab"', function() {
   it('a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new window/tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new window/tab</span><a href='#' target='_blank' aria-labelledby='label1'>Hello</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new tab"', function() {
   it('a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new tab</span><a href='#' target='_blank' aria-labelledby='label1'>Hello</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new tab/window"', function() {
   it('a element with target set to "_blank" with an aria-labelledby attribute that associates it with a span element that contains the text "new tab/window" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new tab/window</span><a href='#' target='_blank' aria-labelledby='label1'>Hello</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new window"', function() {
    it('a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new window" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new window</span><a href='#' target='_blank' aria-describedby='label1'>Hello</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});
describe('String Pass: a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new window/tab"', function() {
   it('a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new window/tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new window/tab</span><a href='#' target='_blank' aria-describedby='label1'>Hello</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new tab"', function() {
   it('a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new tab</span><a href='#' target='_blank' aria-describedby='label1'>Hello</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new tab/window"', function() {
   it('a element with target set to "_blank" with an aria-describedby attribute that associates it with a span element that contains the text "new tab/window" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>new tab/window</span><a href='#' target='_blank' aria-describedby='label1'>Hello</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a element with target set to "_blank" with an aria-label attribute that contains the text "new window"', function() {
    it('a element with target set to "_blank" with an aria-label attribute that contains the text "new window" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' aria-label='new window'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});
describe('String Pass: a element with target set to "_blank" with an aria-label attribute that contains the text "new window/tab"', function() {
   it('a element with target set to "_blank" with an aria-label attribute that contains the text "new window/tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' aria-label='new window/tab'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with an aria-label attribute that contains the text "new tab"', function() {
   it('a element with target set to "_blank" with an aria-label attribute that contains the text "new tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' aria-label='new tab'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with an aria-label attribute that contains the text "new tab/window"', function() {
   it('a element with target set to "_blank" with an aria-label attribute that contains the text "new tab/window" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' aria-label='new tab/window'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a element with target set to "_blank" with text in its body that contains the text "new window"', function() {
    it('a element with target set to "_blank" with text in its body that contains the text "new window" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank'>Hello (new window)</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});
describe('String Pass: a element with target set to "_blank" with text in its body that contains the text "new window/tab"', function() {
   it('a element with target set to "_blank" with text in its body that contains the text "new window/tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank'>Hello (new window/tab)</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with text in its body that contains the text "new tab"', function() {
   it('a element with target set to "_blank" with text in its body that contains the text "new tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank'>Hello (new tab)</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with text in its body that contains the text "new tab/window"', function() {
   it('a element with target set to "_blank" with text in its body that contains the text "new tab/window" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank'>Hello (new tab/window)</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a element with target set to "_blank" with a title attribute that contains the text "new window"', function() {
    it('a element with target set to "_blank" with a title attribute that contains the text "new window" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' title='new window'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res).toBe(null);
       // </variant3>
    });
});
describe('String Pass: a element with target set to "_blank" with a title attribute that contains the text "new window/tab"', function() {
   it('a element with target set to "_blank" with a title attribute that contains the text "new window/tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' title='new window/tab'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with a title attribute that contains the text "new tab"', function() {
   it('a element with target set to "_blank" with a title attribute that contains the text "new tab" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' title='new tab'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a element with target set to "_blank" with a title attribute that contains the text "new tab/window"', function() {
   it('a element with target set to "_blank" with a title attribute that contains the text "new tab/window" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank' title='new tab/window'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("220");
      expect(res).toBe(null);
      // </variant3>
   });
});
 
describe('String Fail: a element with target set to "_blank" without an aria-labelledby, aria-label, alt, text in its body or title attribute that contains the text "new window"', function() {
    it('a element with target set to "_blank" without an aria-labelledby, aria-label, alt, text in its body or title attribute that contains the text "new window" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' target='_blank'>Hello</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("220");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("220");
       expect(res).toBe("220,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("220");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});