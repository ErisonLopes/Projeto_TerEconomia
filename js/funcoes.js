//VARIÁVEIS
    
//RECEITA MENSAL
    let salarioLiquido = 0;
    let rendimentoAluguel = 0;
    let rendimentoApli = 0;
    let aposentadoria = 0;
    let outros1 = 0;

//DESPESAS FIXAS
    let aluguel = 0;
    let condominio = 0;
    let planoSaude = 0;
    let imposto = 0;
    let seguros = 0;
    let telefone = 0;
    let celular = 0;
    let educacao = 0;
    let outros2 = 0;

//DESPESAS VARIÁVEIS
    let contas = 0;
    let alimentacao = 0;
    let mercado = 0;
    let lazer = 0;
    let carro = 0;
    let limpeza = 0;
    let outros3 = 0;

//FUNÇÕES

function calculaRendas(){
    gravaDados();

    let totalDespesas = 0;
    let totalReceitas = 0;
    let orcamentosDomestico = 0;
    
    //TOTAL RECEITAS
    totalReceitas = salarioLiquido + rendimentoAluguel + rendimentoApli + aposentadoria + outros1;
    
    //TOTAL DESPESAS
    totalDespesas = aluguel + condominio + planoSaude + imposto + seguros + telefone + celular + outros2;
    totalDespesas+= contas + alimentacao + mercado + lazer + carro + limpeza + outros3;
    
    //ORÇAMENTO DOMÉSTICO
    orcamentosDomestico = Math.round(totalReceitas - totalDespesas);

    document.getElementById("totalReceitas").value = "R$: " + totalReceitas.toFixed(2).replace('.' , ',');
    document.getElementById("totalDespesas").value = "R$: " + totalDespesas.toFixed(2).replace('.' , ',');
    document.getElementById("ocamentoDomestico").value = "R$: " + orcamentosDomestico.toFixed(2).replace('.' , ',');
}

function gravaDados(){
    //RECEITA MENSAL
     salarioLiquido = parseFloat( document.getElementById("salarioLiquido").value );
     rendimentoAluguel = parseFloat( document.getElementById("rendimentoAluguel").value );
     rendimentoApli = parseFloat( document.getElementById("rendimentoApli").value );
     aposentadoria = parseFloat( document.getElementById("aposentadoria").value );
     outros1 = parseFloat( document.getElementById("outros1").value );
    
    //DESPESAS FIXAS
    aluguel = parseFloat( document.getElementById("aluguel").value );
    condominio = parseFloat( document.getElementById("condominio").value );
    planoSaude = parseFloat( document.getElementById("planoSaude").value );
    imposto = parseFloat( document.getElementById("imposto").value );
    seguros = parseFloat( document.getElementById("seguros").value );
    telefone = parseFloat( document.getElementById("telefone").value );
    celular = parseFloat( document.getElementById("celular").value );
    outros2 = parseFloat( document.getElementById("outros2").value );
    
    //DESPESAS VARIÁVEIS
    contas = parseFloat( document.getElementById("contas").value );
    alimentacao = parseFloat( document.getElementById("alimentacao").value );
    mercado = parseFloat( document.getElementById("mercado").value );
    lazer = parseFloat( document.getElementById("lazer").value );
    carro = parseFloat( document.getElementById("carro").value );
    limpeza = parseFloat( document.getElementById("limpeza").value );
    outros3 = parseFloat( document.getElementById("outros3").value );
}

/* 
function salvaRendas(){
    
    rendas.id = 123;
    rendas.mes  ="janeiro";

    rendas.salario = salarioLiquido;
    rendas.rendimentoAluguel = rendimentoAluguel;
    rendas.rendimentoAplicacoes = rendimentoApli;
    rendas.aposentadoria = aposentadoria;
    rendas.outrosReceitaMensal = outros1;

    rendas.aluguel = aluguel;
    rendas.condominio = condominio;
    rendas.planoSaude = planoSaude;
    rendas.imposto = imposto;
    rendas.seguros = seguros;
    rendas.telefone = telefone;
    rendas.celular = celular;
    rendas.educacao = educacao;
    rendas.outrosDespesasFixas = outros2;
    
    rendas.contas = contas;
    rendas.alimentacao = alimentacao;
    rendas.mercado = mercado;
    rendas.entretenimento = entretenimento;
    rendas.carro = carro;
    rendas.limpeza = limpeza;
    rendas.outrosDespesasVariaveis = outros3;

    rendas.totalReceitas = totalReceitas;
    rendas.totalDespesas = totalDespesas;
    rendas.orcamentosDomestico = orcamentosDomestico;
    console.log(rendas);
}
*/

function validaCampos(){
    document.getElementById("nomeVazio").innerHTML = "";
    document.getElementById("emailVazio").innerHTML = "";
    document.getElementById("telefone1Vazio").innerHTML = "";
    document.getElementById("telefone2Vazio").innerHTML = "";
    document.getElementById("textareaVazio").innerHTML = "";

    document.getElementById("nomeVazio").classList.remove("vazio");
    document.getElementById("emailVazio").classList.remove("vazio");
    document.getElementById("telefone1Vazio").classList.remove("vazio");
    document.getElementById("telefone2Vazio").classList.remove("vazio");
    document.getElementById("textareaVazio").classList.remove("vazio");

    if(document.getElementById("nome").value == ""){

        document.getElementById("nomeVazio").classList.add("vazio");
        document.getElementById("nomeVazio").innerHTML = "Preencha o nome corretamente!";
        return false;

    }else if(document.getElementById("email").value == ""){

        document.getElementById("emailVazio").classList.add("vazio");
        document.getElementById("emailVazio").innerHTML = "Preencha o E-mail corretamente!";
        return false;

    }else if(document.getElementById("telefoneCelular").value == ""){

         document.getElementById("telefone1Vazio").classList.add("vazio");
         document.getElementById("telefone1Vazio").innerHTML = "Preencha o Telefone Celular corretamente!";
         return false;

    }else if(document.getElementById("telefoneFixo").value == ""){

         document.getElementById("telefone2Vazio").classList.add("vazio");
         document.getElementById("telefone2Vazio").innerHTML = "Preencha o Telefone Fixo corretamente!";
         return false;

    }else if(document.getElementById("queixa").value == ""){

         document.getElementById("textareaVazio").classList.add("vazio");
         document.getElementById("textareaVazio").innerHTML = "Digite sua mensagem!";
         return false;

    }
    return true;
}
function validaDados(){
    document.getElementById("nome").innerHTML = "";
    document.getElementById("dataNacimento").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("senha").innerHTML = "";
    document.getElementById("telefoneResi").innerHTML = "";
    document.getElementById("celular").innerHTML = "";

    document.getElementById("nome").classList.remove("vazio");
    document.getElementById("dataNacimento").classList.remove("vazio");
    document.getElementById("email").classList.remove("vazio");
    document.getElementById("senha").classList.remove("vazio");
    document.getElementById("telefoneResi").classList.remove("vazio"); 
    document.getElementById("celular").classList.remove("vazio");

    if(document.getElementById("nome").value == ""){

        document.getElementById("nomeVazio").classList.add("vazio");
        document.getElementById("nomeVazio").innerHTML = "Preencha o nome corretamente!";
        return false;

    }else if(document.getElementById("dataNacimento").value == ""){

        document.getElementById("nascimentoVazio").classList.add("vazio");
        document.getElementById("nascimentoVazio").innerHTML = "Preencha a data de Nascimento corretamente!";
        return false;

    }else if(document.getElementById("email").value == ""){

        document.getElementById("emailVazio").classList.add("vazio");
        document.getElementById("emailVazio").innerHTML = "Preencha o email corretamente!";
        return false;
    }else if(document.getElementById("senha").value == ""){

        document.getElementById("senhaVazio").classList.add("vazio");
        document.getElementById("senhaVazio").innerHTML = "Preencha a senha corretamente!";
        return false;

    }else if(document.getElementById("telefoneResi").value == ""){

        document.getElementById("telefoneVazio").classList.add("vazio");
        document.getElementById("telefoneVazio").innerHTML = "Preencha o telefone corretamente!";
        return false;

    }else if(document.getElementById("celular").value == ""){

        document.getElementById("celularVazio").classList.add("vazio");
        document.getElementById("celularVazio").innerHTML = "Preencha o telefone celular corretamente!";
        return false;

    }
    return true;
}

function mostraInputs1(){
    if(document.getElementById( "ckeckRendimentoAluguel").checked){
        document.getElementById("row_redAluguel").style.display = "flex";
        document.getElementById("rendimentoAluguel").value = "";
    }
    if(document.getElementById( "ckeckAplicacoes").checked){
        document.getElementById("row_aplicacoes").style.display = "flex";
        document.getElementById("rendimentoApli").value = "";
    }
    if(document.getElementById( "ckeckAposentadoria").checked){
        document.getElementById("row_pensao").style.display = "flex";
        document.getElementById("aposentadoria").value = "";
    }
    if(document.getElementById( "ckeckOutros1").checked){
        document.getElementById("row_outrosForm1").style.display = "flex";
        document.getElementById("outros1").value = "";
    }
}

function mostraInputs2(){
    if(document.getElementById( "ckeckAluguel").checked){
        document.getElementById("row_Aluguel").style.display = "flex";
        document.getElementById("aluguel").value = "";
    }
    if(document.getElementById( "ckeckCondominio").checked){
        document.getElementById("row_Condominio").style.display = "flex";
        document.getElementById("condominio").value = "";
    }
    if(document.getElementById( "ckeckImposto").checked){
        document.getElementById("row_imposto").style.display = "flex";
        document.getElementById("imposto").value = "";
    }
    if(document.getElementById( "ckeckPlanoSaude").checked){
        document.getElementById("row_PlanoSaude").style.display = "flex";
        document.getElementById("planoSaude").value = "";
    }
    if(document.getElementById( "ckeckSeguros").checked){
        document.getElementById("row_Seguros").style.display = "flex";
        document.getElementById("seguros").value = "";
    }
    if(document.getElementById( "ckeckTelefone").checked){
        document.getElementById("row_Telefone").style.display = "flex";
        document.getElementById("telefone").value = "";
    }
    if(document.getElementById( "ckeckCelular").checked){
        document.getElementById("row_Celular").style.display = "flex";
        document.getElementById("celular").value = "";
    }
    if(document.getElementById( "ckeckEducacao").checked){
        document.getElementById("row_Educacao").style.display = "flex";
        document.getElementById("educacao").value = "";
    }
    if(document.getElementById( "ckeckOutros2").checked){
        document.getElementById("row_outrosForm2").style.display = "flex";
        document.getElementById("outros2").value = "";
    }
}

function mostraInputs3(){
    if(document.getElementById( "ckeckContas").checked){
        document.getElementById("row_Contas").style.display = "flex";
        document.getElementById("contas").value = "";
    }
    if(document.getElementById( "ckeckAlimentacao").checked){
        document.getElementById("row_Alimentacao").style.display = "flex";
        document.getElementById("alimentacao").value = "";
    }
    if(document.getElementById( "ckeckMercado").checked){
        document.getElementById("row_Mercado").style.display = "flex";
        document.getElementById("mercado").value = "";
    }
    if(document.getElementById( "ckeckEntretenimento").checked){
        document.getElementById("row_Entretenimento").style.display = "flex";
        document.getElementById("lazer").value = "";
    }
    if(document.getElementById( "ckeckCarro").checked){
        document.getElementById("row_Carro").style.display = "flex";
        document.getElementById("carro").value = "";
    }
    if(document.getElementById( "ckeckLimpeza").checked){
        document.getElementById("row_Limpeza").style.display = "flex";
        document.getElementById("limpeza").value = "";
    }
    if(document.getElementById( "ckeckOutros3").checked){
        document.getElementById("row_outrosForm3").style.display = "flex";
        document.getElementById("outros3").value = "";
    }
    if(document.getElementById( "ckeckEducacao").checked){
        document.getElementById("row_Educacao").style.display = "flex";
        document.getElementById("educacao").value = "";
    }
    if(document.getElementById( "ckeckOutros2").checked){
        document.getElementById("row_outrosForm2").style.display = "flex";
        document.getElementById("outros2").value = "";
    }
}

function consultaRendasCadastradas(){
    let saida = '';
    
    // PRIMEIRA TABELA
    saida = "<table class='tabelas'>";
    saida+= "<tr>";
    saida+= "<th>Salario Líquido</th> <th>Rendimento Aplicações</th> <th>Aposentadoria</th> <th>Outros </th>";
    saida+= "</tr>";
    saida+= "<tr>";
    saida+= "<td>" + salarioLiquido + "</td>";
    saida+= "<td>" + rendimentoApli + "</td>";
    saida+= "<td>" + aposentadoria  + "</td>";
    saida+= "<td>" + outros1        + "</td>";
    saida+= "</tr>";
    saida+= "<tr>";
    saida+= "<td>" + salarioLiquido + "</td>";
    saida+= "<td>" + rendimentoApli + "</td>";
    saida+= "<td>" + aposentadoria  + "</td>";
    saida+= "<td>" + outros1        + "</td>";
    saida+= "</tr>";
    saida+= "</table><br>";
    
    //SEGUNDA TABELA
    saida+="<table class='tabelas'>";
    saida+="<tr>";
    saida+= "<th>Aluguel</th> <th>Condomínio</th> <th>Plano De Saúde</th> <th>Imposto </th> <th>Seguros</th> <th>Telefone</th> <th>Celular</th> <th>Educação</th> <th>Outros</th>";
    saida+= "</tr>";
    saida+= "<tr>";
    saida+= "<td>" + aluguel + "</td>";
    saida+= "<td>" + condominio + "</td>";
    saida+= "<td>" + planoSaude  + "</td>";
    saida+= "<td>" + imposto + "</td>";
    saida+= "<td>" + seguros + "</td>";
    saida+= "<td>" + telefone + "</td>";
    saida+= "<td>" + celular + "</td>";
    saida+= "<td>" + educacao + "</td>";
    saida+= "<td>" + outros2 + "</td>";
    saida+= "</tr>";
    saida+= "</table><br>";
    
    //TERCEIRA TABELA
    saida+="<table class='tabelas'>";
    saida+="<tr>";
    saida+= "<th>Contas</th> <th>Alimentação</th> <th>Mercado</th> <th>Entretenimento </th> <th>Limpeza</th> <th>Outros</th>";
    saida+= "</tr>";
    saida+= "<tr>";
    saida+= "<td>" + contas + "</td>";
    saida+= "<td>" + alimentacao + "</td>";
    saida+= "<td>" + mercado  + "</td>";
    saida+= "<td>" + lazer + "</td>";
    saida+= "<td>" + limpeza + "</td>";
    saida+= "<td>" + outros3 + "</td>";    
    saida+= "</tr>";
    saida+= "</table><br>";
    
    document.getElementById("tabela_rendas").innerHTML = saida;
}