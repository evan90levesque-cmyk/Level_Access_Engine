describe('String N/A: no a nodes', function() {
   it('no a nodes should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a node, no accessible name', function() {
   it('a node, no accessible name should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a node with a style set to a text value "display:none"', function() {
   it('a node with a style set to a text value "display:none" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' style='display:none' aria-label='alternative'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String N/A: a node with a role set to the text value "presentation"', function() {
   it('a node with a role set to the text value "presentation" should be equal to na', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' role='presentation' title='alternative'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('na');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a node with an accessible name calculation set to a non-suspicious text value', function() {
   it('a node with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>good alternative</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: two a nodes with an accessible name calculation set to a non-suspicious text value', function() {
   it('two nodes with an accessible name calculation set to a non-suspicious text value should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>good alternative</a><a href='#'>good alternative</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});

describe('String Pass: a node with an accessible name calculation set to "permissions" which contains a script tag', function() {
   it('a node with an accessible name calculation set to "permissions" which contains a script tag should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = '<a href="#" id="editReportPeople" onclick="return false;" title="Permissions" data-ae_styles="background-color;rgba(0, 0, 0, 0);font-size;13px;font-weight;normal;color;rgb(4, 102, 182)"><i alt="Edit Project Permissions" class="fa fa-lock fa-32 fa-action" aria-hidden="true" data-ae_styles="background-color;rgba(0, 0, 0, 0);font-size;13px;font-weight;normal;color;rgb(4, 102, 182);before;#"></i><span class="accessibleAltText" data-ae_styles="background-color;rgba(0, 0, 0, 0);font-size;13px;font-weight;normal;color;rgb(4, 102, 182)">Permissions - Opens Dialog</span><script class="" type="text/javascript" language="javascript" data-ae_styles="display;none;background-color;rgba(0, 0, 0, 0);font-size;13px;font-weight;normal;color;rgb(4, 102, 182)">var reportPeopleCallback = function() {window.location.reload();};if(typeof(reportModal) == "undefined") {var reportModal = new AmpModalExtender("reportModal"); }jQuery(function(){jQuery("#editReportPeople, .editReportPeople").off("click");jQuery("#editReportPeople, .editReportPeople").on("click", function(element){reportModal.showAjaxDialogUrl(this, "/public/audit/edit_report_people.php","report_id=250340", reportPeopleCallback, "Edit Report Permissions");});});</script><script class="" type="text/javascript" language="javascript" src="/javascript/edit_report_people.js?cache=2016.8.5" data-ae_styles="display;none;background-color;rgba(0, 0, 0, 0);font-size;13px;font-weight;normal;color;rgb(4, 102, 182)"></script><script class="" type="text/javascript" language="javascript" src="/javascript/org_seats_auto_complete.js?cache=2016.8.5" data-ae_styles="display;none;background-color;rgba(0, 0, 0, 0);font-size;13px;font-weight;normal;color;rgb(4, 102, 182)"></script></a>';
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});

// text that contains the substring “more”, “click here”, “...”

describe('String Fail: a node with an accessible name calculation set a text value that contains the text "more"', function() {
   it('a node with an accessible name calculation set a text value that contains the text "more" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' aria-label='more'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a node with an accessible name calculation set a text value that contains the text "more..."', function() {
   it('a node with an accessible name calculation set a text value that contains the text "more..." should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' aria-label='more...'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a node with an accessible name calculation set a text value that contains the text "click here"', function() {
   it('a node with an accessible name calculation set a text value that contains the text "click here" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' title='click here'></a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a node with an accessible name calculation set a text value that contains the text "..."', function() {
   it('a node with an accessible name calculation set a text value that contains the text "..." should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>...</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: two a nodes with an accessible name calculation set a text values that contains the text "more"; and "..."', function() {
   it('two a nodes with an accessible name calculation set a text values that contains the text "more"; and "..."; should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#' aria-label='more'></a><a href='#'>...</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,2");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(2);
      // </variant3>
   });
});

// * text is longer than 150 characters

describe('String Fail: a node with an accessible name calculation longer than 150 characters', function() {
   it('a node with an accessible name calculation longer than 150 characters should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.This is a super long link text example.</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a node with an accessible name calculation set a text value that contains the text "…"', function() {
   it('a node with an accessible name calculation set a text value that contains the text "…" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>…</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Fail: a node with an accessible name calculation set a text value that contains the text "go"', function() {
   it('a node with an accessible name calculation set a text value that contains the text "go" should be equal to fail', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>go</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('fail');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("239,1");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res.instances.length).toBe(1);
      // </variant3>
   });
});

describe('String Pass: a node with an accessible name calculation set a text value that contains the text "test"', function() {
   it('a node with an accessible name calculation set a text value that contains the text "test" should be equal to pass', function() {
      document.querySelector("#testing").contentWindow.document.head.innerHTML = "";
      document.querySelector("#testing").contentWindow.document.body.innerHTML = "<a href='#'>test</a>";
      LevelAccess_AccessEngine.setWindowUnderTest(document.querySelector("#testing").contentWindow);
      // <variant1>
      var res = LevelAccess_AccessEngine.runTest_returnOutcome("239");
      expect(res).toBe('pass');
      // </variant1>
      // <variant2>
      res = LevelAccess_AccessEngine.runTest_returnNumbers("239");
      expect(res).toBe("");       // </variant2>
      // <variant3>
      res = LevelAccess_AccessEngine.runTest_returnInstances("239");
      expect(res).toBe(null);
      // </variant3>
   });
});