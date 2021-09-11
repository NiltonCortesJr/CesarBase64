/** Cifra de cesar
 *  primeiro, armazenar a string
    segundo, transformar a string em numero charCodeAt()
    terceiro, avançar as casas
    quarto, transformar sequencia de numeros em string
    quinto, fazer um document.write no input
 * 
    Base64
 */


//espaço é igual a 32
// declarando as variáveis
var fraseDigitada = document.getElementById("entrada") 
var codifica = document.getElementById("codifica")
var decodifica = document.getElementById("decodifica")
var metodo = document.getElementById("escolherMetodo")
var metodoCesar = document.getElementById("avanco")
var botao = document.getElementById("rodarBotao")
var resultado = document.getElementById("digitavel")

//
var textoDigitado = fraseDigitada.value

metodo.addEventListener("change", function(){
   if (metodo.value == "1"){
      document.getElementById("seCesar").style.display = "block"
   }
   else{
      document.getElementById("seCesar").style.display = "none"
   }
} )

// mudar a mensagem do botao
codifica.addEventListener("click", function(){
   botao.textContent = "Codificar" 
})

decodifica.addEventListener("click", function(){
   botao.textContent = "Decodificar" 
})

// Cofificando cifra de Cesar



var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Cria uma variavel com a letra desejada
var letraDesejada = letras[i];

// Coloca a letra na tela
document.write(letraDesejada + "=");

//imprimindo o código da letra
document.write(letraDesejada.charCodeAt());

