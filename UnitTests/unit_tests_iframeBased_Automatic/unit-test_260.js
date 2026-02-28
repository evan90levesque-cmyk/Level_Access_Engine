const testHTML = (htmlString, shouldPass) => {
   document.querySelector("#testing").contentWindow.document.body.innerHTML = htmlString;
   LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
   // <variant1>
   var res = LevelAccess_AccessEngine.runTest_returnOutcome("260");
   expect(res).toBe(shouldPass ? 'pass' : 'fail');
   // </variant1>
   // <variant2>
   res = LevelAccess_AccessEngine.runTest_returnNumbers("260");
   expect(res).toBe(shouldPass ? "" : "260,1");
   // </variant2>
   // <variant3>
   res = LevelAccess_AccessEngine.runTest_returnInstances("260");
   if (shouldPass) {
      expect(res).toBe(null);
   } else {
      expect(res?.instances?.length).toBe(1);
   }
   // </variant3>
}

// base case

describe('String Pass: no nodes, available to assistive technologies, has an aria-level attribute', function() {
    it('no nodes, available to assistive technologies, has an aria-level attribute should be equal to pass', function() {
       testHTML("<p>Hello</p>", true);
    });
});

// heading elements

['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((heading) => {
   describe(`String Pass: a ${heading} node, available to assistive technologies, with an aria-level attribute`, function() {
      it(`a ${heading} node, available to assistive technologies, with an aria-level attribute should be equal to pass`, function() {
         testHTML(`<${heading} aria-level='1'>Hello</${heading}>`, true);
      });
   });
});

// nonheading elements that are excluded

['table', 'tr', 'li'].forEach((element) => {
   describe(`String Pass: a ${element} node, available to assistive technologies, with an aria-level attribute`, function() {
      it(`a ${element} node, available to assistive technologies, with an aria-level attribute should be equal to pass`, function() {
         testHTML(`<${element} aria-level='1'>Hello</${element}>`, true);
      });
   });
});

// nodes with a roles that are excluded

['grid', 'heading', 'listitem', 'row', 'tablist', 'treeitem'].forEach((role) => {
   describe(`String Pass: no node, excluding nodes with a role attribute that starts with "${role}", available to assistive technologies, has an aria-level attribute`, function() {
      it(`no node, excluding nodes with a role attribute that starts with "${role}", available to assistive technologies, has an aria-level attribute should be equal to pass`, function() {
         testHTML(`<span role='${role}' aria-level='1'>Hello</span>`, true);
      });
   });
});

// Nodes that fail

describe('String Fail: a span node, available in the DOM, has an aria-level attribute', function() {
    it('a span node, available in the DOM, has an aria-level attribute should be equal to fail', function() {
       testHTML("<span aria-level='1'>Hello</span>", false);
    });
});

describe('String Fail: a span node role="button", available in the DOM, has an aria-level attribute', function() {
    it('a span node role="button", available in the DOM, has an aria-level attribute should be equal to fail', function() {
       testHTML("<span role='button' aria-level='1'>Hello</span>", false);
    });
});