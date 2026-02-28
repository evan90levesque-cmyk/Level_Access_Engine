describe('String N/A: no nodes, available to assistive technologies, has an aria-setsize attribute', function() {
    it('no nodes, available to assistive technologies, has an aria-setsize attribute should be equal to N/A', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a style attribute set to "display:none", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a style attribute set to "display:none", has an aria-setsize attribute should be equal to N/A', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p style='display:none' aria-setsetsize='10'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a node with a role attribute set to "presentation", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute set to "presentation", has an aria-setsize attribute should be equal to N/A', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<p role='presentation' aria-setsize='10'>Hello</p>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "article", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "article", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='article' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:two nodes with a role attribute that starts with "article", available to assistive technologies, has an aria-setsize attribute', function() {
    it('two nodes with a role attribute that starts with "article", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='article' aria-setsize='10'>Hello</span><span role='article' aria-setsize='11'>There</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an li node, available to assistive technologies, has an aria-setsize attribute', function() {
    it('an li node, available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<li aria-setsize='10'>Hello</li>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a tr node, available to assistive technologies, has an aria-setsize attribute', function() {
    it('an tr node, available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr aria-setsize='10'>Hello</tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: an article node, available to assistive technologies, has an aria-setsize attribute', function() {
    it('an article node, available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<article aria-setsize='10'>Hello</article>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "listitem", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "listitem", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='listitem' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "option", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "option", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='option' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "menuitem", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "menuitem", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitem' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "menuitemcheckbox", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "menuitemcheckbox", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemcheckbox' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "menuitemradio", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "menuitemradio", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='menuitemradio' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "radio", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "radio", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='radio' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a node with a role attribute that starts with "row", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "row", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='row' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "tab", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "tab", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='tab' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:a node with a role attribute that starts with "treeitem", available to assistive technologies, has an aria-setsize attribute', function() {
    it('a node with a role attribute that starts with "treeitem", available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='treeitem' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass:an input type=radio, available to assistive technologies, has an aria-setsize attribute', function() {
    it('an input type=radio, available to assistive technologies, has an aria-setsize attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio' aria-setsize='10'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: an input type=date, available to assistive technologies, has an aria-setsize attribute', function() {
    it('an input type=date, available to assistive technologies, has an aria-setsize attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='date' aria-setsize='10'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("610,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node, available in the DOM, has an aria-setsize attribute', function() {
    it('a span node, available in the DOM, has an aria-setsize attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("610,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node role="button", available in the DOM, has an aria-setsize attribute', function() {
    it('a span node role="button", available in the DOM, has an aria-setsize attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("610,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two span nodes role="button", available in the DOM, has an aria-setsize attribute', function() {
    it('two span nodes role="button", available in the DOM, has an aria-setsize attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button' aria-setsize='10'>Hello</span><span role='button' aria-setsize='10'>Hello</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("610");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("610");
       expect(res).toBe("610,2");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("610");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});