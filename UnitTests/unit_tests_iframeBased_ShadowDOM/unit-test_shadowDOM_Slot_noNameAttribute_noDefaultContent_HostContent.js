describe('ShadowDOM: slot should pull in all pieces of content in the host root except those parts given a slot attribute', function() {
    it('Test 89 - as there are no img nodes being pulled into the template (slot "hello" being ignored) should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-defaultslot',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = "<slot></slot>";
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch (err) {
            // if the component has already been registered
        }

        var webComp = document.createElement("element-defaultslot");
        webComp.innerHTML = 'hello<img slot="hello" src="smiley.gif">';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('na');
    });
});

describe('ShadowDOM: slot should pull in all pieces of content in the host root', function() {
    it('Test 89 - the img node should be pulled into the template and should be tested so the test should be equal to fail', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-defaultslot',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = "<slot></slot>";
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch (err) {
            // if the component has already been registered
        }

        var webComp = document.createElement("element-defaultslot");
        webComp.innerHTML = 'hello <img src="smiley.gif">';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});