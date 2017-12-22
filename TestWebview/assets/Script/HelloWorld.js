cc.Class({
    extends: cc.Component,

    properties: {
        webView: {
            default: null,
            type: cc.WebView,
        },
    },

    // use this for initialization
    onLoad: function () {
        //var ss  = cc.url.raw("resources/mall_home.html");
        //this.webView.url = ss;
    },

    // called every frame
    update: function (dt) {

    },

    onWebFinishLoad: function(sender, event) {
        console.log("onWebFinishLoad == =" + sender);
        var loadStatus = "";
        if (event === cc.WebView.EventType.LOADED) {
            var ss = "sss565454";
            //this.webView.evaluateJS('onClick1('+ss+')');
            loadStatus = " is loaded!";
        } else if (event === cc.WebView.EventType.LOADING) {
            loadStatus = " is loading!";
        } else if (event === cc.WebView.EventType.ERROR) {
            loadStatus = ' load error!';
        }
        console.log("onWebFinishLoad=" + loadStatus);
    },

    btnAction:function(){
        console.log("btnAction start");
        // var ss = "sss5654544565655";
        // var js = "<script>\n" +
        //     "document.domain = 'demo.com';\n" +
        //     "window.alertFrameMsg = function(msg) {\n" +
        //     "alert(msg);\n" +
        //     "}\n" +
        //     "const frame = document.querySelector('#myFrame');\n" +
        //     "frame.src = 'http://116.62.144.162:8020/index2';\n" +
        //     "</script>\n";
        //
        this.webView.evaluateJS('test()');

        //console.log(" this.webView._sgNode = " +  this.webView._sgNode);
        //console.log(" this.webView._sgNode._renderCmd = " +  this.webView._sgNode._renderCmd);

        // this.webView._sgNode._renderCmd._iframe.contentWindow.postMessage("9876543210","*");
        console.log("btnAction end");
    },
});
