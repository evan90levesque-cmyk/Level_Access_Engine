describe('String N/A: no nodes', function() {
    it('no nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a table node that is not available in the DOM', function() {
    it('a table node that is not available in the DOM should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table style='display:none'><tr><td></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a table node that is not available to AT', function() {
    it('a table node that is not available to AT should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table role='presentation'><tr><td></td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a layout table', function() {
    it('a layout table should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table width="100%" style="height: 100%;" cellpadding="10" cellspacing="0" border="0"><tr><!-- ============ LEFT COLUMN (MENU) ============== --><td width="20%" valign="top" bgcolor="#999f8e"><a href="#">Menu link</a><br><a href="#">Menu link</a><br><a href="#">Menu link</a><br><a href="#">Menu link</a><br><a href="#">Menu link</a></td><!-- ============ RIGHT COLUMN (CONTENT) ============== --><td width="80%" valign="top" bgcolor="#d2d8c7"><h1>Website Logo</h1><h2>Page heading</h2>This is a basic two-column web page layout. The left column or the <i>menu column</i> is a narrow band of space (usually between 15-25% of the page width) and is reserved for a menu of hyperlinks leading to other pages on your website. The table used to create this layout employs a single table row containing two table cells.<br><br>The right column or the <i>content column</i> takes up the lions share of the web page width and contains the actual content of each particular page. In a basic two column layout like this, it is common to place the website logo at the top of the content column on each page.</td></tr></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a table node, available to AT and available in the DOM, with a th element', function() {
    it('a table node, available to AT and available in the DOM, with a th element should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><td headers='alt1'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: two table nodes, available to AT and available in the DOM, with a th elements', function() {
    it('two table nodes, available to AT and available in the DOM, with a th element should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th id='alt1'>Alternative</th><td headers='alt1'>data cell</td></tr></table><table><tr><th id='alt1'>Alternative</th><td headers='alt1'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a table node, available to AT and available in the DOM, with a th element that has a role="rowheader"', function() {
    it('a table node, available to AT and available in the DOM, with a th element that has a role="rowheader" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th role='rowheader' id='alt1'>Alternative</th><td headers='alt1'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a table node, available to AT and available in the DOM, with a th element that has a role="columnheader"', function() {
    it('a table node, available to AT and available in the DOM, with a th element that has a role="columnheader" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><th role='columnheader' id='alt1'>Alternative</th><td headers='alt1'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a table node, available to AT and available in the DOM, with a td element that has a role="rowheader"', function() {
    it('a table node, available to AT and available in the DOM, with a td element that has a role="rowheader" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td role='rowheader' id='alt1'>Alternative</td><td headers='alt1'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a table node, available to AT and available in the DOM, with a td element that has a role="columnheader"', function() {
    it('a table node, available to AT and available in the DOM, with a td element that has a role="columnheader" should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td role='columnheader' id='alt1'>Alternative</td><td headers='alt1'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a table node, available to AT and available in the DOM, with a th elements', function() {
    it('a table node, available to AT and available in the DOM, with a th elements should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><thead><tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style="width: 136px;">Name</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 223px;">Position</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 100px;">Office</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Age: activate to sort column ascending" style="width: 40px;">Age</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Start date: activate to sort column ascending" style="width: 90px;">Start date</th><th class="sorting" tabindex="0" aria-controls="example" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 78px;">Salary</th></tr></thead><tfoot><tr><th rowspan="1" colspan="1">Name</th><th rowspan="1" colspan="1">Position</th><th rowspan="1" colspan="1">Office</th><th rowspan="1" colspan="1">Age</th><th rowspan="1" colspan="1">Start date</th><th rowspan="1" colspan="1">Salary</th></tr></tfoot><tbody><tr role="row" class="odd"><td class="sorting_1">Airi Satou</td><td>Accountant</td><td>Tokyo</td><td>33</td><td>2008/11/28</td><td>$162,700</td></tr><tr role="row" class="even"><td class="sorting_1">Angelica Ramos</td><td>Chief Executive Officer (CEO)</td><td>London</td><td>47</td><td>2009/10/09</td><td>$1,200,000</td></tr><tr role="row" class="odd"><td class="sorting_1">Ashton Cox</td><td>Junior Technical Author</td><td>San Francisco</td><td>66</td><td>2009/01/12</td><td>$86,000</td></tr><tr role="row" class="even"><td class="sorting_1">Bradley Greer</td><td>Software Engineer</td><td>London</td><td>41</td><td>2012/10/13</td><td>$132,000</td></tr><tr role="row" class="odd"><td class="sorting_1">Brenden Wagner</td><td>Software Engineer</td><td>San Francisco</td><td>28</td><td>2011/06/07</td><td>$206,850</td></tr><tr role="row" class="even"><td class="sorting_1">Brielle Williamson</td><td>Integration Specialist</td><td>New York</td><td>61</td><td>2012/12/02</td><td>$372,000</td></tr><tr role="row" class="odd"><td class="sorting_1">Bruno Nash</td><td>Software Engineer</td><td>London</td><td>38</td><td>2011/05/03</td><td>$163,500</td></tr><tr role="row" class="even"><td class="sorting_1">Caesar Vance</td><td>Pre-Sales Support</td><td>New York</td><td>21</td><td>2011/12/12</td><td>$106,450</td></tr><tr role="row" class="odd"><td class="sorting_1">Cara Stevens</td><td>Sales Assistant</td><td>New York</td><td>46</td><td>2011/12/06</td><td>$145,600</td></tr><tr role="row" class="even"><td class="sorting_1">Cedric Kelly</td><td>Senior Javascript Developer</td><td>Edinburgh</td><td>22</td><td>2012/03/29</td><td>$433,060</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a table node, available to AT and available in the DOM, without a th element or an element that has a role="rowheader"', function() {
    it('a td node with an headers attribute set to "alt1" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td>Alternative</td><td headers='alt'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("387,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('String Fail: two table nodes, available to AT and available in the DOM, without a th element or an element that has a role="rowheader"', function() {
    it('two td nodes with an headers attribute set to "alt1" that is available in the DOM; "alt1" is not an id value - should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<table><tr><td>Alternative</td><td headers='alt'>data cell</td></tr></table><table><tr><td>Alternative</td><td headers='alt'>data cell</td></tr></table>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("387,2");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res.instances.length).toBe(2);
       // </variant3>
    });
});

describe('String Fail: a table node, available to AT and available in the DOM, with no th elements', function() {
    it('a table node, available to AT and available in the DOM, with no th elements should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<table><tbody><tr role="row" class="odd"><td class="sorting_1">Airi Satou</td><td>Accountant</td><td>Tokyo</td><td>33</td><td>2008/11/28</td><td>$162,700</td></tr><tr role="row" class="even"><td class="sorting_1">Angelica Ramos</td><td>Chief Executive Officer (CEO)</td><td>London</td><td>47</td><td>2009/10/09</td><td>$1,200,000</td></tr><tr role="row" class="odd"><td class="sorting_1">Ashton Cox</td><td>Junior Technical Author</td><td>San Francisco</td><td>66</td><td>2009/01/12</td><td>$86,000</td></tr><tr role="row" class="even"><td class="sorting_1">Bradley Greer</td><td>Software Engineer</td><td>London</td><td>41</td><td>2012/10/13</td><td>$132,000</td></tr><tr role="row" class="odd"><td class="sorting_1">Brenden Wagner</td><td>Software Engineer</td><td>San Francisco</td><td>28</td><td>2011/06/07</td><td>$206,850</td></tr><tr role="row" class="even"><td class="sorting_1">Brielle Williamson</td><td>Integration Specialist</td><td>New York</td><td>61</td><td>2012/12/02</td><td>$372,000</td></tr><tr role="row" class="odd"><td class="sorting_1">Bruno Nash</td><td>Software Engineer</td><td>London</td><td>38</td><td>2011/05/03</td><td>$163,500</td></tr><tr role="row" class="even"><td class="sorting_1">Caesar Vance</td><td>Pre-Sales Support</td><td>New York</td><td>21</td><td>2011/12/12</td><td>$106,450</td></tr><tr role="row" class="odd"><td class="sorting_1">Cara Stevens</td><td>Sales Assistant</td><td>New York</td><td>46</td><td>2011/12/06</td><td>$145,600</td></tr><tr role="row" class="even"><td class="sorting_1">Cedric Kelly</td><td>Senior Javascript Developer</td><td>Edinburgh</td><td>22</td><td>2012/03/29</td><td>$433,060</td></tr></tbody></table>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("387");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("387");
       expect(res).toBe("387,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("387");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});