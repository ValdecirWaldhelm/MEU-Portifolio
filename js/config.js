// Função acender lampada Javascript puro

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

          //Função janela modal Projetos

        abrirJanela();
        verificarCliqueFechar();

        function abrirJanela(){
            $('.button').click(function(e){
                // $('.bg').css('display','block');  //mesma funcionalidade de janela modal
                // $('.bg').show();         //mesma funcionalidade de janela modal
                // $('.bg').hide();        //funcionalidade de esconder janela modal
                e.stopPropagation();
                $('.box-project .job-modal1').fadeIn();  

            });

        }

        function verificarCliqueFechar(){
            var el = $('.closeBtn');
            el.click(function(){
                $('.box-project').fadeOut();
            });

        $('.box-project').click(function(e){
                e.stopPropagation();
        }); 
        }

        // Função Slider imagens

            var indiceAtual = 0;
            var indiceMaximo = $('.slider img').length; //funçao size diz quantos tem, e somente para???descobrir, usa-se length
            var delay = 5000;
             initSlider();
             cliqueSlider();

             function initSlider(){
                 for(var i = 0; i < indiceMaximo; i++){
                     if(i == 0){
                        $('.bullets-nav').append('<span style="background-color: black;"></span>');
                     }else{
                        $('.bullets-nav').append('<span></span>');
                     }
                 }
                 $('.slider img').eq(0).fadeIn();
                 setInterval(function(){
                    alternarSlider();
                 }, delay);   

             }

             //Função Clique Slider

             function cliqueSlider(){
                 $('.bullets-nav span').click(function(){
                    $('.slider img').eq(indiceAtual).stop().fadeOut(2000); //quando se trabalha com animações deve-se usar o stop para parar a animação anterior
                    indiceAtual = $(this).index();
                    $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
                    $('.bullets-nav span').css('background-color','white');
                    $(this).css('background-color','black');

                 });
             }

             //Função que Alterna as Imagens no Slider no caso

             function alternarSlider(){
                $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
                indiceAtual+=1;      
                if(indiceAtual == indiceMaximo)
                indiceAtual = 0;
                $('.bullets-nav span').css('background-color','white');
                $('.bullets-nav span').eq(indiceAtual).css('background-color','black');
                $('.slider img').eq(indiceAtual).stop().fadeIn(2000);       
            }

            // Função navegação experiência

            $('.html').click(function(){
                $('.experiencia-container .box1').css('display', 'block');
                return false;
               
            });
            $('.css').click(function(){
                $('.experiencia-container .box2').css('display', 'block');
                return false;
               
            });
            $('.javascript').click(function(){
                $('.experiencia-container .box3').css('display', 'block');
                return false;
               
            });
            $('.bootstrap').click(function(){
                $('.experiencia-container .box4').css('display', 'block');
                return false;
               
            });
            $('.jquery-exp').click(function(){
                $('.experiencia-container .box5').css('display', 'block');
                return false;
               
            });
            $('.php').click(function(){
                $('.experiencia-container .box6').css('display', 'block');
                return false;
               
            });

            
            
            
});


