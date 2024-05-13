document.addEventListener("DOMContentLoaded", function () {
    const cpfInput = document.getElementById("cpf");
    const cnpjInput = document.getElementById("cnpj");
    const cepInput = document.getElementById("cep");

    function mascaraCPF() {
        let value = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (value.length > 11) {
            value = value.slice(0, 11); // Limita o comprimento do CPF a 11 caracteres
        }
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona um ponto após os 3 primeiros dígitos
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona outro ponto após os 6 primeiros dígitos
        value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2'); // Adiciona hífen, se necessário
        cpfInput.value = value;
    }

    cpfInput.addEventListener("input", mascaraCPF);
    mascaraCPF();

    function mascaraCNPJ(){
        let value = cnpjInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        value = value.replace(/(\d{2})(\d)/, '$1.$2'); // Adiciona um ponto após os 3 primeiros dígitos
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona outro ponto após os 6 primeiros dígitos
        value = value.replace(/(\d{3})(\d)/, '$1/$2'); // Adiciona hífen, se necessário
        value = value.replace(/(\d{4})(\d)/, '$1-$2'); // Adiciona hífen, se necessário
        cnpjInput.value = value;
    }

    cnpjInput.addEventListener("input", mascaraCNPJ);
    mascaraCNPJ();

    function mascaraCEP(){
        let value = cepInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        value = value.replace(/^(\d{5})(\d{3})$/, '$1-$2'); // Formata o CEP
        cepInput.value = value;
    }

    cepInput.addEventListener("input", mascaraCEP);
    mascaraCEP();
});