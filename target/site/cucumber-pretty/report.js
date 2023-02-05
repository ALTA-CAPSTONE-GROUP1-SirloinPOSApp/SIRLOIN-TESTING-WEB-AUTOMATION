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
    },
    {
      "line": 1,
      "name": "@Positive"
    }
  ]
});
formatter.before({
  "duration": 11465116300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Register with null values nama bisnis atau toko",
  "description": "",
  "id": "sirloin-register-user;register-with-null-values-nama-bisnis-atau-toko",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Register"
    },
    {
      "line": 11,
      "name": "@Capstone"
    },
    {
      "line": 11,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user click register field",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user input \"mukhlisanshori1997@gmail.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user input password register have value \"Mukhlis11111\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user input nomor telephone \"08111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user input \"jl malang\" as alamat",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "button register should be disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userClickRegisterField()"
});
formatter.result({
  "duration": 2741622000,
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
  "duration": 1928602400,
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
  "duration": 1280009900,
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
  "duration": 230750200,
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
  "duration": 1231875500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.buttonRegisterShouldBeDisable()"
});
formatter.result({
  "duration": 67365900,
  "status": "passed"
});
formatter.after({
  "duration": 1129154400,
  "status": "passed"
});
formatter.before({
  "duration": 4456989700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Register with null values email",
  "description": "",
  "id": "sirloin-register-user;register-with-null-values-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Register"
    },
    {
      "line": 20,
      "name": "@Capstone"
    },
    {
      "line": 20,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user click register field",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user input nama bisnis / toko \"Toko Barokah\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user input password register have value \"Mukhlis11111\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user input nomor telephone \"08111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user input \"jl malang\" as alamat",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "button register should be disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userClickRegisterField()"
});
formatter.result({
  "duration": 2167915300,
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
  "duration": 1316396700,
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
  "duration": 1502691700,
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
  "duration": 199149300,
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
  "duration": 1182723200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.buttonRegisterShouldBeDisable()"
});
formatter.result({
  "duration": 67156300,
  "status": "passed"
});
formatter.after({
  "duration": 1382185600,
  "status": "passed"
});
formatter.before({
  "duration": 4264414600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Register with null values password",
  "description": "",
  "id": "sirloin-register-user;register-with-null-values-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@Register"
    },
    {
      "line": 29,
      "name": "@Capstone"
    },
    {
      "line": 29,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user click register field",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "user input nama bisnis / toko \"Toko Barokah\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user input \"mukhlisanshori1997@gmail.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user input nomor telephone \"08111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user input \"jl malang\" as alamat",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "button register should be disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userClickRegisterField()"
});
formatter.result({
  "duration": 2213108100,
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
  "duration": 1289770300,
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
  "duration": 1377092300,
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
  "duration": 198113200,
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
  "duration": 1182104800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.buttonRegisterShouldBeDisable()"
});
formatter.result({
  "duration": 78374600,
  "status": "passed"
});
formatter.after({
  "duration": 1381541700,
  "status": "passed"
});
formatter.before({
  "duration": 4643634700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Register with null values nomor telephone",
  "description": "",
  "id": "sirloin-register-user;register-with-null-values-nomor-telephone",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@Register"
    },
    {
      "line": 38,
      "name": "@Capstone"
    },
    {
      "line": 38,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user click register field",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user input nama bisnis / toko \"Toko Barokah\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user input \"mukhlisanshori1997@gmail.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user input password register have value \"Mukhlis11111\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user input \"jl malang\" as alamat",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "button register should be disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userClickRegisterField()"
});
formatter.result({
  "duration": 2681428800,
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
  "duration": 1933115800,
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
  "duration": 1374373200,
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
  "duration": 1259014900,
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
  "duration": 1219897600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.buttonRegisterShouldBeDisable()"
});
formatter.result({
  "duration": 49684400,
  "status": "passed"
});
formatter.after({
  "duration": 1083155100,
  "status": "passed"
});
formatter.before({
  "duration": 4185215700,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Register with null values alamat",
  "description": "",
  "id": "sirloin-register-user;register-with-null-values-alamat",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@Register"
    },
    {
      "line": 47,
      "name": "@Capstone"
    },
    {
      "line": 47,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user click register field",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user input nama bisnis / toko \"Toko Barokah\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user input \"mukhlisanshori1997@gmail.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user input password register have value \"Mukhlis11111\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user input nomor telephone \"08111111111\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "button register should be disable",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.userClickRegisterField()"
});
formatter.result({
  "duration": 2201022300,
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
  "duration": 1254185600,
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
  "duration": 1405280500,
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
  "duration": 1257283200,
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
  "duration": 182947200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.buttonRegisterShouldBeDisable()"
});
formatter.result({
  "duration": 48631800,
  "status": "passed"
});
formatter.after({
  "duration": 1353561200,
  "status": "passed"
});
});