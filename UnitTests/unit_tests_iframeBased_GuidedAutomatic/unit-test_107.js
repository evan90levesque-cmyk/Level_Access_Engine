describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node which does not contain text', function() {
    it('node which does not contain text should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span></span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: title inside svg element', function () {
   it('title inside svg element should be equal to pass', function () {
     document.querySelector("#testing").contentWindow.document.head.innerHTML =
       "<style>.foo{color:white}</style>";
     document.querySelector("#testing").contentWindow.document.body.innerHTML =
       `<svg class="foo" width="32px" height="32px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false">
      <title>Linked in</title>
      <g class="Icons-/-Social-/-Linkedin" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <ellipse fill="#007AB9" fill-rule="nonzero" cx="19.8576991" cy="19.7183682" rx="19.8576991" ry="19.373365"></ellipse>
        <path d="M31.7224779,21.2772717 L31.7224779,29.2644938 L26.9759292,29.2644938 L26.9759292,21.8125621 C26.9759292,19.9414634 26.2906195,18.6636736 24.5720354,18.6636736 C23.260531,18.6636736 22.4814159,19.523937 22.1373451,20.3569178 C22.0123894,20.6546082 21.980177,21.0679905 21.980177,21.4855169 L21.980177,29.2641485 L17.2332743,29.2641485 C17.2332743,29.2641485 17.2969912,16.6430391 17.2332743,15.3365854 L21.980531,15.3365854 L21.980531,17.3102525 C21.9709735,17.3257932 21.9575221,17.3409886 21.9490265,17.3558385 L21.980531,17.3558385 L21.980531,17.3102525 C22.6113274,16.3633067 23.7362832,15.0095403 26.2584071,15.0095403 C29.3812389,15.0095403 31.7224779,17.0001295 31.7224779,21.2772717 L31.7224779,21.2772717 Z M12.2676106,8.62300885 C10.6438938,8.62300885 9.58159292,9.66285344 9.58159292,11.0290524 C9.58159292,12.3662422 10.6130973,13.4361321 12.2053097,13.4361321 L12.2361062,13.4361321 C13.8916814,13.4361321 14.9210619,12.3662422 14.9210619,11.0290524 C14.8895575,9.66285344 13.8916814,8.62300885 12.2676106,8.62300885 L12.2676106,8.62300885 Z M9.86371681,29.2644938 L14.6088496,29.2644938 L14.6088496,15.3365854 L9.86371681,15.3365854 L9.86371681,29.2644938 Z" fill="#F1F2F2" fill-rule="nonzero"></path>
      </g>
    </svg>`;
     LevelAccess_AccessEngine.setWindowUnderTest(
       document.querySelector("#testing").contentWindow
     );
     // <variant1>
     var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
     expect(res).toBe("pass");
     // </variant1>
     // <variant2>
     res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
     expect(res).toBe("");
     // </variant2>
     // <variant3>
     res = LevelAccess_AccessEngine.runTest_returnInstances("107");
     expect(res).toBe(null);
     // </variant3>
   });
 });

// bold - greater 14pt or larger should be non-applicable

describe('String N/A: node that contains bold text provided through font-weight="bold"', function() {
    it('node that contains bold text provided through font-weight="bold" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='font-size:18.7px;font-weight:bold'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node that contains bold text provided through font-weight="700"', function() {
    it('node that contains bold text provided through font-weight="700" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='font-size:18.7px;font-weight:700'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node that contains bold text provided through font-weight="900"', function() {
    it('node that contains bold text provided through font-weight="900" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='font-size:1.2em;font-weight:900'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node that contains bold text provided through b node', function() {
    it('node that contains bold text provided through b node should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<b style='font-size:117%'>Test</b>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

// non-bold - 18pt or larger should be non-applicable

describe('String N/A: node that contains text styled with font-size="24px"', function() {
    it('node that contains text styled with font-size="" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='font-size:24px;'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node that contains text styled with font-size="1.5em"', function() {
    it('node that contains text styled with font-size="" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='font-size:1.5em;'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: node that contains text styled with font-size="150%"', function() {
    it('node that contains text styled with font-size="" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span style='font-size:150%;'>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

// Pass

describe('String Pass: no background or text colour specified', function() {
    it('no background or text colour specified should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<span>Test</span>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: white text on black background colour', function() {
    it('white text on black background colour should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#000000"><span style="color:#FFFFFF">Colour Contrast Test - Pass 2</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: black text on yellow background', function() {
    it('black text on yellow background should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#FFFFCC"><span style="color:#000000">Colour Contrast Test - Pass 3</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: A background color of #ffffff with a text color of #767676 should be a pass', function() {
    it('black text on yellow background should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#FFFFFF"><span style="color:#767676">Colour Contrast Test - Pass 3</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: Background - #00FF00, Text - #FFFF00', function() {
    it('Background - #00FF00, Text - #FFFF00 should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#00FF00"><span style="color:#FFFF00">Colour Contrast Test - Fail 1</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("107,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: Background - #990099, Text - #000000', function() {
    it('Background - #990099, Text - #000000 should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#990099"><span style="color:#000000">Colour Contrast Test - Fail 1</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("107,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: Background - #CCCC99, Text - #99CC99', function() {
    it('Background - #CCCC99, Text - #99CC99 should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#CCCC99"><span style="color:#99CC99">Colour Contrast Test - Fail 1</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("107,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: Background - #CCCC99, Text - #CCCC00', function() {
    it('Background - #CCCC99, Text - #CCCC00 should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#CCCC99"><span style="color:#CCCC00">Colour Contrast Test - Fail 1</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("107,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: Background - #CCCC99. Text - #66CCCC', function() {
    it('Background - #CCCC99. Text - #66CCCC should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#CCCC99"><span style="color:#66CCCC">Colour Contrast Test - Fail 1</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("107,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: Parent contains two text nodes which both have a background:text ratio that is under 4.5:1', function() {
    it('Parent contains two text nodes which both have a background:text ratio that is under 4.5:1 should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#CCCC99"><span style="font-family: arial; font-size: 10pt; color: #66cccc;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Model 1 - 4 ppm - 2 bin<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Model 2 - 10 ppm - 3 bin</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("107,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: A background color of #ffffff with a text color of #777777 should be a fail', function() {
    it('black text on yellow background should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background:#FFFFFF"><span style="color:#777777">Colour Contrast Test - Pass 3</span></div>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
       expect(res).toBe("107,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("107");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String N/A: A background color of #ffffff with a text color of #777777 on an element that is tiny should be na', function() {
   it('black text on yellow background should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = `
         <style>
            .sr-only {
               position: absolute;
               width: 1px;
               height: 1px;
               padding: 0;
               margin: -1px;
               overflow: hidden;
               clip: rect(0,0,0,0);
               border: 0;
            }
         </style>
      `;
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div class="sr-only" style="background:#FFFFFF">
            <span style="color:#777777">Colour Contrast Test - Pass 3</span>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Fail: two divs, each with a background color of #ffffff and a text color of #777777, but only one of which is tiny, should be fail', function() {
   it('two divs, each with a background color of #ffffff and a text color of #777777, but only one of which is tiny, should be fail equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = `
         <style>
            .sr-only {
               position: absolute;
               width: 1px;
               height: 1px;
               padding: 0;
               margin: -1px;
               overflow: hidden;
               clip: rect(0,0,0,0);
               border: 0;
            }
         </style>
      `;
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <div style="background:#FFFFFF">
            <span style="color:#777777">Colour Contrast Test - Fail</span>
         </div>
         <div class="sr-only" style="background:#FFFFFF">
            <span style="color:#777777">Colour Contrast Test - N/A</span>
         </div>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("107,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a button with a background color of #ffffff and a text color of #ffffff', function() {
   it('a button with a background color of #ffffff and a text color of #ffffff should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <button style="color: #ffffff; background-color: #ffffff;">
            click me!
         </button>
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("107,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: an input element of type="submit" with a background color of #ffffff and a text color of #ffffff', function() {
   it('an input element of type="submit" with a background color of #ffffff and a text color of #ffffff should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <input type="submit" value="Submit" style="color: #ffffff; background-color: #ffffff;">
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("107,1");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String N/A: an input element of type="checkbox" with a background color of #ffffff and a text color of #ffffff', function() {
   it('an input element of type="checkbox" with a background color of #ffffff and a text color of #ffffff should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <input type="checkbox" name="subscribe" value="newsletter" style="color: #ffffff; background-color: #ffffff;">
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input element of type="color" with a background color of #ffffff and a text color of #ffffff', function() {
   it('an input element of type="color" with a background color of #ffffff and a text color of #ffffff should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <input type="color" name="color-picker" value="#e66465" style="color: #ffffff; background-color: #ffffff;">
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input element of type="radio" with a background color of #ffffff and a text color of #ffffff', function() {
   it('an input element of type="radio" with a background color of #ffffff and a text color of #ffffff should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <input type="radio" name="drone" value="huey" style="color: #ffffff; background-color: #ffffff;">
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input element of type="range" with a background color of #ffffff and a text color of #ffffff', function() {
   it('an input element of type="range" with a background color of #ffffff and a text color of #ffffff should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <input type="range" name="volume" min="0" max="11" value="1" style="color: #ffffff; background-color: #ffffff;">
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: an input element of type="hidden" with a background color of #ffffff and a text color of #ffffff', function() {
   it('an input element of type="hidden" with a background color of #ffffff and a text color of #ffffff should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
         <input type="hidden" name="hidden-value" value="hello" style="color: #ffffff; background-color: #ffffff;">
      `;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: an option element inside a select element with a disabled attribute', function() {
   it('an option element inside a select element with a disabled attribute should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = '';
      document.querySelector("#testing").contentWindow.document.body.innerHTML = `
      <select name="test" disabled="" aria-label="something">
      <option value="1">foo</option>
      </select>`;
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("107");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("107");
      expect(res).toBe("");
      // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("107");
      expect(res).toBe(null);
      // </variant3>
   });
});
