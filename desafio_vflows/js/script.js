function handleSaveFornecedorClick() {
    const loadingModal = document.getElementById("loading-modal");
    loadingModal.style.display = "block";

    
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    setTimeout(function () {
        loadingModal.style.display = "none";

        const pdf = new jsPDF();
        pdf.text("Dados do Fornecedor", 10, 10);
        pdf.text(JSON.stringify(formDataObject, null, 2), 10, 20);

        const pdfDataUri = pdf.output("datauristring");
        window.open(pdfDataUri);

        form.reset();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save-button");
    const loadingModal = document.getElementById("loading-modal");
    const form = document.getElementById("forn");

    saveButton.addEventListener("click", handleSaveFornecedorClick);
});