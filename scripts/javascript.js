const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');

let valueDefault;

btnValue.addEventListener('click', () =>{
    let qrcodeValue = inputValue.value.trim(); /* trin ou trim - remove espacos extras */
    if(!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = "Gerando QRCode...";
    imgQrCode.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`;
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active');
        btnValue.innerText = "Gerar QRCode";
    });
})
