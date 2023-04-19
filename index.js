function logar (){

    const email = document.getElementById("email").value;
    console.log(email)

    const Senha = document.getElementById("Senha").value;
    console.log(Senha)

    if (email==="mrpimbinhas@hotmail.com" && Senha==="pinto"){
        window.location.href = 'usuario.html';
    }
    else {
        alert("Usuário não cadastrado")
    }

}

const botao = document.getElementById("botao");
botao.onclick = logar;


