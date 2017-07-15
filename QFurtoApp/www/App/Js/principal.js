function carregaPrincipal() {
    loadPrincipal();
}

function loadPrincipal(){
    montaViewPrincipal();
}

function montaViewPrincipal() {
    var html = '';

    html += '<div id="mdl-layout__obfuscator" class="mdl-layout__obfuscator" onclick="showSidebar(event);"></div>';

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
    html += '</nav>';

    html += '<div class="main">';
    html += '    <div class="menu">';
    html += '        <ul>';
    html += '            <li><a href="#">Anuncie</a></li>';
    html += '            <li><a href="#">Meus anúncios</a></li>';
    html += '        </ul>';
    html += '    </div>';
    html += '</div>';

    html += '<div id="principal" class="container-fluid">';
    html += '</div>';

    $("#container").empty();
    $("#container").append(html);
}

function showSideBar(event) {
    event.preventDefault();
    
    if (!$("#mdl-layout__obfuscator").hasClass("is-visible")) {
        $("#mdl-layout__obfuscator").addClass("is-visible");
    } else {
        $("#mdl-layout__obfuscator").removeClass("is-visible");
    }
}