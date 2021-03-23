//  https://github.com/horprogs/Just-validate
// в mail.php  указать сайт с которого приходит письмо и
// и адрес, куда будут приходить письма -- Your best site --

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

