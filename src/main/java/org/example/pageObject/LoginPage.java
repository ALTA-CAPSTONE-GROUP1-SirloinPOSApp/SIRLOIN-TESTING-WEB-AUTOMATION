package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public static WebDriver driver ;
    public LoginPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }
    @FindBy(id ="email")
    private WebElement akunEmail;

    public void clickEmail(){
        akunEmail.click();
    }
    public void setEmail(String email){
        akunEmail.sendKeys(email); ;
    }

    @FindBy(id = "password")
    private WebElement akunPassword ;
    public void clickPassword(){
        akunPassword.click();
    }
    public void setPassword(String password){
        akunPassword.sendKeys(password);
    }

    @FindBy(id="login")
    private WebElement btnLogin;
    public void clickLogin(){
        btnLogin.click();
    }

    @FindBy(xpath = "//h1[@class='text-center text-[#306D75] font-bold text-5xl mb-11']")
    private WebElement judulLogin ;
    public boolean isDisplayed(){
        judulLogin.isDisplayed();
        return true ;
    }

}
