let jogosAlugados = 0;

function contarJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id){
   let botaoAlugado = document.getElementById(`game-${id}`);
   let imagem = botaoAlugado.querySelector('.dashboard__item__img');
   let botao = botaoAlugado.querySelector('.dashboard__item__button');
   let nomeDoJogo = botaoAlugado.querySelector('.dashboard__item__name');

  if(imagem.classList.contains('dashboard__item__img--rented')) {
     if(confirm(`Deseja devolver o jogo ${nomeDoJogo.textContent} ?`)){
      imagem.classList.remove('dashboard__item__img--rented');
     botao.classList.remove('dashboard__item__button--return');
     botao.textContent = 'Alugar';
     jogosAlugados--;
               }
    } else {
     imagem.classList.add('dashboard__item__img--rented');
     botao.classList.add('dashboard__item__button--return');
     botao.textContent = 'Devolver';
     jogosAlugados++;    
     
    }
    contarJogosAlugados();

  }   

  document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarJogosAlugados();
});