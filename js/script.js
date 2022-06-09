const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInput = document.querySelector("[data-input]");

const closeButton = document.querySelector("#close-mesage");

//validate CEP input
cepInput.addEventListener("keypress", (e) => {

    const onlyNumbers = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);


    // allow only numbers
    if (!onlyNumbers.test(key)) {
        e.preventDefault();
        return;
    }
});

// Get address event 
cepInput.addEventListener("keyup", (e) => {

    const inputValue = e.target.value 

    // Check if we have the corret length 
    if(inputValue.length === 8) {
        getAddress(inputValue)
    }
})

// Get customer address from API
const getAddress = async (cep) => {
    console.log(cep)
} 