function toggleBox(event, id) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const box = document.getElementById(id);

  // Hide all others
  document.querySelectorAll('.toggle-box').forEach(b => {
    if (b !== box) b.style.display = 'none';
  });

  if (box.style.display === 'block') {
    box.style.display = 'none';
  } else {
    const offset = 10;
    const boxWidth = 400;
    const boxHeight = 400;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Horizontal placement
    let left = rect.right + offset;
    if (left + boxWidth > windowWidth) {
      left = rect.left - boxWidth - offset;
    }

    // Vertical placement
    let top = rect.top + window.scrollY;
    if (top + boxHeight > windowHeight) {
      top = windowHeight - boxHeight - offset;
    }

    box.style.top = `${top}px`;
    box.style.left = `${left}px`;
    box.style.display = 'block';
  }
}