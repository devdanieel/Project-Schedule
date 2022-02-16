//Mascaras dos inputs

const mostrar = document.getElementById('schedule');

function toggleform() {

    const sched = document.getElementById('form-sched');
    sched.classList.toggle('Active');

}

mostrar.addEventListener('click',toggleform);

function home(){
    
    alert('ola')


}

function out(){
    
   window.location.href = 'file:///C:/Users/user/Desktop/Project%20Schedule/Login/login.html'

}

// FORMATAÇÃO DO MENU

$(document).ready(function() {
   var botao = $('.register');
   var dropDown = $('.ul-cad');    
  
      botao.on('click', function(event){
          dropDown.stop(true,true).slideToggle();
          event.stopPropagation();
      });
  });

  $(document).ready(function() {
   var botao = $('.relat');
   var dropDown = $('.ul-relat');    
  
      botao.on('click', function(event){
          dropDown.stop(true,true).slideToggle();
          event.stopPropagation();
      });
  });
  
  $(document).ready(function() {
   var botao = $('.serv');
   var dropDown = $('.ul-serv');    
  
      botao.on('click', function(event){
          dropDown.stop(true,true).slideToggle();
          event.stopPropagation();
      });
  });