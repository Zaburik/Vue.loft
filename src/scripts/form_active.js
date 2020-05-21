function form_active(){
	const inputs = document.querySelectorAll('.form__inp');
	const textArea = document.querySelector('.form__message');



	textArea.addEventListener("focus", () =>{
		textArea.parentElement.classList.add('form_cursor');
	});
		

	textArea.addEventListener("blur", () =>{
		textArea.parentElement.classList.remove('form_cursor');
	});
		


	for(let i=0; i<=inputs.length; i++){
		inputs[i].addEventListener("focus", () =>{
			inputs[i].parentElement.classList.add('form_cursor');
		})
		inputs[i].addEventListener("blur", () =>{
			inputs[i].parentElement.classList.remove('form_cursor');
		})
	}

}
