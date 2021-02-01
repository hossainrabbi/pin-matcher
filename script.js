const pinGenerator = document.getElementById('pin-generator');
const pinTypeInput = document.getElementById('type-input');
const tryCount = document.getElementById('try');

function generatePin() {
  let randomPin = Math.floor(Math.random() * 10000) + '';
  if (randomPin.length === 4) {
    pinGenerator.value = randomPin;
  } else {
    generatePin();
  }

  displayStyle('notify-match', 'none');
  displayStyle('notify-not-match', 'none');
  displayStyle('action-left', 'none');
  pinTypeInput.value = '';
  tryCount.innerText = 4;
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
  const tryCountNumber = parseInt(tryCount.innerText);
  if (pinGenerator.value === pinTypeInput.value) {
    if (pinGenerator.value == '') {
      alert('Please Enter Generate Pin Button');
    } else {
      displayStyle('notify-match', 'block');
      displayStyle('notify-not-match', 'none');
      displayStyle('action-left', 'none');
      pinGenerator.value = '';
      pinTypeInput.value = '';
    }
  } else {
    displayStyle('notify-not-match', 'block');
    displayStyle('action-left', 'block');
    if (tryCountNumber > 1) {
      tryCount.innerText = tryCountNumber - 1;
    } else {
      alert('Please Enter Again Generate Pin Button');
      displayStyle('action-left', 'none');
      window.location.reload();
    }
  }
}

function displayStyle(id, property) {
  document.getElementById(id).style.display = property;
}
