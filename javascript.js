let isim = prompt("Lütfen İsminizi Giriniz")
let myName = document.getElementById("myName")
myName.innerHTML = `${isim}`

function showTime() {
    let myClock = document.getElementById("myClock")
    let tarih = new Date()
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()
    let gunler = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    let gun = gunler[tarih.getDay()]
    myClock.innerHTML = `${saat} : ${dakika} : ${saniye} ${gun}`
}
setInterval(showTime)