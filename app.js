window.addEventListener('load', () =>{
    const params= (new URL(document.location)).searchParams;
    const email = params.get('email');

    document.getElementById('result-name').innerHTML="email";
})




function noscroll(){
    window.scrollTo(0,0);
}
 window.addEventListener("scroll",noscroll);

 fetch("./login.json")
 
 const showNavbar = (toggleId, navId, bodyId, headerId) => {
     const toggle = document.getElementById(toggleId),
     nav = document.getElementById(navId),
     bodypd = document.getElementById(bodyId),
     headerpd = document.getElementById(headerId)
     if(toggle && nav && bodypd && headerpd){
         toggle.addEventListener('click', ()=>{
             nav.classList.toggle('show')
             toggle.classList.toggle('bx-x')
             bodypd.classList.toggle('body-pd')
             headerpd.classList.toggle('body-pd')
         })
     }
 }
 showNavbar('header-toggle','nav-bar','body-pd','header')
 const linkColor = document.querySelectorAll('.nav__link')

 function colorLink(){
     if(linkColor){
         linkColor.forEach(linkColor => l.classList.remove('active'))
         this.classList.add('active')
     }
 }
 linkColor.forEach(linkColor => l.addEventListener('click', colorLink))