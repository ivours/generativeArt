function main (ctx, canvas) {

  canvas.width = 1920
  canvas.height = 1080

	centro_x = 960;
	centro_y = 540;

	ctx.fillStyle = "#4CFF90";
	ctx.globalAlpha = 0.7;
	ctx.fillRect( 0, 0, canvas.width, canvas.height);
	
  radio_y = 200000;
  rotation = 30 * Math.PI/180;
  lineWidth = 1;

  globalAlpha = 1;

  //void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);

  for(var i = 0; i <= 700; i ++)
	{
    radio_y = radio_y - radio_y * 0.02;
    rotation = rotation + 7 * Math.PI / 180;
    lineWidth = lineWidth - lineWidth * 0.002; 
    globalAlpha = globalAlpha - 0.0015;

    ctx.beginPath();
    ctx.ellipse(centro_x, centro_y, 150, radio_y, rotation, 150, 359);
    ctx.strokeStyle = getRandomColor();
		ctx.globalAlpha = globalAlpha;
    ctx.stroke();
  }

  radio_y = 200000;
  rotation = 120 * Math.PI/180;
  lineWidth = 1;
  globalAlpha = 1;

  for(var j = 0; j <= 700; j ++)
	{
    radio_y = radio_y - radio_y * 0.02;
    rotation = rotation + 7 * Math.PI / 180;
    lineWidth = lineWidth - lineWidth * 0.002; 
    globalAlpha = globalAlpha - 0.0015;

    ctx.beginPath();
    ctx.globalAlpha = globalAlpha;
    ctx.ellipse(centro_x, centro_y, 150, radio_y, rotation, 150, 359);

    ctx.strokeStyle = getRandomColor();
		ctx.globalAlpha = globalAlpha;

    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

}

function getRandomColor() {
/*
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
*/
		colores = ["#007F30","#267F48","#00CC4D"];
		
    return colores[Math.floor(Math.random() * 3)];
}
