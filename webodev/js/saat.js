
/*prompt ile kullanici ismi alindi 
let userName = prompt("Isminizi giriniz")

let paragraph = document.querySelector("#hosgeldiniz")

paragraph.innerHTML = `Merhaba ${userName}, Javascript zaman gostergecine hosgeldin!`

*/

/*Date nesnesi olusturuldu ve suanki zamanlar cekildi*/ 
/*updateTime fonksiyonu ile anlik olarak saat bilgisi cekildi*/ 

let saat = document.querySelector("#saat");

function updateTime(){
    let timeNow = new Date();
    

    /*Saat,dakika ve saniyeler eger 10 dan kucukse yanlarina bir adet 0 eklenerek yazilir*/
    let dateTime = `Saat:
                    ${timeNow.getHours() < 10 ? "0" +timeNow.getHours() : timeNow.getHours()} :
                    ${timeNow.getMinutes() < 10 ? "0" +timeNow.getMinutes() : timeNow.getMinutes()}  : 
                    ${timeNow.getSeconds() < 10 ? "0" +timeNow.getSeconds() : timeNow.getSeconds()}`; 
    saat.innerHTML = `${dateTime}`;
}
updateTime();
setInterval(updateTime,1000); // her 1 sn de bir saat bilgisi guncellenir

