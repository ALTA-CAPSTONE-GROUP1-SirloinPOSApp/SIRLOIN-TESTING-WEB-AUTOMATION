package StepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.LoginPage;
import org.example.pageObject.ProductTenantPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;


public class ProductTenantStepDef {

    private WebDriver webDriver;
    public ProductTenantStepDef(){
        super();
        this.webDriver = Hooks.webDriver ;
    }
    @When("^user login with input \"([^\"]*)\" as email and \"([^\"]*)\" as password$")
    public void userInputAsEmailAndAsPassword(String email, String pass) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setEmail(email);
        loginPage.setPassword(pass);
        loginPage.clickLogin();
        Thread.sleep(4000);
    }

    @And("^user click menu product$")
    public void userClickMenuProduct() {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.clickBarProduct();

    }

    @Then("^verify title menu is \"([^\"]*)\"$")
    public void verifyTitleMenuIs(String titleProdukPage)  {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        Assert.assertEquals(titleProdukPage, productTenant.titleProductTenant());
        System.out.println(titleProdukPage);

    }

    @And("^verify succes login title \"([^\"]*)\"$")
    public void verifySuccesLoginTitle(String pesanSukses) throws InterruptedException {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        Assert.assertEquals(pesanSukses, productTenant.pesanLoginSukses());
        System.out.println(pesanSukses);
        Thread.sleep(1000);
        productTenant.clickOkeButton();

    }

    @And("^user click button Tambah Product$")
    public void userClickButtonTambahProduct() {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.clickTambahProduct();

    }


    @And("^user should be redirect \"([^\"]*)\" page$")
    public void userShouldBeRedirectPage(String judulAddProduct) throws Throwable {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        Assert.assertEquals(judulAddProduct, productTenant.getTitleAddProduct());
        System.out.println(judulAddProduct);
        Thread.sleep(1000);
    }

    @Given("^user choose photos from directory$")
    public void userChoosePhotosFromDirectory() throws InterruptedException {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.choosePhoto();

    }

    @And("^user input nomor barcode \"([^\"]*)\"$")
    public void userInputNomorBarcode(String inputBarcode) {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setNoBarcode(inputBarcode);

    }
    @And("^user input kategory product \"([^\"]*)\"$")
    public void userInputKategoryProduct(String inputKategori)  {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setInputKategori(inputKategori);

    }

    @And("^user input supplier \"([^\"]*)\"$")
    public void userInputSupplier(String inputSuplier) {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setInputSuplier(inputSuplier);
    }

    @And("^user input nama product \"([^\"]*)\"$")
    public void userInputNamaProduct(String productName) {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setInputProduct(productName);

    }

    @And("^user input harga jual \"([^\"]*)\"$")
    public void userInputHargaJual(String hargajual) {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setHargaJual(hargajual);
    }

    @And("^user input harga beli \"([^\"]*)\"$")
    public void userInputHargaBeli(String hargabeli) {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setHargaBeli(hargabeli) ;
    }

    @And("^user input stok product \"([^\"]*)\"$")
    public void userInputStokProduct(String stokProduk) {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setStokProduk(stokProduk);

    }

    @And("^user input minimum stok \"([^\"]*)\"$")
    public void userInputMinimumStok(String minStok) throws InterruptedException {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.setMinimumStok(minStok);
        Thread.sleep(2000);
    }

    @Then("^user click simpan button$")
    public void userClickSimpanButton() throws InterruptedException {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.clickSave();
        Thread.sleep(5000);
    }

    @Given("^user choose photos from directory with file name \"([^\"]*)\"$")
    public void userChoosePhotosFromDirectoryWithFileName(String namafoto)  {
        ProductTenantPage productTenant = new ProductTenantPage(webDriver);
        productTenant.pilihFoto(namafoto);

    }
}
