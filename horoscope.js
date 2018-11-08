var signs = ["unavailable; please enter valid data","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo", "Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
var messages = ["", "The scientist and humanitarian of the horoscopes, your futuristic Aquarius energy will " +
"help you to innovate and unite for social justice.","The dreamer and healer of the horoscopes, Pisces energy will aid you to awaken compassion, " +
"imagination and artistry, igniting creativity inside.","The pioneer and trailblazer of the horoscope wheel, Aries energy will help you to initiate, " +
"and fight for your beliefs and fearlessly put yourself out there.", "The persistent provider of the horoscope family, Taurus energy will aid you to seek security, " +
"enjoy the pleasures of life and get the job done.", "One of the vibrant horoscope signs, Gemini energy will helps you communicate, and " +
"collaborate to make the most of this year.","The nurturer of the horoscopes, the Cancer energy will help you connect with your " +
"feelings, as well as create permanent change and reconnect with the past.","The most dramatic and regal of the horoscopes, Leo energy will help you to shine, and be " +
"expressive of your feelings this year.","Known as the masterful helper, your sign will teach you to serve and " +
"help, as well as prioritize self-love, and your feelings towards others.", "The balanced member of the horoscopes, Libra energy will inspire us to seek peace," +
" harmony and cooperation—and to do it with style and grace.","The most intense and focused of the horoscope signs, Scorpio energy will help you " +
"dive deep, and use your superpowers to form lasting bonds.","As the incredibly adventurous Sagittarius, your energy will inspire you to dream " +
"big, and take risks.","The planner of the horoscopes, you can use your skills to teach others the" +
" power of structure and long-term goals."];
var years = ["Rat", "Ox", "Tiger", "Hare","Dragon", "Snake", "Horse", "Ram", "Monkey", "Rooster", "Dog", "Pig"]

var images = ["","image/aquarius.png", "image/pisces.png", "image/aries.png", "image/taurus.png", "image/gemini.png",
    "image/cancer.png", "image/leo.png", "image/virgo.png","image/libra.png", "image/scorpio.png",
    "image/sagittarius.png", "image/capricorn.png"];

function horoscope() {
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthDay").value;
    var birthmonth = document.getElementById("birthMonth").value;
    var year = document.getElementById("year").value;
    var sign = determineHoroscope(birthday, birthmonth);
    var chinese = determineYear(year);
    document.getElementById("sign").innerHTML = "Hi " + name + ", your sign is " + signs[sign] + ". " + messages[sign];
    if(sign<=12){
        document.getElementById("image").src=images[sign];
        document.getElementById("chinese").innerHTML = "You are also year of the " + years[chinese] + "!";
    }
}

function determineHoroscope(birthday, birthmonth) {
    if (birthday >= 20 && birthmonth == 1 || birthday <= 18 && birthmonth == 2) {
        return 1; //Aquarius
    } else if (birthday >= 19 && birthmonth == 2 && birthday < 30 && birthmonth == 2 || birthday <= 20 && birthmonth == 3) {
        return 2; //Pisces
    } else if (birthday >= 21 && birthmonth == 3 || birthday <= 19 && birthmonth == 4) {
        return 3; //Aries
    } else if (birthday >= 20 && birthmonth == 4 && birthday < 31 && birthmonth == 4 || birthday <= 20 && birthmonth == 5) {
        return 4; //Taurus
    } else if (birthday >= 21 && birthmonth == 5 || birthday <= 20 && birthmonth == 6) {
        return 5; //Gemini
    } else if (birthday >= 21 && birthmonth == 6 && birthday < 31 && birthmonth == 6|| birthday <= 22 && birthmonth == 7) {
        return 6; //Cancer
    } else if (birthday >= 23 && birthmonth == 7 || birthday <= 22 && birthmonth == 8) {
        return 7; //Leo
    } else if (birthday >= 23 && birthmonth == 8 || birthday <= 22 && birthmonth == 9) {
        return 8; //Virgo
    } else if (birthday >= 23 && birthmonth == 9 && birthday < 31 && birthmonth == 9|| birthday <= 22 && birthmonth == 10) {
        return 9; //Libra
    } else if (birthday >= 23 && birthmonth == 10 || birthday <= 21 && birthmonth == 11) {
        return 10; //Scorpio
    } else if (birthday >= 22 && birthmonth == 11 && birthday < 31 && birthmonth ==11 || birthday <= 21 && birthmonth == 12) {
        return 11; //Sagittarius
    } else if (birthday >= 22 && birthmonth == 12 || birthday <= 19 && birthmonth == 1) {
        return 12; //Capricorn
    } else{
        return 0;
    }
}
function determineYear(year) {
    if (year == 1900 || (year - 1900) % 12 == 0) {
        return 0;
    } else if (year == 1901 || (year - 1901) % 12 == 0) {
        return 1;
    } else if (year == 1902 || (year - 1902) % 12 == 0) {
        return 2;
    } else if (year == 1903 || (year - 1903) % 12 == 0) {
        return 3;
    } else if (year == 1904 || (year - 1904) % 12 == 0) {
        return 4;
    } else if (year == 1905 || (year - 1905) % 12 == 0) {
        return 5;
    } else if (year == 1906 || (year - 1906) % 12 == 0) {
        return 6;
    } else if (year == 1907 || (year - 1907) % 12 == 0) {
        return 7;
    } else if (year == 1908 || (year - 1908) % 12 == 0) {
        return 8;
    } else if (year == 1909 || (year - 1909) % 12 == 0) {
        return 9;
    } else if (year == 1910 || (year - 1910) % 12 == 0) {
        return 10;
    } else if (year == 1911 || (year - 1911) % 12 == 0) {
        return 11;
    }
}
