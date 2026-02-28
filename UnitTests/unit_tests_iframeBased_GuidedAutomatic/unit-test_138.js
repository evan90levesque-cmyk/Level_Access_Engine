describe('String N/A: span node with a role set to a text value that starts with presentation', function() {
    it('span node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='presentation'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an aria-label attribute set to "alternative" that is not available in the DOM', function() {
    it('a span node with an aria-label attribute set to "alternative" that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='display:none' aria-label='alternative'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a span node with an onmouseover attribute set a null text value; and no events attached in the code behind', function() {
    it('a span node with an onmouseover attribute set a null text value; and no events attached in the code behind should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseover=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res).toBe(null);
       // </variant3>
    });
});


describe('String Pass: span node with an onmouseover attribute set to a text value; and an onfocus attribute set to a text value', function() {
    it('span node with an onmouseover attribute set to a text value; and an onfocus attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseover='function(){}' onfocus='function(){}'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res).toBe(null);
       // </variant3>
    });
});

/*
describe('String Pass: span node with a mouseover and focus events set in the code behind', function() {
    it('span node with a mouseover and focus events set in the code behind should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseover","focus"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mouseover,focus'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a mouseover event set in the code behind; and an onfocus attribute set to a text value', function() {
    it('span node with a mouseover event set in the code behind; and an onfocus attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseover"];
       span.setAttribute("onfocus", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onfocus='function(){}' data-ae_ev='mouseover'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

/*
describe('String Pass: span node with a focus event set in the code behind; and an onmouseover attribute set to a text value', function() {
    it('span node with a focus event set in the code behind; and an onmouseover attribute set to a text value should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["focus"];
       span.setAttribute("onmouseover", "function() {}");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       //document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onmouseover='function(){}' data-ae_ev='focus'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res).toBe(null);
       // </variant3>
    });
});
*/

describe('String Fail: a span node with an onmouseover attribute set a text value; and no events attached in the code behind; without an onfocus atttribute set to a text value', function() {
    it('a span node with an onmouseover attribute set a text value; and no events attached in the code behind; without an onfocus event set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseover='function(){}'></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("138,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: a span node with an onmouseover attribute set a text value; and no events attached in the code behind; and an onfocus attribute set to a text value', function() {
    it('a span node with an onmouseover attribute set a text value; and no events attached in the code behind; and an onfocus attribute set to a text value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span onmouseover='function(){}' onfocus=''></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("138,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

/*
describe('String Fail: span node with a mouseover event set in the code behind; without a focus event set in the code behind; without an onfocus attribute', function() {
    it('span node with a mouseover event set in the code behind; without a focus event set in the code behind; without an onfocus attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseover"];
       span.setAttribute("onfocus", "");
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' onfocus='' data-ae_ev='mouseover'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("138,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/

/*
describe('String Fail: span node with a mouseover event set in the code behind; without a focus event set in the code behind; with an onfocus attribute set to a null value', function() {
    it('span node with a mouseover event set in the code behind; without a focus event set in the code behind; with an onfocus attribute set to a null value should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       // emulate node code
       // always reset body
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       var span = document.querySelector("#testing").contentWindow.document.createElement("span");
       span.id = "test";
       span.innerHTML = "Span text";
       span.ssb_event_log = ["mouseover"];
       document.querySelector("#testing").contentWindow.document.body.appendChild(span);
       
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='test' data-ae_ev='mouseover'>Span text</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("138");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("138");
       expect(res).toBe("138,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("138");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/