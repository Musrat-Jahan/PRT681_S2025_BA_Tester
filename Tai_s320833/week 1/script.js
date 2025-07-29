let count = 0;

function updateDisplay() {
  document.getElementById('count').innerText = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

// Export for testing
if (typeof module !== 'undefined') {
  module.exports = { increment: () => ++count, decrement: () => --count, getCount: () => count };
}
