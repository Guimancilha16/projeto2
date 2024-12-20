function oi()
{
    // Buscando dados do formulário

    const codigo = document.getElementById("codigo");
    codigoValor= Number(codigo.value);

    const nome = document.getElementById("nome");
    nomeValor= nome.value;

    const email = document.getElementById("email");
    emailValor= email.value;

    const senha = document.getElementById("senha");
    senhaValor= senha.value;

    const telefone = document.getElementById("telefone");
    telefoneValor= telefone.value;

    corpo={
        codigo: codigoValor
        , nome: nomeValor
        , email: emailValor
        , senha: senhaValor
        , telefone:telefoneValor
    };

    // Montando Solicitação

    const requisicao = new Request("http://localhost:8000/api/usuario", {
        method: "POST"
        , body: JSON.stringify(corpo)
        , headers: {"Content-Type": "application/json"}
      });
      

    // --- Enviando Solicitação 

    fetch(requisicao)
    .then((resposta) => {

        debugger;

        alert(resposta);
    });

}






