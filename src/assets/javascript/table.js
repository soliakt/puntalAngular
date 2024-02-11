//Construye la tabla genérica

$(function () {
  var table__generic;

  function initialize__table() {
    //Primero destruye la tabla si ya existe, asi evitamos errores cuando se refresca la pagina
    $("#generic").DataTable().destroy();

    table__generic = $("#generic").DataTable({
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
        var api = this.api();
        var pageInfo = api.page.info();

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

        $(".dataTables_paginate").html(paginationHtml);
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

        //Añadir la pestaña de seleccionar todo
        var selectAll =
          "<div class='table__select d-flex justify-content-end'><div class='table__select__items d-flex justify-content-evenly align-items-center border border-#dee2e6 p-2 rounded-top border-bottom-0 '><input type='checkbox' class='checkbox__select p-1' style='width: 18px' ><span class='p-1'>Marcar todos como leído</span></div></div>";
        $(".form-control:first").after(selectAll);
      },
    });
  }

  initialize__table();
  $("#buscarGenericButton").on("click", function () {
    table__generic.search($("#buscarGenericInput").val()).draw();
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
    $(".data__row").hover(function () {
      setTimeout(function () {
        $(this).tooltip();
      }, 5000);
    });
  });

  opacity();
  restore__opacity();

  //Función para bajar la opacidad al marcar el checkbox
  $(".checkbox__select").change(function () {
    $("tr td").css("opacity", this.checked ? 0.3 : 1);
  });
});

function tablePage(pageNumber) {
  var employee = $("#generic").DataTable();
  employee.page(pageNumber).draw(false);
}

$(document).on("click", ".pagination .page-link", function () {
  var pageNumber = $(this).parent().index();
  tablePage(pageNumber);
});
