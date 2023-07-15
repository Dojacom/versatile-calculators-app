const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const mainContainer = document.querySelector(".main-container");

menu.onclick = function(){
    sideBar.classList.toggle("activemenu");
}
mainContainer.onclick = function(){
    sideBar.classList.remove("activemenu");
}

//Body mass index calculations


const btnEl = document.getElementById("btn")
const bmiEl = document.getElementById("bmi-result")
const resultEl = document.getElementById("result")

function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100
    const weightValue = document.getElementById("weight").value

    const bmiValue = weightValue / (heightValue * heightValue)
     
    bmiEl.value = bmiValue;

    if(bmiValue < 18.5){
        resultEl.innerText = "Under Weight."
    }else if(bmiValue >= 18.5 && bmiValue <= 24.5 ){
        resultEl.innerText = "Normal Weight."
    }else if(bmiValue >= 24.5 && bmiValue <= 29.5){
        resultEl.innerText = "Over weight."
    }else if(bmiValue >= 30){
        resultEl.innerText ="Obesity."
    }

}


btnEl.addEventListener("click", calculateBMI)
