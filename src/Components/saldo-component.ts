import { formatarData, formatarMoeda } from "../Utils/formatters.js";
import { FormatoData } from "../types/formatoData.js";
import Conta from "../types/Conta.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
renderizarSaldo();
function renderizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
}

export default SaldoComponent;