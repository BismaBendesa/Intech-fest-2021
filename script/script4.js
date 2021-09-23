const signup = document.getElementById('signup');
const signUpTitle = document.getElementById('signUpTitle');
const signUpFullName = document.getElementById('signUpFullName');
const signUpEmail = document.getElementById('signUpEmail');
const inputFullName = document.getElementById('inputFullName');
const inputEmail = document.getElementById('inputEmail');
const password = document.getElementById('password');
const alreadyHaveAcc = document.getElementById('alreadyHaveAcc');
const signupButton = document.getElementById('signupButton');
const signUpQuote = document.getElementById('signUpQuote');



let language = {
    eng : {
        signup : "Register",
        signUpTitle : "Come and Join Us at <span>Sehat!</span>",
        signUpFullName : "Full Name",
        signUpEmail : "Email",
        inputFullName : "ex : John Applessed",
        inputEmail : "ex : johnapplessed@gmail.com",
        password : "Password",
        alreadyHaveAcc : "Already have an account? Click <a href=\"login.html\">here</a>",
        signupButton : "Sign Up",
        signUpQuote : "<span>\"</span>Free Indonesia From Covid-19!",
        
    },
    ina :{
        signup : "Daftar",
        signUpTitle : "Bergabung Bersama Kami di <span>Sehat!</span>",
        signUpFullName : "Nama Lengkap",
        signUpEmail : "Email",
        inputFullName : "cth : John Applessed",
        inputEmail : "cth : johnapplessed@gmail.com",
        password : "Kata Sandi",
        alreadyHaveAcc : "Sudah Punya akun? Klik <a href=\"login.html\">disini</a>",
        signupButton : "Daftar",
        signUpQuote : "<span>\"</span> Wujudkan Indonesia Bebas Covid-19",
        
    }
}


function getLanguageValue(){
    const languageValue = document.getElementById('language-categories').value;
    console.log(languageValue);
    if (languageValue == "ENG"){
        signup.innerHTML = language.eng.signup;
        signUpTitle.innerHTML = language.eng.signUpTitle;
        signUpFullName.innerHTML = language.eng.signUpFullName;
        signUpEmail.innerHTML = language.eng.signUpEmail;
        inputFullName.placeholder = language.eng.inputFullName;
        inputEmail.placeholder = language.eng.inputEmail;
        password.innerHTML = language.eng.password;
        alreadyHaveAcc.innerHTML = language.eng.alreadyHaveAcc;
        signupButton.innerHTML = language.eng.signupButton;
        signUpQuote.innerHTML = language.eng.signUpQuote;
        
    } else if (languageValue == "INA"){
        signup.innerHTML = language.ina.signup;
        signUpTitle.innerHTML = language.ina.signUpTitle;
        signUpFullName.innerHTML = language.ina.signUpFullName;
        signUpEmail.innerHTML = language.ina.signUpEmail;
        inputFullName.placeholder = language.ina.inputFullName;
        inputEmail.placeholder = language.ina.inputEmail;
        password.innerHTML = language.ina.password;
        alreadyHaveAcc.innerHTML = language.ina.alreadyHaveAcc;
        signupButton.innerHTML = language.ina.signupButton;
        signUpQuote.innerHTML = language.ina.signUpQuote;
        
    
    }
};