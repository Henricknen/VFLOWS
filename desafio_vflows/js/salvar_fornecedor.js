function abrirModalLoading() {
    const modal = document.getElementById('loading-modal');
    modal.style.display = 'block';
}

function formatarDadosEmJSON() {
    const formulario = document.getElementById('forn');
    const inputs = formulario.querySelectorAll('input');
    const dados = {};

    inputs.forEach((input) => {
        dados[input.name] = input.value;
    });

    return JSON.stringify(dados);
}

function lidarComCliqueSalvarFornecedor() {
    abrirModalLoading();
    const dadosFormatados = formatarDadosEmJSON();
    console.log('Dados a serem enviados em JSON:', dadosFormatados);

    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(dadosFormatados);
    downloadLink.target = '_blank';
    downloadLink.download = 'dados.json';

    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    const modal = document.getElementById('loading-modal');
    modal.style.display = 'none';
}

const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', lidarComCliqueSalvarFornecedor);
