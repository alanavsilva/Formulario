function validacao() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let idade = document.getElementById("idade").value;
    let horas_sozinho = document.getElementById("horas_sozinho").value;
    let motivo = document.getElementById("motivo").value;
    let apartamento = document.getElementById("apartamento").value;

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

    if (horas_sozinho != Number) {
        alert("As horas por dia sozinhas do seu animal devem ser informadas apenas com números");
    }

    if (motivo.length < 10) {
        alert("O motivo de adoção deve ter no mínimo 10 caracteres.");
    }

    if (motivo.length < 10) {
        alert("O motivo de adoção deve ter no mínimo 10 caracteres.");
    }
    }