
const calcular = document.getElementById('calcular');


function imc(){
      const nome = document.getElementById('nome').value;
      const altura = document.getElementById('altura').value;
      const peso = document.getElementById('peso').value;  
      const resultado = document.getElementById('resultado');

      if(nome !== '' && altura !== '' && peso !== ''){

            const valorIMC = (peso /(altura * altura)).toFixed(2);

            let classificacao = "";

            if(valorIMC < 18.5){
                  classificacao = 'abaixo do peso.';
            }else if(valorIMC < 25){
                  classificacao = 'voce esta com um peso ideal, Parabens.';
            }else if(valorIMC < 30){
                  classificacao = 'acima do peso.';
            }else if(valorIMC < 35){
                  classificacao = ' Obeso.';
            }else if(valorIMC < 55){
                  classificacao = ' Obeso.';
            }
            resultado.textContent = `${nome} seu imc e ${valorIMC} e voce esta ${classificacao}`;
            
      }else{
            resultado.textContent = 'Preencha todos os campos!!!'
      }
}

calcular.addEventListener('click', imc);