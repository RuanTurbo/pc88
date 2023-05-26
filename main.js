
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais da bola e do buraco.
ball_X=0;
ball_y=0;
hole_x=800;
hole_y=400;
block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png", function(img){
		hole_obj = Img;
		hole_obj.scaleToHeight(50);
		hole_obj.scaleToWidth(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
	});
	canvas.add(hole_obj);
	});
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	ball_obj = Img;
		ball_obj.scaleToHeight(50);
		ball_obj.scaleToWidth(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
	});
	canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
		document.getElementById("myCanva").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
	}

	function left()
	{
		if(ball_X >5)
		{
			// Escreva o código para mover a bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
		}
	}
	
}

