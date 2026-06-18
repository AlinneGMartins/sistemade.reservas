const form = document.getElementById("reservaForm");

// Código da página de reservas
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nascimento = document.getElementById("nascimento").value;
        const erroIdade = document.getElementById("erroIdade");

        const hoje = new Date();
        const dataNasc = new Date(nascimento);

        let idade = hoje.getFullYear() - dataNasc.getFullYear();

        const mes = hoje.getMonth() - dataNasc.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }

        if (idade < 18) {
            erroIdade.textContent =
                "Você precisa ter pelo menos 18 anos para reservar.";
            return;
        }

        erroIdade.textContent = "";

        localStorage.setItem("reserva", "sucesso");
        
const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const pessoas = document.getElementById("pessoas").value;
const hora = document.getElementById("hora").value;


const confirmar = confirm(
`Confira sua reserva:

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Pessoas: ${pessoas}
Horário: ${hora}

Deseja confirmar?`
);

if (!confirmar) {
    return;
}

        window.location.href = "index.html";
    });
}

const mensagem = document.getElementById("mensagemReserva");

if (mensagem && localStorage.getItem("reserva") === "sucesso") {
    mensagem.textContent = "✅ Reserva realizada com sucesso!";

    setTimeout(() => {
        mensagem.textContent = "";
    }, 5000);

    localStorage.removeItem("reserva");
}