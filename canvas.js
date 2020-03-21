window.addEventListener('load', () => {
    // console.log('hello');

    // get the canvas
    const canvas = document.querySelector('#canvas');

    // define the context/ environment we are working in 2D/ 3D
    const ctx = canvas.getContext('2d');
    
    // resizing // window.addEventListener('resize' function)
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // make a square
    // ctx.fillRect(50, 50, 150, 150);

    // outline rectangle
    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 3;
    // ctx.strokeRect(250, 150, 100, 200);

    // ctx.strokeStyle = 'blue';
    // ctx.lineWidth = 5;
    // ctx.strokeRect(270, 170, 100, 200);

    // Draw lines
    // ctx.beginPath();    
    // ctx.moveTo(100, 100);
    // ctx.lineTo(300, 100);
    // ctx.lineTo(300, 250);
    // ctx.closePath();
    // ctx.stroke();

    // variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // Event Listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw);




});
