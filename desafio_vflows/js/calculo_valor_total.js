function calcularValorTotal(rowIndex) {
    const table = document.querySelector('table');
    const row = table.rows[rowIndex];
    const valorUnitarioInput = row.querySelector('input[name^="valor-unitario"]');
    const quantidadeEstoqueInput = row.querySelector('input[name^="quantidade-estoque"]');
    const valorTotalInput = row.querySelector('input[name^="valor-total"]');

    if (valorUnitarioInput && quantidadeEstoqueInput && valorTotalInput) {
        const valorUnitario = parseFloat(valorUnitarioInput.value);
        const quantidadeEstoque = parseFloat(quantidadeEstoqueInput.value);

        if (!isNaN(valorUnitario) && !isNaN(quantidadeEstoque)) {
            valorTotalInput.value = (valorUnitario * quantidadeEstoque).toFixed(2);
        }
    }
}

document.addEventListener('input', function (event) {
    if (event.target.tagName === 'INPUT' && event.target.name.startsWith('valor-unitario')) {
        const rowIndex = event.target.closest('tr').rowIndex;
        calcularValorTotal(rowIndex);
    }
    if (event.target.tagName === 'INPUT' && event.target.name.startsWith('quantidade-estoque')) {
        const rowIndex = event.target.closest('tr').rowIndex;
        calcularValorTotal(rowIndex);
    }
});
