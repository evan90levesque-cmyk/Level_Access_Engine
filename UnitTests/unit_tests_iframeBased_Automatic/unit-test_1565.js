describe("String N/A: no combobox with an aria-controls attribute", function () {
  it("no combobox nodes with an aria-controls attribute should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
    expect(res).toBe(null);
  });
});

describe("String N/A: a combobox node with an aria-controls attribute set to a null value", function () {
  it("a combobox node with an aria-controls attribute set to a null value should be equal to na", function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<input role='combobox' aria-controls=''></span>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
    expect(res).toBe(null);
  });
});

describe('String N/A: a combobox node with aria-expanded="false" and aria-controls referencing an element that does not exist in DOM', function () {
  it('a combobox node with aria-expanded="false" and aria-controls referencing an element that does not exist should be equal to na', function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<span role='combobox' aria-expanded='false' aria-controls='cmb-1'></span>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
    expect(res).toBe("na");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
    expect(res).toBe(null);
  });
});

describe('String Fail: a combobox node with aria-expanded="true" and aria-controls referencing an element that does not exist in DOM', function () {
  it('a combobox node with aria-expanded="true" and aria-controls referencing an element that does not exist should be equal to fail', function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<span role='combobox' aria-expanded='true' aria-controls='cmb-1'></span>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
    expect(res).toBe("1565,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
    expect(res.instances.length).toBe(1);
  });
});

describe('String Fail: a combobox node with aria-expanded="true" and aria-controls containing a malformatted id', function () {
  it('a combobox node with aria-expanded="true" and aria-controls containing a malformatted id should be equal to fail', function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML =
      "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML =
      "<span role='combobox' aria-expanded='true' aria-controls='3cmb-1'></span>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
    expect(res).toBe("fail");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
    expect(res).toBe("1565,1");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
    expect(res.instances.length).toBe(1);
  });
});

describe('String Fail: a combobox with multiple aria-controls values, one invalid', function () {
   it('should fail if one of the aria-controls ids is invalid', function () {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML =
       "<div id='cmb-1'></div><span role='combobox' aria-expanded='true' aria-controls='cmb-1 invalid$id'></span>";
     LevelAccess_AccessEngine.setWindowUnderTest(
       document.querySelector("#testing").contentWindow
     );
     let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
     expect(res).toBe("fail");
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
     expect(res).toBe("1565,1");
     res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
     expect(res.instances.length).toBe(1);
   });
 });
 
 describe('String Fail: a combobox with aria-controls referencing multiple non-existent ids', function () {
   it('should fail when all referenced ids do not exist', function () {
     document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
     document.querySelector("#testing").contentWindow.document.body.innerHTML =
       "<span role='combobox' aria-expanded='true' aria-controls='cmb-1 cmb-2'></span>";
     LevelAccess_AccessEngine.setWindowUnderTest(
       document.querySelector("#testing").contentWindow
     );
     let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
     expect(res).toBe("fail");
     res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
     expect(res).toBe("1565,1");
     res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
     expect(res.instances.length).toBe(1);
   });
 });

 describe('String Pass: a combobox with aria-expanded="true" and aria-controls referencing an existing element', function () {
  it('should pass when all referenced ids exist', function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input role='combobox' aria-expanded='true' aria-controls='cmb-1' /> <div id='cmb-1'></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
    expect(res).toBe(null);
  });
});

describe('String Pass: a combobox with aria-expanded="true" and aria-controls referencing an existing element', function () {
  it('should pass when all referenced ids exist', function () {
    document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
    document.querySelector("#testing").contentWindow.document.body.innerHTML = "<input role='combobox' aria-expanded='true' aria-controls='cmb-1 cmb-2' /> <div id='cmb-1'></div> <div id='cmb-2'></div>";
    LevelAccess_AccessEngine.setWindowUnderTest(
      document.querySelector("#testing").contentWindow
    );
    let res = LevelAccess_AccessEngine.runTest_returnOutcome("1565");
    expect(res).toBe("pass");
    res = LevelAccess_AccessEngine.runTest_returnNumbers("1565");
    expect(res).toBe("");
    res = LevelAccess_AccessEngine.runTest_returnInstances("1565");
    expect(res).toBe(null);
  });
});
