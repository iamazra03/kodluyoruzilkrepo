// 1. Kullanıcıdan isim al ve ekrana yazdır
let name = prompt("Lütfen adınızı giriniz:");
let myName = document.querySelector("#myName");

// Eğer kullanıcı isim girmezse "Ziyaretçi" yazsın
myName.innerHTML = name.length > 0 ? name : "Ziyaretçi";

function showTime() {
    const today = new Date();
    
    // Saat, Dakika ve Saniye bilgilerini alalım
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    
    // Gün bilgisini al(0=Pazar, 1=Pazartesi...)
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let d = days[today.getDay()];

    // Sayıları 01, 02 gibi göstermek için kontrol
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    // Ekrana yazdırılacak formatı belirle
    let time = `${h}:${m}:${s} ${d}`;
    
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    // Her 1 saniyede bir fonksiyonu tekrar çalıştır
    setTimeout(showTime, 1000);
}

// Fonksiyonu başlat
showTime();