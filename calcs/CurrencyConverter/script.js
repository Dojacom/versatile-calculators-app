const menu = document.querySelector(".menu");
const sideBar = document.querySelector(".sidebar");
const mainContainer = document.querySelector(".main-container");

menu.onclick = function(){
    sideBar.classList.toggle("activemenu");
}
mainContainer.onclick = function(){
    sideBar.classList.remove("activemenu");
}