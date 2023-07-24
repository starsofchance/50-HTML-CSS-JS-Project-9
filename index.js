//  first we need to bring our elements into JS
// we use query selector:
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const lengthEl = document.getElementById("lengthOfPass");
const copyIconEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert");
// we need to add an eventlistener to the btn
btnEl.addEventListener("click", () => {
  // after btn is clicked we want the password to be generated: so we call out password generator here.
  createPassword();
});
// adding event listener to the copy btn
copyIconEl.addEventListener("click", () => {
  copyPassword();
  //   we dont want the copy btn work when there is nothing inside the generator:
  if (inputEl.value) {
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 1000);
  }
});
function createPassword() {
  // we should define the character that we can use inside the generator:
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // now we set the length of password
  const passwordLength = parseInt(lengthEl.value);
  //   check if the input length is valid:
  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert("Please enter a valid password length (a positive number).");
    return;
  }
  //   the password at the beginning is empty
  let password = "";

  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    // now using substring, we put a character inside the password and we choose that character using randomnum
    password += chars.substring(randomNum, randomNum + 1);
    // console.log(randomNum, password);
  }
  inputEl.value = password;

  alertEl.innerText = password + " copied!";
}
function copyPassword() {
  // first we need to select the generated password:
  inputEl.select();
  // for mobile:
  inputEl.setSelectionRange(0, 9999);
  //   in order to copy the selected text into the clipboard we use the navigator and writeText function:
  navigator.clipboard.writeText(inputEl.value);
}
