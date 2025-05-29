export async function enviarDados(dados) {
    const url = "https://e955ac81-ee9d-4416-9d03-9511c764469f-00-3n31d0my48g4.worf.replit.dev/"
    const urlUsuarios = url + "usuarios";

    try {
        const resposta = await fetch(urlUsuarios, {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(dados),
        });

        if (!resposta.ok) {
            throw new Error('Erro no envio dos dados!');
        }

        return await resposta.json();
    } catch (erro) {
        console.error('Erro ao enviar dados:', erro);
        throw erro;
    }
}

export function imprimeObjetoJson(objetoJson){
  return `<div>ID: ${objetoJson.id}</div> 
          <div>Nome: ${objetoJson.nome}</div> 
          <div>Nascimento: ${objetoJson.nascimento}</div>
          <div>E-mail: ${objetoJson.email}</div>`;
}
