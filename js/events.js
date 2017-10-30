//define functions here

$(document).ready(function(){

// call functions here


});

function getIt(){
  $('p').on("click" , function(){
    alert ("Hey!");
    return
  })
}
function frameIt(){
  $('document').on("load" , function(){
    $('img').append('<class="tasty" />');
    return
  })
}
function pressIt(){
  $('#typing').on("keydown" , function(key){
  if (key.which === 72)
     alert("G pressed")
  })
}
