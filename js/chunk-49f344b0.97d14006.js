(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49f344b0"],{"0a49":function(e,t,n){var i=n("9b43"),a=n("626a"),o=n("4bf8"),l=n("9def"),r=n("cd1c");e.exports=function(e,t){var n=1==e,s=2==e,c=3==e,u=4==e,f=6==e,m=5==e||f,h=t||r;return function(t,r,y){for(var d,p,v=o(t),P=a(v),b=i(r,y,3),g=l(P.length),L=0,S=n?h(t,g):s?h(t,0):void 0;g>L;L++)if((m||L in P)&&(d=P[L],p=b(d,L,v),e))if(n)S[L]=p;else if(p)switch(e){case 3:return!0;case 5:return d;case 6:return L;case 2:S.push(d)}else if(u)return!1;return f?-1:c||u?u:S}}},"81d1":function(e,t,n){"use strict";n("abe8")},abe8:function(e,t,n){},ac6a:function(e,t,n){for(var i=n("cadf"),a=n("0d58"),o=n("2aba"),l=n("7726"),r=n("32e9"),s=n("84f2"),c=n("2b4c"),u=c("iterator"),f=c("toStringTag"),m=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=a(h),d=0;d<y.length;d++){var p,v=y[d],P=h[v],b=l[v],g=b&&b.prototype;if(g&&(g[u]||r(g,u,m),g[f]||r(g,f,v),s[v]=m,P))for(p in i)g[p]||o(g,p,i[p],!0)}},b9cb:function(e,t,n){e.exports=n.p+"media/back_music1.0de7311f.mp3"},cd1c:function(e,t,n){var i=n("e853");e.exports=function(e,t){return new(i(e))(t)}},e853:function(e,t,n){var i=n("d3f4"),a=n("1169"),o=n("2b4c")("species");e.exports=function(e){var t;return a(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!a(t.prototype)||(t=void 0),i(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},eef0:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"back"},[t("audio",{ref:"audio",attrs:{loop:"",auto:""}},[t("source",{attrs:{src:n("b9cb")}})]),t("audio",{ref:"bulletShoot"},[t("source",{attrs:{src:n("f791")}})]),t("audio",{ref:"myPlaneBoom"},[t("source",{attrs:{src:n("f2ea")}})]),t("div",{staticClass:"map"},[t("div",{staticClass:"myPlane",style:{left:e.myPlane.x+"px",top:e.myPlane.y+"px"}}),e.isPlaying?e._e():t("div",{staticClass:"action_menu"},[t("div",{staticClass:"start_game",on:{click:e.startGame}},[e._v("开始游戏")])])]),t("div",{staticStyle:{padding:"20px"}},[t("div",[e._v("当前关卡:"),t("span",[e._v("第"+e._s(e.num)+"关")])]),t("div",[e._v("当前得分:"),t("span",[e._v(e._s(e.score))])])])])},a=[],o=(n("ac6a"),n("f3e2"),n("fdc7")),l=n.n(o),r={data:function(){return{isPlaying:!1,mapHeight:null,myPlane:{x:195,y:0,width:60,height:76,speed:12},enemyPlane:{x:0,y:0,width:32,height:23,speed:3e3},enemys:[],bullets:[],bulletInterval:null,enemyPlaneInterval:null,mapEle:null,score:0,passScore:1e3,num:1}},mounted:function(){this.mapEle=document.querySelector(".map"),this.mapHeight=document.getElementsByClassName("map")[0].clientHeight,this.myPlane.y=this.mapHeight-76-10},beforeDestroy:function(){clearInterval(this.bulletInterval),clearInterval(this.enemyPlaneInterval)},methods:{addKeyboardListen:function(){window.addEventListener("keydown",this.handleKeyDown)},startGame:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.addKeyboardListen(),this.intervalInit(),this.isPlaying=!0},intervalInit:function(){var e=this;this.bulletInterval=setInterval((function(){return e.initBullet()}),100),this.enemyPlaneInterval=setInterval((function(){return e.initEnemyPlane()}),this.enemyPlane.speed)},handleKeyDown:function(){"ArrowLeft"===event.key?this.myPlaneMove("left"):"ArrowRight"===event.key?this.myPlaneMove("right"):"ArrowUp"===event.key?this.myPlaneMove("up"):"ArrowDown"===event.key&&this.myPlaneMove("down")},myPlaneMove:function(e){if(!this.myPlane.moving){if("left"===e){if(this.myPlane.x<=10)return;this.myPlane.x-=this.myPlane.speed}else if("right"===e){if(this.myPlane.x>=380)return;this.myPlane.x+=this.myPlane.speed}if("up"===e){if(this.myPlane.y<=10)return;this.myPlane.y-=this.myPlane.speed}else if("down"===e){if(this.myPlane.y>=this.mapHeight-76-10)return;this.myPlane.y+=this.myPlane.speed}}},initBullet:function(){var e=document.createElement("div");e.className="bullet";var t=this.myPlane.x+this.myPlane.width/2-1.5,n=this.myPlane.y-10,i=(Math.random(),{left:"".concat(t,"px"),top:"".concat(n,"px")});Object.assign(e.style,i),this.mapEle.appendChild(e),this.shootAnimate(e,0,this.mapEle)},shootAnimate:function(e,t,n){var i=this;clearInterval(e.timer),e.timer=setInterval((function(){e.offsetTop+10<=t?(clearInterval(e.timer),n.removeChild(e)):(e.style.top=e.offsetTop-14+"px",i.enemyPlaneBulletCollision())}),50)},initEnemyPlane:function(){document.querySelector(".map");var e=document.createElement("div");e.className="enemyPlane";var t=Math.floor(400*Math.random()),n=Math.random(),i={left:"".concat(t,"px"),animationDuration:"".concat(1+n,"s")};Object.assign(e.style,i),this.mapEle.appendChild(e),this.enemyPlaneMove(e,this.mapEle.clientHeight,this.mapEle)},initDesoryedEnemyPlane:function(e){var t=this,n=(document.querySelector(".map"),document.createElement("div"));n.className="desoryedEnemyPlane";Math.floor(400*Math.random()),Math.random();var i={left:"".concat(e.offsetLeft,"px"),top:"".concat(e.offsetTop,"px")};Object.assign(n.style,i),this.mapEle.appendChild(n),setTimeout((function(){t.mapEle.removeChild(n)}),200)},enemyPlaneMove:function(e,t,n){var i=this;clearInterval(e.timer),e.timer=setInterval((function(){e.offsetTop>t?(clearInterval(e.timer),n.removeChild(e)):(e.style.top=e.offsetTop+24+"px",i.enemyWithMyPlaneCollision())}),100)},enemyPlaneBulletCollision:function(){var e=this,t=document.querySelectorAll(".enemyPlane"),n=document.querySelectorAll(".bullet");t.forEach((function(t,i){n.forEach((function(n,i){e.isCollision(t,n)&&(e.score=e.score+10,e.initDesoryedEnemyPlane(t),e.mapEle.removeChild(t),e.mapEle.removeChild(n),e.$refs.bulletShoot.play(),setTimeout((function(){e.score>=e.passScore&&(e.stopAnimation(),e.enemyPlane.speed-=100,e.enemyPlane.speed<=200?e.$alert("恭喜你,通关了!","系统提示",{confirmButtonText:"重新开始",type:"success"}).then((function(){e.$router.go(0),e.score=0})).catch((function(){})):e.$alert("恭喜你,分数达标,进入下一关!","系统提示",{confirmButtonText:"下一关",type:"success"}).then((function(){e.score=0,e.num++,e.bulletInterval=setInterval((function(){return e.initBullet()}),1e3),e.enemyPlaneInterval=setInterval((function(){return e.initEnemyPlane()}),e.enemyPlane.speed)})).catch((function(){})))})))}))}))},fun:function(e){return function(){}},enemyWithMyPlaneCollision:function(){for(var e=this,t=document.querySelectorAll(".enemyPlane"),n=document.querySelector(".myPlane"),i=0;i<t.length;i++){var a=t[i];this.isCollision(a,n)&&(this.$refs.myPlaneBoom.play(),this.$refs.audio.pause(),n.style.backgroundImage="url(".concat(l.a,")"),this.stopAnimation(),this.$alert("对不起,您的飞机爆炸了!","提示",{confirmButtonText:"确定",type:"warning"}).then((function(){e.$router.go(0)})).catch((function(){})))}},isCollision:function(e,t){var n=e.offsetLeft+e.offsetWidth>=t.offsetLeft&&t.offsetLeft+t.offsetWidth>=e.offsetLeft&&e.offsetTop+e.offsetHeight>=t.offsetTop&&t.offsetTop+t.offsetHeight>=e.offsetTop;return n},stopAnimation:function(){var e=this,t=document.querySelectorAll(".enemyPlane"),n=document.querySelectorAll(".bullet");t.forEach((function(t){t&&(clearInterval(t.timer),e.mapEle.removeChild(t))})),n.forEach((function(t){t&&(clearInterval(t.timer),e.mapEle.removeChild(t))})),clearInterval(this.bulletInterval),clearInterval(this.enemyPlaneInterval)}}},s=r,c=(n("81d1"),n("0c7c")),u=Object(c["a"])(s,i,a,!1,null,null,null);t["default"]=u.exports},f2ea:function(e,t,n){e.exports=n.p+"media/boom.d8248304.mp3"},f3e2:function(e,t,n){"use strict";var i=n("5ca1"),a=n("0a49")(0),o=n("2f21")([].forEach,!0);i(i.P+i.F*!o,"Array",{forEach:function(e){return a(this,e,arguments[1])}})},f791:function(e,t,n){e.exports=n.p+"media/bullet.f53db132.mp3"},fdc7:function(e,t,n){e.exports=n.p+"img/boom.46b8e2a5.png"}}]);
//# sourceMappingURL=chunk-49f344b0.97d14006.js.map