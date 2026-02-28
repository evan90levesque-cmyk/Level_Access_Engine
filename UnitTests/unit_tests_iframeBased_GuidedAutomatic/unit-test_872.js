describe('String N/A: no nodes', function() {
   it('no nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a textarea with a role set to a text value that starts with presentation', function() {
   it('a textarea with a role set to a text value that starts with presentation should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea role='presentation'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a textarea with a style attribute set to "display:none;"', function() {
   it('a textarea with a style attribute set to "display:none;" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea style='display:none'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a textarea that lacks an accessible name', function() {
   it('a textarea that lacks an accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a textarea with an implicit accessible name and a placeholder attribute that are greater than 3 characters', function() {
   it('a textarea with an implicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>Name: <textarea placeholder='Name'></textarea></label>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a textarea with an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters', function() {
   it('a textarea with an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>N: <textarea placeholder='Name'></textarea></label>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a textarea with an explicit accessible name and a placeholder attribute that are greater than 3 characters', function() {
   it('a textarea with an explicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>Name: </label><textarea placeholder='Name' id='test'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a textarea with an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters', function() {
   it('a textarea with an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>N: </label><textarea placeholder='Name' id='test'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a textarea with placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other', function() {
   it('a textarea with placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>First Name</span><textarea placeholder='First Name' aria-labelledby='label1'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a textarea with a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters', function() {
   it('a textarea with a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>N: </span><textarea placeholder='Name' aria-labelledby='label1'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a textarea with placeholder and aria-label attributes that are greater than 3 characters and equal to each other', function() {
   it('a textarea with placeholder and aria-label attributes that are greater than 3 characters and equal to each other should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea placeholder='First Name' aria-label='First Name'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a textarea with a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters', function() {
   it('a textarea with a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea placeholder='First Name' aria-label='foo'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a textarea with placeholder and title attributes that are greater than 3 characters and equal to each other', function() {
   it('a textarea with placeholder and title attributes that are greater than 3 characters and equal to each other should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea placeholder='First Name' title='First Name'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});
describe('String Pass: a textarea with a placeholder attribute greater than 3 characters and a title attribute less than 4 characters', function() {
   it('a textarea with a placeholder attribute greater than 3 characters and a title attribute less than 4 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea placeholder='First Name' title='foo'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: a textarea with only a placeholder attribute', function() {
   it('a textarea with only a placeholder attribute should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<textarea placeholder='First Name'></textarea>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("872");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("872");
      expect(res).toBe("872,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("872");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});