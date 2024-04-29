const textElement = document.querySelector('.sec-text');
const textInput = document.getElementById('textInput');
const texts = ['Faris Walid.', 'Marina Ehab.', 'Abdelrahman.'];
const interval = 100; // Adjust the interval as needed
const delayAfterText = 1000; // Adjust the delay after each text as needed

const textLoad = () => {
  let currentIndex = 0;
  const updateText = () => {
    const currentText = texts[currentIndex];
    for (let i = 0; i <= currentText.length; i++) {
      setTimeout(() => {
        textElement.textContent = currentText.slice(0, i);
      }, i * interval);
    }

    setTimeout(() => {
      deleteText(currentText.length);
    }, currentText.length * interval + delayAfterText);
  };

  const deleteText = (length) => {
    for (let i = length; i >= 0; i--) {
      setTimeout(() => {
        textElement.textContent = texts[currentIndex].slice(0, i);
      }, (length - i) * interval);
    }

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      updateText();
    }, length * interval);
  };

  updateText();
};

textLoad();
