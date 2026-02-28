describe('String N/A: no tree nodes', function() {
    it('no tree nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('na');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res).toBe(null);
    });
});

describe('String Pass: tree with no forbidden elements', function() {
    it('tree with no forbidden elements should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><div>Just text</div></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('pass');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res).toBe(null);
    });
});

describe('String Pass: forbidden element inside treeitem', function() {
    it('forbidden element inside treeitem should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><span role="treeitem"><input type="text"></span></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('pass');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res).toBe(null);
    });
});

describe('String Fail: forbidden element not inside treeitem', function() {
    it('forbidden input not inside treeitem should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><input type="text"></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('fail');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("1409,1");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res.instances.length).toBe(1);
    });
    it('forbidden button not inside treeitem should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><button>Click</button></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('fail');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("1409,1");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res.instances.length).toBe(1);
    });
    it('forbidden textarea not inside treeitem should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><textarea></textarea></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('fail');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("1409,1");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res.instances.length).toBe(1);
    });
    it('forbidden select not inside treeitem should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><select><option>1</option></select></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('fail');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("1409,1");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res.instances.length).toBe(1);
    });
    it('forbidden anchor not inside treeitem should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><a href="#">Link</a></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('fail');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("1409,1");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res.instances.length).toBe(1);
    });
});

describe('String Pass: forbidden element inside div inside treeitem', function() {
    it('forbidden element inside a div inside treeitem should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span role="tree"><span role="treeitem"><div><input type="text"></div></span></span>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       
       let res = LevelAccess_AccessEngine.runTest_returnOutcome("1409");
       expect(res).toBe('pass');
       res = LevelAccess_AccessEngine.runTest_returnNumbers("1409");
       expect(res).toBe("");
       res = LevelAccess_AccessEngine.runTest_returnInstances("1409");
       expect(res).toBe(null);
    });
});
