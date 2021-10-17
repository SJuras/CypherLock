// Password Strength Tester
const strengthMeter = document.getElementById('strength-meter');
const passwordInput = document.getElementById('password-input');
const reasonsContainer = document.getElementById('reasons');

passwordInput.addEventListener('input', updateStrengthMeter);
updateStrengthMeter();

function updateStrengthMeter(){
  const weaknesses = calculatePasswordStrength(passwordInput.value);
  let strength = 100;
  reasonsContainer.innerHTML = '';
  weaknesses.forEach(weakness => {
    if (weakness == null) return;
    strength -= weakness.deduction;
    const messageElement = document.createElement('div');
    messageElement.innerText = weakness.message;
    reasonsContainer.appendChild(messageElement);
  });
  strengthMeter.style.setProperty('--strength', strength);
}

function calculatePasswordStrength(password){
  const weaknesses = [];
  weaknesses.push(lengthWeakness(password));
  weaknesses.push(lowercaseWeakness(password));
  weaknesses.push(uppercaseWeakness(password));
  weaknesses.push(numbersWeakness(password));
  weaknesses.push(specialCharactersWeakness(password));
  weaknesses.push(repeatCharactersWeakness(password));
  return weaknesses;
}

// Weaknesses due to password length (number of characters).
function lengthWeakness(password) {
  const length = password.length;

  if(length <= 5){
    return{
      message: 'Your password is too short',
      deduction: 40
    }
  }

  if(length <= 10){
    return{
      message: 'Your password could be longer',
      deduction: 15
    }
  }
}

// Weakness of lack of lowerCase letters
function lowercaseWeakness(password){
  const matches = password.match(/[a-z]/g) || [];

// does the password have any lowerCase characters
  if(matches.length === 0){
    return{
      message: 'Your password has no lower case characters',
      deduction: 20
    }
  }
// does the password have enough lowerCase characters
  if(matches.length <= 2){
    return{
      message: 'Your password could use more lower case characters',
      deduction: 5
    }
  }
}

// Weakness of lack of upperCase letters
function uppercaseWeakness(password){
  const matches = password.match(/[A-Z]/g) || [];

// does the password have any lowerCase characters
  if(matches.length === 0){
    return{
      message: 'Your password has no upper case characters',
      deduction: 20
    }
  }
// does the password have enough upperCase chacaters
  if(matches.length <= 2){
    return{
      message: 'Your password could use more upper case characters',
      deduction: 5
    }
  }
}

// Weakness of lack of numbers
function numbersWeakness(password){
  const matches = password.match(/[0-9]/g) || [];

// does the password have any numbers
  if(matches.length === 0){
    return{
      message: 'Your password has no numbers',
      deduction: 20
    }
  }
// does the password have enough numbers
  if(matches.length <= 2){
    return{
      message: 'Your password could use more numbers',
      deduction: 5
    }
  }
}

// Weakness of lack of special characters
function specialCharactersWeakness(password){
  const matches = password.match(/[^0-9a-zA-Z\s]/g) || [];

// does the password have any special characters
  if(matches.length === 0){
    return{
      message: 'Your password has no special chacaters',
      deduction: 20
    }
  }
// does the password have enough special characters
  if(matches.length <= 2){
    return{
      message: 'Your password could use more special characters',
      deduction: 5
    }
  }
}

// Weakness of repeat characters (same character in a row, eg. "AA")
function repeatCharactersWeakness(password){
  const matches = password.match(/(.)\1/g) || [];
  if(matches.length > 0){
    return{
      message: 'Your password has repeat characters',
      deduction: matches.length * 10
    }
  }
}
