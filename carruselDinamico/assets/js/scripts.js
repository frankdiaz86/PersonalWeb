$('.carousel').carousel()
var dominio = window.location.protocol + "//" + window.location.host;
$(".clientes").on('click', function(evento){
    evento.preventDefault();
    const cliente = $(this).data('cliente');
    $.ajax({
        data: {cliente:cliente},
        type: "POST",
        url:  dominio + "/carruselDinamico/php/clientes.php",
        cache: false,
        success: function (retorno) {
            const modal = $("#modal1 .modal-content .modal-body");
            modal.empty();
            modal.html(retorno);
            $("#modal1").modal('show');
        },
        error: function(retorno){

        }
    });
});