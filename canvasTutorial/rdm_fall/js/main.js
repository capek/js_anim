(function() {

  var boxNum = 100, 
  rate = 30,
  boxes = [],
  myCanvas = document.getElementById('canvas'), 
  cc = myCanvas.getContext("2d");
  
  /**
   * box生成クロージャ
   */
  var box = function(){
    
    //レキシカル変数
    var xpos,
    ypos,
    speed,
    color,
    size;
    
    //初期化
    var init = function(){
      
      xpos = util.getRandomNum(800);
      ypos = -100;
      speed = util.getRandomNum(10);
      color = "rgba(" + util.getRandomNum(255) +","+ util.getRandomNum(255) +","+ util.getRandomNum(255) +","+ "0.8)";
      size = util.getRandomNum(30);
    }
    init();
    
    //移動実行
    var _run = function(){
      
        ypos += speed;
        cc.fillStyle = color;
        cc.beginPath();
        cc.fillRect(xpos, ypos, size, size);  
        //600をこえたらアタマにもどる
        if(ypos > 600)
        {
          ypos = 0;
          init();
        }
      
    }
    //パブリックに開示
    return {
      run:_run
    }
    
  }
  
  /**
   * 量産
   */
  var rectsSetting = {
    
      init:function(){
        //インスタンス？生成
        for(var i=0,j=boxNum; i<j; i++){
          boxes.push(box());
        };
        setInterval(rectsSetting.loop,1000/rate);        
      },
      loop:function(){
        //毎回消す
        cc.clearRect(0,0,800,600);
        //描画実行
        for(var i=0,j=boxNum; i<j; i++){
          boxes[i].run();
        };
        
      }
  };

  /**
   * util
   */
  var util = {
    /**
     * ランダムな値を返す
     * @param {Number} maxNum
     * @param {Number} minNum
     */
    getRandomNum:function(maxNum,minNum){
      
      var rdm = Math.random();
      var result;
      
      if(minNum)
      {
        if(Math.floor(rdm*maxNum) < minNum)
        {
          result = minNum;
        }
        else
        {
          result = Math.floor(rdm*maxNum);
        }
        
      }else{
        //min未指定の場合は最低値1
        result = Math.floor(rdm*maxNum)+1;
        
      }
     
      return result;
    } 
    
  }

  //開始
  rectsSetting.init();
})();
