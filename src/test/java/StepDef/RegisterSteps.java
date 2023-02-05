package StepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.example.pageObject.RegisterPage;
import org.openqa.selenium.WebDriver;

public class RegisterSteps {
    private WebDriver webDriver;
    public RegisterSteps(){
        super();
        this.webDriver = Hooks.webDriver ;
    }
    @Given("^user already on login page$")
    public void userAlreadyOnLoginPage() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.judulIsDisplayed();
    }

    @When("^user click register field$")
    public void userClickRegisterField() throws InterruptedException{
        RegisterPage registerPage = new RegisterPage(webDriver);
        Thread.sleep(2000);
        registerPage.clickToRegister();
    }

    @When("^user click nama bisnis/toko fields$")
    public void userClickNamaBisnisTokoFields() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickNamaToko();
    }

    @And("^user input nama bisnis / toko \"([^\"]*)\"$")
    public void userInputNamaBisnisToko(String toko) throws Throwable {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setNamaToko(toko);
        throw new PendingException();
    }

    @When("^user click email field on register$")
    public void userClickEmailFieldOnRegister() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickRegisterEmail();
    }

    @And("^user input \"([^\"]*)\" as email$")
    public void userInputAsEmail(String email) throws Throwable {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setRegisterEmail(email);
        throw new PendingException();
    }

    @When("^user click password field on register$")
    public void userClickPasswordFieldOnRegister() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickRegisterPassword();
    }

    @And("^user input \"([^\"]*)\" as password on register$")
    public void userInputAsPasswordOnRegister(String pass) throws Throwable {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setRegisterPassword(pass);
        throw new PendingException();
    }

    @When("^user click alamat fields$")
    public void userClickAlamatFields() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickAddress();
    }

    @And("^user input \"([^\"]*)\" as alamat$")
    public void userInputAsAlamat(String alamat) throws Throwable {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setAlamat(alamat);
        throw new PendingException();
    }

    @And("^user click register button$")
    public void userClickRegisterButton() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickRegister();
    }
}
