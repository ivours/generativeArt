
function main (ctx, canvas) {

  canvas.width = 1280
  canvas.height = 720

  var colors = ['yellow', 'red', 'green', 'blue', 'purple', 'black', 'pink', 'grey', 'gold', 'brown']
  var squareSize = 20;

  for(var j = 0; j<1280; j+=squareSize)
  {
	  for(var i = 0 + j; i<1280; i+=squareSize)
	  {
		ctx.fillStyle = getRandomColor()
	  	ctx.fillRect(i, j, squareSize, squareSize)

	  	ctx.fillStyle = getRandomColor()
	  	ctx.fillRect(j, i, squareSize, squareSize)

	  	i+=squareSize;

	  	ctx.fillStyle = getRandomColor()
	  	ctx.fillRect(i, j, squareSize, squareSize)  	

	  	ctx.fillStyle = getRandomColor()
	  	ctx.fillRect(j, i, squareSize, squareSize)
	  }  	
  }

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}