describe('String N/A: an a node with an href attribute set to a text value', function() {
    it('an a node with an href attribute set to a text value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='test.html'>Test</a>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

// image | button | reset | submit

describe('String N/A: an input node with a type attribute set to the text value "image"', function() {
    it('an input node with a type attribute set to the text value "image" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='image'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input node with a type attribute set to the text value "button"', function() {
    it('an input node with a type attribute set to the text value "button" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='button'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input node with a type attribute set to the text value "reset"', function() {
    it('an input node with a type attribute set to the text value "reset" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='reset'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an input node with a type attribute set to the text value "submit"', function() {
    it('an input node with a type attribute set to the text value "submit" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='submit'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an area node', function() {
    it('an area node should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: an area node with a style attribute set to "display:none"', function() {
   it('an area node with a style attribute set to "display:none" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area style='display:none'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("112");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an button node', function() {
    it('an button node should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button>Button</button>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String N/A: span node with a role set to a text value that starts with presentation', function() {
    it('span node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String N/A: a span node with an aria-label attribute set to "alternative" that is not available in the DOM', function() {
    it('a span node with an aria-label attribute set to "alternative" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none' aria-label='alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an onclick attribute set a null text value; and no events attached in the code behind', function() {
    it('a span node with an onclick attribute set a null text value; and no events attached in the code behind should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onclick=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: span node with an onclick attribute set to a text value; and an onkeypress attribute set to a text value', function() {
    it('span node with an onclick attribute set to a text value; and an onkeypress attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onclick='function(){}' onkeypress='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two span nodes with an onclick attribute set to a text value; and an onkeypress attribute set to a text value', function() {
    it('two span nodes with an onclick attribute set to a text value; and an onkeypress attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onclick='function(){}' onkeypress='function(){}'>Span text</span><span onclick='function(){}' onkeypress='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: input of type checkbox with an onclick handler and no key event', function() {
    it('input of type checkbox with an onclick handler and no key event should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML='<input onclick="foo()" type="checkbox">';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String Pass: a node with href attribute set to a text value and a click event set in the code behind', function() {
    it('a node with href attribute set to a text value and a click event set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var a = document.querySelector("#testing").contentWindow.document.createElement("a");
       a.setAttribute("href", "#");
       a.id = "test";
       a.innerHTML = "A text";
       a.ssb_event_log = ["click"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(a);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='click,keypress'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: input node with type=submit attribute set to a text value and a click event set in the code behind', function() {
    it('input node with type=submit attribute set to a text value and a click event set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var input = document.querySelector("#testing").contentWindow.document.createElement("input");
       input.setAttribute("type", "submit");
       input.id = "test";
       input.innerHTML = "button text";
       input.ssb_event_log = ["click"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(input);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='click,keypress'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: button node and a click event set in the code behind', function() {
    it('button node a click event set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var button = document.querySelector("#testing").contentWindow.document.createElement("button");

       button.id = "test";
       button.innerHTML = "button text";
       button.ssb_event_log = ["click"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(button);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='click,keypress'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a click and keypress events set in the code behind', function() {
    it('span node with a click and keypress events set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["click","keypress"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='click,keypress'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a click event set in the code behind; and an onkeypress attribute set to a text value', function() {
    it('span node with a click event set in the code behind; and an onkeypress attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["click"];
       span.setAttribute("onkeypress", "function(){}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeypress='function(){}' data-ae_ev='click'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a keydown event set in the code behind; and an onclick attribute set to a text value', function() {
    it('span node with a keydown event set in the code behind; and an onclick attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["keydown"];
       span.setAttribute("onclick", "function(){}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onclick='function(){}' data-ae_ev='keydown'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a keyup event set in the code behind; and an onclick attribute set to a text value', function() {
    it('span node with a keyup event set in the code behind; and an onclick attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["keyup"];
       span.setAttribute("onclick", "function(){}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onclick='function(){}' data-ae_ev='keyup'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a keypress event set in the code behind; and an onclick attribute set to a text value', function() {
    it('span node with a keypress event set in the code behind; and an onclick attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["keypress"];
       span.setAttribute("onclick", "function(){}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onclick='function(){}' data-ae_ev='keypress'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String Fail: a span node with an onclick attribute set a text value; and no events attached in the code behind; without an onkeypress atttribute set to a text value', function() {
    it('a span node with an onclick attribute set a text value; and no events attached in the code behind; without an onkeypress event set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onclick='function(){}'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("112,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an onclick attribute set a text value; and no events attached in the code behind; and an onkeypress attribute set to a text value', function() {
    it('a span node with an onclick attribute set a text value; and no events attached in the code behind; and an onkeypress attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onclick='function(){}' onkeypress=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("112,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two span nodes with an onclick attribute set a text value; and no events attached in the code behind; and an onkeypress attribute set to a text value', function() {
    it('two span nodes with an onclick attribute set a text value; and no events attached in the code behind; and an onkeypress attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onclick='function(){}' onkeypress=''></span><span onclick='function(){}' onkeypress=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("112,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

/*
describe('String Fail: span node with a click event set in the code behind; without a keypress event set in the code behind; without an onkeypress attribute', function() {
    it('span node with a keypress event set in the code behind; without a keypress event set in the code behind; without an onkeypress attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["click"];
       span.setAttribute("onkeypress", "");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onkeypress='' data-ae_ev='click'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("112,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: span node with a click event set in the code behind; without a keypress event set in the code behind; with an onkeypress attribute set to a null value', function() {
    it('span node with a keypress event set in the code behind; without a keypress event set in the code behind; with an onkeypress attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["click"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='click'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("112,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: input type=text node with a click event set in the code behind; without a keypress event set in the code behind; with an onkeypress attribute set to a null value', function() {
    it('input type=text node with a keypress event set in the code behind; without a keypress event set in the code behind; with an onkeypress attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["click"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       // document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='text' id='test' data-ae_ev='click'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
       expect(res).toBe("112,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("112");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

describe('String Pass: input of type radio with an onclick handler and no key event', function() {
   it('input of type radio with an onclick handler and no key event should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='radio' name='foo' value='bar' checked='checked' onclick='javascript:Show();'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("112");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("112");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("112");
      expect(res).toBe(null);
      // </variant3>
   });
});
