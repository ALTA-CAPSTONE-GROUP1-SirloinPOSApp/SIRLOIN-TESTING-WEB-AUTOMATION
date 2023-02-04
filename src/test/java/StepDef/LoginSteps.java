package StepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.example.pageObject.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.example.pageObject.LoginPage;
import org.openqa.selenium.WebDriver;

public class LoginSteps {

    private WebDriver webDriver;
    public LoginSteps(){
        super();
        this.webDriver = Hooks.webDriver ;
    }
    @Given("user open the website SirloinPOS")
    public void userOpenTheWebsiteSirloinPOS() {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.isDisplayed() ;
    }

    @When("user click Email field")
    public void userClickEmailField() {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.clickEmail();
    }

    @And("user input email \"([^\"]*)\"")
    public void userInputEmail(String email) throws Throwable {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setEmail(email);
        Thread.sleep(1000);
        throw new PendingException();
    }

    @When("user click password field")
    public void userClickPasswordField() {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.clickPassword();
    }

    @And("user input password \"([^\"]*)\"")
    public void userInputPassword(String password) throws Throwable {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setPassword(password);
        Thread.sleep(1000);
        throw new PendingException();
    }

    @And("user click login button")
    public void userClickLoginButton() {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.clickLogin();
    }

}
