function converterAnosLuz() {
    // Obter o valor do input
    var anosLuz = parseFloat(document.getElementById("anosLuz").value);

    // Verificar se o valor é um número válido
    if (isNaN(anosLuz)) {
        alert("Por favor, insira um valor numérico válido para anos-luz.");
        return;
    }

    // Calcular a distância em metros
    var distanciaMetros = anosLuz * 9.461e15;

    // Exibir o resultado
    document.getElementById("resultadoAnosLuz").innerHTML = "A distância em metros é: " + distanciaMetros.toLocaleString() + " metros.";

 
}

function irParaConversorMoedas() {
    window.location.href = "index.html"
  }