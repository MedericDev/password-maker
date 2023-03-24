const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;,&é\"'(-è_ç)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = [];

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez séléctionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.round(Math.random() * (data.length - 1))];
  }

  passwordOutput.value = password

  navigator.clipboard.writeText(passwordOutput.value)
  // .then(() => {
  //   console.log('Text copied to clipboard');
  // })
  // .catch((err) => {
  //   console.error('Failed to copy text: ', err);
  // });

  generateButton.textContent = "Copié !";

  setTimeout(()=> {
    generateButton.textContent = "Générer mot de passe";
  }, 2000)
}

generateButton.addEventListener("click", generatePassword);
