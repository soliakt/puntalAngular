//Construye la tabla genérica

$(function () {
  var aduanas_table;

  function initialize__table() {
    //Primero destruye la tabla si ya existe, asi evitamos errores cuando se refresca la pagina
    $("#aduanas_table").DataTable().destroy();

    aduanas_table = $("#aduanas_table").DataTable({
      order: [[6, "desc"]],
      columnDefs: [
        {
          targets: [6],
          orderData: [6, 7],
        },
      ],
      dom: '<"top form-control border border-0 p-0 "f><"border rounded g-0 p-0"rt <"d-flex justify-content-center m-4"p>><"clear">',
      language: {
        search: "",
        searchPlaceholder: "Buscar",
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
      drawCallback: function () {
        var api = this.api(); // Esto es la api de datatables
        var pageInfo = api.page.info(); // Esto sobre la pagina en la que está en este momento (nº de registros mostrados, paginas, etc)

        var paginationHtml = '<ul class="pagination">';
        paginationHtml +=
          '<li class="page-item ' +
          (pageInfo.page === 0 ? "disabled" : "") +
          '"><a class="page-link border-0" style="cursor: pointer;" onclick="tablePage(' +
          (pageInfo.page - 1) +
          ')">&lt;</a></li>';

        paginationHtml +=
          '<li class="page-item"><span class="page-link border-0">' +
          (pageInfo.page + 1) +
          " de " +
          pageInfo.pages +
          "</span></li>";

        paginationHtml +=
          '<li class="page-item ' +
          (pageInfo.page === pageInfo.pages - 1 ? "disabled" : "") +
          '"><a class="page-link border-0" style="cursor: pointer;" onclick="tablePage(' +
          (pageInfo.page + 1) +
          ')">&gt;</a></li>';

        paginationHtml += "</ul>";

        $(".dataTables_paginate").html(paginationHtml); // Reemplaza el contenido de datatables_paginate por el del paginationHtml
      },
      //Añadir clases y elementos adicionales a la barra de búsqueda
      initComplete: function () {
        //Botón de busqueda
        var buttonSearch =
          "<button type= 'button' id= 'buscarAduanasButton' class= 'btn button-search ms-3' style='--bs-btn-padding-y: .5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1rem;'>Buscar</button>";
        $(".dataTables_filter").append(buttonSearch);
        //Borde de input de búsqueda
        $(".dataTables_filter input")
          .attr("id", "buscarAduanasInput")
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
  $("#buscarAduanasButton").on("click", function () {
    aduanas_table.search($("#buscarAduanasInput").val()).draw(); // Ejecuta la búsqueda y se vuelve a dibujar la tabla usando .draw()
  });

  //Función para cambiar disminuir la opacidad la fila
  function opacity() {
    $(document).on("click", ".default__opacity", function () {
      $(this).css("opacity", 0.3);
      $(this).addClass("restore");
      $(this).removeClass("default__opacity");
      restore__opacity();
    });
  }

  //Función para restaurar la opacidad por defecto de la fila
  function restore__opacity() {
    $(document).on("click", ".restore", function () {
      $(this).css("opacity", 1);
      $(this).addClass("default__opacity");
      $(this).removeClass("restore");
      opacity();
    });
  }

  $(document).ready(function () {
    $(".data__row").css("cursor", "pointer");
    $(".data__row").on("hover", function () {
      setTimeout(function () {
        $(this).tooltip();
      }, 5000);
    });
  });

  opacity();
  restore__opacity();

  //Función para bajar la opacidad al marcar el checkbox
  $(".checkbox__select").on("change", function () {
    if (this.checked) {
      $(".data__row").css("opacity", 0.3);
      $(".data__row").addClass("restore");
      $(".data__row").removeClass("default__opacity");
    } else {
      $(".data__row").css("opacity", 1);
      $(".data__row").addClass("default__opacity");
      $(".data__row").removeClass("restore");
    }
  });
});

function tablePage(pageNumber) {
  var employee = $("#aduanas_table").DataTable();
  employee.page(pageNumber).draw(false); // Con esto se dibuja la tabla y al poner draw(false) no se reinicia el orden o la busqueda
}

$(document).on("click", ".pagination .page-link", function () {
  var pageNumber = $(this).parent().index();
  tablePage(pageNumber);
});
