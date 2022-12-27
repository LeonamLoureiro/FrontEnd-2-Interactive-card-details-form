
const cardholder = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const expiry = Array.from(document.querySelectorAll(".card-expiry"));
const dateMM = document.getElementById("exp-date-mm");
const dateYY = document.getElementById("exp-date-yy");
const cvc = document.getElementById("cvc");
const submit = document.getElementById("submit");
const nameOnCard = document.querySelector(".card-name");
const numOnCard = document.querySelector(".card-number");
const expMM = document.querySelector(".card-month");
const expYY = document.querySelector(".card-year");
const cvcDisplay = document.querySelector(".card-cvc");
const thankYou = document.getElementById("thank-you-h1");
const thankYouSection = document.querySelector(".complete-message");
const continueBtn = document.getElementById("continue");
const form = document.querySelector(".card-form");
const expiryErrorMsg = document.getElementById("expiry-error");
const errorMessage = document.querySelector(".error-message");
const errorName = document.querySelector(".error-name");
const errorNumber = document.querySelector(".error-number");
const errorDate = document.querySelector(".error-date");
const errorCVC = document.querySelector(".error-cvc");



function inputName() {
  nameOnCard.innerHTML = cardholder.value;
  thankYou.innerHTML = `Thank You ${cardholder.value}`;
  if (nameOnCard.innerHTML == "") {
    nameOnCard.innerHTML = cardholder.placeholder;
  }
}
function inputCardNum() {
  let cardNumberInput = cardNumber.value;
  // Do not allow users to write invalid characters
  let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, "");
  formattedCardNumber = formattedCardNumber.substring(0, 16);
  // Split the card number is groups of 4
  let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
  if (cardNumberSections !== null) {
    formattedCardNumber = cardNumberSections.join(" ");
  }
  // If the formmattedCardNumber is different to what is shown, change the value
  if (cardNumberInput !== formattedCardNumber) {
    cardNumber.value = formattedCardNumber;
  }
  numOnCard.innerHTML = cardNumber.value;
  if (cardNumber.value === "") {
    numOnCard.innerHTML = cardNumber.placeholder;
  }
}
function inputMM() {
  let formattedMM = dateMM.value;

  formattedMM = formattedMM.substring(0, 2);
  dateMM.value = formattedMM;
  if (dateMM.value === "") {
    expMM.innerHTML = "000";
  } else {
    expMM.innerHTML = dateMM.value;
  }
}
function inputYY() {
  let formattedYY = dateYY.value;

  formattedYY = formattedYY.substring(0, 2);
  dateYY.value = formattedYY;
  if (dateMM.value === "") {
    expYY.innerHTML = "000";
  } else {
    expYY.innerHTML = dateYY.value;
  }
}
function inputCvc() {
  let formattedCvc = cvc.value;

  formattedCvc = formattedCvc.substring(0, 3);
  cvc.value = formattedCvc;
  if (cvc.value === "") {
    cvcDisplay.innerHTML = "000";
  } else {
    cvcDisplay.innerHTML = cvc.value;
  }
}

//Validation of data card
$(document).ready(function() {
  $('.card-form').submit(function(event) {
    // Prevent form submission
    event.preventDefault();

    // Stores input field values in variables
    var name = $('#name').val();
    var cardNumber = $('#card-number').val();
    var expDateMM = $('#exp-date-mm').val();
    var expDateYY = $('#exp-date-yy').val();
    var cvc = $('#cvc').val();

    // Check if fields are filled
    if (name == '') {
      errorName.innerHTML = "Please enter cardholder name!";
      $(".error-message").css('display', 'block');      
    }

    if (cardNumber == '') {
      errorNumber.innerHTML = "Can't be blank";
      $(".error-message").css('display', 'block');      
    }

    if (expDateMM == '') {
      errorDate.innerHTML = "Can't be blank";
      $(".error-message").css('display', 'block');      
    }

    if (expDateYY == '') {
      errorDate.innerHTML = "Can't be blank";
      $(".error-message").css('display', 'block');      
    }

    if (cvc == '') {
      errorCVC.innerHTML = "Can't be blank";
      $(".error-message").css('display', 'block');      
    }

    if (name == '' || cardNumber == '' || expDateMM == '' || expDateYY == '' || cvc == '') {
      alert('Por favor, preencha todos os campos');
      return;
    }

    // Checks if the credit card number is valid
    if (!validateCardNumber(cardNumber)) {
      alert('O número do cartão de crédito é inválido');
      return;
    }

    // Checks if the card expiration date is valid
    if (!validateExpDate(expDateMM, expDateYY)) {
      alert('A data de validade do cartão é inválida');
      return;
    }

    // Checks if the CVC is valid
    if (!validateCVC(cvc)) {
      alert('O CVC é inválido');
      return;
    }

    // If all checks pass, the form can be submitted
    alert('Formulário válido! Enviando...');
  });
});

    // Function to validate the credit card number
    function validateCardNumber(cardNumber) {
        // Remove all whitespace from credit card number
        cardNumber = cardNumber.replace(/\s/g, '');

        // Checks that the credit card number is between 12 and 19 digits long
        if (cardNumber.length < 12 || cardNumber.length > 19) {
          return false;
        }

        // Checks if the credit card number only contains digits
        if (/[^\d]/.test(cardNumber)) {
          return false;
        }

        // Calculates the check digit of the credit card number
        var checksum = 0;
        for (var i = cardNumber.length - 1; i >= 0; i--) {
          var digit = parseInt(cardNumber.charAt(i), 10);
          if (i % 2 == cardNumber.length % 2) {
            digit *= 2;
            if (digit > 9) {
              digit -= 9;
            }
          }
          checksum += digit;
        }

        // Checks if the check digit is valid
        if (checksum % 10 != 0) {
          return false;
        }

  
      return true;
    }

    // Function to validate the card expiration date
    function validateExpDate(expDateMM, expDateYY) {
      // Checks if expiration date fields are filled
      if (expDateMM.length == 0 || expDateYY.length == 0) {
        return false;
      }

      // Checks if the month is a number between 1 and 12
      if (!/^\d+$/.test(expDateMM) || parseInt(expDateMM, 10) < 1 || parseInt(expDateMM, 10) > 12) {
        return false;
      }

      // Checks if the year is a 2-digit number
      if (!/^\d{2}$/.test(expDateYY)) {
        return false;
      }

      // Calculates full year based on 2-digit year
      var currentYear = new Date().getFullYear().toString().substr(2);
      var expYear = parseInt(expDateYY, 10);
      expYear += 2000;
      
      // Checks that the expiration date is not earlier than the current date
      var currentDate = new Date();
      var expDate = new Date(expYear, expDateMM - 1);
      if (expDate < currentDate) {
        return false;
      }

      return true;
    }

    // Function to validate the CVC
    function validateCVC(cvc) {
      // The CVC must have 3 digits
      if (cvc.length != 3) {
        return false;
      }

      // CVC can only contain digits
      if (/[^\d]/.test(cvc)) {
        return false;
      }

      return true;
    }



function massValidate() {
  function validateName() {
    let cardholderExp = /^[A-Z a-z]+$/;
    let errorMsg = document.getElementById("errorMsg");
    if (cardholder.value.match(cardholderExp)) {
      errorMsg.textContent = "";
    } else {
      errorMsg.innerHTML = "Please enter cardholder name!";
    }
  }
  function validateCard() {
    let cardNumError = document.getElementById("card-num-error");
    if (cardNumber.value.length > 0 && cardNumber.value.length < 16) {
      cardNumError.innerHTML = "Wrong format!";
    } else if (cardNumber.value == "") {
      cardNumError.innerHTML = "Can't be blank!";
    } else {
      cardNumError.innerHTML = "";
    }
  }
  function validateExpiry() {
    let expMonth = /^(0[0-9]|1[1-2]){2}$/;
    let expYear = /^[0-9][0-2]{4}$/;

    if (expiry[0].value.match(expMonth)) {
      expiryErrorMsg.innerHTML = "";
    } else if (
      expiry[0].value.match(expMonth) &&
      expiry[1].value.match(expYear)
    ) {
      expiryErrorMsg.innerHTML = "";
    } else if (expiry[0] == "") {
      expiryErrorMsg.innerHTML = "Can't be blank!";
    } else {
      expiryErrorMsg.innerHTML = "Wrong format!";
    }
  }
  function validateCvc() {
    let cvcErrorMsg = document.getElementById("error-cvc");
    let cvcExp = /^[0-9]{3}$/;
    if (cvc.value === "") {
      cvcErrorMsg.innerHTML = "Can't be blank";
    } else if (cvc.value.match(cvcExp)) {
      cvcErrorMsg.innerHTML = "";
    } else {
      cvcErrorMsg.innerHTML = "Wrong format!";
    }
  }
  validateCard();
  validateName();
  validateExpiry();
  validateCvc();
  if (
    nameOnCard.innerHTML == cardholder.placeholder ||
    numOnCard.innerHTML == cardNumber.placeholder ||
    expMM.innerHTML == "00" ||
    expYY.innerHTML == "0000" ||
    cvcDisplay.innerHTML == "000" ||
    (cardNumber.value.length > 0 && cardNumber.value.length < 16)
  ) {
    return false;
  } else {
    return true;
  }
}
// Submit Button

submit.addEventListener("click", function () {
  massValidate();
  if (massValidate() == false) {
    event.preventDefault();
  } else {
    event.preventDefault();

    form.classList.add("hidden");
    thankYouSection.classList.remove("hidden");
  }
  //   console.log(cardNumber.value.length > 0 && cardNumber.value.length < 16);
});

// Continue Button

continueBtn.addEventListener("click", function () {
  event.preventDefault();
  thankYouSection.classList.add("hidden");
  form.classList.remove("hidden");
  nameOnCard.innerHTML = cardholder.placeholder;
  numOnCard.innerHTML = cardNumber.placeholder;
  expMM.innerHTML = "00";
  expYY.innerHTML = "0000";
  cvcDisplay.innerHTML = "000";
  cardholder.value = "";
  cardNumber.value = "";
  expiry[0].value = "";
  expiry[1].value = "";
  cvc.value = "";
  expiryErrorMsg.innerHTML = "";
});