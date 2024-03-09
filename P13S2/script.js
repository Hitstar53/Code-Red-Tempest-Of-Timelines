//Factory function to make keypad
const keypad = (function () {
  let inputs = []; //Stores inputs of the user for later use

  //Initalises the keypad
  const create = () => {
    const keyboard = document.querySelector('.keys');
    addNumericKeys(keyboard);
    addLastRow(keyboard);
  };

  //Adds all numeric keys other than 0
  const addNumericKeys = (keyboard) => {
    for (let i = 9; i > 0; i--) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.setAttribute('key', i);
      key.textContent = i;
      keyboard.appendChild(key);
    }
  };

  //Adds elements of the last row
  const addLastRow = (keyboard) => {
    const clearKey = document.createElement('div');
    const zeroKey = document.createElement('div');
    const backspaceKey = document.createElement('div');
    clearKey.classList.add('key');
    clearKey.classList.add('clear');
    zeroKey.classList.add('key');
    backspaceKey.classList.add('key');
    backspaceKey.classList.add('backspace');

    clearKey.setAttribute('key', 'clear');
    zeroKey.setAttribute('key', '0');
    backspaceKey.setAttribute('key', 'backspace');

    clearKey.textContent = 'clear';
    zeroKey.textContent = 0;
    backspaceKey.innerHTML = '<i class="fa-solid fa-delete-left"></i>';

    keyboard.append(clearKey, zeroKey, backspaceKey);
  };

  //Listens for any clicks
  const addListeners = () => {
    const keys = document.querySelectorAll('.key');
    Array.from(keys).forEach((key) => {
      key.addEventListener('click', (e) => {
        addInput(e.target);
        updateScreen();
        if (inputs.length == 20) {
          checkCode();
          inputs = [];
        }
      });
    });
  };

  //To check if entered code is valid
  const checkCode = () => {
    if (inputs.reverse().join('') == '25501789196820303170') {
      displaySuccess();
    } else {
      displayIncorrect();
    }
  };
  //Function to put keypad inputs into the inputs array
  const addInput = (key) => {
    if (key.getAttribute('key') == 'clear') {
      inputs = [];
    } else if (key.getAttribute('key') == 'backspace') {
      inputs.shift();
    } else if (key.nodeName == 'I') {
      inputs.shift();
    } else {
      inputs.unshift(key.getAttribute('key'));
    }
  };

  //Function to display message on incorrect code
  const displayIncorrect = () => {
    const screen = document.querySelector('.screen');
    screen.firstChild.textContent = 'INCORRECT CODE';
  };

  //Function to display message on correct code
  const displaySuccess = () => {
    const screen = document.querySelector('.screen');
    screen.firstChild.textContent = 'SUCCESS!';
  };

  //Function to update screen with formated code
  const updateScreen = () => {
    const screen = document.querySelector('.screen');
    let string = '____________________';
    for (let i = 0; i < inputs.length; i++) {
      let index = string.length - 1 - i;
      string =
        string.substring(0, index) + inputs[i] + string.substring(index + 1);
    }
    let formatedString = '';
    for (let i = 0; i < string.length; i++) {
      if (i == 3 || i == 7 || i == 11 || i == 15) {
        formatedString = formatedString.concat('', `${string[i]} `);
      } else {
        formatedString = formatedString.concat('', string[i]);
      }
    }
    screen.firstChild.textContent = formatedString;
  };
  return { create, addListeners };
})();

//Function calls
keypad.create();
keypad.addListeners();

//Hint as per TPA document
window.addEventListener('load', () =>
  console.log(
    'Hello there! Must have been a pain getting back here. Enter all the years you have been to while chasing Andwyn in chronological order. Signs can be ignored.'
  )
);
