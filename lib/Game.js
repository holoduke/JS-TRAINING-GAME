Game = function(p1,p2,m,render)
{
	render = render;
	player1 = p1;
	player2 = p2;
	map = m;
	var tick = null;
	
	this.run = function()
	{
		player1.prepareInput();
		player2.prepareInput();
		gameLoop();
	}
	
	var gameLoop = function()
	{
		if (!tick || new Date().getTime() - tick > 1000)
		{	
			tick = +new Date();
			
			p1.readInput();
			p2.readInput();
			
			map.moveBall();			
			map.colition();
			
			render.draw();
			//this.render.draw();
			console.log('run')
		}
		
		setTimeout(function(){
			
			gameLoop();	
		},20)	
	}
	
	var processInput = function()
	{
		
	}
	
}