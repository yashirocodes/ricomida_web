// SLIDER
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
      })
//EVENTS

$("#send__email").click(function(){
  $(".alert").hide().show('');
});

  //click

  $("#color_change1").on("dblclick", function(){
    $(this).css("color", "#DC3530");
  });
  $("#color_change2").on("dblclick", function(){
    $(this).css("color", "#DC3580");
  });
  //toggle

  $(document).ready(function(){
    $("h5").click(function(){
      $(".card-text").toggle();
    });
  });

  //modal

const enviarCorreo = document.getElementById('enviarCorreo');
enviarCorreo.addEventListener('click', function (){
  Swal.fire("El Correo fue enviado correctamente")
})