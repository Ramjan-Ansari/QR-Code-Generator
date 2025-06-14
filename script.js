const inp = document.querySelector('input');
const sizes = document.getElementById('sizes');
const generateBtn = document.querySelector('#generatebtn');
const downloadeBtn = document.querySelector('#downloadebtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

generateBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    isEmptyInput();
   
});

downloadeBtn.addEventListener("click", ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        imgAtt = img.getAttribute('src');
        downloadeBtn.setAttribute("href", imgAtt);
    }else{
        downloadeBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    if(inp.value.length> 0){
        generateQRcode();
    }else{
        alert("Enter Yout Text or Link to generate QR Code");
    }
}

sizes.addEventListener("change", (e)=>{
    size = e.target.value;
   isEmptyInput();
})

function generateQRcode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer,{
        text: inp.value,
        height: size,
        width: size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}

