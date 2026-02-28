describe('String N/A: no th nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: th element not visible in the displayed content', function() {
    it('th element not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th style='display:none'>Hello</th></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: th element not available to assistive technology', function() {
    it('th element not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th aria-hidden='true'>Hello</th></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: th element available to assistive technology', function() {
    it('th element available to assistive technology should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two th elements available to assistive technology', function() {
    it('two th elements available to assistive technology should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res).toBe(null);
       // </variant3>
    });

   it('two th elements available to assistive technology should be equal to pass using node capture', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      const results = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
      const relevantResults = results.filter(result => result.engineTestId === 214);
      expect(relevantResults.length).toBe(0);
   });
});

describe('String Fail: th element available to assistive technology that contains a table element', function() {
    it('th element available to assistive technology that contains a table element should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // <table><tr><th>Hello<table><tr><th>Test1</th></tr></table></th></tr></table>
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th><table><tr><th>Test1</th></tr></table></th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("214,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// this will fail current tests as css picks up table, also we're not interested in nested tables

describe('String Fail: th element available to assistive technology that contains two table elements in a div element', function() {
    it('th element available to assistive technology that contains two table elements should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // <table><tr><th>Hello<table><tr><th>There</th></tr></table><table><tr><th>Again</th></tr></table></th></tr></table>
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th><div><table><tr><th>There</th></tr></table><table><tr><th>Again</th></tr></table></div></th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("214,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });

   it('th element available to assistive technology that contains two table elements should be equal to fail using node capture', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      // <table><tr><th>Hello<table><tr><th>There</th></tr></table><table><tr><th>Again</th></tr></table></th></tr></table>
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th><div><table><tr><th>There</th></tr></table><table><tr><th>Again</th></tr></table></div></th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      const results = JSON.parse(LevelAccess_AccessEngine.runAllTests_returnInstances_JSON_NodeCapture(document.querySelector("#testing").contentWindow.document.body.firstChild));
      const relevantResults = results.filter(result => result.engineTestId === 214);
      expect(relevantResults.length).toBe(1);
   });
});

describe('String Fail: th element available to assistive technology that contains a nested table element', function() {
    it('th element available to assistive technology that contains a nested table element should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // <table><tr><th>Hello<table><tr><th>There <table><tr><th>Again</th></tr></table></th></tr></table></th></tr></table>
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th>Company</th><th>Contact</th><th><table><tr><th>Hello<table><tr><th>There <table><tr><th>Again</th></tr></table></th></tr></table></th></tr></table></th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("214,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two th elements available to assistive technology that contains a nested table element', function() {
    it('two th elements available to assistive technology that contains a nested table element should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // <table><tr><th>Hello<table><tr><th>There <table><tr><th>Again</th></tr></table></th></tr></table></th><th>Hello<table><tr><th>There <table><tr><th>Again</th></tr></table></th></tr></table></th></tr></table>
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th><table><tr><th>Hello<table><tr><th>There <table><tr><th>Again</th></tr></table></th></tr></table></th></tr></table></th><th>Contact</th><th><table><tr><th>Hello<table><tr><th>There <table><tr><th>Again</th></tr></table></th></tr></table></th></tr></table></th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr><tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr><tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr><tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr><tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("214");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("214");
       expect(res).toBe("214,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("214");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});