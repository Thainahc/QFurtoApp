function NovoAnuncio() {
    var html = '';

    html += '<div class="row">';
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Nome</label>';
    html += '           <input type="text" class="form-control" id="NomePessoa">';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Tipo do Veículo</label>';
    html += '               <select class="form-control" id="VeiculoTipo">';
    html += '               <option value="0">Selecione</option>';
    html += '               <option value="1">Moto</option>';
    html += '               <option value="2">Carro</option>';
    html += '           </select>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-4">';
    html += '       <div class="form-group">';
    html += '           <label>Modelo</label>';
    html += '           <input type="text" class="form-control" id="Modelo">';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-4">';
    html += '       <div class="form-group">';
    html += '           <label>Placa</label>';
    html += '           <input type="text" class="form-control" id="Placa">';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-4">';
    html += '       <div class="form-group">';
    html += '           <label>Ano</label>';
    html += '           <input type="text" class="form-control" id="Ano">';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Bairro da ocorrência</label>';
    html += '               <select class="form-control" id="Bairro">';
    html += '               <option value="0">Selecione</option>';
    html += '               <option value="1">Centro</option>';
    html += '               <option value="2">Cidade Jardim</option>';
    html += '               <option value="3">Coronel Luciano</option>';
    html += '               <option value="4">Americo Silva</option>';
    html += '               <option value="5">Gomes</option>';
    html += '           </select>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Outras Informações</label>';
    html += '           <textarea class="form-control" id="Descricao" rows="3"></textarea>';
    html += '       </div>'
    html += '   </div>'
    html += '   <div class="col-xs-12">';
    html += '       <div class="form-group">';
    html += '           <label>Telefone de Contato</label>';
    html += '           <input type="text" class="form-control" id="Telefone">';
    html += '       </div>';
    html += '   </div>';
    html += '   <div class="col-xs-6">';
    html += '       <div class="form-group">';
    html += '           <button class="btn btn-primary" onclick="SalvarAnuncio();">Salvar</button>';
    html += '       </div>';
    html += '   </div>';
    html += '   <div class="col-xs-6">';
    html += '       <div class="form-group">';
    html += '           <button class="btn btn-primary pull-right" onclick="carregaPrincipal();">Voltar</button>';
    html += '       </div>';
    html += '   </div>';
    html += '</div>';
    
    $("#principal").empty();
    $("#principal").append(html);
}

function SalvarAnuncio() {
    $.ajax({
        type: "POST",
        url: WS_QFurto() + "/api/anuncio",
        data: JSON.stringify(RetornaDadosAnuncio()),
        cache: false,
        contentType: "application/json;charset=utf-8",
        success: function (retorno) {
            if (retorno.Type == "Warning") {
                sinalizaCamposInvalidos(retorno.FieldsInvalids);
            }
            else {
                carregaPrincipal();
            }
            alert(retorno.Message, retorno.Type);
        },
        error: function (retorno) {
            alert(JSON.parse(retorno.responseText).Message, "Error");
        }
    })
}

function RetornaDadosAnuncio() {
    var dados = {
        AnuncioId: $("#AnuncioId").val(),
        NomePessoa: $("#NomePessoa").val(),
        VeiculoTipo: $("#VeiculoTipo").val(),
        Modelo: $("#Modelo").val(),
        Placa: $("#Placa").val(),
        Ano: $("#Ano").val(),
        Bairro: $("#Bairro").val(),
        Descricao: $("#Descricao").val(),
        Telefone: $("#Telefone").val(),
    };
    return dados;
}