cc.Class({
    extends: cc.Component,

    properties: {
        textshow:{
          default:null,
          type:cc.Label
        },
        fontsize:{
          default:null,
          type:cc.Label
        },
        lineheight:{
          default:null,
          type:cc.Label   
        }
    },

    // use this for initialization
    onLoad: function () {
        var self=this;
        self.textshow.string="textshow";
        
        self.fontsize.string="fontsize";
        self.fontsize.fontSize=25;
        
        self.lineheight.string="lineheight";
        self.lineheight.fontSize=40;
        self.lineheight.lineHeight=30;
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
