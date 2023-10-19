function clearTable(tableId) {
    const table = document.getElementById(tableId);
    if (table) {
        const inputs = table.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.type === 'text' || input.type === 'number') {
                input.value = '';
            }
        });
    }
}