document.addEventListener(`DOMContentLoaded`,function(){

const cep = document.querySelector('#cep');
const address = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');

cep.addEventListener('focusout', async () => {                                                                                                      
   try {
    const onlyNumbers = /ˆ[0-9]+$/;
    const cepValid = /ˆ[0-9]{8}$/;

    //  if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)){ 
    //      throw {cep_error: 'Cep Invalid' };
    // }

    const response = await fetch( `https://viacep.com.br/ws/${cep.value}/json/`);

    if(!response.ok) {
        throw await response.json();
    }

    const responseCep = await response.json();

    address.value = responseCep.logradouro;
    bairro.value = responseCep.bairro;
    cidade.value = responseCep.localidade;
    uf.value = responseCep.uf;  



   } catch (error) {

    console.log(error);
   }
})
});
