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

    @And("^user input nama bisnis / toko \"([^\"]*)\"$")
    public void userInputNamaBisnisToko(String toko) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setNamaToko(toko);
        Thread.sleep(1000);
    }


    @And("^user input \"([^\"]*)\" as email$")
    public void userInputAsEmail(String email) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setRegisterEmail(email);
        Thread.sleep(1000);
    }

    @And("^user input \"([^\"]*)\" as alamat$")
    public void userInputAsAlamat(String alamat) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setAlamat(alamat);
        Thread.sleep(1000);
    }

    @And("^user click register button$")
    public void userClickRegisterButton() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickRegister();
    }

    @And("^user input password register have value \"([^\"]*)\"$")
    public void userInputPasswordRegisterHaveValue(String pwd) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setRegisterPassword(pwd);
        Thread.sleep(1000);
    }

    @And("^user input nomor telephone \"([^\"]*)\"$")
    public void userInputNomorTelephone(String nohp) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setNumberHp(nohp);

    }
}
