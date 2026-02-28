describe("String N/A: no nodes", function () {
	it("no nodes should be equal to na", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String N/A: an input with default role", function () {
	it("an input with default role should be equal to na", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `<input>`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String N/A: an input with role=presentation", function () {
	it("an input with role=presentation should be equal to na", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `<input role="presentation">`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String N/A: an input with type=search and implicit role=searchbox", function () {
	it("an input with type=search and implicit role=searchbox should be equal to na", function () {
		// input type="search" produces the implicit role="searchbox"
		// this scenario is already covered by the pre-existing rule ENG-863
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = `<input type="search">`;
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe('String N/A: an input with role=combobox a style attribute set to "display:none;"', function () {
	it('an input with a style attribute set to "display:none;" should be equal to na', function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox" style="display:none">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String N/A: an input with role=combobox that lacks an accessible name", function () {
	it("an input that lacks an accessible name should be equal to na", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox, an implicit accessible name and a placeholder attribute that are greater than 3 characters", function () {
	it("an input with an implicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label>Name: <input role="combobox" placeholder="Name"></label>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters", function () {
	it("an input with an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label>A<input role="combobox" placeholder="Name"></label>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox, an explicit accessible name and a placeholder attribute that are greater than 3 characters", function () {
	it("an input with an explicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label for="test">Name: </label><input role="combobox" placeholder="Name" id="test">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters", function () {
	it("an input with an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label for="test">A</label><input role="combobox" placeholder="Name" id="test">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other", function () {
	it("an input with placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span id="label1">First Name</span><input role="combobox" placeholder="First Name" aria-labelledby="label1">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span id="label1">A</span><input role="combobox" placeholder="Name" aria-labelledby="label1">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox placeholder and aria-label attributes that are greater than 3 characters and equal to each other", function () {
	it("an input with placeholder and aria-label attributes that are greater than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox" placeholder="First Name" aria-label="First Name">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox" placeholder="First Name" aria-label="A">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox placeholder and title attributes that are greater than 3 characters and equal to each other", function () {
	it("an input with placeholder and title attributes that are greater than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox" placeholder="First Name" title="First Name">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=combobox a placeholder attribute greater than 3 characters and a title attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and a title attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox" placeholder="First Name" title="A">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Fail: an input with role=combobox and only a placeholder attribute", function () {
	it("an input with only a placeholder attribute should be equal to fail", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox" placeholder="Department">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("fail");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("1563,1");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res.instances.length).toBe(1);
		// </variant3>
	});

	it("an input with fail outcome should have its corresponding aria role indicated in the results", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="combobox" placeholder="Department">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		const result = JSON.parse(LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON([LevelAccess_AccessEngine.testTypes.GUIDED_AUTOMATIC]));
		const testDetails = result.find((i) => i.testId === "1563");

		expect(testDetails).toEqual({
			testId: "1563",
			testType: "GUIDED_AUTOMATIC",
			outcome: "fail",
			results: [
				jasmine.objectContaining({
					attributeDetail: "This input (role=combobox) should not rely on text in the placeholder attribute for an accessible name",
					css: 'input[placeholder="Department"][role="combobox"]',
					uel: "body>input:nth-of-type(1)",
				}),
			],
		});
	});
});

describe('String N/A: an input with role=searchbox a style attribute set to "display:none;"', function () {
	it('an input with a style attribute set to "display:none;" should be equal to na', function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox" style="display:none">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String N/A: an input with role=searchbox that lacks an accessible name", function () {
	it("an input that lacks an accessible name should be equal to na", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox, an implicit accessible name and a placeholder attribute that are greater than 3 characters", function () {
	it("an input with an implicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label>Name: <input role="searchbox" placeholder="Name"></label>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters", function () {
	it("an input with an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label>A<input role="searchbox" placeholder="Name"></label>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox, an explicit accessible name and a placeholder attribute that are greater than 3 characters", function () {
	it("an input with an explicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label for="test">Name: </label><input role="searchbox" placeholder="Name" id="test">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters", function () {
	it("an input with an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label for="test">A</label><input role="searchbox" placeholder="Name" id="test">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other", function () {
	it("an input with placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span id="label1">First Name</span><input role="searchbox" placeholder="First Name" aria-labelledby="label1">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span id="label1">A</span><input role="searchbox" placeholder="Name" aria-labelledby="label1">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox placeholder and aria-label attributes that are greater than 3 characters and equal to each other", function () {
	it("an input with placeholder and aria-label attributes that are greater than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox" placeholder="First Name" aria-label="First Name">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox" placeholder="First Name" aria-label="A">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox placeholder and title attributes that are greater than 3 characters and equal to each other", function () {
	it("an input with placeholder and title attributes that are greater than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox" placeholder="First Name" title="First Name">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=searchbox a placeholder attribute greater than 3 characters and a title attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and a title attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox" placeholder="First Name" title="A">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Fail: an input with role=searchbox and only a placeholder attribute", function () {
	it("an input with only a placeholder attribute should be equal to fail", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox" placeholder="Department">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("fail");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("1563,1");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res.instances.length).toBe(1);
		// </variant3>
	});

	it("an input with fail outcome should have its corresponding aria role indicated in the results", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="searchbox" placeholder="Department">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		const result = JSON.parse(LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON([LevelAccess_AccessEngine.testTypes.GUIDED_AUTOMATIC]));
		const testDetails = result.find((i) => i.testId === "1563");

		expect(testDetails).toEqual({
			testId: "1563",
			testType: "GUIDED_AUTOMATIC",
			outcome: "fail",
			results: [
				jasmine.objectContaining({
					attributeDetail: "This input (role=searchbox) should not rely on text in the placeholder attribute for an accessible name",
					css: 'input[placeholder="Department"][role="searchbox"]',
					uel: "body>input:nth-of-type(1)",
				}),
			],
		});
	});
});

describe('String N/A: an input with role=textbox a style attribute set to "display:none;"', function () {
	it('an input with a style attribute set to "display:none;" should be equal to na', function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox" style="display:none">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String N/A: an input with role=textbox that lacks an accessible name", function () {
	it("an input that lacks an accessible name should be equal to na", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("na");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox, an implicit accessible name and a placeholder attribute that are greater than 3 characters", function () {
	it("an input with an implicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label>Name: <input role="textbox" placeholder="Name"></label>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters", function () {
	it("an input with an implicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label>A<input role="textbox" placeholder="Name"></label>';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox, an explicit accessible name and a placeholder attribute that are greater than 3 characters", function () {
	it("an input with an explicit accessible name and a placeholder attribute that are greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label for="test">Name: </label><input role="textbox" placeholder="Name" id="test">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters", function () {
	it("an input with an explicit accessible name less than 4 characters and a placeholder attribute greater than 3 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<label for="test">A</label><input role="textbox" placeholder="Name" id="test">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other", function () {
	it("an input with placeholder and aria-labelledby attributes that are more than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span id="label1">First Name</span><input role="textbox" placeholder="First Name" aria-labelledby="label1">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and an aria-labelledby attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<span id="label1">A</span><input role="textbox" placeholder="Name" aria-labelledby="label1">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox placeholder and aria-label attributes that are greater than 3 characters and equal to each other", function () {
	it("an input with placeholder and aria-label attributes that are greater than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox" placeholder="First Name" aria-label="First Name">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and an aria-label attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox" placeholder="First Name" aria-label="A">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox placeholder and title attributes that are greater than 3 characters and equal to each other", function () {
	it("an input with placeholder and title attributes that are greater than 3 characters and equal to each other should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox" placeholder="First Name" title="First Name">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Pass: an input with role=textbox a placeholder attribute greater than 3 characters and a title attribute less than 4 characters", function () {
	it("an input with a placeholder attribute greater than 3 characters and a title attribute less than 4 characters should be equal to pass", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox" placeholder="First Name" title="A">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("pass");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res).toBe(null);
		// </variant3>
	});
});

describe("String Fail: an input with role=textbox and only a placeholder attribute", function () {
	it("an input with only a placeholder attribute should be equal to fail", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox" placeholder="Department">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
		// <variant1>
		var res = LevelAccess_AccessEngine.runTest_returnOutcome("1563");
		expect(res).toBe("fail");
		// </variant1>
		// <variant2>
		res = LevelAccess_AccessEngine.runTest_returnNumbers("1563");
		expect(res).toBe("1563,1");
		// </variant2>
		// <variant3>
		res = LevelAccess_AccessEngine.runTest_returnInstances("1563");
		expect(res.instances.length).toBe(1);
		// </variant3>
	});

	it("an input with fail outcome should have its corresponding aria role indicated in the results", function () {
		document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
		document.querySelector("#testing").contentWindow.document.body.innerHTML = '<input role="textbox" placeholder="Department">';
		LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);

		const result = JSON.parse(LevelAccess_AccessEngine.nextgen_runAllTests_returnInstances_JSON([LevelAccess_AccessEngine.testTypes.GUIDED_AUTOMATIC]));
		const testDetails = result.find((i) => i.testId === "1563");

		expect(testDetails).toEqual({
			testId: "1563",
			testType: "GUIDED_AUTOMATIC",
			outcome: "fail",
			results: [
				jasmine.objectContaining({
					attributeDetail: "This input (role=textbox) should not rely on text in the placeholder attribute for an accessible name",
					css: 'input[placeholder="Department"][role="textbox"]',
					uel: "body>input:nth-of-type(1)",
				}),
			],
		});
	});
});
