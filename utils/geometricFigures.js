function drawCircle(ctx, center, radius) {

		ctx.beginPath();
    	ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
   		ctx.fillStyle = 'green';
    	ctx.fill();
    	ctx.lineWidth = 5;
    	ctx.strokeStyle = '#003300';
    	ctx.stroke();

	}