Render = function()
{
	this.draw = function()
	{
		console.log('draw');
	}
}


CssRender = function(){
	
};

CssRender.prototype = new Render();
{
	
}
CssRender.prototype.constructor=CssRender;
