function main(ctx, canvas) {

	canvas.width = 1920
	canvas.height = 1080

	ctx.fillStyle = "black";
  	ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.translate(canvas.width/2, canvas.height/2);

  	fibonacciArray = fibonacci(500)

  	var from = {x: 0, y: 0};
  	var to = {x: 0, y: 0};

  	for(var i = 0; i<1000; i++)
  	{
  		fibonacciArray.map( function(item, index) {
  		
  		to.x = item * 300 * Math.random() * plusOrMinus()
  		to.y = fibonacciFunction(item) * 100 * plusOrMinus()   

  		drawLine(ctx, from, to, getRandomColor())

  		from.x = to.x
  		from.y = to.y

  		})
  	}
}
