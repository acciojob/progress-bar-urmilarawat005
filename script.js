 const circles = document.querySelectorAll('.circle');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentActive = 0;

    // Function to update active circle and button states
    function updateProgress() {
      circles.forEach((circle, index) => {
        if (index < currentActive) {
          circle.classList.add('active');
        } else {
          circle.classList.remove('active');
        }
      });

      prevBtn.disabled = currentActive === 0;
      nextBtn.disabled = currentActive === circles.length - 1;
    }

    // Initial state
    updateProgress();

    // Event listeners for buttons
    nextBtn.addEventListener('click', () => {
      if (currentActive < circles.length - 1) {
        currentActive++;
        updateProgress();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentActive > 0) {
        currentActive--;
        updateProgress();
      }
    });
    