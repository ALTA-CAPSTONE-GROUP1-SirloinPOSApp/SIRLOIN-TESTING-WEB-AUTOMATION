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
<<<<<<< Updated upstream
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
=======
  "duration": 49367426100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with valid email dan password",
  "description": "",
  "id": "login;login-with-valid-email-dan-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Positif"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user on the sirloinPOS website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click email field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user input email \"mukhlisanshori123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click password field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user input \"Mukhlis123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "see modal successfully login",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click OK button modal",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.userOnTheSirloinPOSWebsite()"
});
formatter.result({
  "duration": 1504958400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickEmailField()"
});
formatter.result({
  "duration": 440784900,
>>>>>>> Stashed changes
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< Updated upstream
      "val": "Toko Barokah",
      "offset": 31
    }
  ],
  "location": "RegisterSteps.userInputNamaBisnisToko(String)"
});
formatter.result({
  "duration": 2051760200,
=======
      "val": "mukhlisanshori123@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userInputEmail(String)"
});
formatter.result({
  "duration": 2478889800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickPasswordField()"
});
formatter.result({
  "duration": 99215800,
>>>>>>> Stashed changes
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
<<<<<<< Updated upstream
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
=======
      "val": "Mukhlis123",
      "offset": 12
    }
  ],
  "location": "LoginSteps.userInputAsPassword(String)"
});
formatter.result({
  "duration": 2106034000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickLoginButton()"
});
formatter.result({
  "duration": 247256800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.seeModalSuccessfullyLogin()"
});
formatter.result({
  "duration": 2051923100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOKButtonModal()"
});
formatter.result({
  "duration": 623288000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027swal2-popup swal2-modal swal2-icon-success animate__animated animate__fadeIn animate__faster\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.120)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-H54V1AL\u0027, ip: \u0027192.168.100.14\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3b0ddce01100add1d42ff4063c35895d, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027swal2-popup swal2-modal swal2-icon-success animate__animated animate__fadeIn animate__faster\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\win10\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60071}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60071/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3b0ddce01100add1d42ff4063c35895d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.example.pageObject.LoginPage.clickOkSeeModal(LoginPage.java:76)\r\n\tat StepDef.LoginSteps.clickOKButtonModal(LoginSteps.java:69)\r\n\tat ✽.When click OK button modal(features/Login.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 9658490300,
>>>>>>> Stashed changes
  "status": "passed"
});
});