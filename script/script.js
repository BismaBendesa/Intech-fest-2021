const hamburger = document.getElementById('menu-dropdown');
const navUL = document.getElementById('dropdown-content')
const container = document.getElementById('container');
let clicked = false;
const home = document.getElementById('home');
const pandemic = document.getElementById('pandemic');
const onlineVac = document.getElementById('onlineVac');
const checkStatus = document.getElementById('checkStatus');
const description1 = document.getElementById('description1');
const registerNow = document.getElementById('registerNow');
const learnMore = document.getElementById('learnMore');
const leadingFeature = document.getElementById('leadingFeature');
const leadingFeatureDescription = document.getElementById('leadingFeatureDescription');
const onlineVaccine = document.getElementById('onlineVaccine');
const onlineVaccineDescription = document.getElementById('onlineVaccineDescription');
const english = document.getElementById('english');
const englishDescription = document.getElementById('englishDescription');
const webResponsive = document.getElementById('webResponsive');
const webResponsiveDescription = document.getElementById('webResponsiveDescription');
const covidCase = document.getElementById('covidCase');
const currentCovidCases = document.getElementById('currentCovidCases');
const currentCovidCasesDescription = document.getElementById('currentCovidCasesDescription');
const positive = document.getElementById('positive');
const recovered = document.getElementById('recovered');
const died = document.getElementById('died');
const symptomsTitle = document.getElementById('symptomsTitle');
const symptomsDescription = document.getElementById('symptomsDescription');
const covidSymptoms = document.getElementById('covidSymptoms');
const fever = document.getElementById('fever');
const dryCough = document.getElementById('dryCough');
const tired = document.getElementById('tired');
const asthma = document.getElementById('asthma');
const precaution = document.getElementById('precaution');
const washHands = document.getElementById('washHands');
const socialDistance = document.getElementById('socialDistance');
const vaccination = document.getElementById('vaccination');
const mask = document.getElementById('mask');
const aboutUs = document.getElementById('aboutUs');
const aboutUsDescription = document.getElementById('aboutUsDescription');
const footerTitle = document.getElementById('footerTitle');
const footerCta = document.getElementById('footerCta');
const footerHome = document.getElementById('footerHome');
const footerOnlineVacc = document.getElementById('footerOnlineVacc');
const footerCheckStatus = document.getElementById('footerCheckStatus');
const footerLogin = document.getElementById('footerLogin');
const checkHome = document.getElementById('checkHome');





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
    eng: {
        home : "Home" ,  
        pandemic : "Embrace Pandemic To Endemic",
        onlineVac : "Online Vaccination",
        checkStatus : "Check Status",
        login : "Login",
        description1 : "Sehat! is a community that provides all information about Covid-19.",
        registerNow : "Register Now",
        learnMore : "Learn More",
        leadingFeature : "Our Leading Feature",
        leadingFeatureDescription : "Some of the Featured Features that we have to make your trip easier",
        onlineVaccineDescription : "Now the Sehat! platform has served online vaccination registration",
        english : "English Language",
        englishDescription : "English can already be used on the sehat! platform. Access it in the top menu!",
        webResponsive : "Web Responsive",
        webResponsiveDescription : "Our website is also responsive, you know! For mobile users there is no need to worry!",
        covidCase : "COVID CASE",
        currentCovidCases: "Current Number of Covid Cases in Indonesia",
        currentCovidCasesDescription : "The number of Covid cases in Indonesia has begun to decline. Meanwhile, vaccinations are still being disseminated by government to various regions.",
        positive : "Positive",
        recovered : "Recovered",
        died : "Died",
        symptomsTitle : "Let's recognize and prevent the symptoms of Covid!",
        symptomsDescription : "If you have any of the following symptoms, please contact your doctor immediately for answers",
        covidSymptoms : "Symptoms of Covid-19",
        fever : "Fever",
        dryCough : "Dry Cough",
        tired : "Tired",
        asthma : "Asthma",
        precaution : "Precaution Covid-19",
        washHands : "Wash Hands",
        socialDistance : "Social Distance",
        vaccination : "Vaccination",
        mask : "Mask",
        aboutUs : "About Us",
        aboutUsDescription : "Sehat! is an information and service platform about Covid-19",
        footerTitle : "Have you Registered?",
        footerCta : "Register Now",
        footerHome : "Home",
        footerOnlineVacc : "Online Vaccination",
        footerCheckStatus : "Check Status",
        footerLogin : "Login",
        checkHome : "Home",
        
    },
    ina :{  
        home : "Beranda",
        pandemic : "Mewujudkan Pandemi Menuju Endemik",
        onlineVac : "Vaksinasi Online",
        checkStatus : "Cek Status",
        login : "Masuk",
        description1 : "Sehat adalah sebuah komunitas yang menyediakan segala informasi mengenai Covid-19.",
        registerNow : "Daftar Sekarang",
        learnMore : "Selengkapnya",
        leadingFeature : "Fitur Unggulan Kami",
        leadingFeatureDescription : "Beberapa Fitur Unggulan yang kami miliki guna mempermudah perjalanan anda",
        onlineVaccineDescription : " Kini platform Sehat! telah melayani registrasi vaksinasi secara Online",
        english : "Bahasa Inggris",
        englishDescription : "Bahasa Inggris sudah bisa digunakan di platform sehat! Cara aksesnya di menu atas!",
        webResponsive : "Web Responsive",
        webResponsiveDescription : "Web kita juga sudah responsive lho! Bagi pengguna mobile tidak perlu khawatir!",
        covidCase : "KASUS COVID",
        currentCovidCases : "Jumlah Kasus Covid Saat ini di Indonesia",
        currentCovidCasesDescription : "Jumlah kasus covid di Indonesia sudah mulai menurun.Sementara itu, vaksinasi masih di sebarluaskan oleh pemerintah ke berbagai daerah. ",
        positive : "Positif",
        recovered : "Sembuh",
        died : "Meninggal",
        symptomsTitle : "Yuk, Kenali dan Cegah Gejala Covid!",
        symptomsDescription : "Jika memiliki beberapa gejala dibawah ini segera hubungi dokter untuk mendapatkan jawaban",
        covidSymptoms :"Gejala-gejala Covid-19",
        fever : "Demam",
        dryCough : "Batuk Kering",
        tired : "Kelelahan",
        asthma : "Sesak Nafas",
        precaution : "Pencegahan Covid-19",
        washHands : "Cuci Tangan",
        socialDistance : "Jaga Jarak",
        vaccination : "Vaksinasi",
        mask : "Masker",
        aboutUs : "Tentang Kami",
        aboutUsDescription : "Sehat! adalah sebuah platform informasi dan pelayanan seputar Covid-19",
        footerTitle : "Sudahkah anda mendaftar?",
        footerCta : "Daftar Sekarang",
        footerHome : "Beranda",
        footerOnlineVacc : "Vaksinasi Online",
        footerCheckStatus : "Cek Status",
        footerLogin : "Masuk",
        checkHome : "Beranda",
        
        
    }
}

function getLanguageValue(){
    const languageValue = document.getElementById('language-categories').value;
    console.log(languageValue);
    if(languageValue ==="ENG"){
        pandemic.innerHTML = language.eng.pandemic;
        home.innerHTML = language.eng.home;
        onlineVac.innerHTML = language.eng.onlineVac;
        checkStatus.innerHTML = language.eng.checkStatus;
        login.innerHTML = language.eng.login;
        description1.innerHTML = language.eng.description1;
        registerNow.innerHTML = language.eng.registerNow;
        learnMore.innerHTML = language.eng.learnMore;
        leadingFeature.innerHTML = language.eng.leadingFeature;
        leadingFeatureDescription.innerHTML = language.eng.leadingFeatureDescription;
        onlineVaccine.innerHTML = language.eng.onlineVac;
        onlineVaccineDescription.innerHTML = language.eng.onlineVaccineDescription;
        english.innerHTML = language.eng.english;
        englishDescription.innerHTML = language.eng.englishDescription;
        webResponsive.innerHTML = language.eng.webResponsive;
        webResponsiveDescription.innerHTML = language.eng.webResponsiveDescription;
        covidCase.innerHTML = language.eng.covidCase;
        currentCovidCases.innerHTML = language.eng.currentCovidCases;
        currentCovidCasesDescription.innerHTML = language.eng.currentCovidCasesDescription;
        positive.innerHTML = language.eng.positive;
        recovered.innerHTML = language.eng.recovered;
        died.innerHTML = language.eng.died;
        symptomsTitle.innerHTML = language.eng.symptomsTitle;
        symptomsDescription.innerHTML = language.eng.symptomsDescription;
        covidSymptoms.innerHTML = language.eng.covidSymptoms;
        fever.innerHTML = language.eng.fever;
        dryCough.innerHTML = language.eng.dryCough;
        tired.innerHTML = language.eng.tired;
        asthma.innerHTML = language.eng.asthma;
        precaution.innerHTML = language.eng.precaution;
        washHands.innerHTML = language.eng.washHands;
        socialDistance.innerHTML = language.eng.socialDistance;
        vaccination.innerHTML = language.eng.vaccination;
        mask.innerHTML = language.eng.mask;
        aboutUs.innerHTML = language.eng.aboutUs;
        aboutUsDescription.innerHTML = language.eng.aboutUsDescription;
        footerTitle.innerHTML = language.eng.footerTitle;
        footerCta.innerHTML = language.eng.footerCta;
        footerHome.innerHTML = language.eng.footerHome;
        footerOnlineVacc.innerHTML = language.eng.footerOnlineVacc;
        footerCheckStatus.innerHTML = language.eng.footerCheckStatus;
        footerLogin.innerHTML = language.eng.footerLogin;
        checkHome.innerHTML = language.eng.checkHome;
        
    } else if (languageValue === "INA"){
        pandemic.innerHTML = language.ina.pandemic;
        home.innerHTML = language.ina.home;
        onlineVac.innerHTML = language.ina.onlineVac;
        checkStatus.innerHTML = language.ina.checkStatus;
        login.innerHTML = language.ina.login;
        registerNow.innerHTML = language.ina.registerNow;
        learnMore.innerHTML = language.ina.learnMore;
        leadingFeature.innerHTML = language.ina.leadingFeature;
        leadingFeatureDescription.innerHTML = language.ina.leadingFeatureDescription;
        onlineVaccineDescription.innerHTML = language.ina.onlineVaccineDescription;
        english.innerHTML = language.ina.english;
        englishDescription.innerHTML = language.ina.englishDescription;
        webResponsive.innerHTML = language.ina.webResponsive;
        webResponsiveDescription.innerHTML = language.ina.webResponsiveDescription;
        covidCase.innerHTML = language.ina.covidCase;
        currentCovidCases.innerHTML = language.ina.currentCovidCases;
        currentCovidCasesDescription.innerHTML = language.ina.currentCovidCasesDescription;
        positive.innerHTML = language.ina.positive;
        recovered.innerHTML = language.ina.recovered;
        died.innerHTML = language.ina.died;
        symptomsTitle.innerHTML = language.ina.symptomsTitle;
        symptomsDescription.innerHTML = language.ina.symptomsDescription;
        covidSymptoms.innerHTML = language.ina.covidSymptoms;
        fever.innerHTML = language.ina.fever;
        dryCough.innerHTML = language.ina.dryCough;
        tired.innerHTML = language.ina.tired;
        asthma.innerHTML = language.ina.asthma;
        precaution.innerHTML = language.ina.precaution;
        washHands.innerHTML = language.ina.washHands;
        socialDistance.innerHTML = language.ina.socialDistance;
        vaccination.innerHTML = language.ina.vaccination;
        mask.innerHTML = language.ina.mask;
        aboutUs.innerHTML = language.ina.aboutUs;
        aboutUsDescription.innerHTML = language.ina.aboutUsDescription;
        footerTitle.innerHTML = language.ina.footerTitle;
        footerCta.innerHTML = language.ina.footerCta;
        footerHome.innerHTML = language.ina.footerHome;
        footerOnlineVacc.innerHTML = language.ina.footerOnlineVacc;
        footerCheckStatus.innerHTML = language.ina.footerCheckStatus;
        footerLogin.innerHTML = language.ina.footerLogin;
        checkHome.innerHTML = language.ina.checkHome;
    }
}


