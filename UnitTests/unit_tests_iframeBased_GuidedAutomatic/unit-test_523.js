describe('String N/A: table element that is a data table', function() {
    it('table element that is a data table should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td>Bob</td><td>38</td></tr></tbody></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

//role=presentation triggers removal of data-ae_avat so the test no longer applies
describe('String N/A: table element that is not a data table and has a role of "presentation"', function() {
    it('table element that is not a data table and has a role of "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table role="presentation"><tbody><tr><th>Name</th><th></th></tr><tr><td></td><td>38</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

//data tables should never have role=presentation
describe('String N/A: table element that is a data table and lacks a role of "presentation"', function() {
    it('table element that is a data table and lacks a role of "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td>34</td><td>38</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: table element that is a data table, with a span in the TD and lacks a role of "presentation"', function() {
    it('table element that is a data table, with a span in the TD and lacks a role of "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><span>$</span>34</td><td><span>$</span>38</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: table element that is a data table, with an i in the TD and lacks a role of "presentation"', function() {
    it('table element that is a data table, with an i in the TD and lacks a role of "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><i>$</i>34</td><td><i>$</i>38</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: table element that is a data table, with a b in the TD and lacks a role of "presentation"', function() {
    it('table element that is a data table, with a b in the TD and lacks a role of "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><b>$</b>34</td><td><b>$</b>38</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: table element that is a data table, with an em in the TD and lacks a role of "presentation"', function() {
    it('table element that is a data table, with an em in the TD and lacks a role of "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><em>$</em>34</td><td><em>$</em>38</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: table element that is a data table, with a strong element in the TD and lacks a role of "presentation"', function() {
   it('table element that is a data table, with a strong element in the TD and lacks a role of "presentation" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><strong>$</strong>34</td><td><strong>$</strong>38</td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("523");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: table element that is a data table, with a br element in the TD and lacks a role of "presentation"', function() {
   it('table element that is a data table, with a br element in the TD and lacks a role of "presentation" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><br>34</td><td><br>38</td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("523");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: table element that is a data table, with an A element in the TD and lacks a role of "presentation"', function() {
   it('table element that is a data table, with an A element in the TD and lacks a role of "presentation" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><a href="#">34</a></td><td><a href="#">38</a></td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("523");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: table element that is a data table, with a bdi element in the TD and lacks a role of "presentation"', function() {
   it('table element that is a data table, with a bdi element in the TD and lacks a role of "presentation" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><bdi>34</bdi></td><td><bdi>38</bdi></td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("523");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: table element that is a data table, with a label element in the TD and lacks a role of "presentation"', function() {
   it('table element that is a data table, with a label element in the TD and lacks a role of "presentation" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><label>34</label></td><td><label>38</label></td></tr></tbody></table>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("523");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: table element that is a data table, with a span, i, b, em, strong, br, A, bdi and label elements in the TD and lacks a role of "presentation"', function() {
    it('table element that is a data table, with a span, i, b, em, strong, br, A, bdi and label elements in the TD and lacks a role of "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th>Age</th></tr><tr><td><span>a</span><i>b</i><b>c</b><em>d</em><strong>e</strong><br><a href="#"><bdi>34</bdi></a></td><td><span>a</span><i>b</i><b>c</b><em>d</em><strong>e</strong><br><a href="#"><bdi>38</bdi></a><label>foo</label></td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: table element that is not a data table and lacks a role of "presentation"', function() {
    it('table element that is not a data table and lacks a role of "presentation" should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr><th>Name</th><th></th></tr><tr><td></td><td>38</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("523");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("523");
       expect(res).toBe("523,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("523");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
