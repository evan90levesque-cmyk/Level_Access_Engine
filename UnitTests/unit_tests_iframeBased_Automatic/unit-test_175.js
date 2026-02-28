describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("175");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("175");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("175");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a keygen and a role="input" not visible in the displayed content', function() {
    it('a keygen and a role="input" not visible in the displayed content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       var keygen = document.createElement("keygen");
       keygen.setAttribute('style', 'display:none');
       keygen.setAttribute('role', 'input');
       document.querySelector("#testing").contentWindow.document.body.appendChild(keygen);
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("175");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("175");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("175");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a keygen and a role="input" not available to assistive technology', function() {
    it('a keygen and a role="input" not available to assistive technology should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       var keygen = document.createElement("keygen");
       keygen.setAttribute('aria-hidden', 'true');
       keygen.setAttribute('role', 'input');
       document.querySelector("#testing").contentWindow.document.body.appendChild(keygen);
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("175");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("175");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("175");
       expect(res).toBe(null);
       // </variant3>
    });
});

// Firefox converts keygen to an HTML Select element
// Removing the following two tests - both work in Firefox
/*
describe('String Pass: a keygen node', function() {
    it('a keygen node should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       var keygen = document.createElement("keygen");
       document.querySelector("#testing").contentWindow.document.body.appendChild(keygen);
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("175");
       alert(LevelAccess_AccessEngine.rootTestNode.outerHTML);
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("175");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("175");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a keygen node with a role="input"', function() {
    it('a keygen node with a role="input" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       var keygen = document.createElement("keygen");
       keygen.setAttribute('role', 'input');
       document.querySelector("#testing").contentWindow.document.body.appendChild(keygen);
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("175");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("175");
       expect(res).toBe("175,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("175");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
*/