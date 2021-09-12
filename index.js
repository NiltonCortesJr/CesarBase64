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
var resposta = ""



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

function cifraDeCesar (texto, adiciona){
   var adiciona = parseInt(adiciona)
   var armazenaMensagem = texto.toLowerCase()
   armazenaMensagem = armazenaMensagem.split("")
   var mensagemCriptografada = []
   var cesar = []

   for (var i=0; i<armazenaMensagem.length; i++){
      var msg = armazenaMensagem[i].charCodeAt()
      if (msg != 32){
         mensagemCriptografada.push(((msg - 97 + adiciona) % 26) + 97)
      }
      else {
         mensagemCriptografada.push(msg)
      }
   }
   for (var j=0; j<mensagemCriptografada.length; j++){
      cesar.push(String.fromCharCode(mensagemCriptografada[j]))
   }
   return cesar.join("")
}

// Decofificando cifra de Cesar
function decodicaCesar (texto, adiciona){
   var adiciona = parseInt(adiciona)
   var armazenaMensagem = texto.split("")
   armazenaMensagem = armazenaMensagem.toLowerCase()
   var mensagemCriptografada = []
   var cesar = []

   for (var i=0; i<armazenaMensagem.length; i++){
      var msg = armazenaMensagem[i].charCodeAt()
      if (msg != 32){
         if ((msg - 97 + adiciona) >=0 ){
            mensagemCriptografada.push(((msg - 97 - adiciona) % 26) + 97)
         }
         else{
            mensagemCriptografada.push(((msg - 97 - adiciona) + 26) + 97)
         }
      }
      else {
         mensagemCriptografada.push(msg)
      }
   }
   for (var j=0; j<mensagemCriptografada.length; j++){
      cesar.push(String.fromCharCode(mensagemCriptografada[j]))
   }
   return cesar.join("")
}

//Click do botao
document.getElementById("rodarBotao").addEventListener("click", function(event){
   event.preventDefault()
   
   //Validando o checkbox Codificar/Decodificar
   if(metodo.value == 1){
      if(codifica.checked ){
         resposta = cifraDeCesar(fraseDigitada.value, metodoCesar.value)
         resultado.setAttribute("value",resposta)
      }
      else{
         resposta = decodicaCesar(fraseDigitada.value, metodoCesar.value)
         resultado.setAttribute("value",resposta)
      }
   }

   // Codificação Base64
   else if(metodo.value == 2){
      if(codifica.checked ){
         //console.log("ola")
         resposta = window.btoa(fraseDigitada.value)
         resultado.setAttribute("value",resposta)
      }
      else{
         resposta = window.atob(fraseDigitada.value)
         resultado.setAttribute("value",resposta)
      }
   }
})



