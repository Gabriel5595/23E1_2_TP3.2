async function obterEndereco() {
  console.log("Botão clicado");

  let cep = document.getElementById("cep").value;

  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const resposta = await fetch(url);
  const endereco = await resposta.json();

  console.log(endereco);

  let enderecoCompleto = document.getElementById("enderecoCompleto");
  enderecoCompleto.innerHTML = `
    <p>CEP: ${endereco.cep}</p>
    <p>Logradouro: ${endereco.logradouro}</p>
    <p>Complemento: ${endereco.complemento}</p>
    <p>Bairro: ${endereco.bairro}</p>
    <p>Cidade: ${endereco.localidade}</p>
    <p>Estado: ${endereco.uf}</p>
    `

}
