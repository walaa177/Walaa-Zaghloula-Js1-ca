const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);
function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");
    //validate name
    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");
    const nameValue = name.value;
    if (checkname(nameValue)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }
    //validate answer
    const answer = document.querySelector("#answer");
    const answerError = document.querySelector("#answerError");
    const answerValue = answer.value;
    if (checkanswer(answerValue)) {
        answerError.style.display = "none";
    } else {
        answerError.style.display = "block";
    }
    //validateEmail
    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;
    if (checkemail(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (validatemail(emailValue)) {
        invalidEmailError.style.display = "none";
    } else {
        invalidEmailError.style.display = "block";
    }
    //validateAddress
    const address = document.querySelector("#address");
    const addressError = document.querySelector("#addressError");
    const addressValue = address.value;
    if (checkaddress(addressValue)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}
function checkname(name) {
    const nameInput = name.trim();
    const nameLength = nameInput.length;
    if (nameLength === 0) {
        return false;
    } else {
        return true;
    }
}
function checkanswer(answer) {
    const answerInput = answer.trim();
    const answerLength = answerInput.length;
    if (answerLength >= 10) {
        return true;
    } else {
        return false;
    }
}
function checkemail(email) {
    const emailInput = email.trim();
    const emailLength = emailInput.length;
    if (emailLength > 0) {
        return true;
    } else {
        return false;
    }
}
function validatemail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
function checkaddress(address) {
    const addressInput = address.trim();
    const addressLength = addressInput.length;
    if (addressLength >= 15) {
        return true;
    } else {
        return false;
    }
}
