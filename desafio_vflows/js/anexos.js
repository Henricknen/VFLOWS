function salvarDocumentos(inputFile) {
    if (inputFile.files.length > 0) {
        const file = inputFile.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            sessionStorage.setItem('documento', e.target.result);

            inputFile.value = '';
        };

        reader.readAsDataURL(file);
    }
}

function excluirDocumento() {
    sessionStorage.removeItem('documento');
}

function visualizarDocumento() {
    const documento = sessionStorage.getItem('documento');
    if (documento) {
        const link = document.createElement('a');
        link.href = documento;
        link.download = 'documento.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

const excluirButton = document.querySelector('button.excluir');
const visualizarButton = document.querySelector('button.visualizar');
const inputFile = document.querySelector('input[type="file"]');

excluirButton.addEventListener('click', excluirDocumento);
visualizarButton.addEventListener('click', visualizarDocumento);
inputFile.addEventListener('change', () => salvarDocumentos(inputFile));
