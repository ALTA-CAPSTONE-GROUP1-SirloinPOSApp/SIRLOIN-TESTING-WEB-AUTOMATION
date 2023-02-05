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
  "duration": 15184460000,
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
  "name": "user click nama bisnis/toko fields",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user input nama bisnis / toko \"Toko Barokah\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click email field on register",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user input \"mukhlisanshori1997@gmail.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click password field on register",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user input \"Mukhlis123\" as password on register",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click alamat fields",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user input \"jl malang\" as alamat",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.userClickRegisterField()"
});
formatter.result({
  "duration": 3688442200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.userClickNamaBisnisTokoFields()"
});
formatter.result({
  "duration": 413906600,
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
  "duration": 695767000,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat StepDef.RegisterSteps.userInputNamaBisnisToko(RegisterSteps.java:39)\r\n\tat ✽.And user input nama bisnis / toko \"Toko Barokah\"(features/Register.feature:6)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "RegisterSteps.userClickEmailFieldOnRegister()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When user click email field on register(features/Register.feature:7) matches more than one step definition:\n  ^user click email field on register$ in RegisterSteps.userClickEmailFieldOnRegister()\n  user click email field in LoginSteps.userClickEmailField()\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "RegisterSteps.userClickPasswordFieldOnRegister()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When user click password field on register(features/Register.feature:9) matches more than one step definition:\n  ^user click password field on register$ in RegisterSteps.userClickPasswordFieldOnRegister()\n  user click password field in LoginSteps.userClickPasswordField()\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mukhlis123",
      "offset": 12
    }
  ],
  "location": "RegisterSteps.userInputAsPasswordOnRegister(String)"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.And user input \"Mukhlis123\" as password on register(features/Register.feature:10) matches more than one step definition:\n  ^user input \"([^\"]*)\" as password on register$ in RegisterSteps.userInputAsPasswordOnRegister(String)\n  user input \"([^\"]*)\" as password in LoginSteps.userInputAsPassword(String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterSteps.userClickAlamatFields()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "duration": 2390588100,
  "status": "passed"
});
});