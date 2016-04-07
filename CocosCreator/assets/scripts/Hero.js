cc.Class({
    extends: cc.Component,

    properties: {
        
        hero:{
        default:null,
        type:cc.Node
        },
        Speed: 8
        
    },
    // use this for initialization
    onLoad: function () {
    this.curDir=0;
    var k=1.5;
    this.speedArr=new Array({"x":0,"y":0},
    {"x":0,"y":this.Speed},//上
    {"x":0,"y":-this.Speed},//下
    {"x":-this.Speed,"y":0},//左
    {"x":this.Speed,"y":0},//右
    {"x":this.Speed/k,"y":this.Speed/k},//右上
    {"x":-this.Speed/k,"y":this.Speed/k},//左上
    {"x":-this.Speed/k,"y":-this.Speed/k},//左下
    {"x":this.Speed/k,"y":-this.Speed/k}//右下
    );
    
    },
    changeDir : function(dir){
        // 再Game
        if(this.curDir!=dir){
      //  var anim=this.getComponent(cc.Animation);
        
        //var anmifile="heroR";
        //if(dir==0)
        //anmifile="dir0";
        
      //  var animstate=anim.play("heroR");
       // animstate.speed = 1;
       // animstate.repeatCount = Infinity;
        
        //if(dir==3 || dir==6 || dir==7)
     //   anim.node.runAction(cc.flipX(false));
      //  else if(dir==4 || dir==5 || dir==8)
      //  anim.node.runAction(cc.flipX(true));

        this.curDir=dir;
        }
    }
    ,
    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
         var sp=this.speedArr[this.curDir];
         this.hero.setPosition(this.hero.getPositionX()+sp.x,this.hero.getPositionY()+sp.y);
     },
});
