describe('calcAccessibleName_optgroup1: optgroup node with id attribute and no aria-labelledby, aria-label, label or title attributes', function() {
    it('optgroup node with id attribute and no aria-labelledby, aria-label, label or title attributes should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_optgroup2: optgroup node with id attribute and aria-label attribute, but no aria-labelledby, label or title attributes', function() {
    it('optgroup node with id attribute and aria-label attribute, but no aria-labelledby, label or title attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' aria-label='alternative'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_optgroup3: optgroup node with id attribute and label attribute, but no aria-labelledby, aria-label or title attributes', function() {
    it('optgroup node with id attribute and label attribute, but no aria-labelledby, aria-label or title attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' label='alternative'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_optgroup4: optgroup node with id attribute and title attribute, but no aria-labelledby, aria-label or label attributes', function() {
    it('optgroup node with id attribute and title attribute, but no aria-labelledby, aria-label or label attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' title='alternative'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_optgroup5: optgroup node with id attribute, aria-label attribute and label attribute, but no aria-labelledby or title attributes', function() {
    it('optgroup node with id attribute, aria-label attribute and label attribute, but no aria-labelledby or title attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' aria-label='alternative1' label='alternative2'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup6: optgroup node with id attribute, aria-label attribute and title attribute, but no aria-labelledby or label attributes', function() {
    it('optgroup node with id attribute, aria-label attribute and title attribute, but no aria-labelledby or aria-label attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' aria-label='alternative1' title='alternative2' src='test.gif'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup7: optgroup node with id attribute, label attribute and title attribute, but no aria-labelledby or aria-label attributes', function() {
    it('optgroup node with id attribute, label attribute and title attribute, but no aria-labelledby or aria-label attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' label='alternative1' title='alternative2'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup8: optgroup node with id attribute and aria-labelledby attribute, but no title, aria-label or label attributes', function() {
    it('optgroup node with id attribute and aria-labelledby attribute, but no title, aria-label or label attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><optgroup id='test' aria-labelledby='label1'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup9: optgroup node with id attribute and aria-labelledby attribute, but no title, aria-label or label attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby', function() {
    it('alcAccessibleName_img9: optgroup node with id attribute and aria-labelledby attribute, but no title, aria-label or label attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label2' aria-label='alternative1'></span><span id='label1' aria-labelledby='label2'></span><optgroup id='test' aria-labelledby='label1'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_optgroup10: aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'>alternative1</span><optgroup id='test' aria-labelledby='label1'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup11: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'> Make this the <em>top</em>most element</span><optgroup id='test' aria-labelledby='label1'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
    });
});

describe('calcAccessibleName_optgroup12: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'>Make this the <em>top</em>most element</span><optgroup id='test' aria-labelledby='label1'></optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup14: optgroup node with id attribute and aria-labelledby attribute, but no title, aria-label or label attributes', function() {
    it('optgroup node with id attribute and aria-labelledby attribute, plus text in the body but no title, aria-label or label attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><optgroup id='test' aria-labelledby='label1'>alternative</optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup15: optgroup node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby, label or title attributes', function() {
    it('optgroup node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby, label or title attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' aria-label='alternative1'>alternative</optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_optgroup16: optgroup node with id attribute and label attribute plus text in the body, but no aria-labelledby, aria-label or title attributes', function() {
    it('optgroup node with id attribute and label attribute plus text in the body, but no aria-labelledby, aria-label or title attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<optgroup id='test' label='alternative1'>alternative</optgroup>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});