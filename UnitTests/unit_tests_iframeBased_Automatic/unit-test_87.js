describe('String N/A: no node with a role attribute set to a text value that starts with "img"', function() {
    it('no node with a role attribute set to a text value that starts with "img" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("87");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('role^="img"', () => {
   describe('String N/A: node with a role attribute set to a text value that starts with "img" that is not available to assistive technologies', function() {
      it('node with a role attribute set to a text value that starts with "img" that is not available to assistive technologies should be equal to na', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div aria-hidden='true'><span role='img' src='test.gif' aria-labelledby='label1'></div>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: ENG-1075 node with a role="img" that lacks an accessible name but is inside a button', function() {
      it('node with a role="img" that lacks an accessible name but is inside a button should be equal to na', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<button><span role='img' src='test.gif'></button>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: ENG-1075 node with a role="img" that lacks an accessible name but is inside an anchor', function() {
      it('node with a role="img" that lacks an accessible name but is inside an anchor should be equal to na', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='foo'><span role='img' src='test.gif'></a>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside a meter', function() {
      it('node with a role="img" that lacks an accessible name but is inside a meter should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<meter value='10'><span role='img' src='test.gif'></span></meter>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside a progress', function() {
      it('node with a role="img" that lacks an accessible name but is inside a progress should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<progress value='10'><span role='img' src='test.gif'></span></progress>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: ENG-1075 node with a role="img" that lacks an accessible name but is inside an element with role=link', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=link should be equal to na', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='link'><span role='img' src='test.gif'></span>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: ENG-1075 node with a role="img" that lacks an accessible name but is inside an element with role=button', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=button should be equal to na', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='button'><span role='img' src='test.gif'></span>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=checkbox', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=checkbox should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="checkbox"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=menuitemcheckbox', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=menuitemcheckbox should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="menuitemcheckbox"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=menuitemradio', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=menuitemradio should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="menuitemradio"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=meter', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=meter should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="meter"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=option', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=option should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="option"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=progressbar', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=progressbar should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="progressbar"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=radio', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=radio should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="radio"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=scrollbar', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=scrollbar should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="scrollbar"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=separator', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=separator should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="separator"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=slider', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=slider should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="slider"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=switch', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=switch should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="switch"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: node with a role="img" that lacks an accessible name but is inside an element with role=tab', function() {
      it('node with a role="img" that lacks an accessible name but is inside an element with role=tab should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="tab"><span role='img' src='test.gif'></span></div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String Pass: node with a role attribute set to a text value that starts with "img" and an aria-labelledby attribute', function() {
      it('node with a role attribute set to a text value that starts with "img" and an aria-labelledby attribute should be equal to pass', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span id='label1'>Label</span><span role='img' src='test.gif' aria-labelledby='label1'></span>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('pass');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String Pass: node with a role attribute set to a text value that starts with "img" and an aria-label attribute', function() {
      it('node with a role attribute set to a text value that starts with "img" and an aria-label attribute should be equal to pass', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' src='test.gif' aria-label='label1'></span>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('pass');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String Pass: node with a role attribute set to a text value that starts with "img" and a title attribute', function() {
      it('node with a role attribute set to a text value that starts with "img" and a title attribute should be equal to pass', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' src='test.gif' title='label1'></span>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('pass');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String Fail: node with a role attribute set to a text value that starts with "img" and without an aria-labelledby, aria-label, alt or title attribute', function() {
      it('node with a role attribute set to a text value that starts with "img" and without an aria-labelledby, aria-label, alt or title attribute should be equal to fail', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span role='img' src='test.gif'></span>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('fail');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("87,1");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res.instances.length).toBe(1);
         // </variant3>
      });
   });
});

describe('role^="graphics"', () => {
   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside a button', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside a button should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <button>
               <svg id="test" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </button>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an anchor', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an anchor should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <a>
               <svg id="test" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </a>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside a meter', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside a meter should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <meter value="1">
               <svg id="test" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </meter>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside a progress', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside a progress should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <progress value="10">
               <svg id="test" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </progress>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=link', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=link should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <span role="link">
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </span>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=button', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=button should be equal to na', function() {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <span role='button'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </span>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=checkbox', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=checkbox should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='checkbox'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=menuitemcheckbox', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=menuitemcheckbox should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `<div role="menuitemcheckbox"><span role='img' src='test.gif'></span></div>`;
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='menuitemcheckbox'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=menuitemradio', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=menuitemradio should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='menuitemradio'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=meter', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=meter should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='meter'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=option', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=option should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='option'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=progressbar', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=progressbar should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='progressbar'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=radio', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=radio should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='radio'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=scrollbar', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=scrollbar should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='scrollbar'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=separator', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=separator should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='separator'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=slider', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=slider should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='slider'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=switch', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=switch should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='switch'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String N/A: svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=tab', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" that lacks an accessible name but is inside an element with role=tab should be equal to na', function () {
         document.querySelector('#testing').contentWindow.document.head.innerHTML = '';
         document.querySelector('#testing').contentWindow.document.body.innerHTML = `
            <div role='tab'>
               <svg xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
                   <circle cx="50" cy="50" r="40" fill="yellow"></circle>
               </svg>
            </div>`;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector('#testing').contentWindow);
         // <variant1>
         let res = LevelAccess_AccessEngine.runTest_returnOutcome('87');
         expect(res).toBe('na');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers('87');
         expect(res).toBe('');
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances('87');
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String Pass: svg with a role attribute set to a text value of "graphics-symbol" and a title attribute', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" and a title attribute should be equal to pass', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-symbol'><title>label1</title></svg>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('pass');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String Pass: svg with a role attribute set to a text value of "graphics-document" and a title attribute', function() {
      it('svg with a role attribute set to a text value of "graphics-document" and a title attribute should be equal to pass', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' role='graphics-document'><title>label1</title></svg>";
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('pass');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res).toBe(null);
         // </variant3>
      });
   });

   describe('String Fail: svg with a role attribute set to a text value of "graphics-symbol" and without an accessible name', function() {
      it('svg with a role attribute set to a text value of "graphics-symbol" and without an accessible name should be equal to fail', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = `
          <svg id="test" xmlns="http://www.w3.org/2000/svg" role="graphics-symbol">
              <circle cx="50" cy="50" r="40" fill="yellow"></circle>
          </svg>
      `;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('fail');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("87,1");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res.instances.length).toBe(1);
         // </variant3>
      });
   });

   describe('String Fail: svg with a role attribute set to a text value of "graphics-document" and without an accessible name', function() {
      it('svg with a role attribute set to a text value of "graphics-document" and without an accessible name should be equal to fail', function() {
         document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
         document.querySelector("#testing").contentWindow.document.body.innerHTML = `
          <svg id="test" xmlns="http://www.w3.org/2000/svg" role="graphics-document">
              <circle cx="50" cy="50" r="40" fill="yellow"></circle>
          </svg>
      `;
         LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
         // <variant1>
         var res = LevelAccess_AccessEngine.runTest_returnOutcome("87");
         expect(res).toBe('fail');
         // </variant1>
         // <variant2>
         res = LevelAccess_AccessEngine.runTest_returnNumbers("87");
         expect(res).toBe("87,1");
         // </variant2>
         // <variant3>
         res = LevelAccess_AccessEngine.runTest_returnInstances("87");
         expect(res.instances.length).toBe(1);
         // </variant3>
      });
   });
});
