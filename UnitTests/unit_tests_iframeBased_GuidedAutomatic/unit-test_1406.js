describe("String N/A: no dialog elements with headings", function () {
  it("no dialog elements with headings should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: closed dialog element with headings", function () {
  it("closed dialog element with headings should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog><h1>Level 1 Heading</h1><h2>Level 2 Heading</h2></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: dialog element with no headings", function () {
  it("dialog element with no headings should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><p>Dialog content</p></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: dialog element is intentionally hidden in the DOM and not available to assistive technologies", function () {
  it("dialog element with style='display:none' should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
      <dialog style='display:none' open>
        <h1>Hidden Heading</h1>
      </dialog>
    `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: header is intentionally hidden in the DOM with style='display:none'", function () {
  it("header with style='display:none' should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
      <dialog open>
        <h1 style='display:none'>Hidden Heading</h1>
      </dialog>
    `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: header is intentionally hidden in the DOM with aria-hidden='true'", function () {
  it("header with aria-hidden='true' should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
      <dialog open>
        <h2 aria-hidden='true'>Hidden Heading</h2>
      </dialog>
    `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: span with role=heading and aria-level is intentionally hidden with aria-hidden='true'", function () {
  it("span with role=heading, aria-level, and aria-hidden='true' should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
      <dialog open>
        <span aria-hidden='true' role='heading' aria-level='2'>Hidden Heading</span>
      </dialog>
    `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: span with role=heading and aria-level is intentionally hidden with style='display:none'", function () {
  it("span with role=heading, aria-level, and style='display:none' should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
      <dialog open>
        <span style='display:none' role='heading' aria-level='2'>Hidden Heading</span>
      </dialog>
    `;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: role=dialog element with aria-modal=false", function () {
  it("role=dialog element with aria-modal=false should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='dialog' aria-modal='false'><h1>Heading</h1></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: role=alertdialog element with aria-modal=false", function () {
  it("role=alertdialog element with aria-modal=false should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='alertdialog' aria-modal='false'><h1>Heading</h1></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: role=alertdialog element with no aria-modal", function () {
  it("role=alertdialog element with no aria-modal should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='alertdialog'><h1>Heading</h1></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String N/A: role=dialog element with no aria-modal", function () {
  it("role=dialog element with no aria-modal should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='dialog'><h1>Heading</h1></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String Pass: dialog element with single h1 heading", function () {
  it("dialog element with single h1 heading should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h1>Level 1 Heading</h1></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String Pass: dialog element with proper heading hierarchy h1, h2, h3", function () {
  it("dialog element with proper heading hierarchy h1, h2, h3 should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h1>Level 1 Heading</h1><h2>Level 2 Heading</h2><h3>Level 3 Heading</h3></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String Pass: role=dialog element with aria-modal=true and proper heading hierarchy", function () {
  it("role=dialog element with aria-modal=true and proper heading hierarchy should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='dialog' aria-modal='true'><h1>Level 1 Heading</h1><h2>Level 2 Heading</h2></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String Pass: role=alertdialog element with aria-modal=true and proper heading hierarchy", function () {
  it("role=alertdialog element with aria-modal=true and proper heading hierarchy should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='alertdialog' aria-modal='true'><h1>Level 1 Heading</h1><h2>Level 2 Heading</h2></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("pass");

    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");

    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String Pass: dialog element with role=heading elements and proper aria-level hierarchy", function () {
  it("dialog element with role=heading elements and proper aria-level hierarchy should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><span role='heading' aria-level='1'>Level 1 Heading</span><span role='heading' aria-level='2'>Level 2 Heading</span></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String Pass: dialog element with h1 followed by role=heading elements and proper aria-level hierarchy", function () {
  it("dialog element with h1 followed by role=heading elements and proper aria-level hierarchy should be equal to pass", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h1>Level 1 Heading</h1><span role='heading' aria-level='2'>Level 2 Heading</span></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res).toBe(null);
  });
});

describe("String Fail: dialog element with h2 as first heading (should be h1)", function () {
  it("dialog element with h2 as first heading should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h2>Level 2 Heading</h2></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: dialog element with h1 followed by h3 (skipping h2)", function () {
  it("dialog element with h1 followed by h3 should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h1>Level 1 Heading</h1><h3>Level 3 Heading</h3></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: dialog element with h2 followed by h4 (skipping h3)", function () {
  it("dialog element with h2 followed by h4 should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h1>Level 1 Heading</h1><h2>Level 2 Heading</h2><h4>Level 4 Heading</h4></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: dialog element with multiple h1 headings", function () {
  it("dialog element with multiple h1 headings should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h1>Level 1 Heading</h1><h1>Another Level 1 Heading</h1></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: role=dialog element with improper heading hierarchy", function () {
  it("role=dialog element with improper heading hierarchy should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='dialog' aria-modal='true'><h1>Level 1 Heading</h1><h3>Level 3 Heading</h3></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: role=alertdialog element with improper heading hierarchy", function () {
  it("role=alertdialog element with improper heading hierarchy should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<div role='alertdialog' aria-modal='true'><h2>Level 2 Heading</h2><h4>Level 4 Heading</h4></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,2");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(2);
  });
});

describe("String Fail: dialog element with role=heading elements and improper aria-level hierarchy", function () {
  it("dialog element with role=heading elements and improper aria-level hierarchy should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><span role='heading' aria-level='1'>Level 1 Heading</span><span role='heading' aria-level='3'>Level 3 Heading</span></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: dialog element with mixed heading types and improper hierarchy", function () {
  it("dialog element with mixed heading types and improper hierarchy should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<dialog open><h1>Level 1 Heading</h1><span role='heading' aria-level='3'>Level 3 Heading</span></dialog>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: nested dialog elements - outer dialog with proper headings", function () {
  it("nested dialog elements - outer dialog with proper headings should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = `
        <dialog open>
            <h1>Outer Dialog Heading</h1>
            <dialog open>
                <h3>Inner Dialog Heading</h3>
            </dialog>
        </dialog>`;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: multiple headers some outside dialog should be equal to fail", function () {
  it("multiple headers some outside dialog should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<h1>test 1</h1><dialog open><h3>test3</h3></dialog><h2>test2</h2>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});

describe("String Fail: outer dialog with nested dialogs, headers in outer dialog are not properly nested", function () {
  it("outer dialog with nested dialogs, headers in outer dialog are not properly nested should be equal to fail", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector(
      "#testing"
    ).contentWindow.document.body.innerHTML = `<dialog open>
        <dialog open>
            <h1>Header</h1>
        </dialog>    
        <h2>Header</h2>    
        <h3>Header</h3>
      </dialog>`;
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1406");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1406");
    expect(res).toBe("1406,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1406");
    expect(res.instances.length).toBe(1);
  });
});
