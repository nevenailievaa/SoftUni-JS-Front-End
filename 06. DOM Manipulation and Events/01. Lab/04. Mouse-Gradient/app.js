function attachGradientEvents() {
    let resultElement = document.getElementById('result');
    let gradientElement = document.getElementById('gradient'); 

    gradientElement.addEventListener('mousemove', (e) => {
        let currentPosition = e.offsetX;
        let elementWidth = e.currentTarget.clientWidth;

        let percent = Math.floor((currentPosition / elementWidth) * 100);
        resultElement.textContent = `${percent}%`;
    });
}