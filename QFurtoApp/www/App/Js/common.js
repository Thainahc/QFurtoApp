function onLoad() {
    parseToDecimal();
    parseToDecimalThree();
    parseToPercent();

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}

function parseToDecimal() {
    $(".decimal").priceFormat({
        prefix: "",
        centsSeparator: ",",
        thousandsSeparator: "."
    });
}

function parseToDecimalThree() {
    $(".decimalThree").priceFormat({
        prefix: "",
        centsSeparator: ",",
        thousandsSeparator: ".",
        centsLimit: 3
    });
}

function parseToPercent() {
    $(".percent").priceFormat({
        prefix: "",
        suffix: "%",
        centsSeparator: ",",
        thousandsSeparator: "."
    });
}

function WS_QFurto() {
    //var servidor = "http://localhost:2284";
    var servidor = "http://192.168.0.175:9090";
    return servidor;
}

function sinalizaCamposInvalidos(inputs) {
    for (var i = 0; i < inputs.length; i++) {
        var input = $("#" + inputs[i]);
        if (input.hasClass("selectized")) {
            var selectize = $("#" + input.attr("id") + "-selectized");
            var content = selectize.closest(".selectize-input");
            var select = input;
            content.addClass("input-validation-error");
            select.change(function () {
                content.removeClass("input-validation-error");
                select.off("change");
            });
        }
        else {
            input.addClass("input-validation-error");
            input.change(function () {
                $(this).removeClass("input-validation-error");
                $(this).off("change");
            });
        }
    }
}
