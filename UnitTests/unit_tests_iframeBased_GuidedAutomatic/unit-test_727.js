describe('String N/A: no area nodes', function() {
   it('no area nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: area with a role set to a text value that starts with presentation', function() {
   it('area with a role set to a text value that starts with presentation should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area role='presentation'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an area that lacks an accessible name', function() {
   it('an area that lacks an accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an area that lacks an accessible name (explicit label)', function() {
   it('an area with that lacks an accessible name (explicit label) should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label for='test'>test</label><area id='test'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an area that lacks an accessible name (implicit label)', function() {
   it('an area that lacks an accessible name (implicit label) should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label>test<area id='test'></area></label>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an area with an aria-labelledby attribute that is more than 3 characters', function() {
   it('an area with an aria-labelledby attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>test</span><area aria-labelledby='label1'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an area with an aria-label attribute that is more than 3 characters', function() {
   it('an area with an aria-label attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area aria-label='test'><area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      var res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an area with a title attribute that is more than 3 characters', function() {
   it('an area with a title attribute that is more than 3 characters should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area title='test'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: an area with an aria-label that is less than 4 characters', function() {
   it('an area with an aria-label that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area aria-label='go'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("727,1");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an area with an aria-labelledby that is less than 4 characters', function() {
   it('an area with an aria-labelledby that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<label id='foo'>go</label><area aria-labelledby='foo'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("727,1");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an area with a title that is less than 4 characters', function() {
   it('an area with a title that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area title='go'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("727,1");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an area with an alt that is less than 4 characters', function() {
   it('an area with an alt that is less than 4 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<area alt='go'></area>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
      expect(res).toBe("727,1");       
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("727");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String N/A: area node inside excluded elements', function() {
   const testCases = [
      { element: 'button', html: '<button><area aria-label="go"></area></button>' },
      { element: 'meter', html: '<meter><area aria-label="go"></area></meter>' }
   ];

   testCases.forEach(({ element, html }) => {
      it(`area node inside ${element} should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("727");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});

describe('String N/A: area node inside elements with excluded roles', function() {
   const testCases = [
      { role: 'button', html: '<div role="button"><area aria-label="go"></area></div>' },
      { role: 'checkbox', html: '<div role="checkbox"><area aria-label="go"></area></div>' },
      { role: 'img', html: '<div role="img"><area aria-label="go"></area></div>' },
      { role: 'menuitemcheckbox', html: '<div role="menuitemcheckbox"><area aria-label="go"></area></div>' },
      { role: 'menuitemradio', html: '<div role="menuitemradio"><area aria-label="go"></area></div>' },
      { role: 'meter', html: '<div role="meter"><area aria-label="go"></area></div>' },
      { role: 'option', html: '<div role="option"><area aria-label="go"></area></div>' },
      { role: 'progressbar', html: '<div role="progressbar"><area aria-label="go"></area></div>' },
      { role: 'radio', html: '<div role="radio"><area aria-label="go"></area></div>' },
      { role: 'scrollbar', html: '<div role="scrollbar"><area aria-label="go"></area></div>' },
      { role: 'separator', html: '<div role="separator"><area aria-label="go"></area></div>' },
      { role: 'slider', html: '<div role="slider"><area aria-label="go"></area></div>' },
      { role: 'switch', html: '<div role="switch"><area aria-label="go"></area></div>' },
      { role: 'tab', html: '<div role="tab"><area aria-label="go"></area></div>' }
   ];

   testCases.forEach(({ role, html }) => {
      it(`area node inside element with role="${role}" should be equal to na`, function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = html;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("727");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("727");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("727");
         expect(res).toBe(null);
         // </variant3>
      });
   });
});
