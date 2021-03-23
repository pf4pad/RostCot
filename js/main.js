 
      const menuToggle = document.querySelector('.toggle');
      const navugation = document.querySelector('.header__list');
     
     
       function toggleMenu(params) {

       

       menuToggle.classList.toggle('active');
       document.body.classList.toggle('lock');
       navugation.classList.toggle('active');

     };


    
  
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

      if (navugation.classList.contains('active')) {
        menuToggle.classList.toggle('active');
       navugation.classList.remove('active');
      document.body.classList.remove('lock');
      };
      

    window.scrollTo({
top: gotoBlockValue,
behavior: "smooth"


    });
    
    e.preventDefault();

    }
  }
};

let selector = document.querySelectorAll('input[type="tel"]'); // маска для телефона
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function(){
	console.log(selector2.value)


	const re = /^\d*(\.\d+)?$/

	console.log(selector2.value.match(/[0-9]/g).length)


	console.log(selector2.value.replace(/[0-9]/g, "0"));
	
});


let validateForms = function(selector, rules, messages, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules, // переменная для правил валидации формы
		messages: messages, // переменная для сообщений при ошибке
		colorWrong: 'grey', // константа цвета сообщений и выделения поля ошибки
		
		submitHandler: function(form) {   // комада на отравку письма с формой
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) { 
						alert('Отправлено'); // выведение окна об удачной отправке
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

			fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
		}
	});
}

validateForms('.form',
// Правила валидации для полей формы
 { name:{required: true, minLength: 2},email: {required: true, email: true}, tel: {required: true}, },
 // сообщения при ошибки в полях форм
 { name: 'Введите имя , мин. 2 символа',email: 'Введите email', tel : 'Введите номер телефона'},


// присвоение класса для поп-ап и цель для яндекс метрики
 '.thanks-popup', 'send goal');
