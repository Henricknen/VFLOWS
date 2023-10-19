function salvarDocumentos(inputFile, documentoKey) {
    if (inputFile.files.length > 0) {
        const file = inputFile.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const documento = {
                data: e.target.result,
                nome: file.name,
                tipo: file.type,
            };

            try {
                sessionStorage.setItem(documentoKey, JSON.stringify(documento));
                inputFile.value = '';
            } catch (error) {
                console.error('Erro ao salvar o documento:', error);
            }
        };

        reader.readAsDataURL(file);
    }
}

function excluirDocumento(documentoKey) {
    sessionStorage.removeItem(documentoKey);
}

function visualizarDocumento(documentoKey) {
    const documentoJSON = sessionStorage.getItem(documentoKey);

    if (documentoJSON) {
        const documento = JSON.parse(documentoJSON);
        const blob = dataURItoBlob(documento.data);

        const blobURL = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = blobURL;
        link.download = documento.nome;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
const document1Input = document.querySelector('input[name="document1"]');
const document2Input = document.querySelector('input[name="document2');
const buttonExcluir1 = document.querySelector('button.excluir');
const buttonExcluir2 = document.querySelector('button.excluir');
const buttonVisualizar1 = document.querySelector('button.visualizar');
const buttonVisualizar2 = document.querySelector('button.visualizar');

buttonExcluir1.addEventListener('click', () => excluirDocumento('documento1'));
buttonExcluir2.addEventListener('click', () => excluirDocumento('documento2'));
buttonVisualizar1.addEventListener('click', () => visualizarDocumento('documento1'));
buttonVisualizar2.addEventListener('click', () => visualizarDocumento('documento2'));

document1Input.addEventListener('change', () => salvarDocumentos(document1Input, 'documento1'));
document2Input.addEventListener('change', () => salvarDocumentos(document2Input, 'documento2'));


function verificaDocumentosAnexados() {
    const documento1 = sessionStorage.getItem('documento1');
    const documento2 = sessionStorage.getItem('documento2');
    return documento1 || documento2;
}

const buttonIncluirAnexos = document.getElementById('anex');
buttonIncluirAnexos.addEventListener('click', function (event) {
    if (!verificaDocumentosAnexados()) {
        event.preventDefault();
        alert('Pelo menos um documento deve ser anexado.');
    }
});
