describe('ShadowDOM: nested web component with passing content.', function() {
    it('Test 89 - no img nodes should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        // the nested web components need to be in the same sandbox e.g. in the iframe
        // otherwise shadowRoots are not created

        var script = document.createElement("script");
        script.innerHTML = `
            customElements.define('app-containerv1',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = "<app-toolbarv1></app-toolbarv1>";
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });

            customElements.define('app-toolbarv1',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = "<p>Ok!</p>";
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
            var webComp = document.createElement("app-containerv1");
            document.body.appendChild(webComp);
        `;
        document.querySelector("#testing").contentWindow.document.body.appendChild(script);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('na');
    });
});

describe('ShadowDOM: nested web component with failing content.', function() {
    it('Test 89 - img node should be equal to fail', function() {
        
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        // new template content requires a new variant of the component
        // the nested web components need to be in the same sandbox e.g. in the iframe
        // otherwise shadowRoots are not created

        var script = document.createElement("script");
        script.innerHTML = `
            customElements.define('app-containerv2',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = "<app-toolbarv2></app-toolbarv2>";
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });

            customElements.define('app-toolbarv2',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = "<p>Ok!</p><img src='#'>";
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
            var webComp = document.createElement("app-containerv2");
            document.body.appendChild(webComp);
        `;
        document.querySelector("#testing").contentWindow.document.body.appendChild(script);
            
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});