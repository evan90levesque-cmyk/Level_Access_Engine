describe('ShadowDOM: contents of web component should be Content Hello when displayed.', function() {
    it('Test 89 - no img nodes should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-multiplematchingnamedslotattributes',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = '<slot name="cont"></slot><slot name="hi"></slot>';
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch(err) {
            // prevents web component being re-registered
        }

        var webComp = document.createElement("element-multiplematchingnamedslotattributes");
        webComp.innerHTML = '<span slot="hi">Hello</span><span slot="cont">Content</span>';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('na');
    });
});

describe('ShadowDOM: contents of web component should be Content image Hello image when displayed.', function() {
    it('Test 89 - no img nodes should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-multiplematchingnamedslotattributes',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = '<slot name="cont"></slot><slot name="hi"></slot>';
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch(err) {
            // prevents web component being re-registered
        }

        var webComp = document.createElement("element-multiplematchingnamedslotattributes");
        webComp.innerHTML = '<span slot="hi">Hello <img src=""></span><span slot="cont">Content <img src=""></span>';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});