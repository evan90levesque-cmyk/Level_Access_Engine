describe('String N/A: no img nodes', function() {
    it('no img nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: img node with a role set to a text value that starts with presentation', function() {
    it('img node with a role set to a text value that starts with presentation should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='test.gif' role='presentation'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: img node with a role set to a text value that starts with tree', function() {
    it('img node with a role set to a text value that starts with tree should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='test.gif' role='tree'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: img node with an alt attribute set to a null value', function() {
    it('img node with an alt attribute set to a null value should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='test.gif' alt=''>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: img node that lacks an accessible name but is inside a button', function() {
   it('img node that lacks an accessible name but is inside a button should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = ''
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<button><img src='test.gif'></button>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an anchor', function() {
   it('img node that lacks an accessible name but is inside an anchor should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = ''
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<a href="foo"><img src='test.gif'></a>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside a meter', function() {
   it('img node that lacks an accessible name but is inside a meter should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<meter value='10'><img src='test.gif'></meter>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside a progress', function() {
   it('img node that lacks an accessible name but is inside a progress should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<progress value='10'><img src='test.gif'></progress>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=button', function() {
   it('img node that lacks an accessible name but is inside an element with role=button should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<span role='button'><img src='test.gif'></span>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=link', function() {
   it('img node that lacks an accessible name but is inside an element with role=link should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<span role='link'><img src='test.gif'></span>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=checkbox', function() {
   it('img node that lacks an accessible name but is inside an element with role=checkbox should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="checkbox"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=img', function() {
   it('img node that lacks an accessible name but is inside an element with role=img should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="img"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=menuitemcheckbox', function() {
   it('img node that lacks an accessible name but is inside an element with role=menuitemcheckbox should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="menuitemcheckbox"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=menuitemradio', function() {
   it('img node that lacks an accessible name but is inside an element with role=menuitemradio should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="menuitemradio"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=meter', function() {
   it('img node that lacks an accessible name but is inside an element with role=meter should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="meter"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=option', function() {
   it('img node that lacks an accessible name but is inside an element with role=option should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="option"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=progressbar', function() {
   it('img node that lacks an accessible name but is inside an element with role=progressbar should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="progressbar"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=radio', function() {
   it('img node that lacks an accessible name but is inside an element with role=radio should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="radio"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=scrollbar', function() {
   it('img node that lacks an accessible name but is inside an element with role=scrollbar should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="scrollbar"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=separator', function() {
   it('img node that lacks an accessible name but is inside an element with role=separator should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="separator"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=slider', function() {
   it('img node that lacks an accessible name but is inside an element with role=slider should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="slider"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=switch', function() {
   it('img node that lacks an accessible name but is inside an element with role=switch should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="switch"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: img node that lacks an accessible name but is inside an element with role=tab', function() {
   it('img node that lacks an accessible name but is inside an element with role=tab should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="tab"><img src='test.gif'></div>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('89');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('89');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('89');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: img node with an aria-labelledby attribute', function() {
    it('img node with an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><img src='test.gif' aria-labelledby='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: img node with an aria-label attribute', function() {
    it('img node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='test.gif' aria-label='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: img node with an alt attribute', function() {
    it('img node with an alt attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='test.gif' alt='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: img node with a title attribute', function() {
    it('img node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='test.gif' title='label1'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: img node without an aria-labelledby, aria-label, alt or title attribute', function() {
    it('img node without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<img src='test.gif'>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("89");
       expect(res).toBe("89,1");       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("89");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});