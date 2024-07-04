let ham=document.getElementById("ham")
let nav=document.getElementsByClassName("nav")[0]
let navlist_second=document.getElementsByClassName("nav-list-second")[0]
//[0] kina bhani dherai wota firstclass huna sakcha
//tyo ham ma garni kaam
ham.addEventListener('click',()=>{
    nav.classList.toggle("active-nav")
navlist_second.classList.toggle("active-nav-list-second")


})

