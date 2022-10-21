const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const imputAsunto = document.querySelector("#asunto");
const btnEnviar = document.querySelector(".btn-enviar");

const mensaje = document.querySelector(".mensaje");



function validacion(){
	if(inputName.value != ""){
		if(inputEmail.value != ""){
			if(imputAsunto.value != ""){
				mensaje.classList.remove("hidden");
			}
		}
	}
}

btnEnviar.onclick = validacion;