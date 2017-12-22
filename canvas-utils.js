let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let mouseX = null;
let mouseY = null;

(function renderFrame() {
	requestAnimationFrame(renderFrame);
	clearCanvas();
	drawMousePosition();
}());

canvas.addEventListener('mousemove', updateMousePosition);

function updateMousePosition(event) {
	let rect = canvas.getBoundingClientRect();
	let root = document.documentElement;
	mouseX = event.clientX - rect.left - root.scrollLeft;
	mouseY = event.clientY - rect.top - root.scrollTop;
}

function drawMousePosition() {
	ctx.fillStyle = 'black';
	ctx.font = '18px Arial';
	ctx.fillText(`${mouseX}, ${mouseY}`, mouseX, mouseY);
}

function drawLine(startX, startY, endX, endY, color, thickness) {
	if(color) {
		ctx.strokeStyle = color;
	}
	if(thickness) {
		ctx.lineWidth = thickness;
	}
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawRectangleFull(positionX, positionY, width, height, color) {
	if(color) {
		ctx.fillStyle = color;
	}
	ctx.fillRect(positionX, positionY, width, height);
}

function drawRectangleEmpty(positionX, positionY, width, height, borderColor, borderThickness) {
	if(borderColor) {
		ctx.strokeStyle = borderColor;
	}
	if(borderThickness) {
		ctx.lineWidth = borderThickness;
	}
	ctx.beginPath();
	ctx.rect(positionX, positionY, width, height); 
	ctx.stroke();
}

function drawCircleFull(centerX, centerY, radius, color) {
	if(color) {
		ctx.fillStyle = color;
	}
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fill();
}

function drawCircleEmpty(centerX, centerY, radius, borderColor, borderThickness) {
	if(borderColor) {
		ctx.strokeStyle = borderColor;
	}
	if(borderThickness) {
		ctx.lineWidth = borderThickness;
	}
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	ctx.stroke();
}

function drawTriangleFull(firstX, firstY, secondX, secondY, thirdX, thirdY, color) {
	if(color) {
		ctx.fillStyle = color;
	}
    ctx.beginPath();
    ctx.moveTo(firstX, firstY);
    ctx.lineTo(secondX, secondY);
    ctx.lineTo(thirdX, thirdY);
    ctx.fill();
}

function drawTriangleEmpty(firstX, firstY, secondX, secondY, thirdX, thirdY, borderColor, borderThickness) {
	if(borderColor) {
		ctx.strokeStyle = borderColor;
	}
	if(borderThickness) {
		ctx.lineWidth = borderThickness;
	}
    ctx.beginPath();
    ctx.moveTo(firstX, firstY);
    ctx.lineTo(secondX, secondY);
    ctx.lineTo(thirdX, thirdY);
    ctx.lineTo(firstX, firstY);
    ctx.stroke();
}

function drawImage(imgSource, positionX, positionY, width, height) {
	let img = new Image();
	img.src = imgSource;
	window.onload = function() {
		if(width && height) {
			ctx.drawImage(img, positionX, positionY, width, height);
		} else {
			ctx.drawImage(img, positionX, positionY);
		}
	}
}

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
