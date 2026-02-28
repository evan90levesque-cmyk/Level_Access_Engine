describe("String N/A: no combobox nodes", function () {
  it("no combobox nodes should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1384");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1384");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1384");
    expect(res).toBe(null);
  });
});

describe('String N/A: combobox without aria-expanded="true"', function () {
  it('combobox without aria-expanded="true" should be equal to na', function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      '<span role="combobox"></span>';
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1384");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1384");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1384");
    expect(res).toBe(null);
  });
});

describe('String Pass: combobox with aria-expanded="true" and aria-controls', function () {
  it('combobox with aria-expanded="true" and aria-controls should be equal to na', function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      '<span role="combobox" aria-expanded="true" aria-controls="dropdown"></span>';
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1384");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1384");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1384");
    expect(res).toBe(null);
  });
});

describe('String Fail: combobox with aria-expanded="true" but no aria-controls', function () {
  it('combobox with aria-expanded="true" but no aria-controls should be equal to fail', function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      '<span role="combobox" aria-expanded="true"></span>';
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1384");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1384");
    expect(res).toBe("1384,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1384");
    expect(res.instances.length).toBe(1);
  });
});

describe('String N/A: combobox with aria-expanded="false"', function () {
  it('combobox with aria-expanded="false" should be equal to pass', function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      '<span role="combobox" aria-expanded="false"></span>';
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1384");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1384");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1384");
    expect(res).toBe(null);
  });
});

describe('String Pass: combobox with aria-expanded="true" and empty aria-controls', function () {
  it('combobox with aria-expanded="true" and empty aria-controls should be equal to pass', function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      '<span role="combobox" aria-expanded="true" aria-controls=""></span></span>';
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1384");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1384");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1384");
    expect(res).toBe(null);
  });
});

describe('String Fail: multiple comboboxes with aria-expanded="true" but no aria-controls', function () {
  it('multiple comboboxes with aria-expanded="true" but no aria-controls should be equal to fail', function () {
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      '<span role="combobox" aria-expanded="true"></span><span role="combobox" aria-expanded="true"></span>';
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );

    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1384");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1384");
    expect(res).toBe("1384,2");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1384");
    expect(res.instances.length).toBe(2);
  });
});
