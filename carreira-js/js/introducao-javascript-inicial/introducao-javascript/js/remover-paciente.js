var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(){
  var alvoEvento = event.target;
  var paiDoAlvo = event.target.parentNode;

  setTimeout(function (){
    paiDoAlvo.remove(); //saber quem foi clicado

  }, 500); //vai esperar 500ms pra executar a remove

  paiDoAlvo.classList.add('fadeOut');
});
// pacientes.forEach(function(paciente){
//   paciente.addEventListener('dblclick', function(){
//     this.remove();
//   });
// });
