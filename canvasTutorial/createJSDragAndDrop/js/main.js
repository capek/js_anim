/**
 * @author capek
 * easelJSのドラッグアンドドロップのテスト
 */
var ddexsample = {};

(function(){

var stageWidth = 600;
      var stageHeight = 600;
      var stage;
      var shape1;
      var canvas;
      
  ddexsample.init = function(){
  //new Stage
  canvas = document.getElementById("stageCanvas");
  stage = new createjs.Stage(canvas);
  stage.enableMouseOver();
  var text = new createjs.Text("d&d tutorial","30px sans-self","#F00");
  stage.addChild(text);
  
  //shape
  shape1 = new createjs.Shape();
  shape1.graphics.beginFill(createjs.Graphics.getRGB(0,255,0));
  shape1.graphics.drawCircle(0,0,40);
  shape1.x = 100;
  shape1.y = 100;
  shape1.onPress = ddexsample.pressHandler;
  stage.addChild(shape1);
  
  stage.update();
  createjs.Ticker.addListener(window);
}

ddexsample.pressHandler = function(e){
  
  e.onMouseMove = function(ev){
    
    e.target.x = ev.stageX;
    e.target.y = ev.stageY;
  }
  
}

//global scope enterFrame
tick = function(){stage.update();}


})();

