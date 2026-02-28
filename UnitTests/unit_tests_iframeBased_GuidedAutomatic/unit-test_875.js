describe('String N/A: no summary nodes', function() {
   it('no summary nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: summary node with a role set to a text value that starts with presentation', function() {
   it('summary node with a role set to a text value that starts with presentation should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<details><summary role='presentation'>This is a summary</summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: summary node with a role set to a text value that starts with dialog that is not available in the DOM', function() {
   it('summary node with a role set to a text value that starts with dialog that is not available in the DOM should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<details><summary style='display: none;'>This is a summary</summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: summary node with a role set to a text value that starts with dialog that lacks an accessible name', function() {
   it('summary node with a role set to a text value that starts with dialog that lacks an accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<details><summary></summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: summary node with a role set to a text value that starts with dialog that lacks an accessible name (explicit label)', function() {
   it('summary node with a role set to a text value that starts with dialog that lacks an accessible name (explicit label) should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>test</label><details><summary id='test'></summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: summary node with a role set to a text value that starts with dialog that lacks an accessible name (implicit label)', function() {
   it('summary node with a role set to a text value that starts with dialog that lacks an accessible name (implicit label) should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>test<details><summary id='test'></summary></details></span></label>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: summary node with a role set to a text value that starts with dialog and an aria-labelledby attribute that is more than 3 characters', function() {
   it('summary node with a role set to a text value that starts with dialog and an aria-labelledby attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>test</span><details><summary aria-labelledby='label1'></summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: summary node with a role set to a text value that starts with dialog and an aria-label attribute that is more than 3 characters', function() {
   it('summary node with a role set to a text value that starts with dialog and an aria-label attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<details><summary aria-label='test'></summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      var res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: summary node with a role set to a text value that starts with dialog and a title attribute that is more than 3 characters', function() {
   it('summary node with a role set to a text value that starts with dialog and a title attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<details><summary title='test'></summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: summary node with a role set to a text value that starts with dialog and an accessible name that is less than 4 characters', function() {
   it('summary node with a role set to a text value that starts with dialog and an accessible name that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<details><summary aria-label='go'></summary></details>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("875");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("875");
      expect(res).toBe("875,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("875");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});