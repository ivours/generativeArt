function main(ctx, canvas) {

	canvas.width = 1920
	canvas.height = 1080

	ctx.fillStyle = "black";
  	ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.translate(canvas.width/2, canvas.height/2);

  	fibonacciArray = fibonacci(1000)

  	var from = {x: 0, y: 0};
  	var to = {x: 0, y: 0};

  	for(var i = 0; i<500; i++)
  	{
  		fibonacciArray.map( function(item, index) {
  		
  		to.x = Math.random() * item * plusOrMinus()
  		to.y = Math.random() * item * plusOrMinus()

  		drawLine(ctx, from, to, getRandomColor())

  		from.x = to.x
  		from.y = to.y

  		})

  	}

}