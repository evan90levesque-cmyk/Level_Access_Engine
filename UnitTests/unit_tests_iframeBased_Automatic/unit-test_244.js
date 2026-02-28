describe('String N/A: no dl nodes', function() {
    it('no dl nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a dl node with a role attribute set to the text value "presentation"', function() {
    it('a dl node with a role attribute set to the text value "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl role='presentation'></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a dl node with a style attribute set to the text value "display:none;"', function() {
    it('a dl node with a style attribute set to the text value "display:none;" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl style='display:none;'></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a dl node without content', function() {
    it('a dl node without content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a dl node with an dt node as a child', function() {
    it('a dl node with an dt node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl><dt></dt></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a dl node with an dd node as a child', function() {
    it('a dl node with an dd node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl><dd></dd></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a dl node with a node given a role="listitem" attribute as a child', function() {
    it('a dl node with a node given a role="listitem" attribute as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl><span role='listitem'></span></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a dl node with a script node as a child', function() {
    it('a dl node with a script node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl><script></script></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a dl node with a template node as a child', function() {
    it('a dl node with a template node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl><template></template></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a dl node with an a node as a child', function() {
    it('a dl node with an a node as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl><a href='#'>Hello</a></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("244,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// Deque Tests

describe('Deque: String N/A: a dl node without content', function() {
    it('a dl node without content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='emptydl'></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque: String Pass: a dl node with only a div a node as a child', function() {
    it('a dl node with only a div a node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='divdl'><div>This should not be here.</div></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque: String Pass: a dl node with a repeat dd node as a child', function() {
    it('a dl node with a repeat dd node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='repeatdl'><dt>Thing 1</dt><dd>Thingy 1</dd><dt>Thing</dt><dd>Thingy</dd><dd>Thingy 2</dd></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque: String Pass: a dl node with a dt node then dd node as a child', function() {
    it('a dl node with a dt node then dd node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='properdl'><dt>Thing</dt><dd>Thingy</dd></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque: String Pass: a dl node with a dd node then dt node as a child', function() {
    it('a dl node with a dd node then dt node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='unordereddl'><dd>Thingy</dd><dt>Thing</dt></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque: String Pass: a dl node with a script, template, dt and dd node as a child', function() {
    it('a dl node with a script, template, dt and dd node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='scriptdl'><script></script><template></template><dt>thang</dt><dd>thangy</dd></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque: String Pass: a dl node with a script, template node as a child', function() {
    it('a dl node with a script, template node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='emptyscriptdl'><script></script><template></template></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque: String Fail: a dl node with a p a node as a child', function() {
    it('a dl node with a p a node as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='mixedscriptdl'><script></script><template></template><p>para</p></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("244,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Deque: String Fail: multiple dl nodes with varying amounts and types of children', function() {
    it('multiple dl nodes with varying amounts and types of children should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<dl id='emptydl'></dl><dl id='divdl'><div>This can be here; no mixing of dt/dd and div in this dl</div></dl><dl id='mixeddl'><dt>Correct.</dt><dd>Correct.</dd><div>Wrong; dt/dd are also children of this dl</div></dl><dl id='repeatdl'><dt>Thing 1</dt><dd>Thingy 1</dd><dt>Thing</dt><dd>Thingy</dd><dd>Thingy 2</dd></dl><dl id='properdl'><dt>Thing</dt><dd>Thingy</dd></dl><dl id='unordereddl'><dd>Thingy</dd><dt>Thing</dt></dl><dl id='scriptdl'><script></script><template></template><dt>thang</dt><dd>thangy</dd></dl><dl id='emptyscriptdl'><script></script><template></template></dl><dl id='mixedscriptdl'><script></script><template></template><p>para</p></dl>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("244,2");
       // </variant2>
       // <variant3>
       var res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('Fail: a dl node with a div node with a role of button as a child', function() {
    it('a dl node with a div node with a role of button as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<dl><dt>Correct.</dt><div role="button">Wrong.</div></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("244,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Fail: a dl node with a dt node with a role of listitem as a child', function() {
    it('a dl node with a dt node with a role of listitem as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<dl><dt>Correct.</dt><dt role="listitem">Wrong.</dt></dl>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("244,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Fail: a dl node with a dd node with a role of listitem as a child', function() {
    it('a dl node with a dd node with a role of listitem as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<dl><dd>Correct.</dd><dd role="listitem">Wrong.</dd></dl>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("244,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Pass: a dl node with a duplicate ID shared with a nested div structure', function() {
    it('a dl node with a duplicate ID shared with a nested div structure should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="dup"><span>text</span></div><dl id="dup"><dt>Correct.</dt></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("244");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Pass: a dl node with two div nodes, each with a dt and dd node', function() {
   it('a dl node with two div nodes each with a dt and dd node should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<dl><div><dt>Job Id</dt><dd>15003</dd></div><div><dt>Job Type</dt><dd>Regular, Full time</dd></div></dl>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("244");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('Fail: a dl node with a div node and a dt node, each with a dt and dd node', function() {
   it('a dl node with a div node and a dt node, each with a dt and dd node should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<dl><div><dt>Job Id</dt><dd>15003</dd></div><dt>Job Type</dt><dd>Regular, Full time</dd></dl>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("244");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("244");
      expect(res).toBe("244,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("244");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});