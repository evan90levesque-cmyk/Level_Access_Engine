describe('String N/A: no svg nodes', function() {
    it('no svg nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: svg node with a role set to a text value that starts with presentation', function() {
    it('no svg nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg role='presentation'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: svg node with a role set to a text value that starts with img', function() {
    it('no svg nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg role='img'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: ENG-903: svg node that lacks an accessible name but is an ancestor of a button', function() {
   it('svg node that lacks an accessible name but is an ancestor of a button should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <button id="test">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </button>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("123");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: ENG-1075: svg node that lacks an accessible name but is an ancestor of an anchor', function() {
   it('svg node that lacks an accessible name but is an ancestor of an anchor should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <a href="foo" id="test">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </a>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("123");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside a meter', function() {
   it('svg node that lacks an accessible name but is inside a meter should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <meter value="10">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </meter>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside a progress', function() {
   it('svg node that lacks an accessible name but is inside a progress should be equal to na', function() {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <progress value="10">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </progress>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: ENG-1075: svg node that lacks an accessible name but is an ancestor of an element with role=button', function() {
   it('svg node that lacks an accessible name but is an ancestor of an element with role=button should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <span role="button">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </span>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("123");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: ENG-1075: svg node that lacks an accessible name but is an ancestor of an element with role=link', function() {
   it('svg node that lacks an accessible name but is an ancestor of an element with role=link should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <span role="link">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </span>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("123");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=checkbox', function() {
   it('svg node that lacks an accessible name but is inside an element with role=checkbox should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="checkbox">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=img', function() {
   it('svg node that lacks an accessible name but is inside an element with role=img should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="img">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=menuitemcheckbox', function() {
   it('svg node that lacks an accessible name but is inside an element with role=menuitemcheckbox should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="menuitemcheckbox">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=menuitemradio', function() {
   it('svg node that lacks an accessible name but is inside an element with role=menuitemradio should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="menuitemradio">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=meter', function() {
   it('svg node that lacks an accessible name but is inside an element with role=meter should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="meter">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=option', function() {
   it('svg node that lacks an accessible name but is inside an element with role=option should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="option">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=progressbar', function() {
   it('svg node that lacks an accessible name but is inside an element with role=progressbar should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="progressbar">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=radio', function() {
   it('svg node that lacks an accessible name but is inside an element with role=radio should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="radio">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=scrollbar', function() {
   it('svg node that lacks an accessible name but is inside an element with role=scrollbar should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="scrollbar">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=separator', function() {
   it('svg node that lacks an accessible name but is inside an element with role=separator should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="separator">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=slider', function() {
   it('svg node that lacks an accessible name but is inside an element with role=slider should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="slider">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=switch', function() {
   it('svg node that lacks an accessible name but is inside an element with role=switch should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="switch">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: svg node that lacks an accessible name but is inside an element with role=tab', function() {
   it('svg node that lacks an accessible name but is inside an element with role=tab should be equal to na', function () {
      document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
      document.querySelector('#testing').contentWindow.document.body.innerHTML = `
         <div role="tab">
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
            </svg>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
      // <variant1>
      let res = LevelAccess_AccessEngine.runTest_returnOutcome('123');
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers('123');
      expect(res).toBe('');
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances('123');
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: svg node with an aria-labelledby attribute', function() {
    it('svg node with an aria-labelledby attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><svg aria-labelledby='label1'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: svg node with an aria-label attribute', function() {
    it('svg node with an aria-label attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg src='test.gif' aria-label='label1'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: svg node with a title attribute', function() {
    it('svg node with a title attribute should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg src='test.gif' title='label1'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: svg node with a child title element, without an aria-labelledby, aria-label, alt or title attribute', function() {
    it('svg node with a child title element without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg src='test.gif'><title>alternative1</title></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: ENG-786: svg node with a child circle element with a role of "graphics-symbol" with a title', function() {
   it('svg node with a child circle element with a role of "graphics-symbol" with a title should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg">
            <circle role="graphics-symbol" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow">
                <title>Yellow circle</title>
            </circle>
         </svg>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("123");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: svg node with a child desc element, without an aria-labelledby, aria-label, alt or title attribute', function() {
    it('svg node with a child desc element without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg src='test.gif'><desc>alternative1</desc></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("123,1");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: svg node without an aria-labelledby, aria-label, alt or title attribute', function() {
    it('svg node without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg src='test.gif'></svg>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("123");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("123");
       expect(res).toBe("123,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("123");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});
