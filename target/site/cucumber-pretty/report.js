$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Capstone"
    }
  ]
});
formatter.before({
  "duration": 13492576800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid email dan password",
  "description": "",
  "id": "login;login-with-valid-email-dan-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user on the sirloinPOS website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click email field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user input email \"mukhlisanshori123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click password field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user input \"Mukhlis123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnTheSirloinPOSWebsite()"
});
formatter.result({
  "duration": 1278035700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickEmailField()"
});
formatter.result({
  "duration": 205427100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukhlisanshori123@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userInputEmail(String)"
});
formatter.result({
  "duration": 2323150500,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat StepDef.LoginSteps.userInputEmail(LoginSteps.java:29)\r\n\tat ✽.And user input email \"mukhlisanshori123@gmail.com\"(features/Login.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.userClickPasswordField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mukhlis123",
      "offset": 12
    }
  ],
  "location": "LoginSteps.userInputAsPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.userClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1294401600,
  "status": "passed"
});
});