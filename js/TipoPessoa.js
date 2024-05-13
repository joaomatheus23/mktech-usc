document.addEventListener('DOMContentLoaded', function() {
    var selectTipoDocumento = document.getElementById('lang');
    var cpfDiv = document.getElementById('IdCpf');
    var cnpjDiv = document.getElementById('IdCnpj');
    var cpfSelect = document.getElementById('cpf');
    var cnpjSelect = document.getElementById('cnpj');

    selectTipoDocumento.addEventListener('change', function() {
        cpfSelect.value = null;
        cnpjSelect.value = null;
        if (selectTipoDocumento.value === 'cpf') {
            cpfSelect.required = true;
            cnpjSelect.required = false;
            cnpjDiv.style.display = 'none';
            cpfDiv.style.display = 'block';
        } else if (selectTipoDocumento.value === 'cnpj') {
            cpfSelect.required = false;
            cnpjSelect.required = true;
            cpfDiv.style.display = 'none';
            cnpjDiv.style.display = 'block';
        }
    });
});