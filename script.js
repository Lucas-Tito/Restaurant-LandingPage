const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        menuOptions = optionMenu.querySelectorAll(".option"),
        Sbtn_text = optionMenu.querySelector(".Sbtn_text")

selectBtn.addEventListener("click", ()=>{
    optionMenu.classList.toggle("active")
    console.log("sus");
})

