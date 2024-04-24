const nav = document.getElementById("nav")
const btn = document.getElementById("btn")
const opene = document.getElementById("open")
const closet = document.getElementById("close")

btn.addEventListener("click", function(){
    nav.classList.toggle("active")
    opene.classList.toggle("notShow")
    closet.classList.toggle("notShow")
})

document.addEventListener("click", function(e){
    if(e.target.closest("#nav") || e.target.closest("#btn")) return

    nav.classList.remove("active")
    opene.classList.remove("notShow")
    closet.classList.add("notShow")
})