function validacao() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let horas_sozinho = document.getElementById("horas_sozinho").value;
    let motivo = document.getElementById("motivo").value;
    let tipo = document.querySelector('input[name="tipo"]:checked');
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let antes = document.querySelector('input[name="antes"]:checked');

    if (nome.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres.");
    }

    if (!email.includes("@")) {
        alert("Email deve ter @.");
    }

    if (telefone.length < 8) {
        alert("Telefone deve ter no mínimo 8 dígitos.");
    }

    if (idade < 18) {
        alert("Envio bloqueado! Você deve ser maior de idade para adotar.");
    }

    if (isNaN(horas_sozinho)) {
        alert("As horas por dia sozinhas do seu animal devem ser informadas apenas com números.");
    }

    if (horas_sozinho >= 8) {
        let porque = prompt("Atenção!! Não é recomendado deixar seu animalzinho tanto tempo sozinho, justifique o porquê de tanto tempo:");
    }

    if (motivo.length < 10) {
        alert("O motivo de adoção deve ter no mínimo 10 caracteres.");
    }

    if ((tipo && tipo.value === "casa") && (quintal && quintal.value === "sim")) {
        let resposta1 = prompt("O quintal é seguro?");
    }

    if (tipo && tipo.value === "apartamento") {
        let resposta2 = prompt("O apartamento permite animais?");
    }

    if (antes && antes.value === "nao") {
        alert("Já que você não teve nenhum animalzinho antes, pode haver um acompanhamento da ONG.")
    }
}
