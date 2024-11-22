document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    // Add click listener to expand a box
    box.addEventListener('click', () => {
      // Expand the clicked box
      box.classList.add('expanded');

      // Hide all other boxes
      boxes.forEach((b) => {
        if (b !== box) {
          b.classList.add('hidden');
        }
      });
    });

    // Add click listener for the close button
    const closeButton = box.querySelector('.close-button');
    closeButton.addEventListener('click', (event) => {
      // Stop event propagation to avoid triggering the box click
      event.stopPropagation();

      // Collapse the expanded box
      box.classList.remove('expanded');

      // Show all other boxes
      boxes.forEach((b) => {
        b.classList.remove('hidden');
      });
    });
  });
});
