const pinGenerator = document.getElementById('pin-generator');
const pinTypeInput = document.getElementById('type-input');

function generatePin() {
  let randomPin = Math.floor(Math.random() * 10000) + '';
  if (randomPin.length === 4) {
    pinGenerator.value = randomPin;
  } else {
    generatePin();
  }

  displayStyle('notify-match', 'none');
  displayStyle('notify-not-match', 'none');
}

function typePin(value) {
  switch (value) {
    case 0:
      pinTypeInput.value += 0;
      break;
    case 1:
      pinTypeInput.value += 1;
      break;
    case 2:
      pinTypeInput.value += 2;
      break;
    case 3:
      pinTypeInput.value += 3;
      break;
    case 4:
      pinTypeInput.value += 4;
      break;
    case 5:
      pinTypeInput.value += 5;
      break;
    case 6:
      pinTypeInput.value += 6;
      break;
    case 7:
      pinTypeInput.value += 7;
      break;
    case 8:
      pinTypeInput.value += 8;
      break;
    case 9:
      pinTypeInput.value += 9;
      break;
    case 'c':
      pinTypeInput.value = '';
      break;
  }

  if (value === '<') {
    let pinTypeInputValue = pinTypeInput.value;
    if (pinTypeInputValue.length > 0) {
      pinTypeInputValue = pinTypeInputValue.substring(
        0,
        pinTypeInputValue.length - 1
      );
      pinTypeInput.value = pinTypeInputValue;
    }
  }
}

function typePinBtn() {
  if (pinGenerator.value === pinTypeInput.value) {
    displayStyle('notify-match', 'block');
    displayStyle('notify-not-match', 'none');
    pinGenerator.value = '';
    pinTypeInput.value = '';
  } else {
    displayStyle('notify-not-match', 'block');
  }
}

function displayStyle(id, property) {
  document.getElementById(id).style.display = property;
}
