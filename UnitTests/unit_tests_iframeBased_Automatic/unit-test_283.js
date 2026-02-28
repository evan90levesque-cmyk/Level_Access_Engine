describe('String Pass: no nodes, available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no nodes, available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a style attribute set to "display:none", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('a node with a style attribute set to "display:none", has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p style='display:none' aria-activedescendant='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role attribute set to "presentation", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('a node with a role attribute set to "presentation", has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p role='presentation' aria-activedescendant='true'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding a details element without an aria role, has an aria-activedescendant attribute', function() {
    it('no node, excluding a details element without an aria role, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<details aria-activedescendant='true'></details>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding a optgroup element without an aria role, has an aria-activedescendant attribute', function() {
    it('no node, excluding a optgroup element without an aria role, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<optgroup aria-activedescendant='true'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding a textarea element without an aria role, has an aria-activedescendant attribute', function() {
    it('no node, excluding a textarea element without an aria role, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea aria-activedescendant='true'>Hello</textarea>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="password" element without an aria role, has an aria-activedescendant attribute', function() {
    it('no node, excluding an input type="password" element without an aria role, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='password' aria-activedescendant='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="email" element without an aria role or list attribute, has an aria-activedescendant attribute', function() {
    it('no node, excluding an input type="email" element without an aria role or list attribute, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='email' aria-activedescendant='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="tel" element without an aria role or list attribute, has an aria-activedescendant attribute', function() {
    it('no node, excluding an input type="tel" element without an aria role or list attribute, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='tel' aria-activedescendant='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="text" element without an aria role or list attribute, has an aria-activedescendant attribute', function() {
    it('no node, excluding an input type="text" element without an aria role or list attribute, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='text' aria-activedescendant='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding an input type="url" element without an aria role or list attribute, has an aria-activedescendant attribute', function() {
    it('no node, excluding an input type="url" element without an aria role or list attribute, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='url' aria-activedescendant='true'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

// nodes with a role="button" attribute,

describe('String Pass: no node, excluding nodes with a role attribute that starts with "composite", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "composite", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='composite' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "group", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "group", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='group' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "textbox", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "textbox", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='textbox' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "combobox", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "combobox", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "application", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "application", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='application' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "combobox", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "combobox", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='combobox' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "grid", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "grid", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='grid' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "listbox", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "listbox", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='listbox' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "menu", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "menu", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menu' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "menubar", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "menubar", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menubar' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "row", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "row", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='row' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "searchbox", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "searchbox", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='searchbox' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "spinbutton", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "spinbutton", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='spinbutton' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "tablist", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "tablist", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='tablist' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "toolbar", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "toolbar", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='toolbar' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "tree", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "tree", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='tree' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: no node, excluding nodes with a role attribute that starts with "treegrid", available to assistive technologies, has an aria-activedescendant attribute', function() {
    it('no node, excluding nodes with a role attribute that starts with "treegrid", available to assistive technologies, has an aria-activedescendant attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treegrid' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res).toBe(null);
       // </variant3>
    });
});

// composite | group | textbox | application | combobox | grid | listbox | menu | menubar | radiogroup | row | searchbox | spinbutton | tablist | toolbar | tree | treegrid

describe('String Fail: a span node, available in the DOM, has an aria-activedescendant attribute', function() {
    it('a span node, available in the DOM, has an aria-activedescendant attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("283,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node role="button", available in the DOM, has an aria-activedescendant attribute', function() {
    it('a span node role="button", available in the DOM, has an aria-activedescendant attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-activedescendant='true'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("283");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("283");
       expect(res).toBe("283,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("283");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});