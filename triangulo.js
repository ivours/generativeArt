function main (ctx, canvas) {

	canvas.width = 1920
  canvas.height = 1080

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canvas.width,canvas.height);

	ctx.translate(canvas.width/2, canvas.height/2);

	x = 0;
  y = 0;
  n = 8;
  iteraciones = 20000;

  for( var i = 0; i<iteraciones; i++)
	{
	  radio = getRandomInt(1,20000);
	  angulo = 0; //getRandomInt(0,360);
	  polinomio(x,y,radio,angulo,n);
  }

}

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gradosARadianes(grados)
{
	return (grados * Math.PI) / 180;
}

function polinomio(x,y,radio,angulo,n)
{
	var a = gradosARadianes(angulo);
	
	ctx.beginPath();

	for(var i=1; i<=n+1; i++)
	{
		xVerticePolares = radio;
		yVerticePolares = a + (2 * Math.PI * i) / n;

		ctx.strokeStyle = getRandomColor();
		ctx.lineTo(xVerticeCartesianas(xVerticePolares,yVerticePolares,x), yVerticeCartesianas(xVerticePolares,yVerticePolares,y));
		ctx.moveTo(xVerticeCartesianas(xVerticePolares,yVerticePolares,x), yVerticeCartesianas(xVerticePolares,yVerticePolares,y));
	}
	
	ctx.closePath();
	ctx.stroke();

}

function xVerticeCartesianas(xVerticePolares,yVerticePolares,x)
{
	return Math.floor(xPolaresACartesianas(xVerticePolares, yVerticePolares) + x);
}

function yVerticeCartesianas(xVerticePolares,yVerticePolares,y)
{
	return Math.floor(yPolaresACartesianas(xVerticePolares, yVerticePolares) + y);
}

function xPolaresACartesianas(p,o)
{
	return p * Math.cos(o);
}

function yPolaresACartesianas(p,o)
{
	return p * Math.sin(o);
}

function p(x,y)
{
	return (Math.sqrt(Math.pow(x,2) + Math.pow(y,2)));
}

function o(x,y)
{
		if(x!=0)
	{
		o = Math.tan(y/x);	
	}
	else
	{
		if( (x == 0) && (y>0) )
		{
			o = Math.PI / 2;
		}
		else
		{
			o = (- Math.PI / 2);
		}
	}
	return o;
}

function getRandomColor() 
{
		colores = ["red","brown"];
		
    return colores[Math.floor(Math.random() * 3)];
}
