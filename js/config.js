

function acendelampada() {
    document.getElementById("luz").src = arquivo = "imagem/lampada-acesa.png";
}
function apagalampada() { 
    document.getElementById("luz").src = arquivo = "imagem/lampada-apagada.png";
}

var iconMenu = document.querySelectorAll('.icon-menu');

	iconMenu[0].addEventListener('click',()=>{
			//Efeito de opacidade.
			/*
			let menu = document.getElementById('menu');
			if(menu.classList.contains('hide')){
				menu.classList.add('show');
				menu.classList.remove('hide');
			}else{
				menu.classList.add('hide');
				menu.classList.remove('show');
			}
			*/

			//Efeito toggle
			let menu = document.getElementById('menu');
			if(menu.classList.contains('hide')){
				menu.classList.add('show');
				menu.classList.remove('hide');
			}else{
				menu.classList.add('hide');
				menu.classList.remove('show');
			}


	});