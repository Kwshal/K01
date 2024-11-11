function getDirections(code) {
    var list = ["0", "1", "R", "r", "L", "l", "a", "A", "b", "B", "c", "C", "d", "D", "e", "s"];
    const directions = {
        '-1': 'left',
        '0': 'straight',
        '+1': 'right',
        '+': 'half right',
        '-': 'half left',
        'r': 'skip n right',
        'l': 'skip n left',
        'R': 'last right',
        'L': 'last left',
        'a': 'right left',
        'b': 'right left left right',
        'c': 'right left left',
        '-a': 'left right',
        '-b': 'left right right left',
        '-c': 'left right right',
        'e': 'end',
        'T': 'T point',
        'x': 'cross-section'
    };
    return code.split(' ').map(letter => directions[letter]).join(', ');
}

function drawPath(path) {
    const canvas = document.getElementById('pathCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

    // Example drawing logic based on path
    ctx.beginPath();
    ctx.moveTo(50, 50); // Starting point
    const steps = path.split(', ');

    steps.forEach(step => {
        switch (step.trim()) {
            case 'left':
                ctx.lineTo(ctx.currentX - 50, ctx.currentY);
                ctx.currentX -= 50;
                break;
            case 'right':
                ctx.lineTo(ctx.currentX + 50, ctx.currentY);
                ctx.currentX += 50;
                break;
            case 'straight':
                ctx.lineTo(ctx.currentX, ctx.currentY - 50);
                ctx.currentY -= 50;
                break;
            // Add more cases as needed
        }
    });

    ctx.stroke();
}

document.addEventListener('DOMContentLoaded', () => {
    const locationList = document.getElementById('locationList');
    locationList.addEventListener('click', (event) => {
        if (event.target.classList.contains('location-chunk')) {
            const path = event.target.querySelector('.location-path').textContent.trim();
            const directions = getDirections(path);
            drawPath(directions);
        }
    });
});

console.log(getDirections("-1 1 -1 r"));
// console.log(01 === 1);



// Function to retrieve and display location data from Firebase
