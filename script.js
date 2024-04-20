document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const line = document.getElementById('line');
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const clearBtn = document.getElementById('clear');
    const errorDiv = document.getElementById('error');
  
    let count = 0;
  
    function updateDisplay() {
      const textWidth = display.offsetWidth;
      line.style.width = textWidth + 'px';
  
      display.textContent = `The current counter value is: ${count}`;
      if (count < 0) {
        decrementBtn.style.display = 'none';
        errorDiv.textContent = 'Error: cannot go below 0';
        errorDiv.style.display = 'block';
      } else {
        decrementBtn.style.display = 'inline-block';
        errorDiv.style.display = 'none';
      }
      if (count <= 0) {
        clearBtn.style.display = 'none';
      } else {
        clearBtn.style.display = 'inline-block';
      }
    }
  
    updateDisplay();
  
    incrementBtn.addEventListener('click', function() {
      count++;
      updateDisplay();
    });
  
    decrementBtn.addEventListener('click', function() {
      count--;
      updateDisplay();
    });
  
    clearBtn.addEventListener('click', function() {
      count = 0;
      updateDisplay();
    });
  });
  