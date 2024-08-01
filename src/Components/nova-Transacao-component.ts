import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import Conta from "../types/Conta.js";
import SaldoComponent from "./saldo-component.js";
import DataComponent from "./DataComponent.js";
import ExtratoComponent  from "./ExtratoComponent.js";


const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event){
    try{
        event.preventDefault();
        if(!elementoFormulario.checkValidity()){
            alert('Por favor preencha todos os campos da transação!');
            return;
        }   
                
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputTipoValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputTipoData = elementoFormulario.querySelector("#data") as HTMLInputElement;


        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputTipoValor.valueAsNumber;
        let data: Date = new Date(inputTipoData.value + " 00:00:00") ;

        const novaTransacao: Transacao ={
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        }
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        elementoFormulario.reset();
        DataComponent.atualizar();
        ExtratoComponent.atualizar();
}
catch(erro){
    alert(erro.message)
}
} );

