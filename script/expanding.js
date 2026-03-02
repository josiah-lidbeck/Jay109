
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveFromAllPanels();
        panel.classList.add('active');
    });
});

function removeActiveFromAllPanels() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
