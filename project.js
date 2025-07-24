//Temperature slider
let sliderActivated = false;
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('range');
    const valueDisplay = document.querySelector('.value');
    const allElements = document.querySelectorAll('.dv');

    //color update
  function updateElementStates() {
    if (!sliderActivated) return; 
      const temp = parseFloat(slider.value);
      valueDisplay.textContent = temp.toFixed(0);

      allElements.forEach(el => {
          const mp = el.dataset.mp ? parseFloat(el.dataset.mp) : null;
          const bp = el.dataset.bp ? parseFloat(el.dataset.bp) : null;

          
          el.classList.remove('state-solid', 'state-liquid', 'state-gas', 'state-unknown');
          
          
          if (mp === null || bp === null) {
              el.classList.add('state-unknown');
          } else if (temp < mp) {
              el.classList.add('state-solid');
          } else if (temp >= mp && temp < bp) {
              el.classList.add('state-liquid');
          } else {
              el.classList.add('state-gas');
          }
      });
  }
      
    slider.addEventListener('mousedown', () => {
    sliderActivated = true;
    updateElementStates(); 
    }, { once: true });
    slider.addEventListener('input', updateElementStates);

    
    updateElementStates();
});

//toggle box
function toggleBox(event, id) {
  const target = event.currentTarget;
  const rect = target.getBoundingClientRect();
  const box = document.getElementById(id);

  
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

    
    let left = rect.right + offset;
    if (left + boxWidth > windowWidth) {
      left = rect.left - boxWidth - offset;
    }

    
    let top = rect.top + window.scrollY;
    if (top + boxHeight > windowHeight) {
      top = windowHeight - boxHeight - offset;
    }

    box.style.top = `${top}px`;
    box.style.left = `${left}px`;
    box.style.display = 'block';
  }
  
}