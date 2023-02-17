screen.orientation.lock('landscape')

//--+This chunk of code is responsible for dynamically add event listeners for each menu+--
class OptionMenu{
    constructor(menu, btn){
        this.menu = menu
        this.btn = btn
    }
}

const optionMenu = document.querySelectorAll(".select-menu"),
        selectBtn = document.querySelectorAll(".select-btn")

const OptionMenus = new Array();
for(i=0; i<optionMenu.length; i++)
    OptionMenus.push(new OptionMenu(optionMenu[i], selectBtn[i]))

OptionMenus.forEach((item) =>{
    item.btn.addEventListener("click", ()=>{
        item.menu.classList.toggle("active")
        console.log("sus");
    })
})

//---------------------++--------------------------

let contact_btn = document.querySelector(".contact_btn")

contact_btn.addEventListener("click", ()=>{
    let popup = document.querySelector(".popup")
    popup.classList.toggle("active")
})

