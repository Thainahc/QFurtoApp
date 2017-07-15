function carregaPrincipal() {
    loadPrincipal();
}

function loadPrincipal(){
    montaViewPrincipal();
}

function montaViewPrincipal() {
    var html = '';

    html += '<nav class="navbar navbar-default">';
    html += '   <div class="container-fluid">';
    html += '       <div class="navbar-header">';
    html += '            <button type="button" id="btnSidebar" class="navbar-toggle pull-left" onclick="showSidebar(event);">';
    html += '               <span class="icon-bar"></span>';
    html += '               <span class="icon-bar"></span>';
    html += '               <span class="icon-bar"></span>';
    html += '           </button>';
    html += '       </div>';
    html += '   </div>';

    html += '<div id="principal" class="container-fluid">';
    html += '</div>';

    $("#container").empty();
    $("#container").append(html);
}