const arquivo = "produtos.txt";
        fetch(arquivo)
            .then(response => {
                if (response.status === 200) {
                    return response.text();
                } else {
                    document.getElementById("dadosProdutos").textContent = "O arquivo não existe ou está vazio.";
                }
            })
            .then(jsonConteudo => {
                const linhas = jsonConteudo.split("\n");

                const dadosProdutosElement = document.getElementById("dadosProdutos");

                linhas.forEach(linha => {
                    if (linha.trim() !== "") {
                        
                        try {
                            const dadosProduto = JSON.parse(linha);
                            const produtoElement = document.createElement("pre");
                            produtoElement.textContent = JSON.stringify(dadosProduto, null, 2);
                            dadosProdutosElement.appendChild(produtoElement);
                        } catch (error) {
                            console.error("Falha ao decodificar o JSON na linha: " + linha);
                        }
                    }
                });
            })
            .catch(error => {
                console.error("Erro ao buscar o arquivo: " + error);
            });