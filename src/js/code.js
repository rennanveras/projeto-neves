let buttonNavBar1 = document.querySelector('.link-navbar1');
let buttonNavBar2 = document.querySelector('.link-navbar2');
let buttonNavBar3 = document.querySelector('.link-navbar3');
let buttonNavBar4 = document.querySelector('.link-navbar4');
let buttonNavBar5 = document.querySelector('.link-navbar5');
let buttonNavBar6 = document.querySelector('.link-navbar6');


buttonNavBar1.addEventListener('click',(item)=>{
    item.preventDefault();
    window.scrollTo({
       top:100,
       left:0,
       behavior: "smooth"
   }) ;
});
buttonNavBar2.addEventListener('click',(item)=>{
     item.preventDefault();
     window.scrollTo({
        top:400,
        left:0,
        behavior: "smooth"
    }) ;
});
buttonNavBar3.addEventListener('click',(item)=>{
    item.preventDefault();
    window.scrollTo({
       top:900,
       left:0,
       behavior: "smooth"
   }) ;
});

buttonNavBar4.addEventListener('click',(item)=>{
    item.preventDefault();
    window.scrollTo({
       top:1762,
       left:0,
       behavior: "smooth"
   }) ;
});
buttonNavBar5.addEventListener('click',(item)=>{
    item.preventDefault();
    window.scrollTo({
       top:2636,
       left:0,
       behavior: "smooth"
   }) ;
});
buttonNavBar6.addEventListener('click',(item)=>{
    item.preventDefault();
    window.scrollTo({
       top:3454,
       left:0,
       behavior: "smooth"
   }) ;
});


function upScreen() {
    if(window.scrollY >= 500){
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
