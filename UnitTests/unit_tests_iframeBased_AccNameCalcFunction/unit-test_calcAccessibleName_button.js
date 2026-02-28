describe('calcAccessibleName_button1: button node with id attribute and no aria-labelledby, aria-label or title attributes', function() {
    it('button node with id attribute and no aria-labelledby, aria-label or title attributes should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<button id='test'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_button2: button node with id attribute and aria-label attribute, but no aria-labelledby or title attributes', function() {
    it('button node with id attribute and aria-label attribute, but no aria-labelledby or title attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<button id='test' aria-label='alternative'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_button4: button node with id attribute and title attribute, but no aria-labelledby, aria-label attributes', function() {
    it('button node with id attribute and title attribute, but no aria-labelledby, aria-label attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<button id='test' title='alternative'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_button6: button node with id attribute, aria-label attribute and title attribute, but no aria-labelledby attributes', function() {
    it('button node with id attribute, aria-label attribute and title attribute, but no aria-labelledby attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<button id='test' aria-label='alternative1' title='alternative2' src='test.gif'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button8: button node with id attribute and aria-labelledby attribute, but no title, aria-label attributes', function() {
    it('button node with id attribute and aria-labelledby attribute, but no title, aria-label attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><button id='test' aria-labelledby='label1'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button9: button node with id attribute and aria-labelledby attribute, but no title, aria-label attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby', function() {
    it('alcAccessibleName_img9: button node with id attribute and aria-labelledby attribute, but no title, aria-label attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label2' aria-label='alternative1'></span><span id='label1' aria-labelledby='label2'></span><button id='test' aria-labelledby='label1'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_button10: aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'>alternative1</span><button id='test' aria-labelledby='label1'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button11: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'> Make this the <em>top</em>most element</span><button id='test' aria-labelledby='label1'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
    });
});

describe('calcAccessibleName_button12: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'>Make this the <em>top</em>most element</span><button id='test' aria-labelledby='label1'></button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

// text in the body

describe('calcAccessibleName_button13: button node with id attribute and aria-labelledby attribute, but no title, aria-label attributes', function() {
    it('button node with id attribute and text in the body. Alternative text should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<button id='test'>alternative</button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_button14: button node with id attribute and aria-labelledby attribute, but no title, aria-label attributes', function() {
    it('button node with id attribute and aria-labelledby attribute, plus text in the body but no title, aria-label or alt attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><button id='test' aria-labelledby='label1'>alternative</button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button15: button node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby or title attributes', function() {
    it('button node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby or title attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<button id='test' aria-label='alternative1'>alternative</button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_button17: button node with id attribute and title attribute plus text in the body, but no aria-labelledby, aria-label attributes', function() {
    it('button node with id attribute and title attribute plus text in the body, but no aria-labelledby, aria-label attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<button id='test' title='alternative1'>alternative</button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});