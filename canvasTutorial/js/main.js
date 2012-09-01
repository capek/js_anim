
(function(){
  
  var myCanvas = document.getElementById('canvas'),
    cc = myCanvas.getContext("2d"),
    pos = {
      x:10,
      y:10
    },
    rate = 30;
    
  var run = function(){
    cc.clearRect(0,0,300,300);
    
    pos.y += 10;
    
    if(pos.y > 300)
    {
      pos.y = -10;
    }
    
    cc.beginPath();
    cc.fillStyle = "#FF0";
    cc.fillRect(pos.x,pos.y,100,50);
    
    setTimeout(arguments.callee,1000/rate);
    
    return this;
  };
  
  run();
  
})();
