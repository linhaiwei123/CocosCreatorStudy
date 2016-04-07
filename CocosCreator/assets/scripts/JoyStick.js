cc.Class({
    extends: cc.Component,
    
    properties: {
        joyStick :{
            default: null,
            type: cc.Node
        },
    },
    startListen: function(callback){
        this.joysCenter=this.joyStick.getChildByName("center");
        this.DIR = {NULL:0,UP:1,DOWN:2,LEFT:3,RIGHT:4,RU:5,LU:6,LD:7,RD:8};//定义方向值    
        //操纵杆触摸结束
        this.joysCenter.on(cc.Node.EventType.TOUCH_END, function (event) {
        this.joysCenter.setPosition(0,0);
        callback(0);
        }, this);
        //操纵杆触摸取消
        this.joysCenter.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
        this.joysCenter.setPosition(0,0);
        callback(0);
        }, this);
        //操纵杆滑动
        this.joysCenter.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
        var Point = this.joyStick.convertTouchToNodeSpace(event.touch);//屏幕坐标转节点坐标
        callback(this.getNewPosByMaxRadis(100,Point.x,Point.y));
        }, this);
    }
    ,
    // use this for initialization
    onLoad: function () {
    
    },
    //判断操纵杆方向
    getNewPosByMaxRadis : function(maxRadis, x, y) {
	var now_x,now_y;
	var dir = 0; //方向
	now_x = x;
	now_y = y;
	var len = x*x + y*y // 两点之间的距离
	len = Math.sqrt(len);

	if (len < maxRadis ){ // 没有超过最大边界；
		now_x = x;
		now_y = y;
	}
	else{	
		var sin_a = y / len;
		var cos_a = x / len;
		now_x = maxRadis * cos_a;
		now_y = maxRadis * sin_a;
		len = maxRadis;
	}

	if (now_x == 0) {
		if (now_y < 0) {//下
			dir = this.DIR.DOWN;
		}
		else if (now_y > 0) {// 上 
			dir = this.DIR.UP;
        }
		return dir;
    }

	// argtan y/x alphad
	var tan_value = now_y / now_x;
	tan_value = Math.abs(tan_value);

	var alpha_d = Math.atan(tan_value);
    this.joysCenter.setPosition(now_x, now_y);

	if (now_x > 0 && now_y >= 0) {//第1
		//右边
		if (alpha_d >= 0 && alpha_d <= (Math.PI / 8)) {
			return this.DIR.RIGHT;
		}
		//右上
		if (alpha_d > (Math.PI / 8) && alpha_d <= (3*Math.PI / 8))  {
			return this.DIR.RU;
		} 
		//上
		if (alpha_d > (3*Math.PI / 8) && alpha_d <= Math.PI / 2)  {
			return this.DIR.UP;
		}
		//end
	}
	else if (now_x < 0 && now_y >= 0) {//第二
		//左
		if (alpha_d >= 0 && alpha_d <= (Math.PI / 8))  {
			return this.DIR.LEFT;
		}
		//左上
		if (alpha_d > (Math.PI / 8) && alpha_d <= (3*Math.PI / 8))  {
			return this.DIR.LU;
		}
		//上
		if (alpha_d > (3*Math.PI / 8) && alpha_d <= Math.PI / 2)  {
			return this.DIR.UP;
		}
	}
	else if (now_x < 0 && now_y <= 0) {//第三象限
		//左
		if (alpha_d >= 0 && alpha_d <= (Math.PI / 8)) {
			return this.DIR.LEFT;
		}

		//左下
		if (alpha_d > (Math.PI / 8) && alpha_d <= (3*Math.PI / 8)) {
			return this.DIR.LD;
		} 

		//下
		if (alpha_d > (3*Math.PI / 8) && alpha_d <= Math.PI / 2) {
			return this.DIR.DOWN;
		}
	}
	else if (now_x > 0 && now_y <= 0) {//第四象限
		//右
		if (alpha_d >= 0 && alpha_d <= (Math.PI / 8)) {
			return this.DIR.RIGHT;
	    }
		//右下
		if (alpha_d > (Math.PI / 8) && alpha_d <= (3*Math.PI / 8)) {//
			return this.DIR.RD;
		} 
		//下
		if (alpha_d > (3*Math.PI / 8) && alpha_d <= Math.PI / 2) {//
			return this.DIR.DOWN;
		}
	}
	return dir;
},
    
    // called every frame, uncomment this function to activate update callback
     //update: function (dt) {
    
     //},
});
