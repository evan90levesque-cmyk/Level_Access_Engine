describe('ShadowDOM: contents of web component should be hello when displayed.', function() {
    it('Test 89 - no img nodes should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-namedslotattribute',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = '<slot name=""></slot>';
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch(err) {
            // prevents web component from being re-registered
        }

        var webComp = document.createElement("element-namedslotattribute");
        webComp.innerHTML = '<span slot="">Hello</span><span slot="cont">Content</span>';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('na');
    });
});

describe('ShadowDOM: contents of web component should be hello and the image when displayed.', function() {
    it('Test 89 - an img node should be tested so the test should equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-namedslotattribute',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = '<slot name=""></slot>';
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch(err) {
            // prevents web component from being re-registered
        }

        var webComp = document.createElement("element-namedslotattribute");
        webComp.innerHTML = '<span slot="">Hello <img src=""></span><span slot="cont">Content</span>';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});