 
   
     function toggleMenu(params) {

       const menuToggle = document.querySelector('.toggle');
       const navugation = document.querySelector('.header__list');

       menuToggle.classList.toggle('active');
       document.body.classList.toggle('lock');
       navugation.classList.toggle('active');

     };


     $(function(){
   $('.slider').slick({
     dots: false,
       infinite: true,
      speed: 1500,
      autoplay: true,
       arrows: false    
  });
 });
  
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const  menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
const gotoBlock = document.querySelector(menuLink.dataset.goto);
const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        if(menuToggle.classList('active')){
          menuToggle.classList.remove('active');
       document.body.classList.remove('lock');
       navugation.classList.remove('active');
        }

    window.scrollTo({
top: gotoBlockValue,
behavior: "smooth"


    });
    e.preventDefault();

    }
  }
}





