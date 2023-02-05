package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage {
    public static WebDriver driver ;
    public RegisterPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }
    @FindBy(xpath = "//h1[@class='text-center text-[#306D75] font-bold text-5xl mb-11']")
    private WebElement judulLogin ;
    public boolean judulIsDisplayed(){
        judulLogin.isDisplayed();
        return true ;
    }
    @FindBy(id="to-register")
    private WebElement toRegister ;
    public void clickToRegister(){
        toRegister.click();
    }

    @FindBy(id="business-name")
    private WebElement namaToko ;

    public void clickNamaToko(){
        namaToko.click();
    }
    public void setNamaToko(String toko){
        namaToko.sendKeys(toko);
    }

    @FindBy(xpath="//input[@id='email']")
    private WebElement registerEmail ;

    public void clickRegisterEmail(){
        registerEmail.click();
    }
    public void setRegisterEmail(String email){
        registerEmail.sendKeys(email);
    }
    @FindBy(id="password")
    private WebElement registerPassword ;
    public void clickRegisterPassword(){
        registerPassword.click();
    }
    public void setRegisterPassword(String passDaftar){
        registerPassword.sendKeys(passDaftar);
    }

    @FindBy(id="number-hp")
    private WebElement setNumberHp ;
    public void clickNumberHp(){
        setNumberHp.click();
    }
    public void setNumberHp(String noHp){
        setNumberHp.sendKeys(noHp);
    }

    @FindBy(id="address")
    private WebElement setAddress ;
    public void clickAddress(){
        setAddress.click();
    }
    public void setAlamat(String alamat){
        setAddress.sendKeys(alamat);
    }

    @FindBy(id="register")
    private WebElement registerUser ;
    public void clickRegister(){
        registerUser.click();
    }

}
