//DECLARAÇÃO/criação da função tocaSomPom
function tocaSomPom(idElementoAudio){                   
    document.querySelector(idElementoAudio).play();
}
//criando a referêcia comstante listaDeteclas e buscando a classe coletive .tecla
const listaDeTeclas = document.querySelector('.tecla');

//criaçâo da repetição "white" e trocado pela "for"com variavel,condição e incremento
for(let contador = 0; contador < listaDeTeclas.clientHeight; contador++){
    const teclas = listaDeTeclas[contador]; //guarda o cortador da lista
    const efeito = teclas.classList[1]; //chama 0 2 item classe individual do som
    const idAudio = `#som"_${efeito}`; //utiliza a junção template string ${ }
    teclas.onclick = function() {      //função anônima auxiliar para chamar tocaSom
        tocasom(idAudio);         //chamada da função tocaSom com parÂmetro idAudio
    }
    teclas.onkeydown = function(){    
        teclas.classList.add('ativa');
    }

}
