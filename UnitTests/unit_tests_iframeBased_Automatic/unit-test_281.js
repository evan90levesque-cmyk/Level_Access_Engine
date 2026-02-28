describe('String Pass: no nodes, available to assistive technologies, has an aria-expanded attribute', function() {
    it('no nodes, available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a style attribute set to "display:none", available to assistive technologies, has an aria-expanded attribute', function() {
    it('a node with a style attribute set to "display:none", has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p style='display:none' aria-expanded='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role attribute set to "presentation", available to assistive technologies, has an aria-expanded attribute', function() {
    it('a node with a role attribute set to "presentation", has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p role='presentation' aria-expanded='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding a button element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding a button element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button aria-expanded='true'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding a summary element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding a summary element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<summary aria-expanded='true'></summary>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an A element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding an A element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' aria-expanded='true'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an area element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding an area element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area href='#' aria-expanded='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an hr element without an aria role, has an aria-expanded attribute', function() {
   it('no node, excluding an hr element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<hr aria-expanded='true'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: no node, excluding an input type="button" element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding an input type="button" element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='button' aria-expanded='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="image" element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding an input type="image" element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='image' aria-expanded='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="reset" element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding an input type="reset" element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='reset' aria-expanded='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="submit" element without an aria role, has an aria-expanded attribute', function() {
    it('no node, excluding an input type="submit" element without an aria role, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='submit' aria-expanded='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "button", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "button", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "combobox", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "combobox", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute that starts with "document", available to assistive technologies, has an aria-expanded attribute', function() {
    it('node with a role attribute that starts with "document", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='document' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("281,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "link", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "link", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute that starts with "alert", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "alert", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='alert' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "alertdialog", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "alertdialog", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='alertdialog' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "article", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "article", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='article' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "banner", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "banner", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='banner' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "cell", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "cell", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='cell' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "columnheader", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "columnheader", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='columnheader' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute that starts with "complementary", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "complementary", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='complementary' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "contentinfo", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "contentinfo", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='contentinfo' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "definition", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "definition", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='definition' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "dialog", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "dialog", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='dialog' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "directory", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "directory", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='directory' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "feed", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "feed", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='feed' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "figure", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "figure", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='figure' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "form", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "form", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='form' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "grid", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "grid", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='grid' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "gridcell", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "gridcell", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='gridcell' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute that starts with "group", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "group", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='group' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "heading", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "heading", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='heading' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "img", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "img", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "landmark", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "landmark", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='landmark' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "list", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "list", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='list' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "listbox", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "listbox", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='listbox' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute that starts with "listitem", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "listitem", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='listitem' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "log", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "log", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='log' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "main", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "main", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='main' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "marquee", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "marquee", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='marquee' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "math", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "math", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='math' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "menu", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "menu", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menu' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "menubar", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "menubar", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menubar' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "menuitem", available to assistive technologies, has an aria-expanded attribute', function() {
   it('no node, excluding nodes with a role attribute that starts with "menuitem", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitem' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: node with a role attribute that starts with "menuitemcheckbox", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "menuitemcheckbox", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: node with a role attribute that starts with "menuitemcheckradio", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "menuitemcheckradio", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckradio' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "navigation", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "navigation", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='navigation' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "note", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "note", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='note' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "progressbar", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "progressbar", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='progressbar' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "radiogroup", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "radiogroup", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='radiogroup' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "region", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "region", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='region' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "row", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "row", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='row' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "rowheader", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "rowheader", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='rowheader' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute that starts with "search", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "search", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='search' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "status", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "status", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='status' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "tab", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "tab", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='tab' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: node with a role attribute that starts with "table", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "table", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='table' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "tabpanel", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "tabpanel", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='tabpanel' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "term", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "term", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='term' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "timer", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "timer", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='timer' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "toolbar", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "toolbar", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='toolbar' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "tooltip", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "tooltip", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='tooltip' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "tree", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "tree", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='tree' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: node with a role attribute that starts with "treegrid", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "treegrid", available to assistive technologies, has an aria-expanded attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treegrid' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("281,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "treeitem", available to assistive technologies, has an aria-expanded attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "treeitem", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treeitem' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a span node, available in the DOM, has an aria-expanded attribute', function() {
    it('a span node, available in the DOM, has an aria-expanded attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("281,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node role="section", available in the DOM, has an aria-expanded attribute', function() {
    it('a span node role="section", available in the DOM, has an aria-expanded attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='section' aria-expanded='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
       expect(res).toBe("281,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("281");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Pass: nodes with a role attribute that starts with "application", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "application", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='application' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: node with a role attribute that starts with "checkbox", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "checkbox", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='checkbox' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: node with a role attribute that starts with "switch", available to assistive technologies, has an aria-expanded attribute', function() {
   it('node with a role attribute that starts with "switch", available to assistive technologies, has an aria-expanded attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='switch' aria-expanded='true'>Hello</span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("281");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("281");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("281");
      expect(res).toBe(null);
      // </variant3>
   });
});