package StepDef;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.example.pageObject.LaporanTransaksiPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class LaporanTransaksiSteps {
    private WebDriver webDriver;
    public LaporanTransaksiSteps(){
        super();
        this.webDriver = Hooks.webDriver ;
    }
    @And("^user click menu laporan transaksi$")
    public void userClickMenuLaporanTransaksi() {
        LaporanTransaksiPage laporanTransaksiPage = new LaporanTransaksiPage(webDriver);
        laporanTransaksiPage.clickLaporanTransaksi();
    }

    @Then("^verify title menu \"([^\"]*)\"$")
    public void verifyTitleMenu(String judul) throws InterruptedException {
        LaporanTransaksiPage laporanTransaksiPage = new LaporanTransaksiPage(webDriver);
        Assert.assertEquals(judul, laporanTransaksiPage.getJudulLaporan());
        Thread.sleep(2000);
    }
}
