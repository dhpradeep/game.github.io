(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0c71":function(t,e,n){"use strict";var r=n("f8f0"),a=n.n(r);a.a},"0f34":function(t,e,n){},"152c":function(t,e,n){"use strict";var r=n("f9d1"),a=n.n(r);a.a},"1d79":function(t,e,n){"use strict";var r=n("7a0b"),a=n.n(r);a.a},6048:function(t,e,n){"use strict";var r=n("0f34"),a=n.n(r);a.a},6568:function(t,e,n){},"7a0b":function(t,e,n){},"825c":function(t,e,n){"use strict";var r=n("d5f4"),a=n.n(r);a.a},"859e":function(t,e,n){"use strict";var r=n("6568"),a=n.n(r);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),i=n.n(a),o={},s=i.a.create(o);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["default"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Main")},u=[],l=n("d4ec"),d=n("262e"),m=n("2caf"),f=n("9ab4"),p=n("60a3"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},v=[],b=function(t){Object(d["a"])(n,t);var e=Object(m["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return n}(p["b"]),g=b,w=n("2877"),O=Object(w["a"])(g,h,v,!1,null,null,null),y=O.exports,k=function(t){Object(d["a"])(n,t);var e=Object(m["a"])(n);function n(){return Object(l["a"])(this,n),e.apply(this,arguments)}return n}(p["b"]);k=Object(f["a"])([Object(p["a"])({components:{Main:y}})],k);var _=k,j=_,$=(n("0c71"),Object(w["a"])(j,c,u,!1,null,null,null)),x=$.exports,C=n("8c4f"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-login"},[r("md-card",[r("md-card-content",[r("md-card-media",[r("img",{staticClass:"logo-header",attrs:{src:n("cf05"),alt:"logo"}}),r("div",{staticClass:"md-toolbar-section-end"},[r("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.skiplogin()}}},[t._v("Skip login")])],1)]),r("form",{attrs:{id:"loginForm"}},[r("md-field",[r("label",[t._v("email / username")]),r("md-input",{attrs:{type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("md-field",[r("label",[t._v("password")]),r("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.login()}}},[t._v("Login")]),r("router-link",{attrs:{to:"/register"}},[r("p",[t._v("or register here")])])],1)],1)],1)],1)},T=[],S=n("bee2"),L=function(t){Object(d["a"])(n,t);var e=Object(m["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.call(this),t.email="",t.password="",t.token="",t.onRedirect(),t}return Object(S["a"])(n,[{key:"login",value:function(){var t=this;this.$swal.fire({html:"Logging In...",timer:1e4,allowOutsideClick:function(){return!t.$swal.isLoading()},onBeforeOpen:function(){t.$swal.showLoading(),i.a.post("http://api.sevadev.com/api/v1/login",{email:t.email,password:t.password}).then((function(e){t.token=e.data.token,e.data.auth&&(t.$store.dispatch("login",t.token),t.$store.dispatch("register",e.data.user)),t.$swal.fire({icon:"success",title:"Logged in successfully",showConfirmButton:!1,timer:1500}),t.onRedirect()})).catch((function(){t.$swal.fire({icon:"error",title:"Try again",text:"Username or Password is wrong!"})}))},onClose:function(){t.$swal.fire({icon:"error",title:"Try again",text:"Username or Password is wrong!"})}})}},{key:"skiplogin",value:function(){this.$store.dispatch("login","token"),this.onRedirect()}},{key:"onRedirect",value:function(){this.$store.state.isAuthenticated&&this.$router.push({name:"Start"})}}]),n}(p["b"]);L=Object(f["a"])([p["a"]],L);var P=L,A=P,G=(n("825c"),Object(w["a"])(A,R,T,!1,null,"38c23a01",null)),B=G.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"my-login"},[r("md-card",[r("md-card-content",[r("md-card-media",[r("img",{staticClass:"logo-header",attrs:{src:n("cf05"),alt:"logo"}})]),r("form",{attrs:{id:"registerForm"}},[r("md-field",[r("label",[t._v("name")]),r("md-input",{attrs:{type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),r("md-field",[r("label",[t._v("email")]),r("md-input",{attrs:{type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("md-field",[r("label",[t._v("password")]),r("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.register()}}},[t._v("Register")]),r("router-link",{attrs:{to:"/login"}},[r("p",[t._v("or login here")])])],1)],1)],1)],1)},E=[],M=(n("b0c0"),function(t){Object(d["a"])(n,t);var e=Object(m["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.call(this),t.name="",t.email="",t.password="",t.token="",t.onRedirect(),t}return Object(S["a"])(n,[{key:"register",value:function(){var t=this;this.$swal.fire({html:"processing...",timer:1e4,allowOutsideClick:function(){return!t.$swal.isLoading()},onBeforeOpen:function(){t.$swal.showLoading(),i.a.post("http://api.sevadev.com/api/v1/register",{name:t.name,email:t.email,password:t.password}).then((function(e){t.token=e.data.token,e.data.auth&&(t.$store.dispatch("login",t.token),t.$store.dispatch("register",e.data.user)),t.$swal.fire({icon:"success",title:"Register successfully",showConfirmButton:!1,timer:1500}),t.onRedirect()})).catch((function(){t.$swal.fire({icon:"error",title:"Problem while registering",showConfirmButton:!1,timer:1500})}))},onClose:function(){t.$swal.fire({icon:"error",title:"Problem while registering",showConfirmButton:!1,timer:1500})}})}},{key:"onRedirect",value:function(){this.$store.state.isAuthenticated&&this.$router.push({name:"Start"})}}]),n}(p["b"]));M=Object(f["a"])([p["a"]],M);var F=M,I=F,J=(n("1d79"),Object(w["a"])(I,W,E,!1,null,"5d73c150",null)),U=J.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-login"},[n("md-card",[n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-raised md-accent",on:{click:t.logOut}},[t._v("Log Out")])],1),n("md-card-header",[n("h3",[t._v("Welcome "+t._s(t.name)+",")])]),n("md-card-content",[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.$router.push({name:"Game"})}}},[t._v("Start Game")]),n("br"),n("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.$router.push({name:"Leaderboard"})}}},[t._v("View Leaderboard")])],1)],1)],1)},V=[],Y=function(t){Object(d["a"])(n,t);var e=Object(m["a"])(n);function n(){var t,r;(Object(l["a"])(this,n),t=e.call(this),t.name="username",t.onRedirect(),t.$store.state.user.name)&&(t.name=null===(r=t.$store.state.user)||void 0===r?void 0:r.name);return t}return Object(S["a"])(n,[{key:"logOut",value:function(){this.$store.dispatch("logOut"),this.onRedirect()}},{key:"onRedirect",value:function(){this.$store.state.isAuthenticated||this.$router.push({name:"Login"})}}]),n}(p["b"]);Y=Object(f["a"])([p["a"]],Y);var z=Y,D=z,H=(n("859e"),Object(w["a"])(D,q,V,!1,null,"cbe4a11c",null)),K=H.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-game"},[n("md-card",{attrs:{"md-with-hover":""}},[n("md-card-header",[n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-raised md-accent",on:{click:t.logOut}},[t._v("Log Out")])],1)]),t.isGameOver?n("md-card-content",[n("p",[t._v("Game Over")]),n("p",[t._v("You've typed "),n("span",{staticStyle:{color:"greenyellow"}},[t._v(t._s(t.correctWord)+"/"+t._s(t.totalWord))]),t._v(" Correct words!")]),n("p",[t._v("Score features will add "),n("span",{staticStyle:{color:"greenyellow"}},[t._v("soon!")])]),n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.resetAll()}}},[t._v("Play again")]),n("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.$router.push({name:"Leaderboard"})}}},[t._v("Goto LeaderBoard")])],1):t._e(),t.isGameOver?t._e():n("md-card-content",[n("md-content",{staticClass:"word-box"},t._l(t.words,(function(e){return n("span",{staticClass:"word-list"},[t._v(t._s(e)+" ")])})),0),n("br"),n("md-field",[n("md-input",{attrs:{type:"text",placeholder:"type here..."},on:{keydown:function(e){return t.beginTime()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.onSubmit()}},model:{value:t.word,callback:function(e){t.word=e},expression:"word"}})],1),n("br"),n("md-content",{staticClass:"time-box"},[n("span",{staticClass:"timer",class:t.seconds<10?"timer-color":""},[t._v("Time: "+t._s(t.currentTime))])])],1)],1)],1)},Q=[],X=(n("25f0"),n("498a"),function(t){Object(d["a"])(n,t);var e=Object(m["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.call(this),t.isGameOver=!1,t.word="",t.words=[],t.currentTime="1:00",t.startTimer=!1,t.seconds=60,t.correctWord=0,t.totalWord=0,t.onRedirect(),t.resetAll(),t}return Object(S["a"])(n,[{key:"onSubmit",value:function(){var t=this.words.shift();this.words.length>0?(this.totalWord+=1,t==this.word.trim()&&(this.correctWord+=1),this.word=""):this.isGameOver=!0}},{key:"logOut",value:function(){this.$store.dispatch("logOut"),this.onRedirect()}},{key:"startTimerFunc",value:function(){var t=this,e=window.setInterval((function(){t.seconds<60&&(t.currentTime=t.seconds.toString()),t.seconds>0?t.seconds--:(clearInterval(e),t.isGameOver=!0)}),1e3)}},{key:"beginTime",value:function(){this.startTimer||(this.startTimerFunc(),this.startTimer=!0)}},{key:"resetAll",value:function(){var t=this;this.word="",this.isGameOver=!1,this.seconds=60,this.currentTime="1:00",this.startTimer=!1,this.correctWord=0,i.a.get("https://random-word-api.herokuapp.com/word?number=200").then((function(e){t.words=e.data})).catch((function(){t.$swal.fire({icon:"error",title:"Try later",text:"error while geeting words!"})}))}},{key:"onRedirect",value:function(){this.$store.state.isAuthenticated||this.$router.push({name:"Login"})}}]),n}(p["b"]));X=Object(f["a"])([p["a"]],X);var Z=X,tt=Z,et=(n("152c"),Object(w["a"])(tt,N,Q,!1,null,"b6a3deb6",null)),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-login"},[n("md-card",[n("md-card-header",[n("md-button",{staticClass:"md-raised md-primary",on:{click:function(e){return t.$router.push({name:"Start"})}}},[n("md-icon",[t._v("arrow_left")]),t._v(" Goto game ")],1)],1),n("md-card-content",[n("md-table",[t._v("table")])],1)],1)],1)},at=[],it=function(t){Object(d["a"])(n,t);var e=Object(m["a"])(n);function n(){var t;return Object(l["a"])(this,n),t=e.call(this),t.onRedirect(),t}return Object(S["a"])(n,[{key:"onRedirect",value:function(){this.$store.state.isAuthenticated?this.$swal.fire({icon:"info",title:"Features not available",text:"This features will add soon!",showConfirmButton:!1,timer:1500}):this.$router.push({name:"Login"})}}]),n}(p["b"]);it=Object(f["a"])([p["a"]],it);var ot=it,st=ot,ct=(n("6048"),Object(w["a"])(st,rt,at,!1,null,"218cde99",null)),ut=ct.exports;r["default"].use(C["a"]);var lt=[{path:"/",redirect:"./login"},{path:"/login/",name:"Login",component:B},{path:"/register/",name:"Register",component:U},{path:"/start/",name:"Start",component:K},{path:"/game/",name:"Game",component:nt},{path:"/leaderboard/",name:"Leaderboard",component:ut},{path:"*",name:"catchAll",component:B}],dt=new C["a"]({mode:"history",base:"/",routes:lt}),mt=dt,ft=n("43f9"),pt=n.n(ft),ht=n("2f62");r["default"].use(ht["a"]);var vt=new ht["a"].Store({state:{isAuthenticated:!1,token:"",user:{}},mutations:{isAuthenticate:function(t,e){var n=e.authenticatation,r=e.token;t.isAuthenticated=n,t.token=r},isRegister:function(t,e){var n=e.user;t.user=n}},actions:{login:function(t,e){t.commit("isAuthenticate",{authenticatation:!0,token:e})},logOut:function(t){t.commit("isAuthenticate",{authenticatation:!1,token:""})},register:function(t,e){t.commit("isRegister",{user:e})}}}),bt=n("5886");n("4413");r["default"].config.productionTip=!1,r["default"].use(pt.a),r["default"].use(bt["a"]),new r["default"]({router:mt,store:vt,render:function(t){return t(x)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d5f4:function(t,e,n){},f8f0:function(t,e,n){},f9d1:function(t,e,n){}});
//# sourceMappingURL=app.2a254416.js.map