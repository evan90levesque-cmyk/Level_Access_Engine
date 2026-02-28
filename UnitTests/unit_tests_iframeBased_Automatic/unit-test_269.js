describe('String Pass: no nodes, available to assistive technologies, has an aria-valuetext attribute', function() {
    it('no nodes, available to assistive technologies, has an aria-valuetext attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a style attribute set to "display:none", available to assistive technologies, has an aria-valuetext attribute', function() {
    it('a node with a style attribute set to "display:none", has an aria-valuetext attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p style='display:none' aria-valuetext='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role attribute set to "presentation", available to assistive technologies, has an aria-valuetext attribute', function() {
    it('a node with a role attribute set to "presentation", has an aria-valuetext attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p role='presentation' aria-valuetext='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "progressbar", available to assistive technologies, has an aria-valuetext attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "progressbar", available to assistive technologies, has an aria-valuetext attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='progressbar' aria-valuetext='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a progress node with an aria-valuetext attribute', function() {
   it('a progress node with an aria-valuetext attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<progress value='10' max='100' aria-valuetext='10'>10%</progress>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("269");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "scrollbar", available to assistive technologies, has an aria-valuetext attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "scrollbar", available to assistive technologies, has an aria-valuetext attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='scrollbar' aria-valuetext='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "slider", available to assistive technologies, has an aria-valuetext attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "slider", available to assistive technologies, has an aria-valuetext attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='slider' aria-valuetext='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "spinbutton", available to assistive technologies, has an aria-valuetext attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "spinbutton", available to assistive technologies, has an aria-valuetext attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='spinbutton' aria-valuetext='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node, available in the DOM, has an aria-valuetext attribute', function() {
    it('a span node, available in the DOM, has an aria-valuetext attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-valuetext='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("269,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node role="button", available in the DOM, has an aria-valuetext attribute', function() {
    it('a span node role="button", available in the DOM, has an aria-valuetext attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-valuetext='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
       expect(res).toBe("269,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("269");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: an input node with a type attribute set to the text value "range" with an aria-valuetext attribute', function() {
   it('an input node with a type attribute set to the text value "range" with an aria-valuetext attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='range' value='5' step='1' min='0' max='5' aria-valuetext='0'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("269");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an input node with a type attribute set to the text value "number" with an aria-valuetext attribute', function() {
   it('an input node with a type attribute set to the text value "number" with an aria-valuetext attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='number' value='5' min='0' max='5' aria-valuetext='0'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("269");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a meter node with an aria-valuetext attribute', function() {
   it('a meter node with an aria-valuetext attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<meter value='10' max='100' low='10' high='80' aria-valuetext='10'>10%</meter>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("269");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "meter", available to assistive technologies, has an aria-valuetext attribute', function() {
   it('no node, excluding nodes with a role attribute that starts with "meter", available to assistive technologies, has an aria-valuetext attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='meter' aria-valuetext='50'>Mock meter div</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("269");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: no node, excluding focusable (having a non-negative tabindex set) nodes with a role attribute that starts with "separator", available to assistive technologies, has an aria-valuetext attribute', function() {
   it('no node, excluding focusable (having a non-negative tabindex set) nodes with a role attribute that starts with "meter", available to assistive technologies, has an aria-valuetext attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div tabindex='1' role='separator' aria-valuetext='100'>Focusable separator div</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("269");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a programmatically focusable node (having a negative tabindex set) with a role attribute that starts with "separator", available in the DOM, has an aria-valuetext attribute', function() {
   it('a programmatically focusable node (having a negative tabindex set) with a role attribute that starts with "separator", available in the DOM, has an aria-valuetext attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div tabindex='-1' role='separator' aria-valuetext='100'>Focusable separator div</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("269");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("269");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("269");
      expect(res).toBe(null);
      // </variant3>
   });
});
