document.getElementById("cep").addEventListener("input", function () {
    const cep = document.getElementById("cep").value;
    if (cep.length === 8) {
        fetch(`https://your-api-url/${cep}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("endereco").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("municipio").value = data.localidade;
                document.getElementById("estado").value = data.uf;
            })
            .catch(error => {
                console.error("Erro ao buscar dados de endereço: ", error);
            });
    }
});