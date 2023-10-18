function calcularValorTotal(tableId, rowIndex) {
    const table = document.querySelector(`#${tableId}`);
    const row = table.rows[rowIndex];
    const valorUnitarioInput = row.querySelector(`input[name^="valor-unitario"]`);
    const quantidadeEstoqueInput = row.querySelector(`input[name^="quantidade-estoque"]`);
    const valorTotalInput = row.querySelector(`input[name^="valor-total"]`);

    if (valorUnitarioInput && quantidadeEstoqueInput && valorTotalInput) {
        const valorUnitario = parseFloat(valorUnitarioInput.value);
        const quantidadeEstoque = parseFloat(quantidadeEstoqueInput.value);

        if (!isNaN(valorUnitario) && !isNaN(quantidadeEstoque)) {
            valorTotalInput.value = (valorUnitario * quantidadeEstoque).toFixed(2);
        }
    }
}

document.addEventListener('input', function (event) {
    if (event.target.tagName === 'INPUT' && (event.target.name.startsWith('valor-unitario') || event.target.name.startsWith('quantidade-estoque'))) {
        const rowIndex = event.target.closest('tr').rowIndex;
        const tableId = event.target.name.startsWith('valor-unitario1') ? 'table1' : 'table2';
        calcularValorTotal(tableId, rowIndex);
    }
});
