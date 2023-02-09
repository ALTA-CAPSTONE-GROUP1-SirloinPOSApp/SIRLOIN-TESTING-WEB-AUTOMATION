package StepDef;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import org.example.pageObject.ProductTokoPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class ProductTokoSteps {
    private WebDriver webDriver;
    ProductTokoPage productTokoPage;

    public ProductTokoSteps() {
        super();
        this.webDriver = Hooks.webDriver;
        productTokoPage = new ProductTokoPage(webDriver);
    }


    @Then("^user should be on \"([^\"]*)\" page$")
    public void userShouldBeOnPage(String titleProductToko) throws InterruptedException {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        Assert.assertEquals(titleProductToko, productTokoPage.getTitleProductToko());
        System.out.println(titleProductToko);
        Thread.sleep(3000);
    }


    @Given("^user already on product toko page$")
    public void verifyDisplay() {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        productTokoPage.isDisplayed();
    }

    //Keranjang

    @And("^user click product item$")
    public void userClickProductItem() {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        ProductTokoPage.clickProduct();
    }
    @And("^user click product item2$")
    public void userClickProductItem2() {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        ProductTokoPage.clickProduct2();
    }

    @And("^verify product item on keranjang$")
    public void verifyProductItemOnKeranjang() throws InterruptedException {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        ProductTokoPage.getProduct();
        ProductTokoPage.getProduct2();
        Thread.sleep(2000);
    }

    @And("^user click button increment twenty items$")
    public void userClickButtonIncrementTwentyItems() {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        productTokoPage.setClickInc();

    }

    @And("^user click button decrement ten items$")
    public void userClickButtonDecrementTenItems() {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        productTokoPage.setClickDec();
    }

    @Then("^user delete item in list keranjang$")
    public void userDeleteItemInListKeranjang() {
        ProductTokoPage productTokoPage = new ProductTokoPage(webDriver);
        ProductTokoPage.buttonDel();

    }
}






    
        