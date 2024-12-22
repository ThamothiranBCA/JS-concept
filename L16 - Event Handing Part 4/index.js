window.addEventListener('resize',() => {
    const dimensions = `Window dimensions: ${window.innerWidth}px x ${window.innerHeight}px`;
    document.getElementById('dimensions').textContent = dimensions;
});