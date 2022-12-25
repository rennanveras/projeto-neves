let buttonMobile =  document.querySelector('.nav-bar .menu-mobile');
let itemMenuMobile = document.querySelectorAll('.a');


function openMenu(e){
    if(e.type === 'touchstart') e.preventDefault();
    const nav = document.querySelector('.nav-bar');
    nav.classList.toggle('active');
}
buttonMobile.addEventListener('click',openMenu);
buttonMobile.addEventListener('touchstart',openMenu);

itemMenuMobile.forEach((e)=>{
    e.addEventListener('click',()=>{
        const nav = document.querySelector('.nav-bar');
        nav.classList.toggle('active');
    });
})

function upScreen() {
    if(window.scrollY >= 400){
        document.querySelector('.button-return-top').style.display = 'block';
        document.querySelector('.button-return-top').addEventListener('click', (item)=>{
            window.scrollTo({
                top:0,
                left:0,
                behavior: "smooth"
            }) ;
        })
    }else{
        document.querySelector('.button-return-top').style.display = 'none';
    }
}
window.addEventListener('scroll', upScreen);
