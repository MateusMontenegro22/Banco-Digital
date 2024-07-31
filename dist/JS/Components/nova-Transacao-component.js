import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
import DataComponent from "./DataComponent.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert('Por favor preencha todos os campos da transação!');
        return;
    }
    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputTipoValor = elementoFormulario.querySelector("#valor");
    const inputTipoData = elementoFormulario.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputTipoValor.valueAsNumber;
    let data = new Date(inputTipoData.value);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    elementoFormulario.reset();
    DataComponent.atualizar();
});
