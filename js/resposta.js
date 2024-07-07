function calcularPorcentagem(){
    let $valorBase = parseFloat(document.getElementById("valor_base").value);
    let $valorPorcentagem = parseFloat(document.getElementById("porcentagem").value);
    let vect = new Array();
    let elemento = document.getElementsByClassName("restoDaAtiviade_4questao")[0];
    let resultado = 0;

    if(isNaN($valorBase) && isNaN($valorPorcentagem)){
        alert("Digite valores valido");
    }else{
      
       resultado = ($valorBase * $valorPorcentagem)/100;
        document.getElementById("resultado").value = resultado.toFixed(2);
        document.getElementById("valor_base").value = "";
        document.getElementById("porcentagem").value = "";
        numerosImpares();
        vect.push(1);
        vect.push(1);
        vect = sequenciaFibonacci(vect,vect[1]);
        elemento.style.display= "";
        document.getElementById("resultadoSequencia").innerHTML = "A sequencia dos 10 primerios termos é " + vect.join(", ");
        
    }
   
}

function numerosImpares(){
    let soma = 0;
    for(i = 11; i < 30;i++){
        if(i % 2 != 0){
            soma+=i;
        }
    }
    document.getElementById("resultadoSegundaQuestao").innerHTML = "A soma dos números ímpares maiores que 10 e menores que 30 é : " + soma;
}
function sequenciaFibonacci(vetor, primeiroTermo){
  if(vetor.length < 10){
   
     primeiroTermo = vetor[vetor.length - 2] + vetor[vetor.length - 1];
     vetor.push(primeiroTermo)
     sequenciaFibonacci(vetor,primeiroTermo);

  }
  return vetor;
    }
  function numeroPrimo(){

   let  $pegarNumero = parseFloat(document.getElementsByClassName("inputResto")[0].value);
    let primo = true;
    if(isNaN($pegarNumero)){
      alert("Digite um numero ai!!!");
      return;
    }
    if ($pegarNumero <= 1) {
      document.getElementsByClassName("resultadoPrimo")[0].innerHTML = "O número " + $pegarNumero + " não é primo";
      return;
  }
  for (let i = 2; i < $pegarNumero; i++) {
    if ($pegarNumero % i === 0) {
        primo = false;
        break;
    }
}
if (primo) {
  document.getElementsByClassName("resultadoPrimo")[0].innerHTML = "O número " + $pegarNumero + " é primo";
} else {
  document.getElementsByClassName("resultadoPrimo")[0].innerHTML = "O número " + $pegarNumero + " não é primo";
}

  }
    
   





