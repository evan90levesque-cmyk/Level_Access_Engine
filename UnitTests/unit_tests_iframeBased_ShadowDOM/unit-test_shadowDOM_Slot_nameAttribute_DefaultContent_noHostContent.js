describe('ShadowDOM: slot should use default content.', function() {
    it('Test 89 - no img nodes should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        customElements.define('element-nameddefaultcontent',
            class extends HTMLElement {
            constructor() {
                super();
                var template = document.createElement("template");
                template.innerHTML = "<slot name='hello'><p>Default</p></slot>";
                const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(template.content.cloneNode(true));
            }
        });

        var webComp = document.createElement("element-nameddefaultcontent");
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('na');
    });
});

describe('ShadowDOM: slot should use default content.', function() {
    it('Test 89 - the img node in the default content in the slot should be tested and the test should be equal to fail', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        // the update to the template content requires a new variant of the web component
        customElements.define('element-nameddefaultcontentvariant1',
            class extends HTMLElement {
            constructor() {
                super();
                var template = document.createElement("template");
                template.innerHTML = "<slot name='hello'><p>Default</p><img src=''></slot>";
                const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(template.content.cloneNode(true));
            }
        });

        var webComp = document.createElement("element-nameddefaultcontentvariant1");
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});