const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const mainContainer = document.querySelector(".main-container");

menu.onclick = function(){
    sideBar.classList.toggle("activemenu");
}
mainContainer.onclick = function(){
    sideBar.classList.remove("activemenu");
}

// temperature calculation

const celciusEl = document.getElementById("celcius")
const farenheitEl = document.getElementById("farenheit")
const kelvinEl = document.getElementById("kelvin")

function calculateTemp(event){
    const currentValue = +event.target.value

    switch (event.target.name) {
        case "celcius":
            kelvinEl.value = (currentValue + 273.32)
            farenheitEl.value = (currentValue * 1.8 + 32)
            break;
    case "farenheit":
        celciusEl.value = ((currentValue -32) / 1.8)
        kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32)
        break;
        case "kelvin":
            celciusEl.vlaue = (currentValue - 273.32)
            farenheitEl.value = ((currentValue - 273.32) * 1.8 + 32)
            break;
        default:
            break;
    }

}