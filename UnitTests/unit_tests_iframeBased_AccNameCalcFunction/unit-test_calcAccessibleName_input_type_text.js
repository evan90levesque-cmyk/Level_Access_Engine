describe('calcAccessibleName_text_type1: input element with a type="text" attribute', function() {
    it('input element with a type="text" attribute should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='text' id='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type2: input element with a type="text" attribute and aria-label attribute set to "alternative"', function() {
    it('input element with a type="text" attribute and aria-label attribute set to "alternative" should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='text' id='test' aria-label='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_text_type3: input element with a type="text" attribute and title attribute set to "alternative"', function() {
    it('input element with a type="text" attribute and title attribute set to "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='text' id='test' title='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_text_type4: input element with a type="text" attribute, aria-label and title attributes', function() {
    it('aria-label set to "alternative1", and title set to "alternative 2", should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<input type='text' id='test' aria-label='alternative1' title='alternative2'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type5: input element with a type="text" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><input type='text' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type5: input element with a type="text" attribute and aria-labelledby attribute set to a value which contains an extra whitespace before the id', function() {
    it('aria-labelledby attributes set to "label1" which contains an extra whitespace before the id should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><input type='text' id='test' aria-labelledby=' label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type5: input element with a type="text" attribute and aria-labelledby attribute set to a value which contains an extra whitespace after the id', function() {
    it('aria-labelledby attributes set to "label1" which contains an extra whitespace after the id should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><input type='text' id='test' aria-labelledby='label1 '>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type6: input element with a type="text" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><input type='text' id='test' aria-labelledby='label1' aria-label='alternative'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type7: input element with a type="text" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label2' aria-label='alternative1'></span><span id='label1' aria-labelledby='label2'></span><input type='text' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type8: input element with a type="text" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'> Make this the <em>top</em>most element</span><input type='text' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
    });
});

describe('calcAccessibleName_text_type9: input element with a type="text" attribute and aria-labelledby attributes', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'>Make this the <em>top</em>most element</span><input type='text' id='test' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type10: input element with a type="text" attribute and aria-labelledby attributes set to bad id', function() {
    it('aria-labelledby attributes set to "label1" should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span aria-label='alternative1'></span><input type='text' id='test' aria-labelledby='label1'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type11: input element with a type="text" attribute and aria-labelledby attributes set to good ids', function() {
    it('aria-labelledby attributes set to "label1" should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><span id='label2'>Hello</span><input type='text' id='test' aria-labelledby='label1 label2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1 hello");
    });
});

describe('calcAccessibleName_text_type11: input element with a type="text" attribute and aria-labelledby attributes set to good ids plus double space', function() {
    it('aria-labelledby attributes set to "label1" should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><span id='label2'>Hello</span><input type='text' id='test' aria-labelledby='label1  label2'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1 hello");
    });
});

describe('calcAccessibleName_text_type12: input element with a type="text" attribute and explicit label unwrapped that contains the text "alternative1"', function() {
    it('input element with a type="text" attribute and explicit label unwrapped that contains the text "alternative1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label for='test'>alternative1</label><input type='text' id='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type13: input element with a type="text" attribute and explicit labels unwrapped that contains the text "alternative1", and "alternative 2"', function() {
    it('input element with a type="text" attribute and explicit labels unwrapped that contains the text "alternative1", and "alternative 2"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label for='test'>alternative1</label><label for='test'>alternative2</label><input id='test' type='text'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1 alternative2");
    });
});

describe('calcAccessibleName_text_type13: input element with a type="text" attribute and explicit label wrapped that contains the text "alternative1"', function() {
    it('input element with a type="text" attribute and explicit label wrapped that contains the text "alternative1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label for='test'>alternative1<input type='text' id='test'></label>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type14: input element with a type="text" attribute and implicit label wrapped that contains the text "alternative1"', function() {
    it('input element with a type="text" attribute and implicit label wrapped (id on text) that contains the text "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label>alternative1<input type='text' id='test'></label>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type15: input element with a type="text" attribute and implicit label wrapped (id on text) that contains the text "alternative1"', function() {
    it('input element with a type="text" attribute and implicit label wrapped (id on text) that contains the text "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label>alternative1<input type='text' id='test'></label>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type16: input element with a type="text" attribute and one explicit label unwrapped that contains the text "alternative1", and one implicit label wrapped that contains "alternative 2"', function() {
    it('input element with a type="text" attribute and one explicit label unwrapped that contains the text "alternative1", and one implicit label wrapped that contains "alternative 2"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label for='test'>alternative1</label><label>alternative2<input id='test' type='text'></label>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1 alternative2");
    });
});

describe('calcAccessibleName_text_type17: input element with a type="text" attribute and explicit label unwrapped that contains the text ""', function() {
    it('input element with a type="text" attribute and explicit label unwrapped that contains the text "alternative1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<label for='test'></label><input type='text' id='test'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and explicit label unwrapped that contains the text a mixture of text an html', function() {
    it('input element with a type="text" attribute and explicit label unwrapped that contains the text a mixture of text an html - should be "alternative1 alternative2"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<label for="test">alternative1 <span>alternative2</span><input id="test" type="text"></label>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1 alternative2");
    });
});

// new model

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-labelledby set to null value', function() {
    it('input element with a type="text" attribute and aria-labelledby set to null value should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input type="text" aria-labelledby="" id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-labelledby set to a whitespace value', function() {
    it('input element with a type="text" attribute and aria-labelledby set to a whitespace value should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input type="text" aria-labelledby=" " id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-labelledby set to bad value', function() {
    it('input element with a type="text" attribute and aria-labelledby set to bad value should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input type="text" aria-labelledby="hello" id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-label set to null value', function() {
    it('input element with a type="text" attribute and aria-label set to null value should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input type="text" aria-label="" id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-label set to a whitespace value', function() {
    it('input element with a type="text" attribute and aria-label set to a whitespace value should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input type="text" aria-label=" " id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and title set to null value', function() {
    it('input element with a type="text" attribute and title set to null value should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input type="text" title="" id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and title set to a whitespace value', function() {
    it('input element with a type="text" attribute and title set to a whitespace value should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input type="text" title=" " id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-labelledby and aria-label set to null, and title attribute set to alternative1', function() {
    it('input element with a type="text" attribute and aria-labelledby and aria-label set to null, and title attribute set to alternative1 - should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input aria-labelledby="" type="text" title="alternative1" aria-label="" id="test">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-labelledby that references an empty element', function() {
    it('input element with a type="text" attribute and aria-labelledby that references an empty element should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<div id="d1"></div><input id="test" type="text" aria-labelledby="d1" />';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-labelledby that references an element that contains whitespace', function() {
    it('input element with a type="text" attribute and aria-labelledby that references an element that contains whitespace should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<div id="d1"> </div><input id="test" type="text" aria-labelledby="d1" />';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_text_type18: input element with a type="text" attribute and aria-labelledby that references an empty element', function() {
    it('input element with a type="text" attribute and explicit label unwrapped that contains the text a mixture of text an html - should be "alternative1 alternative2"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<div id="d1"></div><input id="test" type="text" title="alternative1" aria-labelledby="d1" />';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_text_type19: input element with a type="text" - should not follow aria-labelled in label', function() {
    it('input element with a type="text" attribute and explicit label unwrapped that contains the text a mixture of text an html - should be "alternative1 alternative2"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<label for="test">first <span aria-labelledby="d2">name</span></label><input id="test" type="text"><div id="d2">hi</div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name");
    });
});

describe('calcAccessibleName_text_type19: input element with a type="text" - should follow exp label, and pull in aria-label', function() {
    it('input element with a type="text" - should follow exp label, and pull in aria-label - "first how"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<label for="test"> first <span aria-label="how">name</span></label><input type="text" id="test" />';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first how");
    });
});

describe('calcAccessibleName_text_type19: input element with a type="text" - should follow exp label, and pull in aria-label, and trim values', function() {
    it('input element with a type="text" - should follow exp label, and pull in aria-label , and trim values - "first how"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<label for="test"> first <span aria-label=" how">name</span></label><input type="text" id="test" />';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first how");
    });
});

describe('calcAccessibleName_text_type19: input element with a type="text" - with one good id and one bad in the aria-labelledby', function() {
    it('input element with a type="text" - with one good id and one bad in the aria-labelledby - should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<span id="label1">alternative1</span><span id="label2">alternative2</span><input aria-labelledby="label1 label12" id="test" type="text">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('ENG-1054: input element with a type="text" - with aria-label and aria-labelledby pointing same ID', function() {
    it('input element with a type="text" - with aria-label and aria-labelledby pointing same ID - should be "Quick brown fox"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<input id="test" type="text" aria-labelledby="foo" aria-describedby="foo"><span id="foo">quick brown fox</span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("quick brown fox");
    });
});

describe('ENG-926', function() {
    it('implicit label of "First Name"', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label>
                First Name
                <input id="test" type="text">
            </label>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name");
    });

    it('would-be implicit label of "First Name" explicitly assigned to an element that doesn\'t exist instead', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for="foo">
                First Name
                <input id="test" type="text">
            </label>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });

    it('would-be implicit label of "First Name" explicitly assigned to nothing (empty string) instead', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for="">
                First Name
                <input id="test" type="text">
            </label>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });

    it('would-be implicit label of "First Name" explicitly assigned to nothing (no value) instead', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for>
                First Name
                <input id="test" type="text">
            </label>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });

    it('implicit/explicit label of "First Name"', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for="test">
                First Name
                <input id="test" type="text">
            </label>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("first name");
    });

    it('would-be implicit label of "First Name" explicitly assigned to another element instead', function() {
        var iframe = document.querySelector("#testing");
        iframe.contentWindow.document.head.innerHTML = "";
        iframe.contentWindow.document.body.innerHTML = `
            <label for="foo">
                First Name
                <input id="test" type="text">
            </label>
            <input id="foo" type="text">
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#foo").getAttribute("data-ae_an")).toBe("first name");
    });
});