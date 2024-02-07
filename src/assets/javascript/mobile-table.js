//Construye la tabla genérica

$(function () {
    var table__generic;
  
    function initialize__table() {
      //Primero destruye la tabla si ya existe, asi evitamos errores cuando se refresca la pagina
      $("#generic__mobile").DataTable().destroy();
  
      table__generic = $("#generic__mobile").DataTable({
        order: [[0, "desc"]],
        dom: '<"top form-control border border-0 p-0 "><"border rounded g-0 p-0"rt <"d-flex justify-content-center m-4"p>><"clear">',
        language: {
          infoEmpty: "No records available",
          zeroRecords: "Nothing found",
          paginate: {
            previous: "&lt;",
            next: "&gt;",
          },
        },
        pagingType: "simple_numbers",
        search: {
          return: true,
        },
        //Añadir clases y elementos adicionales a la barra de búsqueda
        initComplete: function () {
          //Botón de busqueda
          var buttonSearch =
            "<button type= 'button' id= 'buscarGenericButton' class= 'btn button-search ms-3' style='--bs-btn-padding-y: .5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1rem;'>Buscar</button>";
          $(".dataTables_filter").append(buttonSearch);
          //Borde de input de búsqueda
          $(".dataTables_filter input")
            .attr("id", "buscarGenericInput")
            .addClass("border border-dark border-opacity-50");
          //Alinear items en la barra de búsqueda
          $(".dataTables_filter").addClass(
            "d-flex justify-content-end align-items-center mb-3"
          );
          //Tamaño de la barra de búsqueda
          $(".dataTables_filter label").addClass("input-group input-group-lg");
        },
      });
    }
  
    initialize__table();
    $("#buscarGenericButton").on("click", function () {
      table__generic.search($("#buscarGenericInput").val()).draw();
    });
  
    $(document).ready(function () {
      $(".data__row").css("cursor", "pointer");
      $(".data__row").hover(function () {
        setTimeout(function () {
          $(this).tooltip();
        }, 5000);
      });
    });
  });
  