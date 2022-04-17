let burger = document.querySelector(".hamburger");
let close = document.querySelector(".burger-close")
let open = document.querySelector(".burger")
let dropdown = document.querySelector(".dropdown")
let dropdownHead = document.querySelectorAll(".dropdown-head")
let arrow = document.querySelectorAll("arrow-img")



if(window.innerWidth <800){
    burger.addEventListener("click",()=>{
        open.classList.toggle("burger-passive")
        close.classList.toggle("burger-close-active")
        dropdown.classList.toggle("dropdown-open")
    })
    
    dropdownHead.forEach((eachDropdownHead)=>{
        eachDropdownHead.addEventListener("click", (each)=>{
            console.log("am here")
            if(document.querySelector(".drop-content-active")){
                if(document.querySelector(".drop-content-active") !== each.target.parentElement.querySelector(".drop-content-active")){
                    document.querySelector(".arrow-img-active").classList.remove("arrow-img-active")
                    document.querySelector(".drop-content-active").classList.remove("drop-content-active")
                    each.target.querySelector(".arrow-img").classList.toggle("arrow-img-active")
                    each.target.parentElement.querySelector(".drop-content").classList.toggle("drop-content-active")
                }else{
                    each.target.querySelector(".arrow-img").classList.toggle("arrow-img-active")
                    each.target.parentElement.querySelector(".drop-content").classList.toggle("drop-content-active")
                }
            }
            else{
                each.target.querySelector(".arrow-img").classList.toggle("arrow-img-active")
                each.target.parentElement.querySelector(".drop-content").classList.toggle("drop-content-active")
            }
        })
    })

}

dropdownHead.forEach((eachDropdownHead)=>{
    eachDropdownHead.addEventListener("mouseover", (each)=>{
        if(document.querySelector(".desktop-drop-content")){
            if(document.querySelector(".desktop-drop-content") !== each.target.parentElement.querySelector(".desktop-drop-content")){
                document.querySelector(".desktop-arrow-img-active").classList.remove("desktop-arrow-img-active")
                document.querySelector(".desktop-drop-content").classList.remove("desktop-drop-content")
                each.target.querySelector(".desktop-arrow-img").classList.toggle("desktop-arrow-img-active")
                each.target.parentElement.querySelector(".drop-content").classList.toggle("desktop-drop-content")
            }else{
                each.target.querySelector(".desktop-arrow-img").classList.toggle("desktop-arrow-img-active")
                each.target.parentElement.querySelector(".drop-content").classList.toggle("desktop-drop-content")
            }
        }
        else{
            each.target.querySelector(".desktop-arrow-img").classList.toggle("desktop-arrow-img-active")
            each.target.parentElement.querySelector(".drop-content").classList.toggle("desktop-drop-content")
        }
    })
})