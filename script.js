window.onload = function() {
  var jogar = prompt('Quer jogar?(s/n)');
  if (jogar == 's') {

      var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
      var iterador = 0;
      var maxTentativa = 10
      console.log(numeroSecreto);
      var chute;

      while (chute != numeroSecreto && iterador < maxTentativa) {
          if (iterador != 0) {
              alert('Você já fez ' + iterador + ' tentativas!')
          }

          chute = prompt('Digite um número entre 1 e 1000');

          if (chute == numeroSecreto) {
              alert('Acertou!');
          } else if (chute > numeroSecreto) {
              alert('O número secreto é menor que ' + chute);
          } else if (chute < numeroSecreto) {
              alert('O número secreto é maior que ' + chute);
          }
          
          iterador += 1;

          if (iterador >= maxTentativa) {
            alert('Você passou do limite de ' + maxTentativa + ' tentativas. O número secreto era: ' + numeroSecreto)
          }
      }
  }
}