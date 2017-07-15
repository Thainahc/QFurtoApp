function onLoad() {
    parseToCurrency();
    parseToDecimal();
    parseToDecimalThree();
    parseToPercent();
}

function parseToCurrency() {
    $(".currency").priceFormat({
        prefix: "R$ ",
        centsSeparator: ",",
        thousandsSeparator: "."
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
