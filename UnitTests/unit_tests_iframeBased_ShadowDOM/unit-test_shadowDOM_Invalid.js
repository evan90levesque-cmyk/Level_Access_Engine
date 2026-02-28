describe('web component with a constructor that includes bad JavaScript', function() {
    it('shouldn\'t fail to run tests', function() {
        // before ENG-813, this test would succeed in Chrome, but fail in Firefox

        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = '<my-component></my-component>';

        var script = document.createElement("script");
        script.innerHTML = `
            class MyComponent extends HTMLElement {
                constructor() {
                    super();
                    thisIsIntentionallyInvalidJavaScript
                }
            }
            customElements.define('my-component', MyComponent);
        `;
        document.querySelector("#testing").contentWindow.document.body.appendChild(script);

        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
        LevelAccess_AccessEngine.runAllTests_returnInstances_JSON();
    });
});
