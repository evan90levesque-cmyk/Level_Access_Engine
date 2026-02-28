describe('a div node (inside a div node) with its color defined as "#EEE" via an inline "color" CSS attribute', function() {
    it('should have a calculated color contrast of 1.16', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div><div id="innerDiv" style="color: #EEE;">Hard to See</div></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#innerDiv").getAttribute("data-ae_cr")).toBe("1.16");
    });
});

describe('a div node (inside a div node) with its color defined as "#EEE" via a "color" CSS attribute', function() {
    it('should have a calculated color contrast of 1.16', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div><style>.bob { color: #EEE; }</style><div id="innerDiv" class="bob">Hard to See</div></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#innerDiv").getAttribute("data-ae_cr")).toBe("1.16");
    });
});

describe('a div node (inside a div node with its background-color defined as "#FF0000") with its color defined as "#EEE" via an inline "color" CSS attribute', function() {
    it('should have a calculated color contrast of 1.16', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background-color: #FF0000;"><div id="innerDiv" style="color: #EEE;">Hard to See</div></div>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("#innerDiv").getAttribute("data-ae_cr")).toBe("3.446");
    });
});

describe('a text node (inside an svg node) with its color defined as "#EEE" via a "fill" CSS attribute', function() {
    it('should have a calculated color contrast of 1.16', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><style>.bob { fill: #EEE; }</style><text class="bob">Hard To See</text></svg>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("text").getAttribute("data-ae_cr")).toBe("1.16");
    });
});

describe('a text node (inside an svg node) with its color defined as "#EEE" via a "fill" attribute', function() {
    it('should have a calculated color contrast of 1.16', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><text fill="#EEE">Hard To See</text></svg>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("text").getAttribute("data-ae_cr")).toBe("1.16");
    });
});

describe('a text node (inside an svg node) with its color defined as "#FF0000" via a "fill" attribute and as "#EEE" via a "fill" attribute', function() {
    it('should have a calculated color contrast of 1.16 (#EEE defined via CSS attribute should override the #FF0000 defined via attribute)', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg"><style>.bob { fill: #EEE; }</style><text class="bob" fill="#FF0000">Hard To See</text></svg>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("text").getAttribute("data-ae_cr")).toBe("1.16");
    });
});

describe('a button node (inside a div node with its background-color defined as "rgb(255, 255, 255)") with its color defined as "rgba(0, 0, 0, 0.847)" via an inline "color" CSS attribute', function() {
    it('should have a calculated color contrast that is not "NaN"', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<div style="background-color: rgb(255, 255, 255);"><button style="color: rgba(0, 0, 0, 0.847);">take me somewhere</button><div>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("button").getAttribute("data-ae_cr")).not.toBe("NaN");
    });
});

describe('a p node with its background defined as "#aaa" and its color defined as "#fff" via an inline CSS attributes', function() {
    it('should have a calculated color contrast of 2.323', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p style="color: #aaa; background: #fff;" id="p">Some text</p>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("p").getAttribute("data-ae_cr")).toBe("2.323");
    });
});

describe('a p node with text that\'s only whitespace and its background defined as "#aaa" and its color defined as "#fff" via an inline CSS attributes', function() {
    it('should have a calculated color contrast of null', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p style="color: #aaa; background: #fff;" id="p">     </p>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("p").hasAttribute("data-ae_cr")).toBe(false);
    });
});

describe('a p node with shadow DOM text and its background defined as "#aaa" and its color defined as "#fff" via an inline CSS attributes', function() {
    it('should have a calculated color contrast of 2.323', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p style="color: #aaa; background: #fff;" id="p"></p>';
        const shadowRoot = document.querySelector("#testing").contentWindow.document.getElementById('p').attachShadow({ mode: 'open' });
        shadowRoot.textContent = 'Some text in English';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("p").getAttribute("data-ae_cr")).toBe("2.323");
    });
});

describe("a p node with shadow DOM text that\'s only whitespace and its background defined as '#aaa' and its color defined as '#fff' via an inline CSS attributes", function() {
    it('should have a calculated color contrast of null', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p style="color: #aaa; background: #fff;" id="p"></p>';
        const shadowRoot = document.querySelector("#testing").contentWindow.document.getElementById('p').attachShadow({ mode: 'open' });
        shadowRoot.textContent = '     ';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("p").hasAttribute("data-ae_cr")).toBe(false);
    });
});

describe("ENG-938: elements with linear gradient background colors", function() {
    it("should have their color contrast computed *incorrectly*; we don't support linear gradients", function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = `
            <style>
                #wpfront-notification-bar {
                    background: #3b54e6;
                    background: -moz-linear-gradient(top, #3b54e6 0%, #3b54e6 100%);
                    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#3b54e6), color-stop(100%,#3b54e6));
                    background: -webkit-linear-gradient(top, #3b54e6 0%,#3b54e6 100%);
                    background: -o-linear-gradient(top, #3b54e6 0%,#3b54e6 100%);
                    background: -ms-linear-gradient(top, #3b54e6 0%,#3b54e6 100%);
                    background: linear-gradient(to bottom, #3b54e6 0%, #3b54e6 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3b54e6', endColorstr='#3b54e6',GradientType=0 );
                }
                
                #wpfront-notification-bar.wpfront-fixed {
                    position: fixed;
                    z-index: 9999;
                    width: 100%;
                }
                
                #wpfront-notification-bar div.wpfront-message {
                    color: #ffffff;
                }
            </style>
        `;
        document.querySelector("#testing").contentWindow.document.body.innerHTML = `
            <div id="wpfront-notification-bar" class="wpfront-fixed" style="top: 0; height: auto; position: relative; visibility: visible;">
                <table border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr>
                            <td>
                                <div class="wpfront-message">
                                    1 Hour Pro Bono Consultation for COVID-19 Resources
                                </div>
                                <div>
                                    <a class="wpfront-button" href="#" target="_self">Learn more</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().getElementsByClassName("wpfront-message")[0].getAttribute("data-ae_cr")).toBe("1");
    });
});

describe("ENG-978: close but failing color contrast", function() {
    it('#959595 text on #FFFFFF background should have a calculated color contrast of 2.995', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<p style="color: #959595; background: #FFFFFF;">test</p>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("p").getAttribute("data-ae_cr")).toBe("2.995");
    });
});

describe('a button node with both its "color" and "background-color" styles defined as "rgb(255, 255, 255)"', function() {
    it('should have a calculated color contrast of 1', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<button style="color: rgb(255, 255, 255); background-color: rgb(255, 255, 255);">click me!</button>';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("button").getAttribute("data-ae_cr")).toBe("1");
    });
});

describe('an input node of type="submit" with its "color" style implicitly defined as "rgb(0, 0, 0)" and its "background-color" style explicitly defined via style tag as "#83bc57"', function() {
    it('should have a calculated color contrast of 9.296', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = '<style>.foo { background-color: #83bc57; color: black; }</style>';
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="submit" name="commit" value="Submit" class="foo">';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();
        
	    expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").getAttribute("data-ae_cr")).toBe("9.296");
    });
});

describe('an input node of type="checkbox" with its "color" style implicitly defined as "rgb(0, 0, 0)" and its "background-color" style explicitly defined via style tag as "#83bc57"', function() {
    it('should have a calculated color contrast of null', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = '<style>.foo { background-color: #83bc57; }</style>';
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="checkbox" name="subscribe" value="newsletter" class="foo">';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").hasAttribute("data-ae_cr")).toBe(false);
    });
});

describe('an input node of type="color" with its "color" style implicitly defined as "rgb(0, 0, 0)" and its "background-color" style explicitly defined via style tag as "#83bc57"', function() {
    it('should have a calculated color contrast of null', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = '<style>.foo { background-color: #83bc57; }</style>';
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="color" name="color-picker" value="#e66465" class="foo">';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").hasAttribute("data-ae_cr")).toBe(false);
    });
});

describe('an input node of type="radio" with its "color" style implicitly defined as "rgb(0, 0, 0)" and its "background-color" style explicitly defined via style tag as "#83bc57"', function() {
    it('should have a calculated color contrast of null', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = '<style>.foo { background-color: #83bc57; }</style>';
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="radio" name="drone" value="huey" class="foo">';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").hasAttribute("data-ae_cr")).toBe(false);
    });
});

describe('an input node of type="range" with its "color" style implicitly defined as "rgb(0, 0, 0)" and its "background-color" style explicitly defined via style tag as "#83bc57"', function() {
    it('should have a calculated color contrast of null', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = '<style>.foo { background-color: #83bc57; }</style>';
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="range" name="volume" min="0" max="11" value="1" class="foo">';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").hasAttribute("data-ae_cr")).toBe(false);
    });
});

describe('an input node of type="hidden" with its "color" style implicitly defined as "rgb(0, 0, 0)" and its "background-color" style explicitly defined via style tag as "#83bc57"', function() {
    it('should have a calculated color contrast of null', function() {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = '<style>.foo { background-color: #83bc57; }</style>';
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input type="hidden" name="hidden-value" value="hello" class="foo">';

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.ast_runAllTests_returnInstances_JSON();

        expect(LevelAccess_AccessEngine.getRootTestNode().querySelector("input").hasAttribute("data-ae_cr")).toBe(false);
    });
});