document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("tab_pro");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const produto1 = form.elements.produto1.value;
        const unidadeMedida1 = form.elements["unidade-medida1"].value;
        const quantidadeEstoque1 = form.elements["quantidade-estoque1"].value;
        const valorUnitario1 = form.elements["valor-unitario1"].value;
        const valorTotal1 = form.elements["valor-total1"].value;

        const produto2 = form.elements.produto2.value;
        const unidadeMedida2 = form.elements["unidade-medida2"].value;
        const quantidadeEstoque2 = form.elements["quantidade-estoque2"].value;
        const valorUnitario2 = form.elements["valor-unitario2"].value;
        const valorTotal2 = form.elements["valor-total2"].value;

        console.log("Produto 1:");
        console.log("Produto: " + produto1);
        console.log("Unidade de Medida: " + unidadeMedida1);
        console.log("Quantidade em Estoque: " + quantidadeEstoque1);
        console.log("Valor Unitário: " + valorUnitario1);
        console.log("Valor Total: " + valorTotal1);

        console.log("Produto 2:");
        console.log("Produto: " + produto2);
        console.log("Unidade de Medida: " + unidadeMedida2);
        console.log("Quantidade em Estoque: " + quantidadeEstoque2);
        console.log("Valor Unitário: " + valorUnitario2);
        console.log("Valor Total: " + valorTotal2);
    });
});
