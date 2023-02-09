package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class ProductTokoPage {
    public static WebDriver driver;

    public ProductTokoPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }


    @FindBy(xpath = "//h3[@class='font-bold text-3xl text-[#4AA3BA]']")
    private WebElement titleProductToko;

    public String getTitleProductToko() {
        return titleProductToko.getText();
    }

    public boolean isDisplayed() {
        titleProductToko.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//div[.='Kecap ABCRp. 5.000.-Stock: 5']")
    private static WebElement itemProduct;

    public static void clickProduct() {
        itemProduct.click();
    }

    @FindBy(xpath = "//p[.='Kecap ABC']")
    private static WebElement getProduct;

    public static boolean getProduct() {
        getProduct.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//div[.='Minyak FortuneRp. 39.000.-Stock: 100']")
    private static WebElement itemProduct2;

    public static void clickProduct2() {
        itemProduct2.click();
    }

    @FindBy(xpath = "//p[.='Minyak Fortune']")
    private static WebElement getProduct2;

    public static boolean getProduct2() {
        getProduct2.isDisplayed();
        return true;
    }

    @FindBy(xpath = "//div[@class='md:text-xs lg:text-base']/div[1]//button[@id='inc-product']")
    private WebElement clickInc;

    public void setClickInc() {
        for (int i = 0; i < 20; i++) {
            clickInc.click();
        }

    }

    @FindBy(xpath = "//div[@class='md:text-xs lg:text-base']/div[1]//button[@id='dec-product']")
    private WebElement clickDec;

    public void setClickDec() {
        for (int i = 0; i < 10; i++) {
            clickDec.click();

        }
    }

    @FindBy(css = ".font-medium.w-full > .p-10 > div > div:nth-of-type(1) #del-product")
    private static WebElement buttonDel;

    public static void buttonDel() {
        buttonDel.click();
    }


}






























