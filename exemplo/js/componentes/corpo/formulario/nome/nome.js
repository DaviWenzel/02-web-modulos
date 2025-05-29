import { carregar } from "../../../carregar.js";

function validarCampoNome(nome) {
    let mensagem = document.querySelector('#mensagemErroNome');
    // document.getElementById

    if (nome.value.trim().length < 2) {
        nome.classList.add('invalido'); //adiciona css do invalido (no corpo)
        mensagem.innerHTML = "Nome inválido.";
    } else {
        nome.classList.remove('invalido'); //remove css do invalido (no corpo)
        mensagem.innerHTML = "";
    }
}

export async function componenteNome() {
    const formulario = document.querySelector('#formulario');
    await carregar('./js/componentes/corpo/formulario/nome/nome.html', formulario);

    const nome = formulario.querySelector('#nome');
    // # = id
    nome.addEventListener('blur', (event) => validarCampoNome(event.target));
    // blur = quando elemento perde foco
}
