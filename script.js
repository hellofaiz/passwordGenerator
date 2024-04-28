let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById('passBox')
let lowerCase = document.getElementById('lowerCase')
let upperCase = document.getElementById('upperCase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let generateBtn = document.getElementById('generateBtn')
let copyIcon = document.getElementById('copyIcon')

// set initial value of slider's value
// sliderValue.textContent=inputSlider.value;

inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;

})

generateBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})



let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let num = '0123456789'
let symbol = '~!@#$%^&*()<>?/+-()'
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function generatePassword() {
    let generatedPassword = "";
    let allChar = '';
    allChar += lowerCase.checked ? lowerChars : '';
    allChar += upperCase.checked ? upperChars : '';
    allChar += numbers.checked ? num : '';
    allChar += symbols.checked ? symbol : '';
    if (allChar == "" || allChar.length == 0) {
        return generatedPassword
    }

    let i = 0;
    while (i < inputSlider.value) {
        generatedPassword += allChar.charAt(Math.floor(Math.random() * allChar.length - 1))
        i++;
    }

    return generatedPassword
}

copyIcon.addEventListener('click', () => {
    console.log("nnjkbhb", passBox.value)
    if (passBox.value != "" || passBox.value.length > 1) {

        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerText="check"
        copyIcon.title = "Password Copied"

        setTimeout(()=>{
            copyIcon.innerText="content_copy";
            copyIcon.title=""
        },3000)
    }
})

