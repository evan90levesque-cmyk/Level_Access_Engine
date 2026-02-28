describe('String N/A: no nodes', function() {
   it('no nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input with a role set to a text value that starts with presentation', function() {
   it('an input with a role set to a text value that starts with presentation should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input role='presentation'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input with a style attribute set to "display:none;"', function() {
   it('an input with a style attribute set to "display:none;" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input style='display:none'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input that lacks an accessible name', function() {
   it('an input that lacks an accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an input with an implicit accessible name and a placeholder attribute that are greater than 3 characters', function() {
   it('an input with an implicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>Name: <input placeholder='Name'></label>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: an input with an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters', function() {
   it('an input with an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>N: <input placeholder='Name'></label>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an input with an explicit accessible name and a placeholder attribute that are greater than 3 characters', function() {
   it('an input with an explicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>Name: </label><input placeholder='Name' id='test'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: an input with an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters', function() {
   it('an input with an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>N: </label><input placeholder='Name' id='test'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an input with placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other', function() {
   it('an input with placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>First Name</span><input placeholder='First Name' aria-labelledby='label1'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: an input with a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters', function() {
   it('an input with a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>N: </span><input placeholder='Name' aria-labelledby='label1'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an input with placeholder and aria-label attributes that are greater than 3 characters and equal to each other', function() {
   it('an input with placeholder and aria-label attributes that are greater than 3 characters and equal to each other should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input placeholder='First Name' aria-label='First Name'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: an input with a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters', function() {
   it('an input with a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input placeholder='First Name' aria-label='foo'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an input with placeholder and title attributes that are greater than 3 characters and equal to each other', function() {
   it('an input with placeholder and title attributes that are greater than 3 characters and equal to each other should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input placeholder='First Name' title='First Name'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: an input with a placeholder attribute greater than 3 characters and a title attribute less than 4 characters', function() {
   it('an input with a placeholder attribute greater than 3 characters and a title attribute less than 4 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input placeholder='First Name' title='foo'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: an input with only a placeholder attribute', function() {
   it('an input with only a placeholder attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input placeholder='First Name'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("863,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an input with type=search and implicit role=searchbox that has only a placeholder attribute', function() {
   it('an input with type=search and implicit role=searchbox that has only a placeholder attribute should be equal to fail', function() {
      // implicit role="searchbox" is also covered by ENG-863 on input with type="search"
      // all other scenarios with an explicit aria role are captured by the new rule ENG-1563
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input type='search' placeholder='First Name'>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("863");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("863");
      expect(res).toBe("863,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("863");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});