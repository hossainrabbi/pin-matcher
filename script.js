const pinGenerator = document.getElementById('pin-generator');
const pinTypeInput = document.getElementById('type-input');
const matchNotify = document.getElementById('notify-match');
const NotMatchNotify = document.getElementById('notify-not-match');

function generatePin() {
  let randomPin = Math.floor(Math.random() * 10000);
  pinGenerator.value = randomPin;
  matchNotify.style.display = 'none';
  NotMatchNotify.style.display = 'none';
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
    NotMatchNotify.style.display = 'none';
    matchNotify.style.display = 'block';
    pinGenerator.value = '';
    pinTypeInput.value = '';
  } else {
    NotMatchNotify.style.display = 'block';
  }
}
