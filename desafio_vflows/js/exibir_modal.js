document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("forn");
    const loadingModal = new bootstrap.Modal(document.getElementById("loadingModal"));

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        loadingModal.show();

        const formData = new FormData(form);
        const json = {};

        formData.forEach((value, key) => {
            json[key] = value;
        });


        setTimeout(function () {
            loadingModal.hide();

            console.log("Dados formatados em JSON:", json);
        }, 2000);
    });
});
