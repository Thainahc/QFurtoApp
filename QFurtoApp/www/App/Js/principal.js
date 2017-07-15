function carregaPrincipal() {
    loadPrincipal();
}

function loadPrincipal(){
    montaViewPrincipal();
}

function montaViewPrincipal() {
    var html = '';

    html += '<nav class="navbar navbar-default">';

    html += '</nav>'

    html += '<div id="principal" class="container-fluid">';
    html += '</div>';

    $("#container").empty();
    $("#container").append(html);
}