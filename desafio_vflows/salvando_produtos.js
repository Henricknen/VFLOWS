document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button").addEventListener("click", function () {
        const data = {
            "Produto 1": {
                "Produto": document.getElementById("produto1").value,
                "UND. Medida": document.getElementById("unidade-medida1").value,
                "QTDE em Estoque": document.getElementById("quantidade-estoque1").value,
                "Valor Unitário": document.getElementById("valor-unitario1").value,
                "Valor Total": document.getElementById("valor-total1").value
            },
            "Produto 2": {
                "Produto": document.getElementById("produto2").value,
                "UND. Medida": document.getElementById("unidade-medida2").value,
                "QTDE em Estoque": document.getElementById("quantidade-estoque2").value,
                "Valor Unitário": document.getElementById("valor-unitario2").value,
                "Valor Total": document.getElementById("valor-total2").value
            }
        };

        const jsonData = JSON.stringify(data, null, 2);

        console.log(jsonData);
    });
});
