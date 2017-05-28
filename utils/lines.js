function drawLine(ctx, from, to, color) {

	ctx.beginPath();
	ctx.moveTo(from.x,from.y);
	ctx.lineTo(to.x,to.y);
	ctx.strokeStyle = color;
	ctx.lineWidth = 0.1;
	ctx.stroke();

}