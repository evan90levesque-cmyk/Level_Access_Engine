describe('String N/A: no ul nodes', function() {
    it('no ul nodes should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a ul node with a role attribute set to the text value "presentation"', function() {
    it('a ul node with a role attribute set to the text value "presentation" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul role='presentation'></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a ul node with a style attribute set to the text value "display:none;"', function() {
    it('a ul node with a style attribute set to the text value "display:none;" should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul style='display:none;'></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String N/A: a ul node without content', function() {
    it('a ul node without content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a ul node with an li node as a child', function() {
    it('a ul node with an li node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul><li>One</li><li>Two</li></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a ul node with a node given a role="listitem" attribute as a child', function() {
    it('a ul node with a node given a role="listitem" attribute as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul><span role='listitem'></span></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a ul node with a script node as a child', function() {
    it('a ul node with a script node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul><script></script></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a ul node with a template node as a child', function() {
    it('a ul node with a template node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul><template></template></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Pass: a ul node with an li node as a child', function() {
    it('a ul node with an li node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul><li><a href="https://trunk.ssbbartgroup.com/public/account_management/index.php">preferences</a></li><li><a href="https://support.ssbbartgroup.com/hc/en-us" target="_blank">support</a></li><li><a href="https://trunk.ssbbartgroup.com/logoff.php" class="noborder">logout</a></li></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

// bbc 

describe('String Pass: a ul node with li nodes as children from bbc.co.uk', function() {
    it('a ul node with li nodes as children from bbc.co.uk should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul><li class="orb-nav-home orb-nav-hide"><a href="http://www.bbc.co.uk/">Home</a></li><li class="orb-nav-news orb-nav-hide"><a href="http://www.bbc.co.uk/news">News</a></li><li class="orb-nav-sport orb-nav-hide"><a href="http://www.bbc.co.uk/sport">Sport</a></li><li class="orb-nav-weather orb-nav-hide"><a href="http://www.bbc.co.uk/weather">Weather</a></li><li class="orb-nav-iplayer orb-nav-hide"><a href="http://www.bbc.co.uk/iplayer">iPlayer</a></li><li class="orb-nav-tv orb-nav-hide"><a href="http://www.bbc.co.uk/tv">TV</a></li><li class="orb-nav-radio orb-nav-hide"><a href="http://www.bbc.co.uk/radio">Radio</a></li><li class="orb-nav-cbbc orb-nav-hide"><a href="http://www.bbc.co.uk/cbbc">CBBC</a></li><li class="orb-nav-cbeebies orb-nav-hide"><a href="http://www.bbc.co.uk/cbeebies">CBeebies</a></li><li class="orb-nav-food orb-nav-hide"><a href="http://www.bbc.co.uk/food">Food</a></li><li class="orb-nav-bitesize orb-nav-hide"><a href="http://www.bbc.co.uk/education">Bitesize</a></li><li class="orb-nav-music orb-nav-hide"><a href="http://www.bbc.co.uk/music">Music</a></li><li class="orb-nav-earth orb-nav-hide"><a href="http://www.bbc.com/earth">Earth</a></li><li class="orb-nav-arts orb-nav-hide"><a href="http://www.bbc.co.uk/arts">Arts</a></li><li class="orb-nav-digital orb-nav-hide"><a href="http://www.bbc.co.uk/makeitdigital">Make It Digital</a></li><li class="orb-nav-taster orb-nav-hide"><a href="http://www.bbc.co.uk/taster">Taster</a></li><li class="orb-nav-local orb-nav-hide"><a href="http://www.bbc.co.uk/local">Local</a></li><li id="orb-nav-more" style="width: 76px;" aria-controls="orb-panel-more" class=""><a href="#orb-footer" data-alt="More" class="istats-notrack" style="null">Menu<span class="orb-icon orb-icon-arrow"></span></a></li></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('String Fail: a ul node with an a node as a child', function() {
    it('a ul node with an a node as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = "<ul><a href='#'>Hello</a></ul>";
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("246,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

// Deque

describe('Deque N/A: a ul node without content', function() {
    it('an ul node without content should be equal to na', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul id="emptyul">  </ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('na');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Pass: a ul node with a template node and a script node as a child', function() {
    it('a ul node with a template node and a script node as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul id="scriptemptyul"><script></script><template></template>  </ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Pass: a ul node with a template node and a script node and li nodes as a child', function() {
    it('a ul node with a template node and a script node and li nodes as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul id="scriptproperul"><script></script><template></template><li>One.</li><li>Two.</li></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Deque Fail: a ul node with a div node as a child', function() {
    it('a ul node with a div node as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul id="divul"><div>This shouldnt be here.</div></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("246,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Deque Fail: a ul node with a div node and an li node as a child', function() {
    it('a ul node with a div node and an li node as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul id="mixedul"><li>Correct.</li><div>Wrong.</div></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("246,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Fail: a ul node with a div node with a role of button as a child', function() {
    it('a ul node with a div node with a role of button as a child should be equal to fail', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul><li>Correct.</li><div role="button">Wrong.</div></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('fail');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("246,1");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res.instances.length).toBe(1);
       // </variant3>
    });
});

describe('Pass: a ul node with an li node with a role of listitem as a child', function() {
    it('a ul node with an li node with a role of listitem as a child should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<ul><li>Correct.</li><li role="listitem">Redundant, but okay.</li></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});

describe('Pass: a ul node with a duplicate ID shared with a nested div structure', function() {
    it('a ul node with a duplicate ID shared with a nested div structure should be equal to pass', function() {
       document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
       document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div id="dup"><span>text</span></div><ul id="dup"><li>Correct.</li></ul>';
       LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
       // <variant1>
       var res = LevelAccess_AccessEngine.runTest_returnOutcome("246");
       expect(res).toBe('pass');
       // </variant1>
       // <variant2>
       res = LevelAccess_AccessEngine.runTest_returnNumbers("246");
       expect(res).toBe("");       
       // </variant2>
       // <variant3>
       res = LevelAccess_AccessEngine.runTest_returnInstances("246");
       expect(res).toBe(null);
       // </variant3>
    });
});