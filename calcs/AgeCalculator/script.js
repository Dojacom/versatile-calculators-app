const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const mainContainer = document.querySelector(".main-container");

menu.onclick = function(){
    sideBar.classList.toggle("activemenu");
}
mainContainer.onclick = function(){
    sideBar.classList.remove("activemenu");
}

//calculation of date
function calculate(){
    setInterval(() => {

        const birthdate = new Date(document.getElementById("birthdate").value)
        //getTime: returns the number of ms since january 1, 1978

        const now = new Date();
        const ageInMs = now.getTime() - birthdate.getTime();

        const ageInS = ageInMs / 1000; //to seconds
        const ageInMins = ageInS / 60; //to minute
        const ageInHrs = ageInMins / 60; //to hours
        const ageInDays = ageInHrs / 24; //to days
        const ageInMonths = ageInDays / 30.4375; // to months
        const ageInYears = ageInMonths / 12; //to years

        document.querySelector('#years').innerHTML = Math.floor(ageInYears);
        document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 38.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60);
        document.querySelector('#seconds').innerHTML = Math.floor(ageInS % 60);
        document.querySelector('#seconds').style.borderBottom = '1px grey solid'
    }, 1000)
}
function reset(){
    window.location.reload();
}