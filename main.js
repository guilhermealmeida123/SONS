//Declaração/criação da função
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0;contador < ListaDeTeclas.length; contador = contador + 1){
    const teclas = ListaDeTeclas [contador]
    const efeito = teclas.classList[1];
    const idAudio = `#som_${efeito}`;
    teclas.onclick = function(){
        tocaSom(idAudio);
    }
 
 console.log(contador);   
}
