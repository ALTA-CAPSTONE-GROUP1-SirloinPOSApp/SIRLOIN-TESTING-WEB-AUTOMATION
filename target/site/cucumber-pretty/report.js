$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Register.feature");
formatter.feature({
  "line": 2,
  "name": "Sirloin register user",
  "description": "",
  "id": "sirloin-register-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    },
    {
      "line": 1,
      "name": "@Capstone"
    }
  ]
});
formatter.before({
  "duration": 16677324900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Register with valid input",
  "description": "",
  "id": "sirloin-register-user;register-with-valid-input",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user click register field",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user input nama bisnis / toko \"Toko Barokah\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user input \"mukhlisanshori1997@gmail.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user input password register have value \"Mukhlis11111\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user input nomor telephone \"08111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user input \"jl malang\" as alamat",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.userClickRegisterField()"
});
formatter.result({
  "duration": 3168937900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toko Barokah",
      "offset": 31
    }
  ],
  "location": "RegisterSteps.userInputNamaBisnisToko(String)"
});
formatter.result({
  "duration": 2051760200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukhlisanshori1997@gmail.com",
      "offset": 12
    }
  ],
  "location": "RegisterSteps.userInputAsEmail(String)"
});
formatter.result({
  "duration": 2027248800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mukhlis11111",
      "offset": 41
    }
  ],
  "location": "RegisterSteps.userInputPasswordRegisterHaveValue(String)"
});
formatter.result({
  "duration": 1252637600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08111111111",
      "offset": 28
    }
  ],
  "location": "RegisterSteps.userInputNomorTelephone(String)"
});
formatter.result({
  "duration": 285703600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jl malang",
      "offset": 12
    }
  ],
  "location": "RegisterSteps.userInputAsAlamat(String)"
});
formatter.result({
  "duration": 1327070100,
  "status": "passed"
});
formatter.after({
  "duration": 1638849600,
  "status": "passed"
});
});