/**
 * @author capek
 * easelJSでprocessingのexampleを移植してみる
 * bounce
 */
var bouncexample = {};

(function(){

  var stageWidth = 500,
  stageHeight = 300,
  stage,
  shape,
  canvas,
  size = 60,//int
  xpos,
  ypos,
  xspeed = 10.5,
  yspeed = 12.5,
  xdirection = 1,
  ydirection = 1;
      
  bouncexample.init = function(){
  //new Stage
  canvas = document.getElementById("stageCanvas");
  stage = new createjs.Stage(canvas);
  stage.enableMouseOver();

  //background
  var rect = new createjs.Shape();
  rect.graphics.beginFill(createjs.Graphics.getRGB(10,10,10)); 
  rect.graphics.drawRect(0,0,stageWidth,stageHeight);
  stage.addChild(rect);
  //title
  var text = new createjs.Text("bounce tutorial","30px sans-self","#FFF");
  stage.addChild(text);
  
  //create shape
  shape = new createjs.Shape();
  shape.graphics.beginFill(createjs.Graphics.getRGB(255,255,255));
  shape.graphics.drawCircle(0,0,size/2);
  xpos = stageWidth/2;
  ypos = stageHeight/2;
  shape.x = xpos;
  shape.y = ypos;
  stage.addChild(shape);
  
  stage.update();
  createjs.Ticker.addListener(window);
}


//global scope enterFrame
tick = function(){
  
  bouncexample.draw();
  stage.update();
}

/**
 * 描画
 */
bouncexample.draw = function(){
  
  if(xpos > stageWidth - size || xpos < size/2)
  {
    xdirection *= -1;
  }
  if(ypos > stageHeight - size || ypos < size/2)
  {
    ydirection *= -1;
  }
  
  xpos = xpos + (xspeed * xdirection);
  ypos = ypos + (yspeed * ydirection);
  
  shape.x = xpos;
  shape.y = ypos;
  
}


})();

