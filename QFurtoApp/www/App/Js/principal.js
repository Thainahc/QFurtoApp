function carregaPrincipal() {
    loadPrincipal();
}

function loadPrincipal() {
    montaViewPrincipal();
}

function montaViewPrincipal() {
    var html = '';

    html += '<div id="mdl-layout__obfuscator" class="mdl-layout__obfuscator" onclick="NovoAnuncio();"></div>';

    html += '<nav class="navbar navbar-default">';
    html += '   <div class="container-fluid">';
    html += '       <div class="navbar-header">';
    //html += '            <button type="button" id="btnSidebar" class="navbar-toggle pull-left" onclick="NovoAnuncio();">';
    html += '           <button class="btn" onclick="NovoAnuncio();">Anunciar Furto</button>';
    html += '               <span class="icon-bar"></span>';
    html += '               <span class="icon-bar"></span>';
    html += '               <span class="icon-bar"></span>';
    html += '           </button>';
    html += '       </div>';
    html += '   </div>';
    html += '</nav>';

    html += '<div id="principal" class="container-fluid">';
    html += '</div>';

    $("#container").empty();
    $("#container").append(html);

    ExibeAnuncios();
}

function ExibeAnuncios() {
    $.ajax({
        type: "GET",
        url: WS_QFurto() + "/api/ListaAnuncio",
        cache: false,
        contentType: "application/json;charset=utf-8",
        success: function (retorno) {
            MontaViewAnuncios(retorno.ListaAnuncios);
        },
        error: function (retorno) {
            alert(JSON.parse(retorno.responseText).Message, "Error");
        }
    })
}

function MontaViewAnuncios(listaAnuncios) {
    var html = '';


    html += '<div class="row">';
    //html += '   <div class="borda-anuncio">';
    html += '       <div class="form-group">';
    html += '           <div class="col-xs-12">';
    html += '               <table class="table table-hover" id="tableAnuncio">';
    html += '                   <thead>'
    html += '                       <tr>'
    html += '                           <th class="col-xs-6">Nome do Anunciante</th>'
    html += '                           <th class="col-xs-6">Modelo Veículo</th>'
    html += '                       </tr>'
    html += '                   </thead>'
    html += '                   <tbody>'
    for (var i = 0; i < listaAnuncios.length ; i++) {
        html += '                       <tr>';
        html += '                           <td class="col-xs-6">' + listaAnuncios[i].NomePessoa + '</td>';
        html += '                           <td hidden="hidden">' + listaAnuncios[i].VeiculoTipo + '</td>'
        html += '                           <td class="col-xs-5">' + listaAnuncios[i].Modelo + '</td>';
        html += '                           <td hidden="hidden">' + listaAnuncios[i].Placa + '</td>'
        html += '                           <td hidden="hidden">' + listaAnuncios[i].Ano + '</td>'
        html += '                           <td hidden="hidden">' + listaAnuncios[i].Bairro + '</td>'
        html += '                           <td hidden="hidden">' + listaAnuncios[i].Descricao + '</td>'
        html += '                           <td hidden="hidden">' + listaAnuncios[i].Telefone + '</td>'
        html += '                           <td hidden="hidden">' + listaAnuncios[i].AnuncioId + '</td>'
        html += '                           <td hidden="hidden">' + listaAnuncios[i].DataHora + '</td>'
        html += '                           <td hidden="hidden">' + listaAnuncios[i].VeiculoFoto + '</td>'
        html += '                               <td class="col-xs-1 text-center">';
        html += '                                   <a href="#" class="btn" data-toggle="modal" onclick="visualizaAnuncio($(this));">';
        html += '                                       <span>Ver</span>'
        html += '                                   </a>';
        html += '                               </td>';
        html += '                       </tr>';
    }
    html += '                   </tbody>'
    html += '               </table>';
    html += '           </div>';
    html += '       </div>';
    html += '</div>';

    $("#principal").append(html);
}

function visualizaAnuncio(selecionado) {
    montaViewDetalhesAnuncio(selecionado);
}

function montaViewDetalhesAnuncio(selecionado) {
    var html = '';

    html += '<div class="row">';
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Nome</label>';
    html += '           <input type="text" class="form-control" id="NomePessoa" readonly>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Tipo do Veículo</label>';
    html += '               <select class="form-control" id="VeiculoTipo" disabled>';
    html += '               <option value="0">Selecione</option>';
    html += '               <option value="1">Moto</option>';
    html += '               <option value="2">Carro</option>';
    html += '           </select>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-4">';
    html += '       <div class="form-group">';
    html += '           <label>Modelo</label>';
    html += '           <input type="text" class="form-control" id="Modelo" readonly>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-4">';
    html += '       <div class="form-group">';
    html += '           <label>Placa</label>';
    html += '           <input type="text" class="form-control" id="Placa" readonly>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-4">';
    html += '       <div class="form-group">';
    html += '           <label>Ano</label>';
    html += '           <input type="text" class="form-control" id="Ano" readonly>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Bairro da ocorrência</label>';
    html += '               <select class="form-control" id="Bairro" disabled>';
    html += '               <option value="0">Selecione</option>';
    html += '               <option value="1">Centro</option>';
    html += '               <option value="2">Cidade Jardim</option>';
    html += '               <option value="3">Coronel Luciano</option>';
    html += '               <option value="4">Americo Silva</option>';
    html += '               <option value="5">Gomes</option>';
    html += '               <option value="6">Buritis</option>';
    html += '           </select>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Outras Informações</label>';
    html += '           <textarea class="form-control" id="Descricao" rows="3" readonly></textarea>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Telefone de Contato</label>';
    html += '           <input type="text" class="form-control" id="Telefone" readonly>';
    html += '       </div>';
    html += '   </div>';
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <button class="btn btn-primary pull-right" onclick="carregaPrincipal();">Voltar</button>';
    html += '       </div>';
    html += '   </div>';
    html += '</div>';

    $("#principal").empty();
    $("#principal").append(html);

    preencheViewDetalhesAnuncio(selecionado,html);
}

function preencheViewDetalhesAnuncio(selecionado,html) {
    var row = selecionado.closest("tr");

    $("#NomePessoa").val(row.find("td:eq(0)").text());
    $("#VeiculoTipo").val(row.find("td:eq(1)").text());
    $("#Modelo").val(row.find("td:eq(2)").text());
    $("#Placa").val(row.find("td:eq(3)").text());
    $("#Ano").val(row.find("td:eq(4)").text());
    $("#Bairro").val(row.find("td:eq(5)").text());
    $("#Descricao").val(row.find("td:eq(6)").text());
    $("#Telefone").val(row.find("td:eq(7)").text());
}

function showSideBar(event) {
    event.preventDefault();

    if (!$("#mdl-layout__obfuscator").hasClass("is-visible")) {
        $("#mdl-layout__obfuscator").addClass("is-visible");
    } else {
        $("#mdl-layout__obfuscator").removeClass("is-visible");
    }
}