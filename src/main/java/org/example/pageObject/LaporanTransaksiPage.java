package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LaporanTransaksiPage {
    public static WebDriver driver;

    public LaporanTransaksiPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
    @FindBy(xpath = "//a[@id='laporan-transaksi']")
    private WebElement menuLaporanTransaksi ;
    public void clickLaporanTransaksi(){
        menuLaporanTransaksi.click();
    }
    @FindBy(xpath = "//h3[@class='font-bold text-2xl text-[#4AA3BA] mb-10']")
    private WebElement judulLaporan ;
    public String getJudulLaporan(){
        return judulLaporan.getText();
    }
    @FindBy(xpath = "//input[@id='start-date']")
    private WebElement tanggalMulai ;
    public void clickTanggalMulai(){
        tanggalMulai.click();
    }
    @FindBy(xpath = "//div[@class='react-datepicker__day react-datepicker__day--001']")
    private WebElement pilihTanggalMulai ;
    public void pilihTanggalMulai(){
        pilihTanggalMulai.click();
    }
    @FindBy(xpath = "//input[@id='end-date']")
    private WebElement tanggalSampai;
    public void clickTanggalSampai(){
        tanggalSampai.click();
    }
    @FindBy(xpath = "//div[@class='react-datepicker__day react-datepicker__day--028']")
    private WebElement pilihTanggalSampai;
    public void setPilihTanggalSampai(){
        pilihTanggalSampai.click();
    }
    @FindBy(xpath = "//button[@id='tampil-data']")
    private WebElement tampilData;
    public void clickTampilData(){
        tampilData.click();
    }


}
