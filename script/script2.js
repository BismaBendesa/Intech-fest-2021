const hamburger = document.getElementById('menu-dropdown');
const navUL = document.getElementById('dropdown-content');
let clicked = false;
const checkHome = document.getElementById('checkHome');
const checkOnlineVacc = document.getElementById('checkOnlineVacc');
const checkCheckStatus = document.getElementById('checkCheckStatus');
const checkStatusTitle = document.getElementById('checkStatusTitle');
const checkDir = document.getElementById('checkDir');
const checkDirDesc = document.getElementById('checkDirDesc');
const checkFullName = document.getElementById('checkFullName');
const checkCheck = document.getElementById('checkCheck');
const checkLogin = document.getElementById('checkLogin');
const checkStatusFullname = document.getElementById('checkStatusFullname');
const checkStatusnik = document.getElementById('checkStatusnik');

hamburger.addEventListener('click', () =>{
    clicked = !clicked
    if(clicked){
        navUL.style.display ="block";
    } 
    else{
        navUL.style.display ="none";
    }
});

let language = {
    eng : {
        checkHome : "Home",
        checkOnlineVacc : "Online Vaccination",
        checkCheckStatus : "Check Status",
        checkStatusTitle : "Check Status Covid-19",
        checkDir : "Home / Check Status",
        checkDirDesc : "Checking your status data related to Covid-19. After finishing sending data and waiting for the results.",
        checkFullName : "Full Name",
        checkCheck : "Check",
        checkLogin : "Login",
        checkStatusFullname : "ex : John Applessed",
        checkStatusnik : "ex : 254235325442453"
    },
    ina:{
        checkHome : "Beranda",
        checkOnlineVacc : "Vaksinasi Online",
        checkCheckStatus : "Check Status",
        checkStatusTitle : "Cek Status Covid-19",
        checkDir : "Beranda / Cek Status",
        checkDirDesc : "Pengecekan data status anda yang berkaitan dengan Covid-19. Setelah selesai kirim data dan tunggu hasilnya.",
        checkFullName : "Nama Lengkap",
        checkCheck : "Periksa",
        checkLogin : "Login",
        checkStatusFullname : "Nama Lengkap",
        checkStatusnik : "cth : 254235325442453",
    }
}

function getLanguageValue(){
    const languageValue = document.getElementById('language-categories').value;
    console.log(languageValue);
    if(languageValue ==="ENG"){
        checkHome.innerHTML = language.eng.checkHome;
        checkOnlineVacc.innerHTML = language.eng.checkOnlineVacc;
        checkCheckStatus.innerHTML = language.eng.checkCheckStatus;
        checkStatusTitle.innerHTML = language.eng.checkStatusTitle;
        checkDir.innerHTML = language.eng.checkDir;
        checkDirDesc.innerHTML = language.eng.checkDirDesc;
        checkFullName.innerHTML = language.eng.checkFullName;
        checkCheck.innerHTML = language.eng.checkCheck;
        checkLogin.innerHTML = language.eng.checkLogin;
        checkStatusFullname.placeholder = language.eng.checkStatusFullname;
        checkStatusnik.placeholder = language.eng.checkStatusnik;
        
    } else if(languageValue ==="ENG"){
        checkHome.innerHTML = language.ina.checkHome;
        checkOnlineVacc.innerHTML = language.ina.checkOnlineVacc;
        checkCheckStatus.innerHTML = language.ina.checkCheckStatus;
        checkStatusTitle.innerHTML = language.ina.checkStatusTitle;
        checkDir.innerHTML = language.ina.checkDir;
        checkDirDesc.innerHTML = language.ina.checkDirDesc;
        checkFullName.innerHTML = language.ina.checkFullName;
        checkCheck.innerHTML = language.ina.checkCheck;
        checkLogin.innerHTML = language.ina.checkLogin;
        checkStatusnik.placeholder = language.ina.checkStatusnik;
        
    }

}