var ham =document.querySelector('.nav-image');
var navsection=document.querySelector('.nav-container');
var closeX=document.querySelector('.close');
    
ham.addEventListener('click',()=> {
        navsection.classList.add('nav-active');
});
closeX.addEventListener('click',()=> {
    navsection.classList.remove('nav-active');
});