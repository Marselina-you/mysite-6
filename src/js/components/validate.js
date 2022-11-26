let styles = getComputedStyle(document.documentElement);
let colorValue = styles.getPropertyValue('--color-accent');


let selector = document.querySelector('input[type="tel"]');

let im = new Inputmask("+7 (999) 999-9999");
im.mask(selector);



let validateForms = function(selector, rules, messages, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
    messages: messages,
    colorWrong: colorValue,
		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

			//fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
		}
	});
}

validateForms('.callback-form',
{ name: {required: true}, phone: {required: true} },
{ name: {required: 'Вы должны ввести имя'}, phone: {required: 'Вы должны ввести телефон'}},
'.thanks-popup');
