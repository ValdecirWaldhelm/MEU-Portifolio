

function acendelampada() {
    document.getElementById("luz").src = arquivo = "imagem/lampada-acesa.png";
}
function apagalampada() { 
    document.getElementById("luz").src = arquivo = "imagem/lampada-apagada.png";
}


	$(function(){

        // menu slide mobile
        
        $('.btn-menu').on('click touchstart', function () {
            $('html').toggleClass('btn-menu-active');
          });




    });