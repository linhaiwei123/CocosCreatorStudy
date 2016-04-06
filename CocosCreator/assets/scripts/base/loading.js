cc.Class({
    extends: cc.Component,
    properties: {
        label:{
            default:null,
            type:cc.Label,
        },
        text:"单击跳转按钮,跳转到另一场景"
    },

    // use this for initialization
    onLoad: function () {
        var self=this;
        self.label.string=self.text;
        self.label.fontSize =24; // 设置label的字体大小
        self.label.lineHeight =30; // 设置 label 的行高
        self.label.enableWrapText=true;//设置label是否自动换行 
        //self.label.file="";// 字体文件的 url
        self.label.isSystemFontUsed=true; // 是否使用了系统字体
        console.log(self.label.node);//输出labe被挂到的node上
        console.log(self.label.uuid);
        
        function onTouchStart(event){
            console.log("onTouchStart");

        }
        
        function onTouchMoved(event){
            console.log("onTouchMove");  
        }
        
        function onTouchEnded(event){
            console.log("onTouchEnded"); 
            cc.director.loadScene("label", function(){
            console.log("go to label");
              // 可以在这里 runAction()
            });
        }
        function onTouchCancel(event){
            
        }
     // cc.Node.EventType.TOUCH_START	'touchstart' 当手指触点落在目标节点区域内时
     // cc.Node.EventType.TOUCH_MOVE	'touchmove'	 当手指在屏幕上目标节点区域内移动时
     // cc.Node.EventType.TOUCH_END	    'touchend'	 当手指在目标节点区域内离开屏幕时
     // cc.Node.EventType.TOUCH_CANCEL	'touchcancel'当手指在目标节点区域外离开屏幕时
        this.node.on("touchstart",onTouchStart.bind(this));
        this.node.on("touchmove" ,onTouchMoved.bind(this));
        this.node.on("touchend" ,onTouchEnded.bind(this));
        this.node.on("touchcancel" ,onTouchCancel.bind(this));
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

    },
});
