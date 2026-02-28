/*
describe('ShadowDOM: slot should use default content.', function() {
    it('Test 89 - no img nodes should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        customElements.define('element-defaultcontent',
            class extends HTMLElement {
            constructor() {
                super();
                var template = document.createElement("template");
                template.innerHTML = "<slot><p>Default</p></slot>";
                const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(template.content.cloneNode(true));
            }
        });

        var webComp = document.createElement("element-defaultcontent");
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('na');
    });
});
*/

describe('ShadowDOM: slot should use default content from within the slot.', function() {
    it('Test 89 - the img node in the default content should be tested so the test should be equal to fail', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        // the nested web components need to be in the same sandbox e.g. in the iframe
        // otherwise shadowRoots are not created

        var script = document.createElement("script");
        script.innerHTML = `
            customElements.define('element-defaultcontentvariant1',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = "<slot><p>Default</p><img id='test1' src=''></slot>";
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });

            var webComp = document.createElement("element-defaultcontentvariant1");
            document.body.appendChild(webComp);
        `;
        document.querySelector("#testing").contentWindow.document.body.appendChild(script);

        // new template content requires a new variant of the component
        

        // var webComp = document.createElement("element-defaultcontentvariant1");
        // document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});

/*
describe('ShadowDOM: slot should use default content from within the nested web component.', function() {
    it('Test 89 - the img node in the nested default content should be tested so the test should be equal to fail', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        // new template content requires a new variant of the component
        customElements.define('element-defaultcontentvariant2',
            class extends HTMLElement {
            constructor() {
                super();
                var template = document.createElement("template");
                template.innerHTML = "<slot><p>Default</p><img id='test1' src=''></slot>";
                const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(template.content.cloneNode(true));
            }
        });

        // new template content requires a new variant of the component
        customElements.define('element-defaultcontentvariant3',
            class extends HTMLElement {
            constructor() {
                super();
                var template = document.createElement("template");
                template.innerHTML = "<slot><p>Nested Default</p><img id='test2_nested' src=''></slot>";
                const shadowRoot = this.attachShadow({mode: 'open'})
                .appendChild(template.content.cloneNode(true));
            }
        });

        var webCompV2 = document.createElement("element-defaultcontentvariant2");
        var webCompV3 = document.createElement("element-defaultcontentvariant3");
        webCompV2.appendChild(webCompV3);

        document.querySelector("#testing").contentWindow.document.body.appendChild(webCompV2);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});
*/
/*
<html>
    <head data-ae_avat="true" data-ae_uel="head" data-ae_ar="null"></head>
    <body data-ae_styles="" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body">
        <element-defaultcontentvariant2 data-ae_styles="" data-ae_shdwrt="0" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body>*:nth-child(1)">
            <element-defaultcontentvariant3 data-ae_styles="" data-ae_shdwrt="1" data-ae_clone="true" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body>*:nth-child(1)>*:nth-child(1)" data-ae_wcuel="[&quot;body>*:nth-child(1)&quot;]*:nth-child(1)">
                // expected contents to show
            </element-defaultcontentvariant3>
        </element-defaultcontentvariant2>
    </body>
</html>

<html>
    <head data-ae_avat="true" data-ae_uel="head" data-ae_ar="null"></head>
    <body data-ae_styles="" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body">
        <element-defaultcontentvariant2 data-ae_styles="" data-ae_shdwrt="0" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body>*:nth-child(1)">
            <element-defaultcontentvariant3 data-ae_styles="" data-ae_shdwrt="1" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body>*:nth-child(1)>*:nth-child(1)">
                // where is this
            </element-defaultcontentvariant3>
        </element-defaultcontentvariant2>
    </body></html>
*/