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

    @And("^user click date from$")
    public void userClickDateFrom() throws InterruptedException {
        LaporanTransaksiPage laporanTransaksiPage = new LaporanTransaksiPage(webDriver);
        laporanTransaksiPage.clickTanggalMulai();
        Thread.sleep(1000);
    }

    @And("^user set date from$")
    public void userSetDateFrom() throws InterruptedException {
        LaporanTransaksiPage laporanTransaksiPage = new LaporanTransaksiPage(webDriver);
        laporanTransaksiPage.pilihTanggalMulai();
        Thread.sleep(1000);
    }

    @And("^user click date until$")
    public void userClickDateUntil() throws InterruptedException {
        LaporanTransaksiPage laporanTransaksiPage = new LaporanTransaksiPage(webDriver);
        laporanTransaksiPage.clickTanggalSampai();
        Thread.sleep(1000);

    }

    @And("^user set date until$")
    public void userSetDateUntil() {
        LaporanTransaksiPage laporanTransaksiPage = new LaporanTransaksiPage(webDriver);
        laporanTransaksiPage.setPilihTanggalSampai();
    }

    @Then("^user click tampilkan data laporan transaksi$")
    public void userClickTampilkanDataLaporanTransaksi() throws InterruptedException {
        LaporanTransaksiPage laporanTransaksiPage = new LaporanTransaksiPage(webDriver);
        laporanTransaksiPage.clickTampilData();
        Thread.sleep(2000);

    }
}
