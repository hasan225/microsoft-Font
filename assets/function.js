let toTop = document.querySelector(".toTop")

window.addEventListener('scroll', () => {
    window.scrollY >= 300 ? toTop.style.cssText = "display:flex; transition:.8s" : toTop.style.display ="none";
    toTop.style.transition ='.5s'

})


let toggler = document.querySelector(".toggle")

toggler.addEventListener("click",()=>{
    let leftlistItems = document.querySelector(".leftlistItems")
    leftlistItems.classList.toggle("toggleActive")
})