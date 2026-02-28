describe('calcAccessibleName_object1: object node with id attribute and no aria-labelledby, aria-label or title attributes', function() {
    it('object node with id attribute and no aria-labelledby, aria-label or title attributes should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object id='test'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_object2: object node with id attribute and aria-label attribute, but no aria-labelledby or title attributes', function() {
    it('object node with id attribute and aria-label attribute, but no aria-labelledby or title attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object id='test' aria-label='alternative'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_object4: object node with id attribute and title attribute, but no aria-labelledby, aria-label attributes', function() {
    it('object node with id attribute and title attribute, but no aria-labelledby, aria-label attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object id='test' title='alternative'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_object6: object node with id attribute, aria-label attribute and title attribute, but no aria-labelledby attributes', function() {
    it('object node with id attribute, aria-label attribute and title attribute, but no aria-labelledby attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object id='test' aria-label='alternative1' title='alternative2' src='test.gif'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_object8: object node with id attribute and aria-labelledby attribute, but no title, aria-label attributes', function() {
    it('object node with id attribute and aria-labelledby attribute, but no title, aria-label attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><object id='test' aria-labelledby='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_object9: object node with id attribute and aria-labelledby attribute, but no title, aria-label attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby', function() {
    it('alcAccessibleName_img9: object node with id attribute and aria-labelledby attribute, but no title, aria-label attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label2' aria-label='alternative1'></span><span id='label1' aria-labelledby='label2'></span><object id='test' aria-labelledby='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_object10: aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'>alternative1</span><object id='test' aria-labelledby='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_object11: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'> Make this the <em>top</em>most element</span><object id='test' aria-labelledby='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
    });
});

describe('calcAccessibleName_object12: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'>Make this the <em>top</em>most element</span><object id='test' aria-labelledby='label1'></object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

// text in the body no longer used in accessible name calc

describe('calcAccessibleName_object13: object node with id attribute and inner text, but no title, aria-label attributes', function() {
    it('object node with id attribute and inner text should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object id='test'>alternative</object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_object14: object node with id attribute and aria-labelledby attribute, but no title, aria-label attributes', function() {
    it('object node with id attribute and aria-labelledby attribute, plus text in the body but no title, aria-label or alt attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><object id='test' aria-labelledby='label1'>alternative</object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_object15: object node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby or title attributes', function() {
    it('object node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby or title attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object id='test' aria-label='alternative1'>alternative</object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

// inner text no longer used for accessible name calc

describe('calcAccessibleName_object17: object node with id attribute and title attribute plus text in the body, but no aria-labelledby, aria-label attributes', function() {
    it('object node with id attribute and title attribute plus text in the body, but no aria-labelledby, aria-label attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<object id='test' title='alternative1'>alternative</object>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");

    });
});