function validacao() {

    let valido = true;

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let horas_sozinho = document.getElementById("horas_sozinho").value;
    let motivo = document.getElementById("motivo").value;
    let tipo = document.querySelector('input[name="tipo"]:checked');
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let antes = document.querySelector('input[name="antes"]:checked');
    let financeiro = document.querySelector('input[name="financeiro"]:checked');
    let cpf = document.getElementById("cpf").value;
    let cpf_duplicado = [
        "12345678910",
        "10987654321",
        "11223344556",
        "67788991010"
    ]
    let termo = document.getElementById("termo");

    
    if (nome.length === 0) {
        alert("Informe seu nome");
        valido = false;
    } else if (nome.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres.");
        valido = false;
    }
    
    if (email.length === 0) {
        alert("Informe seu email");
        valido = false;
    } else if (!email.includes("@")) {
        alert("Email deve ter @.");
        valido = false;
    }

    if (telefone.length === 0) {
        alert("Informe seu telefone");
        valido = false;
    } else if (telefone.length < 8) {
        alert("Telefone deve ter no mínimo 8 dígitos.");
        valido = false;
    }

    if (cpf.length == 0) {
        alert("Campo CPF obrigatório");
        valido = false;
    } else if (cpf_duplicado.includes(cpf)) {
        alert("Esse CPF já está cadastrado");
        valido = false;
    }

    if (idade.length === 0) {
        alert("Informe sua idade");
        valido = false;
    } else if (idade < 18) {
        alert("Envio bloqueado! Você deve ser maior de idade para adotar.");
        valido = false;
    }

    if (cidade.length == 0) {
        alert("Campo cidade obrigatório");
        valido = false;
    }
    
    if (!tipo) {
        alert("Selecione o tipo de moradia");
        valido = false;
    } else if (tipo && tipo.value === "apartamento") {
        let resposta2 = prompt("O apartamento permite animais?");
    } else if ((tipo && tipo.value === "casa") && (quintal && quintal.value === "sim")) {
        let resposta1 = prompt("O quintal é seguro?");
    } else if (tipo && tipo.value === "apartamento" && quintal && quintal.value === "sim") {
        alert("Ocorreu um erro, quem mora em apartamento não pode ter quintal.");
        valido = false;
    } else if (tipo && tipo.value === "casa" && quintal && quintal.value === "nao") {
        alert("Aviso: por não possuir quintal, o uso de espaço externo pode ser limitado.");
    }
    
    if (!quintal) {
        alert("Selecione se tem quintal");
        valido = false;
    }
    
    if (!antes) {
        alert("Selecione se já teve animais");
        valido = false;
    } else if (antes && antes.value === "nao") {
        alert("Já que você não teve nenhum animalzinho antes, pode haver um acompanhamento da ONG.");
    }

    if (!financeiro) {
        alert("Selecione se tem condição financeira para um amiguinho");
        valido = false;
    } else if (financeiro && financeiro.value === "nao") {
        alert("Você marcou que não tem financeiro para cuidar de um animalzinho, opte por um momento que tenha condições essa responsabilidade");
        valido = false;
    }
    
    if (horas_sozinho.length === 0) {
        alert("Informe quantas horas sozinho o animal ficará");
        valido = false;
    } else if (isNaN(horas_sozinho)) {
        alert("As horas por dia sozinhas do seu animal devem ser informadas apenas com números.");
        valido = false;
    } else if (horas_sozinho >= 8) {
        let porque = prompt("Atenção!! Não é recomendado deixar seu animalzinho tanto tempo sozinho, justifique o porquê de tanto tempo:");
        
        if (porque.length === 0) {
            alert("Justifique para realizar o cadastro");
            valido = false;
        }
    }
    
    if (motivo.length === 0) {
        alert("Informe o motivo da adoção");
        valido = false;
    } else if (motivo.length < 10) {
        alert("O motivo de adoção deve ter no mínimo 10 caracteres.");
        valido = false;
    } else if ((motivo === "porque sim") || (motivo === "porque quero") || (motivo === "porque eu quero") || (motivo === "Porque sim") || (motivo === "Porque quero") || (motivo === "Porque eu quero")) {
        alert("Resposta do motivo de adoção muito genérica, não será aceita.")
        valido = false;
    } else if ((motivo === "porque decidi hoje") || (motivo === "porque hoje eu decidi que queria")) {
        alert("Alerta de decisão impulsiva, se decidiu adotar hoje tenha cuidado")
    }
    
    if (!termo.checked) {
        alert("Você precisa aceitar o termo de responsabilidade");
        valido = false;
    }
    
    if (!valido) {
        return;
    }

    if (valido) {
        alert("Cadastro\n Nome: " + nome + "\n" +
            "Email: " + email + "\n" +
            "Telefone: " + telefone + "\n" +
            "CPF" + cpf + "\n" +
            "Idade: " + idade + "\n" +
            "Cidade" + cidade + "\n" +
            "Mora em: " + tipo.value + " \n" +
            "Apresentou " + quintal.value + " ter quintal em casa\n" +
            "Apresentou " + antes.value + " já ter tido um animal\n" +
            "Apresentou " + financeiro.value + " ter condições financeiras de ter um animal\n" +
            "Animal ficará sozinho: " + horas_sozinho + " horas\n" +
            "Motivo da adoção: " + motivo + " \n");

    }
}
