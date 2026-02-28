describe('ShadowDOM: contents of web component should be Content Hello when displayed.', function() {
    it('Test 89 - no img nodes should be equal to na', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-matchingnamedslotattributedefaulttoo',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = '<slot name="cont"></slot><slot></slot>';
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch(err) {
            // prevents web component being re-registered
        }

        var webComp = document.createElement("element-matchingnamedslotattributedefaulttoo");
        webComp.innerHTML = '<span slot="">Hello</span><span slot="cont">Content</span>';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('na');
    });
});

describe('ShadowDOM: contents of web component should be Content Hello and an image when displayed.', function() {
    it('Test 89 - an img node should be tested and the test should be equal to fail', function() {
        // zero head / body contents
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";

        try {
            customElements.define('element-matchingnamedslotattributedefaulttoo',
                class extends HTMLElement {
                constructor() {
                    super();
                    var template = document.createElement("template");
                    template.innerHTML = '<slot name="cont"></slot><slot></slot>';
                    const shadowRoot = this.attachShadow({mode: 'open'})
                    .appendChild(template.content.cloneNode(true));
                }
            });
        }
        catch(err) {
            // prevents web component being re-registered
        }

        var webComp = document.createElement("element-matchingnamedslotattributedefaulttoo");
        webComp.innerHTML = '<img src=""><span slot="">Hello</span><span slot="cont">Content</span>';
        document.querySelector("#testing").contentWindow.document.body.appendChild(webComp);
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        var res = LevelAccess_AccessEngine.runTest_returnOutcome("89");
        expect(res).toBe('fail');
    });
});

/*

<html>
    <head data-ae_avat="true" data-ae_uel="head" data-ae_ar="null"></head>
    <body data-ae_styles="" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body">
        <element-matchingnamedslotattributedefaulttoo data-ae_styles="" data-ae_shdwrt="0" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body>*:nth-child(1)">
            <span slot="cont" data-ae_styles="" data-ae_avat="true" data-ae_ar="null" data-ae_vis="true" data-ae_sib="1" data-ae_uel="body>*:nth-child(1)>*:nth-child(1)">Content</span>
        </element-matchingnamedslotattributedefaulttoo>
    </body>
</html>

*/