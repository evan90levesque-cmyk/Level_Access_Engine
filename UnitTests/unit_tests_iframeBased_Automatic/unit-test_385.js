describe('String N/A: no *[role="listitem"] nodes', function() {
    it('no *[role="listitem"] nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("385");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: *[role="listitem"] node in ol node', function() {
    it('a *[role="listitem"] node inside an ol node should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol><span role='listitem'></span></ol>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("385");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: *[role="listitem"] node in ul node', function() {
    it('an *[role="listitem"] node inside a ul node should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul><span role='listitem'></span></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("385");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: *[role="listitem"] node in menu node', function() {
   it('an *[role="listitem"] node inside a menu node should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<menu><span role='listitem'></span></menu>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node in *[role="list"] node', function() {
    it('an *[role="listitem"] node inside a *[role="list"] node should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='list'><span role='listitem'></span></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("385");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: *[role="listitem"] node in *[role="group"] node', function() {
   it('an *[role="listitem"] node inside a *[role="group"] node should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='group'><span role='listitem'></span></span>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] node in div node', function() {
    it('a *[role="listitem"] node inside a div node should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div><span role='listitem'></span></div>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
       expect(res).toBe("385,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("385");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// ul

describe('String Fail: a ul node whose aria-owns attribute references an invalid ID', function() {
   it('a ul node whose aria-owns attribute references an invalid ID should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul aria-owns='foo'></ul><div id='bar' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a ul node via aria-owns', function() {
   it('*[role="listitem"] node referenced by a ul node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul aria-owns='item'></ul><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a ul node via aria-owns whose value references multiple IDs', function() {
   it('*[role="listitem"] node referenced by a ul node via aria-owns whose value references multiple IDs should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul aria-owns='item2 item item3'></ul><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node with a parent *[role="navigation"] node with a parent ul node that references the descendant *[role="listitem"] node via aria-owns', function() {
   it('*[role="listitem"] node with a parent *[role="navigation"] node with a parent ul node that references the descendant *[role="listitem"] node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul aria-owns='item'><div role='navigation'><div id='item' role='listitem'>list item</div></div></ul>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] shadow DOM node referenced by a ul node via aria-owns', function() {
   it('*[role="listitem"] shadow DOM node referenced by a ul node via aria-owns should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul aria-owns='item'></ul><div id='host'></div>";
      document.querySelector("#testing").contentWindow.eval(`
        const root = document.querySelector('#host').attachShadow({ mode: 'open' });
        root.innerHTML = '<div id="item" role="listitem">List item 1</div>';
      `);
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

// ol

describe('String Fail: a ol node whose aria-owns attribute references an invalid ID', function() {
   it('a ol node whose aria-owns attribute references an invalid ID should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol aria-owns='foo'></ol><div id='bar' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a ol node via aria-owns', function() {
   it('*[role="listitem"] node referenced by a ol node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol aria-owns='item'></ol><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a ol node via aria-owns whose value references multiple IDs', function() {
   it('*[role="listitem"] node referenced by a ol node via aria-owns whose value references multiple IDs should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol aria-owns='item2 item item3'></ol><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node with a parent *[role="navigation"] node with a parent ol node that references the descendant *[role="listitem"] node via aria-owns', function() {
   it('*[role="listitem"] node with a parent *[role="navigation"] node with a parent ol node that references the descendant *[role="listitem"] node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol aria-owns='item'><div role='navigation'><div id='item' role='listitem'>list item</div></div></ol>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] shadow DOM node referenced by a ol node via aria-owns', function() {
   it('*[role="listitem"] shadow DOM node referenced by a ol node via aria-owns should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ol aria-owns='item'></ol><div id='host'></div>";
      document.querySelector("#testing").contentWindow.eval(`
        const root = document.querySelector('#host').attachShadow({ mode: 'open' });
        root.innerHTML = '<div id="item" role="listitem">List item 1</div>';
      `);
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

// menu

describe('String Fail: a menu node whose aria-owns attribute references an invalid ID', function() {
   it('a menu node whose aria-owns attribute references an invalid ID should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<menu aria-owns='foo'></menu><div id='bar' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a menu node via aria-owns', function() {
   it('*[role="listitem"] node referenced by a menu node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<menu aria-owns='item'></menu><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a menu node via aria-owns whose value references multiple IDs', function() {
   it('*[role="listitem"] node referenced by a menu node via aria-owns whose value references multiple IDs should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<menu aria-owns='item2 item item3'></menu><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node with a parent *[role="navigation"] node with a parent menu node that references the descendant *[role="listitem"] node via aria-owns', function() {
   it('*[role="listitem"] node with a parent *[role="navigation"] node with a parent menu node that references the descendant *[role="listitem"] node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<menu aria-owns='item'><div role='navigation'><div id='item' role='listitem'>list item</div></div></menu>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] shadow DOM node referenced by a menu node via aria-owns', function() {
   it('*[role="listitem"] shadow DOM node referenced by a menu node via aria-owns should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<menu aria-owns='item'></menu><div id='host'></div>";
      document.querySelector("#testing").contentWindow.eval(`
        const root = document.querySelector('#host').attachShadow({ mode: 'open' });
        root.innerHTML = '<div id="item" role="listitem">List item 1</div>';
      `);
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});


// *[role="list"]

describe('String Fail: a *[role="list"] node whose aria-owns attribute references an invalid ID', function() {
   it('a *[role="list"] node whose aria-owns attribute references an invalid ID should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns='foo'></div><div id='bar' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="list"] node via aria-owns', function() {
   it('*[role="listitem"] node referenced by a *[role="list"] node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns='item'></div><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="list"] node via aria-owns whose value references multiple IDs', function() {
   it('*[role="listitem"] node referenced by a *[role="list"] node via aria-owns whose value references multiple IDs should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns='item2 item item3'></div><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="list"] node via aria-owns whose value references multiple IDs, the middle of which contains a quotation mark', function() {
   it('*[role="listitem"] node referenced by a *[role="list"] node via aria-owns whose value references multiple IDs, the middle of which contains a quotation mark should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns=\"item2 'item item3\"></div><div id=\"'item\" role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="list"] node via aria-owns whose value references multiple IDs, the last of which contains a quotation mark', function() {
   it('*[role="listitem"] node referenced by a *[role="list"] node via aria-owns whose value references multiple IDs, the last of which contains a quotation mark should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns=\"item2 item 'item3\"></div><div id=\"'item3\" role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node with a parent *[role="navigation"] node with a parent *[role="list"] node that references the descendant *[role="listitem"] node via aria-owns', function() {
   it('*[role="listitem"] node with a parent *[role="navigation"] node with a parent *[role="list"] node that references the descendant *[role="listitem"] node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns='item'><div role='navigation'><div id='item' role='listitem'>list item</div></div></div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] shadow DOM node referenced by a *[role="list"] node via aria-owns', function() {
   it('*[role="listitem"] shadow DOM node referenced by a *[role="list"] node via aria-owns should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns='item'></div><div id='host'></div>";
      document.querySelector("#testing").contentWindow.eval(`
        const root = document.querySelector('#host').attachShadow({ mode: 'open' });
        root.innerHTML = '<div id="item" role="listitem">List item 1</div>';
      `);
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] shadow DOM node with an id that contains a quotation mark referenced by a *[role="list"] node via aria-owns', function() {
   it('*[role="listitem"] shadow DOM node with an id that contains a quotation mark referenced by a *[role="list"] node via aria-owns should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='list' aria-owns=\"item'\"></div><div id='host'></div>";
      document.querySelector("#testing").contentWindow.eval(`
        const root = document.querySelector('#host').attachShadow({ mode: 'open' });
        root.innerHTML = '<div id="item\\'" role="listitem">List item 1</div>';
      `);
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

// *[role="group"]

describe('String Fail: a *[role="group"] node whose aria-owns attribute references an invalid ID', function() {
   it('a *[role="group"] node whose aria-owns attribute references an invalid ID should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns='foo'></div><div id='bar' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="group"] node via aria-owns', function() {
   it('*[role="listitem"] node referenced by a *[role="group"] node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns='item'></div><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="group"] node via aria-owns whose value references multiple IDs', function() {
   it('*[role="listitem"] node referenced by a *[role="group"] node via aria-owns whose value references multiple IDs should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns='item2 item item3'></div><div id='item' role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="group"] node via aria-owns whose value references multiple IDs, the middle of which contains a quotation mark', function() {
   it('*[role="listitem"] node referenced by a *[role="group"] node via aria-owns whose value references multiple IDs, the middle of which contains a quotation mark should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns=\"item2 'item item3\"></div><div id=\"'item\" role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node referenced by a *[role="group"] node via aria-owns whose value references multiple IDs, the last of which contains a quotation mark', function() {
   it('*[role="listitem"] node referenced by a *[role="group"] node via aria-owns whose value references multiple IDs, the last of which contains a quotation mark should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns=\"item2 item 'item3\"></div><div id=\"'item3\" role='listitem'>list item</div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: *[role="listitem"] node with a parent *[role="navigation"] node with a parent *[role="group"] node that references the descendant *[role="listitem"] node via aria-owns', function() {
   it('*[role="listitem"] node with a parent *[role="navigation"] node with a parent *[role="group"] node that references the descendant *[role="listitem"] node via aria-owns should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns='item'><div role='navigation'><div id='item' role='listitem'>list item</div></div></div>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] shadow DOM node referenced by a *[role="group"] node via aria-owns', function() {
   it('*[role="listitem"] shadow DOM node referenced by a *[role="group"] node via aria-owns should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns='item'></div><div id='host'></div>";
      document.querySelector("#testing").contentWindow.eval(`
        const root = document.querySelector('#host').attachShadow({ mode: 'open' });
        root.innerHTML = '<div id="item" role="listitem">List item 1</div>';
      `);
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: *[role="listitem"] shadow DOM node with an id that contains a quotation mark referenced by a *[role="group"] node via aria-owns', function() {
   it('*[role="listitem"] shadow DOM node with an id that contains a quotation mark referenced by a *[role="group"] node via aria-owns should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div role='group' aria-owns=\"item'\"></div><div id='host'></div>";
      document.querySelector("#testing").contentWindow.eval(`
        const root = document.querySelector('#host').attachShadow({ mode: 'open' });
        root.innerHTML = '<div id="item\\'" role="listitem">List item 1</div>';
      `);
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("385");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("385");
      expect(res).toBe("385,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("385");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});