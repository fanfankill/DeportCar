(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c7e68e6"],{"11c6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"chatdiv"}},[e._m(0),e._m(1),n("div",{ref:"sendmes",staticClass:"sendmes",attrs:{contenteditable:"contenteditable",id:"senddiv"}}),n("div",{staticClass:"icontofix"},[n("el-popover",{attrs:{placement:"top-start",title:"请输入图片链接",width:"200",trigger:"hover"}},[n("el-input",{model:{value:e.needimg,callback:function(t){e.needimg=t},expression:"needimg"}}),n("el-button",{staticStyle:{"margin-top":"5px",float:"right"},attrs:{type:"primary",size:"mini"},on:{click:e.sendimg}},[e._v("发送")]),n("i",{staticClass:"el-icon-picture-outline",attrs:{slot:"reference"},slot:"reference"})],1)],1)])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chatdiv",attrs:{id:"showmes"}},[n("p",{staticStyle:{height:"0px",width:"100%"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"showperson"},[n("p",{attrs:{id:"currentpeople"}}),n("div",{attrs:{id:"allpersonmustshow"}})])}],i=(n("4160"),n("498a"),n("159b"),{mounted:function(){var e=this;this.joinhome(),document.onkeydown=function(t){var n=document.all?window.event:t;13==n.keyCode&&e.sendmessage()}},beforeDestroy:function(){this.$socket.emit("disconnect")},data:function(){return{currentnow:0,allperson:[],needimg:""}},methods:{joinhome:function(){this.$socket.emit("login",{adminid:sessionStorage.getItem("adminid"),img:sessionStorage.getItem("myimg"),adminname:sessionStorage.getItem("adminname")})},sendimg:function(){var e=this.needimg;console.log(e),this.$refs.sendmes.innerText="<img style='width:200px;height:200px' src='"+e+"'>",this.sendmessage()},sendmessage:function(){console.log(this.$refs.sendmes.innerText);var e=this.$refs.sendmes.innerText;if(e.trim()){var t=document.createElement("p"),n=document.createElement("span"),r=document.createElement("span"),s=document.createElement("img");s.src=sessionStorage.getItem("myimg"),n.innerHTML=e,r.innerHTML=sessionStorage.getItem("adminname"),s.className="myimg",r.className="rightspan2",n.className="rightspan",t.className="pp",t.appendChild(s),t.appendChild(r),t.appendChild(n),document.getElementById("showmes").appendChild(t),document.getElementById("showmes").scrollTop+=document.getElementById("showmes").offsetHeight,this.$socket.emit("client",{value:e,adminid:sessionStorage.getItem("adminid")})}else this.messageBox("消息不能为空","error");this.$refs.sendmes.innerHTML=""}},sockets:{loginback:function(e){if(console.log(e.usertotal),document.getElementById("currentpeople").innerText="当前在线人数："+e.usertotal,1==e.flag){var t=document.createElement("p");t.innerHTML=e.adminname+"加入了房间",t.style.color="red",t.style.fontWeight="1000",t.style.textAlign="center",t.style.fontSize="6px",document.getElementById("showmes").appendChild(t);var n=e.users;document.getElementById("allpersonmustshow").innerHTML="",n.forEach((function(e){var t=document.createElement("div");t.className="allpersonshow";var n=document.createElement("div");n.className="allimgshow";var r=document.createElement("img");r.src=e.img,n.appendChild(r);var s=document.createElement("div");s.className="nameshow";var i=document.createElement("span");i.innerText=e.adminname,s.appendChild(i),t.appendChild(n),t.appendChild(s),document.getElementById("allpersonmustshow").appendChild(t)}))}},sendmes:function(e){var t=document.createElement("p"),n=document.createElement("span"),r=document.createElement("span"),s=document.createElement("img");n.className="leftspan",r.innerHTML=e.users.adminname,s.src=e.users.img,s.className="otherimg2",r.className="leftspan2",n.innerHTML=e.value,t.appendChild(s),t.appendChild(r),t.appendChild(n),t.className="pp",document.getElementById("showmes").appendChild(t),document.getElementById("showmes").scrollTop+=document.getElementById("showmes").offsetHeight},somelive:function(e){var t=document.createElement("p");t.innerHTML=e.adminname+"离开了房间",t.style.color="green",t.style.fontWeight="1000",t.style.textAlign="center",t.style.fontSize="6px",document.getElementById("showmes").appendChild(t),document.getElementById("showmes").scrollTop+=document.getElementById("showmes").offsetHeight;var n=e.users;document.getElementById("allpersonmustshow").innerHTML="",n.forEach((function(e){var t=document.createElement("div");t.className="allpersonshow";var n=document.createElement("div");n.className="allimgshow";var r=document.createElement("img");r.src=e.img,n.appendChild(r);var s=document.createElement("div");s.className="nameshow";var i=document.createElement("span");i.innerText=e.adminname,s.appendChild(i),t.appendChild(n),t.appendChild(s),document.getElementById("allpersonmustshow").appendChild(t)})),console.log(e),document.getElementById("currentpeople").innerText="当前在线人数："+e.usertotal}}}),a=i,o=(n("7a4c"),n("2877")),c=Object(o["a"])(a,r,s,!1,null,null,null);t["default"]=c.exports},"159b":function(e,t,n){var r=n("da84"),s=n("fdbc"),i=n("17c2"),a=n("9112");for(var o in s){var c=r[o],l=c&&c.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(m){l.forEach=i}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,s=n("a640"),i=n("ae40"),a=s("forEach"),o=i("forEach");e.exports=a&&o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},4160:function(e,t,n){"use strict";var r=n("23e7"),s=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"498a":function(e,t,n){"use strict";var r=n("23e7"),s=n("58a8").trim,i=n("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return s(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),s=n("5899"),i="["+s+"]",a=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(o,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},"65f0":function(e,t,n){var r=n("861d"),s=n("e8b5"),i=n("b622"),a=i("species");e.exports=function(e,t){var n;return s(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"68cd":function(e,t,n){},"7a4c":function(e,t,n){"use strict";var r=n("68cd"),s=n.n(r);s.a},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,n){var r=n("83ab"),s=n("d039"),i=n("5135"),a=Object.defineProperty,o={},c=function(e){throw e};e.exports=function(e,t){if(i(o,e))return o[e];t||(t={});var n=[][e],l=!!i(t,"ACCESSORS")&&t.ACCESSORS,m=i(t,0)?t[0]:c,d=i(t,1)?t[1]:void 0;return o[e]=!!n&&!s((function(){if(l&&!r)return!0;var e={length:-1};l?a(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,m,d)}))}},b727:function(e,t,n){var r=n("0366"),s=n("44ad"),i=n("7b0b"),a=n("50c4"),o=n("65f0"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,m=4==e,d=6==e,u=5==e||d;return function(p,f,h,g){for(var v,E,y=i(p),w=s(y),S=r(f,h,3),C=a(w.length),L=0,x=g||o,T=t?x(p,C):n?x(p,0):void 0;C>L;L++)if((u||L in w)&&(v=w[L],E=S(v,L,y),e))if(t)T[L]=E;else if(E)switch(e){case 3:return!0;case 5:return v;case 6:return L;case 2:c.call(T,v)}else if(m)return!1;return d?-1:l||m?m:T}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c8d2:function(e,t,n){var r=n("d039"),s=n("5899"),i="​᠎";e.exports=function(e){return r((function(){return!!s[e]()||i[e]()!=i||s[e].name!==e}))}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-3c7e68e6.eb0b0c89.js.map