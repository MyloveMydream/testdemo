(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-774648ba"],{"0a49":function(t,i,s){var e=s("9b43"),n=s("626a"),r=s("4bf8"),o=s("9def"),a=s("cd1c");t.exports=function(t,i){var s=1==t,c=2==t,u=3==t,l=4==t,h=6==t,f=5==t||h,p=i||a;return function(i,a,d){for(var m,b,g=r(i),v=n(g),y=e(a,d,3),A=o(v.length),k=0,x=s?p(i,A):c?p(i,0):void 0;A>k;k++)if((f||k in v)&&(m=v[k],b=y(m,k,g),t))if(s)x[k]=b;else if(b)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:x.push(m)}else if(l)return!1;return h?-1:u||l?l:x}}},"0b51":function(t,i,s){},"335a":function(t,i,s){"use strict";s.r(i);s("7f7f");var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"content"},[t.user?i("div",{staticStyle:{display:"flex",position:"relative"}},[i("div",{staticClass:"userLeft"},[i("img",{staticClass:"headIcon",attrs:{src:10==t.user.id?t.users[0].image:t.users[1].image,alt:""}}),i("div",{staticClass:"name"},[t._v(t._s(10==t.user.id?t.users[0].name:t.users[1].name))])]),i("div",{staticClass:"checkerboard"},[i("table",t._l(t.list,(function(s,e){return i("tr",t._l(s,(function(s,n){return i("td",{on:{click:function(i){return t.doPublish(e,n)}}},[i("div",{staticClass:"lattice",class:{black:1==s,red:2==s}})])})),0)})),0)]),2==t.users.length?i("div",{staticClass:"userRight"},[i("img",{staticClass:"headIcon",attrs:{src:10==t.user.id?t.users[1].image:t.users[0].image,alt:""}}),i("div",{staticClass:"name"},[t._v(t._s(10==t.user.id?t.users[1].name:t.users[0].name))])]):t._e()]):i("div",[i("el-button",{attrs:{type:"text"},on:{click:t.createHome}},[t._v("创建房间")]),i("el-button",{attrs:{type:"text"},on:{click:t.joinHome}},[t._v("加入房间")])],1)])},n=[],r=(s("55dd"),s("15fd")),o=(s("6c7b"),s("6d67"),s("e7fc")),a=s.n(o),c=["host","port","endpoint"],u={data:function(){return{users:[],user:null,list:Array(10).fill(0).map((function(){return Array(10).fill(0)})),blackArr:[],redArr:[],flag:!0,connection:{host:"broker.emqx.io",port:8083,endpoint:"/mqtt",clean:!0,connectTimeout:4e3,reconnectPeriod:4e3,clientId:"mqttx_3937577c"},subscription:{topic:"topic/creator",qos:0},publish:{topic:"topic/joiner",qos:0,payload:{msg:null,type:null}},client:null}},mounted:function(){},methods:{createHome:function(){this.$message("房间创建成功"),this.user={id:10,name:"张三",image:"https://img0.baidu.com/it/u=2409125767,2106097442&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"},this.users.push(this.user),this.createConnection(),this.doSubscribe()},joinHome:function(){var t=this;this.$prompt("请输入房间号","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(i){var s=i.value;"1"==s?(t.$message("加入房间成功"),t.user={id:20,name:"李四",image:"https://img1.baidu.com/it/u=513917707,3330365276&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"},t.users.push({id:10,name:"张三",image:"https://img0.baidu.com/it/u=2409125767,2106097442&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"}),t.users.push(t.user),t.connection.clientId="mqttx_945293c6",t.subscription.topic="topic/joiner",t.createConnection(),t.doSubscribe(),t.publish.payload.type=1,t.publish.payload.msg="李四加入房间",t.publish.topic="topic/creator",t.doPublish()):t.$message.error("房间不存在!")}))},createConnection:function(){var t=this,i=this.connection,s=i.host,e=i.port,n=i.endpoint,o=Object(r["a"])(i,c),u="ws://".concat(s,":").concat(e).concat(n);try{this.client=a.a.connect(u,o)}catch(l){console.log("mqtt.connect error",l)}this.client.on("connect",(function(){})),this.client.on("error",(function(t){console.log("Connection failed",t)})),this.client.on("message",(function(i,s){var e=JSON.parse(s);if(1==e.type)t.users.push({id:20,name:"李四",image:"https://img1.baidu.com/it/u=513917707,3330365276&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"}),t.$message(e.msg);else{var n=e.msg;t.doClick(n[0],n[1])}}))},doSubscribe:function(){var t=this.subscription,i=t.topic,s=t.qos;this.client.subscribe(i,s,(function(t,i){t&&console.log("Subscribe to topics error",t)}))},doUnSubscribe:function(){var t=this.subscription.topic;this.client.unsubscribe(t,(function(t){t&&console.log("Unsubscribe error",t)}))},doPublish:function(t,i){var s=this;if(console.log(this.users),2==this.users.length){if(t){if(10==this.user.id&&!this.flag)return void this.$message("请等待对方落子");if(20==this.user.id&&this.flag)return void this.$message("请等待对方落子");this.publish.payload.msg=[t,i],this.publish.payload.type=2}this.publish.payload.msg,this.publish.payload.type;var e=this.publish,n=e.topic,r=e.qos,o=e.payload;this.client.publish(n,JSON.stringify(o),{qos:r},(function(e){1!=s.publish.payload.type&&(e||s.doClick(t,i))}))}else this.$message("请等待高手挑战!")},doClick:function(t,i){this.flag?0==this.list[t][i]&&(this.$set(this.list[t],i,1),this.flag=!this.flag,this.blackArr.push([t,i])):(this.$set(this.list[t],i,2),this.flag=!this.flag,this.redArr.push([t,i])),this.xWin(t,i),this.yWin(t,i),this.x_yWin(t,i),this.y_xWin(t,i)},xWin:function(t,i){var s=this,e=[],n=[];this.flag?this.redArr.map((function(i){i[0]==t&&e.push(i[1])})):this.blackArr.map((function(i){i[0]==t&&e.push(i[1])})),e.sort((function(t,i){return t-i}));for(var r=1;r<e.length;r++)e[r]==e[r-1]+1?n.push(e[r]):n=[];4==n.length&&(this.flag?setTimeout((function(){alert("红棋赢!"),s.resetData()}),100):setTimeout((function(){alert("黑棋赢!"),s.resetData()}),100))},yWin:function(t,i){var s=this,e=[],n=[];this.flag?this.redArr.map((function(t){t[1]==i&&e.push(t[0])})):this.blackArr.map((function(t){t[1]==i&&e.push(t[0])})),e.sort((function(t,i){return t-i}));for(var r=1;r<e.length;r++)e[r]==e[r-1]+1?n.push(e[r]):n=[];4==n.length&&(this.flag?setTimeout((function(){alert("红棋赢!"),s.resetData()}),100):setTimeout((function(){alert("黑棋赢!"),s.resetData()}),100))},x_yWin:function(t,i){var s=this,e=[],n=[];this.flag?this.redArr.map((function(s){s[0]-t==s[1]-i&&e.push(s[0])})):this.blackArr.map((function(s){s[0]-t==s[1]-i&&e.push(s[0])})),e.sort((function(t,i){return t-i}));for(var r=1;r<e.length;r++)e[r]==e[r-1]+1?n.push(e[r]):n=[];4==n.length&&(this.flag?setTimeout((function(){alert("红棋赢!"),s.resetData()}),100):setTimeout((function(){alert("黑棋赢!"),s.resetData()}),100))},y_xWin:function(t,i){var s=this,e=[],n=[];this.flag?this.redArr.map((function(s){0-(s[0]-t)==s[1]-i&&e.push(s[0])})):this.blackArr.map((function(s){0-(s[0]-t)==s[1]-i&&e.push(s[0])})),e.sort((function(t,i){return t-i}));for(var r=1;r<e.length;r++)e[r]==e[r-1]+1?n.push(e[r]):n=[];4==n.length&&(this.flag?setTimeout((function(){alert("红棋赢!"),s.resetData()}),100):setTimeout((function(){alert("黑棋赢!"),s.resetData()}),100))},resetData:function(){this.list=Array(10).fill(0).map((function(){return Array(10).fill(0)})),this.redArr=[],this.blackArr=[],this.flag=!this.flag}}},l=u,h=(s("b854"),s("0c7c")),f=Object(h["a"])(l,e,n,!1,null,"1b7bcdb4",null);i["default"]=f.exports},"36bd":function(t,i,s){"use strict";var e=s("4bf8"),n=s("77f1"),r=s("9def");t.exports=function(t){var i=e(this),s=r(i.length),o=arguments.length,a=n(o>1?arguments[1]:void 0,s),c=o>2?arguments[2]:void 0,u=void 0===c?s:n(c,s);while(u>a)i[a++]=t;return i}},"55dd":function(t,i,s){"use strict";var e=s("5ca1"),n=s("d8e8"),r=s("4bf8"),o=s("79e5"),a=[].sort,c=[1,2,3];e(e.P+e.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!s("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(r(this)):a.call(r(this),n(t))}})},"6c7b":function(t,i,s){var e=s("5ca1");e(e.P,"Array",{fill:s("36bd")}),s("9c6c")("fill")},"6d67":function(t,i,s){"use strict";var e=s("5ca1"),n=s("0a49")(1);e(e.P+e.F*!s("2f21")([].map,!0),"Array",{map:function(t){return n(this,t,arguments[1])}})},b854:function(t,i,s){"use strict";s("0b51")},cd1c:function(t,i,s){var e=s("e853");t.exports=function(t,i){return new(e(t))(i)}},e853:function(t,i,s){var e=s("d3f4"),n=s("1169"),r=s("2b4c")("species");t.exports=function(t){var i;return n(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)||(i=void 0),e(i)&&(i=i[r],null===i&&(i=void 0))),void 0===i?Array:i}}}]);
//# sourceMappingURL=chunk-774648ba.163e5664.js.map