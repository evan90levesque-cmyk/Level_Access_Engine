describe('String N/A: no interactive elements with <img> tags inside them', () => {
    it('should return n/a with empty dom', async () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        let res = LevelAccess_AccessEngine.runTest_returnOutcome("1386");
        expect(res).toBe("na");
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1386");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("1386");
        expect(res).toBe(null);
    });

    it('should return n/a with irrelevant HTML', async () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = "<div>irrelevant content</div>";
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        let res = LevelAccess_AccessEngine.runTest_returnOutcome("1386");
        expect(res).toBe("na");
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1386");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("1386");
        expect(res).toBe(null);
    });

    it('should return n/a if img contains an accessible name', async () => {
        document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
        document.querySelector("#testing").contentWindow.document.body.innerHTML = `
            <button>
              <img src="x.png" alt="Accessible Image" aria-label="Accessible Image">
            </button>
        `;
        LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

        let res = LevelAccess_AccessEngine.runTest_returnOutcome("1386");
        expect(res).toBe("na");
        res = LevelAccess_AccessEngine.runTest_returnNumbers("1386");
        expect(res).toBe("");
        res = LevelAccess_AccessEngine.runTest_returnInstances("1386");
        expect(res).toBe(null);
    });
});

describe('String Fail: img with an invalid or non-empty alt attribute inside interactive element', function () {
    const scenarios = [
        // Direct child cases
        { description: `a > img:not([alt])`, html: `<a><img src="x.png"></a>` },
        { description: `button > img:not([alt])`, html: `<button><img src="x.png"></button>` },
        { description: `option > img:not([alt])`, html: `<option><img src="x.png"></option>` },
        { description: `[role='button'] > img:not([alt])`, html: `<div role="button"><img src="x.png"></div>` },
        { description: `[role='checkbox'] > img:not([alt])`, html: `<div role="checkbox"><img src="x.png"></div>` },
        { description: `[role='link'] > img:not([alt])`, html: `<div role="link"><img src="x.png"></div>` },
        {
            description: `[role='menuitemcheckbox'] > img:not([alt])`,
            html: `<div role="menuitemcheckbox"><img src="x.png"></div>`
        },
        {
            description: `[role='menuitemradio'] > img:not([alt])`,
            html: `<div role="menuitemradio"><img src="x.png"></div>`
        },
        { description: `[role='option'] > img:not([alt])`, html: `<div role="option"><img src="x.png"></div>` },
        { description: `[role='radio'] > img:not([alt])`, html: `<div role="radio"><img src="x.png"></div>` },
        { description: `[role='switch'] > img:not([alt])`, html: `<div role="switch"><img src="x.png"></div>` },
        { description: `[role='tab'] > img:not([alt])`, html: `<div role="tab"><img src="x.png"></div>` },
        // Descendant cases
        { description: `a > span > img:not([alt])`, html: `<a><span><img src="x.png"></span></a>` },
        { description: `button > div > img:not([alt])`, html: `<button><div><img src="x.png"></div></button>` },
        {
            description: `[role='button'] > span > img:not([alt])`,
            html: `<div role="button"><span><img src="x.png"></span></div>`
        },
        {
            description: `[role='checkbox'] > div > img:not([alt])`,
            html: `<div role="checkbox"><div><img src="x.png"></div></div>`
        },
    ];

    for (const scenario of scenarios) {
        it(`should return fail when ${ scenario.description }`, () => {
            document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
            document.querySelector("#testing").contentWindow.document.body.innerHTML = scenario.html;
            LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
            let res = LevelAccess_AccessEngine.runTest_returnOutcome("1386");
            expect(res).toBe('fail');
            res = LevelAccess_AccessEngine.runTest_returnNumbers("1386");
            expect(res).toBe("1386,1");
            res = LevelAccess_AccessEngine.runTest_returnInstances("1386");
            expect(res.instances.length).toBe(1);
        });
    }
});

describe('String Pass: img with empty alt inside an interactive element', () => {
    const scenarios = [
        // Direct child cases
        { description: `a > img[alt=""]`, html: `<a><img src="x.png" alt=""></a>` },
        { description: `button > img[alt=""]`, html: `<button><img src="x.png" alt=""></button>` },
        { description: `option > img[alt=""]`, html: `<option><img src="x.png" alt=""></option>` },
        { description: `[role='button'] > img[alt=""]`, html: `<div role="button"><img src="x.png" alt=""></div>` },
        { description: `[role='checkbox'] > img[alt=""]`, html: `<div role="checkbox"><img src="x.png" alt=""></div>` },
        { description: `[role='link'] > img[alt=""]`, html: `<div role="link"><img src="x.png" alt=""></div>` },
        {
            description: `[role='menuitemcheckbox'] > img[alt=""]`,
            html: `<div role="menuitemcheckbox"><img src="x.png" alt=""></div>`
        },
        {
            description: `[role='menuitemradio'] > img[alt=""]`,
            html: `<div role="menuitemradio"><img src="x.png" alt=""></div>`
        },
        { description: `[role='option'] > img[alt=""]`, html: `<div role="option"><img src="x.png" alt=""></div>` },
        { description: `[role='radio'] > img[alt=""]`, html: `<div role="radio"><img src="x.png" alt=""></div>` },
        { description: `[role='switch'] > img[alt=""]`, html: `<div role="switch"><img src="x.png" alt=""></div>` },
        { description: `[role='tab'] > img[alt=""]`, html: `<div role="tab"><img src="x.png" alt=""></div>` },
        // Descendant cases
        { description: `a > span > img[alt=""]`, html: `<a><span><img src="x.png" alt=""></span></a>` },
        { description: `button > div > img[alt=""]`, html: `<button><div><img src="x.png" alt=""></div></button>` },
        {
            description: `[role='button'] > span > img[alt=""]`,
            html: `<div role="button"><span><img src="x.png" alt=""></span></div>`
        },
        {
            description: `[role='checkbox'] > div > img[alt=""]`,
            html: `<div role="checkbox"><div><img src="x.png" alt=""></div></div>`
        }
    ];

    for (const scenario of scenarios) {
        it(`should return pass when ${ scenario.description }`, () => {
            document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
            document.querySelector("#testing").contentWindow.document.body.innerHTML = scenario.html;
            LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
            let res = LevelAccess_AccessEngine.runTest_returnOutcome("1386");
            expect(res).toBe('pass');
            res = LevelAccess_AccessEngine.runTest_returnNumbers("1386");
            expect(res).toBe("");
            res = LevelAccess_AccessEngine.runTest_returnInstances("1386");
            expect(res).toBe(null);
        });
    }
});