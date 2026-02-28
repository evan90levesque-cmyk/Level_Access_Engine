describe('calcAccessibleName_a1: a node with id attribute and no aria-labelledby, aria-label, text in the body or title attribute', function() {
    it('a node with id attribute and no aria-labelledby, aria-label, text in the body or title attribute should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_a2: a node with id attribute and aria-label attribute, but no aria-labelledby, text in the body or title attributes', function() {
    it('a node with id attribute and aria-label attribute, but no aria-labelledby, text in the body or title attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test' aria-label='alternative'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_a3: a node with id attribute and text in the body, but no aria-labelledby, aria-label or title attributes', function() {
    it('a node with id attribute and text in the body, but no aria-labelledby, aria-label or title attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test'>alternative</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_a4: a node with id attribute and title attribute, but no aria-labelledby, aria-label or alt attributes', function() {
    it('a node with id attribute and title attribute, but no aria-labelledby, aria-label or alt attributes should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test' title='alternative'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_a5: a node with id attribute, aria-label attribute and alt attribute, but no aria-labelledby or title attributes', function() {
    it('a node with id attribute, aria-label attribute and alt attribute, but no aria-labelledby or title attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test' aria-label='alternative1' alt='alternative2'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_a6: a node with id attribute, aria-label attribute and title attribute, but no aria-labelledby or alt attributes', function() {
    it('a node with id attribute, aria-label attribute and title attribute, but no aria-labelledby or aria-label attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test' aria-label='alternative1' title='alternative2' src='test.gif'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_a8: a node with id attribute and aria-labelledby attribute, but no title, aria-label or alt attributes', function() {
    it('a node with id attribute and aria-labelledby attribute, but no title, aria-label or alt attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><a href='#' id='test' aria-labelledby='label1'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_a9: a node with id attribute and aria-labelledby attribute, but no title, aria-label or alt attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby', function() {
    it('alcAccessibleName_img9: a node with id attribute and aria-labelledby attribute, but no title, aria-label or alt attributes. aria-labelledby attributes set to "label1", with the referenced element referencing a second node through aria-labelledby should be null', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label2' aria-label='alternative1'></span><span id='label1' aria-labelledby='label2'></span><a href='#' id='test' aria-labelledby='label1'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_a10: aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing text should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'>alternative1</span><a href='#' id='test' aria-labelledby='label1'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_a11: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "Make this the topmost element".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text should be "make this the topmost element".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1'> Make this the <em>top</em>most element</span><a href='#' id='test' aria-labelledby='label1'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("make this the topmost element");
    });
});

describe('calcAccessibleName_a12: aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
    it('aria-labelledby attributes set to "label1", with the referenced element containing multiple pieces of text but an aria-label set to "alternative1" should be "alternative1".', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'>Make this the <em>top</em>most element</span><a href='#' id='test' aria-labelledby='label1'></a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

// text in the body

describe('calcAccessibleName_a13: a node with id attribute and text in the body. Alternative text should be "alternative"', function() {
    it('a node with id attribute and text in the body. Alternative text should be "alternative"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test'>alternative</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

describe('calcAccessibleName_a14: a node with id attribute and aria-labelledby attribute, plus text in the body but no title, aria-label attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
    it('a node with id attribute and aria-labelledby attribute, plus text in the body but no title, aria-label attributes. aria-labelledby attributes set to "label1" should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<span id='label1' aria-label='alternative1'></span><a href='#' id='test' aria-labelledby='label1'>alternative</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_a15: a node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby or title attributes', function() {
    it('a node with id attribute and aria-label attribute plus text in the body, but no aria-labelledby or title attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test' aria-label='alternative1'>alternative</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative1");
    });
});

describe('calcAccessibleName_a17: a node with id attribute and title attribute plus text in the body, but no aria-labelledby, aria-label attributes', function() {
    it('a node with id attribute and title attribute plus text in the body, but no aria-labelledby, aria-label attributes should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = "<a href='#' id='test' title='alternative1'>alternative</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe("alternative");
    });
});

// Fringe cases

describe('calcAccessibleName_a18: complex A element from http://www.realtor.com/realestateandhomes-search/94710', function() {
    it('complex A element from http://www.realtor.com/realestateandhomes-search/94710 should be "alternative1"', function() {
       var iframe = document.querySelector("#testing");
       iframe.contentWindow.document.head.innerHTML = "";
       iframe.contentWindow.document.body.innerHTML = '<a id="test" class="move-network-links" data-container="body" data-toggle="popover" data-placement="bottom" data-popover-content="#move-network-popover" data-original-title="" title="" data-template="<div class=&quot;popover global-nav-network-sites-popover&quot; role=&quot;tooltip&quot;><div class=&quot;global-nav-popover-arrow arrow&quot;></div><div class=&quot;popover-content&quot;></div></div>"><i class="svg-icon svg-icon-angle-down-header"></i></a>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
       expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe(null);
    });
});

describe('calcAccessibleName_a19: A element with child element SECTION with text that should act as accessible name of link', function() {
	it('A element accessible name should be the value held within the span', function() {
		var iframe = document.querySelector("#testing");
		iframe.contentWindow.document.head.innerHTML = "";
		iframe.contentWindow.document.body.innerHTML = '<a href="#" id="test"><section>Some text</section></a>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
		expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe('some text');
	});
});

describe('calcAccessibleName_a20: A element with a child div element with role=image and title attribute', function() {
	it('A element with a child div element with role=image and title attribute should have accessible name equal to value of title attribute', function() {
		var iframe = document.querySelector("#testing");
		iframe.contentWindow.document.head.innerHTML = "";
		iframe.contentWindow.document.body.innerHTML = '<a id="test" href="#"><div  style="background-image: url(\'#\')" title="Beauty : Target" role="img"></div></a>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		var res = LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
		expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#test").getAttribute("data-ae_an")).toBe('beauty : target');
	});
});
