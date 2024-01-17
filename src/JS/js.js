
function converter() {
    
    var valor = parseFloat(document.getElementById("valor").value);
    var tipoConversao = document.getElementById("tipoConversao").value;

    // Definir a taxa de câmbio
    var taxaDeCambio = 4.89;
    var taxaBct = 177666.43;
    var simboloMoeda = "";

    // Lógica de conversão
    var resultado = 0;
    if (tipoConversao === "usdToBrl") {
        resultado = valor * taxaDeCambio;
        simboloMoeda = "R$ ";
    } 
    else if (tipoConversao === "brlToUsd") {
        resultado =  valor / taxaDeCambio;
        simboloMoeda = "USD ";
    }
    else if (tipoConversao==="brlToBtc") {
        resultado = valor / taxaBct;
        simboloMoeda = "BTC ";

    }

    // Exibir resultado
    if (tipoConversao === "brlToBct") {
        document.getElementById("resultado").innerHTML = "Resultado: " + simboloMoeda + resultado;
    } else {
        // Exibir resultado limitando para outras conversões
        document.getElementById("resultado").innerHTML = "Resultado: " + simboloMoeda + resultado.toFixed(2);
    }
}
 // Verificar se o nome está armazenado na sessionStorage
 var nomeArmazenado = sessionStorage.getItem("nomeUsuario");
 if (nomeArmazenado) {
     document.getElementById("nomeUsuario").style.display = "none";
     document.getElementById("conteudoPrincipal").style.display = "block";
     document.getElementById("mensagemBemVindo").innerHTML = "Bem-vindo, " + nomeArmazenado + "!";
 }

 function capturarNome() {
     var nome = document.getElementById("nome").value;
     if (nome.trim() !== "") {
         // Armazenar o nome na sessionStorage
         sessionStorage.setItem("nomeUsuario", nome);

         document.getElementById("nomeUsuario").style.display = "none";
         document.getElementById("conteudoPrincipal").style.display = "block";
         document.getElementById("mensagemBemVindo").innerHTML = "Bem-vindo, " + nome + "!";
     } else {
         alert("Por favor, digite seu nome.");
     }
 }

 function irParaConversorAnosLuz() {
     window.location.href = "conversorluz.html";
 }

