const hamburguesa = document.getElementById('Hamburguesa');

const navs = document.getElementsByClassName('navs')[0];

const navLinki = document.getElementsByClassName('nav-link')[0];
const navLinkr = document.getElementsByClassName('nav-link')[1];
const navLinkc = document.getElementsByClassName('nav-link')[2];
const navLinkd = document.getElementsByClassName('nav-link')[3];
const navLinkh = document.getElementsByClassName('nav-link')[4];



let x = window.matchMedia("(max-width: 960px)") 

if(x.matches){
    navs.style.display = 'none';
} else{
    navs.style.display = 'flex';
    hamburguesa.style.display = 'none';
}  



 //
window.addEventListener('resize', function(){
    if(!x.matches){
        navs.style.display = 'flex';
        hamburguesa.style.display = 'none';
    }else{
        navs.style.display = 'none';
        hamburguesa.style.display = 'flex';
    }
    
})
//
hamburguesa.addEventListener('click', function() {
    if(x.matches){
        
        if (navs.style.display === "flex") {
            navs.style.display = "none";
            
        } else {
            navs.style.display = "flex";
            
        }
    }
});
//click mobile menu nav

    navLinki.addEventListener('click', function(){
        if(x.matches)
        navs.style.display = 'none';
    })
    navLinkr.addEventListener('click', function(){
        if(x.matches)
        navs.style.display = 'none';
    })
    navLinkc.addEventListener('click', function(){
        if(x.matches)
        navs.style.display = 'none';
    }) 
    navLinkd.addEventListener('click', function(){
        if(x.matches)
        navs.style.display = 'none';
    }) 
    navLinkh.addEventListener('click', function(){
        if(x.matches)
        navs.style.display = 'none';
    }) 




