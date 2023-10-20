const saveButton = document.getElementById("save-button");
const loadingModal = document.getElementById("loading-modal");

saveButton.addEventListener("click", function() {
    loadingModal.style.display = "block";

    const dadosParaEnviar = {
        "razao-social": document.querySelector("input[name='razao-social']").value,
        "nome-fantasia": document.querySelector("input[name='nome-fantasia']").value,
    };

    setTimeout(function() {
        console.log("Dados enviados:", JSON.stringify(dadosParaEnviar, null, 2));

        loadingModal.style.display = "none";
    }, 2000);
});
