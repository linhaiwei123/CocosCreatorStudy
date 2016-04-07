cc.Class({
    extends: cc.Component,

    properties: {
        hero:{
            default:null,
            type:cc.Node
        },
        joyStick :{
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {
        
    var Hero=this.hero.getComponent("Hero");


    function callback(dir){
    console.log("Hero");
    Hero.changeDir(dir);
    }
    this.joyStick.getComponent("JoyStick").startListen(callback.bind(this));
    
    },
    
    // called every frame, uncomment this function to activate update callback
     update: function (dt) {

     },
});
