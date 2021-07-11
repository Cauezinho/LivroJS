function adicao(){
    var x = document.getElementById("X");
    var y = document.getElementById("Y");
    num1 = Number(x.value);
    num2 = Number(y.value);
    var resposta = Number(num1 + num2);
    document.getElementById("resposta").textContent = resposta;
}
var somar = document.getElementById("soma");
somar.addEventListener("click", adicao);