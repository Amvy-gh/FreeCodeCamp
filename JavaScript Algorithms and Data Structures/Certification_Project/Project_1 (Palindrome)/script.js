const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const exampleItems = document.querySelectorAll('.examples li');

checkBtn.addEventListener('click', checkPalindrome);

textInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkPalindrome();
  }
});

exampleItems.forEach(item => {
  item.addEventListener('click', function() {
    textInput.value = this.dataset.example;
    checkPalindrome();
  });
});

function checkPalindrome() {
  const inputText = textInput.value.trim();

  if (!inputText) {
    alert('Please input a value');
    return;
  }

  const isPalindrome = isPalindromeCheck(inputText);

  resultDiv.textContent = `${inputText} is ${isPalindrome ? 'a' : 'not a'} palindrome`;
  resultDiv.className = isPalindrome ? 'palindrome' : 'not-palindrome';
  resultDiv.classList.remove('hidden');
}

function isPalindromeCheck(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}
