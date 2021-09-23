const loginLogin = document.getElementById('loginLogin');
const loginTitle = document.getElementById('loginTitle');
const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginNoAcc = document.getElementById('loginNoAcc');
const loginGo = document.getElementById('loginGo');
const loginInputUsername = document.getElementById('loginInputUsername');
const loginQuote = document.getElementById('loginQuote');

let language = {
    eng : {
        loginLogin : "Login",
        loginTitle : "Log In To Access All Feature",
        loginUsername : "Username",
        loginPassword : "Password",
        loginNoAcc : "Don't have account? Click <a href=\"signup.html\">Here</a>",
        loginGo : "Login",
        loginInputUsername : "ex : John Applessed",
        loginQuote : " <span>\"</span>One Community, One Unity, One Purpose.",
    },
    ina :{
        loginLogin : "Masuk",
        loginTitle : "Masuk Untuk Mengakses seluruh fitur",
        loginUsername : "Nama Pengguna",
        loginPassword : "Kata sandi",
        loginNoAcc : "Belum memiliki akun ? Klik <a href=\"signup.html\">Disini</a>",
        loginGo : "Masuk",
        loginInputUsername : "cth : John Applessed",
        loginQuote : "<span>\"</span> Satu Komunitas, Satu Kesatuan, Satu Tujuan",
    }
}

function getLanguageValue(){
    const languageValue = document.getElementById('language-categories').value;
    console.log(languageValue);
    if(languageValue ==="ENG"){
        loginLogin.innerHTML = language.eng.loginLogin;
        loginTitle.innerHTML = language.eng.loginTitle;
        loginUsername.innerHTML = language.eng.loginUsername;
        loginPassword.innerHTML = language.eng.loginPassword;
        loginNoAcc.innerHTML = language.eng.loginNoAcc;
        loginGo.innerHTML = language.eng.loginGo;
        loginInputUsername.placeholder = language.eng.loginInputUsername;
        loginQuote.innerHTML = language.eng.loginQuote;
    } else if(languageValue === "INA"){
        loginLogin.innerHTML = language.ina.loginLogin;
        loginTitle.innerHTML = language.ina.loginTitle;
        loginUsername.innerHTML = language.ina.loginUsername;
        loginPassword.innerHTML = language.ina.loginPassword;
        loginNoAcc.innerHTML = language.ina.loginNoAcc;
        loginGo.innerHTML = language.ina.loginGo; 
        loginInputUsername.placeholder = language.ina.loginInputUsername;
        loginQuote.innerHTML = language.ina.loginQuote;
    }

}