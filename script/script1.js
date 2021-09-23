const hamburger = document.getElementById('menu-dropdown');
const navUL = document.getElementById('dropdown-content');
let clicked = false;
const registerHome = document.getElementById('registerHome');
const registerVacc = document.getElementById('registerVacc');
const registerCheck = document.getElementById('registerCheck');
const onlineVaccRegister = document.getElementById('onlineVaccRegister');
const dir = document.getElementById('dir');
const onlineVaccDes = document.getElementById('onlineVaccDes');
const fullName = document.getElementById('fullName');
const vaccineType = document.getElementById('vaccineType');
const facility = document.getElementById('facility');
const activePhone = document.getElementById('activePhone');
const submit = document.getElementById('submit');
const registerInputUsername = document.getElementById('registerInputUsername');
const hospital = document.getElementById('hospital');
const publicHealthCenter = document.getElementById('publicHealthCenter');
const clinic = document.getElementById('clinic');
const private = document.getElementById('private');
const nik = document.getElementById('nik');
const vaksinMerah = document.getElementById('vaksinMerah');
const registerPhone = document.getElementById('registerPhone');

// Sidebar
hamburger.addEventListener('click', () =>{
    clicked = !clicked
    if(clicked){
        navUL.style.display ="block";
    } 
    else{
        navUL.style.display ="none";
    }
});

let language ={
    eng : {
        registerHome : "Home",
        registerVacc : "Online Vaccination",
        registerCheck : "Check Status",
        onlineVaccRegister : "Register Online Vaccination",
        dir : "Home / Online Vaccination",
        onlineVaccDes : "Vaccination does not cost a penny. Vaccination has been proven safe to use.",
        fullName : "Full name",
        vaccineType : " Vaccine Type",
        facility : "Vaccine Facility",
        activePhone : "Active Phone Number",
        submit : "Submit",
        registerInputUsername : "ex : John Applessed",
        hospital : "Hospital",
        publicHealthCenter : "Public Health Center",
        clinic : "Clinic",
        private : "Private",
        nik : "ex : 3242058457123",
        vaksinMerah : "Vaccine Merah Putih",
        registerPhone : "ex : 089234817453"
    },
    ina : {
        registerHome : "Beranda",
        registerVacc : "Vaksinasi Online",
        registerCheck : "Cek Status",
        onlineVaccRegister : "Daftar Vaksinasi Online",
        dir : "Beranda / Vaksinasi Online",
        onlineVaccDes : "Vaksinasi tidak dikenakan biaya sepeser pun. Vaksinasi sudah terbukti aman untuk digunakan.",
        fullName : "Nama Lengkap",
        vaccineType : "Jenis Vaksin",
        facility : "Fasilitas Vaksin",
        activePhone : "Nomor Telepon Aktif",
        submit : "Kirim",
        registerInputUsername : "cth : John Applessed",
        hospital : "Hospital",
        publicHealthCenter : "Puskesmas",
        clinic : "Klinik",
        private : "Pribadi",
        nik : "cth : 3242058457123",
        vaksinMerah : "Vaksin Merah Putih",
        registerPhone : "cth : 089234817453",
    }
}

function getLanguageValue(){
    const languageValue = document.getElementById('language-categories').value;
    console.log(languageValue);
    if(languageValue ==="ENG"){
        registerHome.innerHTML = language.eng.registerHome;
        registerVacc.innerHTML = language.eng.registerVacc;
        registerCheck.innerHTML = language.eng.registerCheck;
        onlineVaccRegister.innerHTML = language.eng.onlineVaccRegister;
        dir.innerHTML = language.eng.dir;
        onlineVaccDes.innerHTML = language.eng.onlineVaccDes;
        vaccineType.innerHTML = language.eng.vaccineType;
        fullName.innerHTML = language.eng.fullName;
        facility.innerHTML = language.eng.facility;
        activePhone.innerHTML = language.eng.activePhone;
        submit.innerHTML = language.eng.submit;
        registerInputUsername.placeholder = language.eng.registerInputUsername;
        hospital.innerHTML = language.eng.hospital;
        publicHealthCenter.innerHTML = language.eng.publicHealthCenter;
        clinic.innerHTML = language.eng.clinic;
        private.innerHTML = language.eng.private;
        nik.placeholder = language.eng.nik;
        vaksinMerah.innerHTML = language.eng.vaksinMerah;
        registerPhone.placeholder = language.eng.registerPhone;

    } else if(languageValue == "INA"){
        registerHome.innerHTML = language.ina.registerHome;
        registerVacc.innerHTML = language.ina.registerVacc;
        registerCheck.innerHTML = language.ina.registerCheck;
        onlineVaccRegister.innerHTML = language.ina.onlineVaccRegister;
        dir.innerHTML = language.ina.dir;
        onlineVaccDes.innerHTML = language.ina.onlineVaccDes;
        fullName.innerHTML = language.ina.fullName;
        vaccineType.innerHTML = language.ina.vaccineType;
        facility.innerHTML = language.ina.facility;
        activePhone.innerHTML = language.ina.activePhone;
        submit.innerHTML = language.ina.submit;
        registerInputUsername.placeholder = language.ina.registerInputUsername;
        hospital.innerHTML = language.ina.hospital;
        publicHealthCenter.innerHTML = language.ina.publicHealthCenter;
        clinic.innerHTML = language.ina.clinic;
        private.innerHTML = language.ina.private;
        nik.placeholder = language.ina.nik;
        vaksinMerah.innerHTML = language.ina.vaksinMerah;
        registerPhone.placeholder = language.ina.registerPhone;
    }
}