// Taxas de conversão fixas
const taxas = {
    usd: 5.50,
    eur: 6.30,
    gbp: 7.20
};

const valorInput = document.getElementById("valor");
const moedaSelect = document.getElementById("moeda");
const botao = document.getElementById("converter");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {

    const valor = Number(valorInput.value);

    if (valor <= 0 || isNaN(valor)) {
        resultado.textContent = "Digite um valor válido.";
        return;
    }

    const moeda = moedaSelect.value;
    const convertido = valor / taxas[moeda];

    let simbolo = "";

    switch (moeda) {
        case "usd":
            simbolo = "US$";
            break;

        case "eur":
            simbolo = "€";
            break;

        case "gbp":
            simbolo = "£";
            break;
    }

    resultado.textContent =
        `R$ ${valor.toFixed(2)} = ${simbolo} ${convertido.toFixed(2)}`;
});