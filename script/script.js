function calcularSaque(valorSaque) {
  event.preventDefault(); //Previne da página recarregar ao clicar no botão

  //Limpa os campos
  document.querySelector("#resultado").innerHTML = "";
  document.querySelector("#erro").innerHTML = "";

  const notas = [100, 50, 10, 5, 1]; //Notas definidas no desafio
  let valor = parseInt(valorSaque); //Valor a ser sacado

  //Caso valor inserido seja menor que 1, uma mensagem de erro aparecerá
  if (valor < 1 || !valor) {
    document.querySelector("#erro").innerHTML = "Favor Inserir um valor válido para saque!";
  }

  //Para cada nota, subtrai do valor o máximo de vezes possível
  for (i = 0; i < notas.length; i++) {
    if (valor >= notas[i]) {
      qtdNotas = parseInt(valor / notas[i]);
      pluralize = qtdNotas > 1 ? "s" : "";
      message = `${qtdNotas} nota${pluralize} de R$${notas[i]}\n`;
      document.querySelector("#resultado").innerHTML += message;
      valor = valor % notas[i];
    }
  }
}
