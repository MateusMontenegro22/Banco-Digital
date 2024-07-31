import { FormatoData } from "../types/formatoData.js";
import Conta from "../types/Conta.js";
import { formatarData } from "../Utils/formatters.js";
const elementoDataAcesso = document.querySelector(".block-saldo time");
renderizarData();
function renderizarData() {
    if (elementoDataAcesso != null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atualizar() {
        renderizarData();
    }
};
export default DataComponent;
