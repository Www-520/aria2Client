(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ae2":function(e,t,n){"use strict";n("74ce")},2395:function(e,t,n){},"2b25":function(e,t,n){"use strict";n("32dc")},3125:function(e,t,n){"use strict";n("815d")},"32dc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{staticClass:"nav-top"},[n("h1",{staticStyle:{"text-align":"center"},on:{click:function(t){e.dropDownSty=!e.dropDownSty}}},[e._v(" hh "),n("i",{staticClass:"el-icon-arrow-down"})]),n("div",{staticClass:"drop-down",class:{dropDownSty:e.dropDownSty}},[e._l(e.serves,(function(t,a){return n("p",{key:a,staticClass:"drop-down-link",on:{click:function(n){e.dropLinkIcon=t.name,e.switchServe(t)}}},[e._v(" "+e._s(t.name)+" "),n("i",{staticClass:"el-icon-check",class:{dropLinkIcon:e.dropLinkIcon==t.name}})])})),e._v(" "+e._s(e.collectionStatus)+" ")],2),n("p",{staticClass:"pSame"},[e._v("下载")])]),n("div",{staticClass:"nav-main"},[n("p",{ref:"Downloading",staticClass:"btnClick",on:{click:function(t){e.DownloadPage=!0,e.btnClick("Downloading")}}},[n("router-link",{attrs:{to:"/"}},[n("span",{staticStyle:{"padding-left":"17px"}},[n("i",{staticClass:"el-icon-download"}),e._v(" 正在下载 ")])])],1),n("p",{ref:"Completed",on:{click:function(t){e.DownloadPage=!1,e.btnClick("Completed")}}},[n("router-link",{attrs:{to:"/completed"}},[n("span",{staticStyle:{"padding-left":"17px"}},[n("i",{staticClass:"el-icon-download"}),e._v(" 已完成 ")])])],1),n("main",{staticClass:"pSame"},[e._v("系统")]),n("p",{ref:"Setting",on:{click:function(t){e.DownloadPage=!1,e.btnClick("Setting")}}},[n("router-link",{attrs:{to:"/setting"}},[n("span",{staticStyle:{"padding-left":"17px"}},[n("i",{staticClass:"el-icon-download"}),e._v(" aria2 设置 ")])])],1),n("p",{ref:"Serves",on:{click:function(t){e.DownloadPage=!1,e.btnClick("Serves")}}},[n("router-link",{attrs:{to:"/serves"}},[n("span",{staticStyle:{"padding-left":"17px"}},[n("i",{staticClass:"el-icon-download"}),e._v(" aria2 服务器设置 ")])])],1)])]),n("div",{staticStyle:{flex:"1",height:"100%"}},[n("div",{staticClass:"nav-footer"},[n("div",{class:{appPage:e.DownloadPage}},[n("div",{staticClass:"top-btn nav-top-table"},[n("div",{on:{click:function(t){e.DownloadPage=!1}}},[n("router-link",{attrs:{to:"/nexttack"}},[n("span",{staticStyle:{"padding-left":"17px"}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 新建 ")])])],1),n("span",{staticClass:"nav-top-line"}),n("button",{on:{click:function(t){return e.execSelected("unpause")}}},[n("i",{staticClass:"el-icon-video-play"})]),n("button",{on:{click:function(t){return e.execSelected("pause")}}},[n("i",{staticClass:"el-icon-video-pause"})]),n("button",{on:{click:function(t){return e.execSelected("remove")}}},[n("i",{staticClass:"el-icon-folder-delete"})]),n("span",{staticClass:"nav-top-line"}),n("button",{on:{click:function(t){return e.selectAllItem()}}},[n("i",{staticClass:"el-icon-document-copy"})])]),e._m(0)]),n("router-view",{attrs:{aria2:e.aria2},on:{"serve-changed":function(t){e.serves=t}}}),n("footer",[n("div",{staticClass:"messageBox"},[n("el-button",{staticClass:"el-icon-s-tools",attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("快捷方式")]),n("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px","margin-top":"25px"}},[e.task?n("span",[n("i",{staticClass:"el-icon-download",staticStyle:{color:"rgb(116, 163, 41)"}}),e._v(" "+e._s(e.numFixed(e.task.downloadSpeed))+" kb/s ")]):e._e(),e.task?n("span",[n("i",{staticClass:"el-icon-upload",staticStyle:{color:"rgb(58, 137, 232)"}}),e._v(" "+e._s(e.numFixed(e.task.uploadSpeed))+" kb/s ")]):e._e()]),n("el-dialog",{staticClass:"el-box",attrs:{title:"全局限制速度",visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[[n("span",[e._v("全局最大下载速度")]),n("p",{staticClass:"limitBox"},[n("el-input",{attrs:{value:e.maxDownloadLimit},model:{value:e.maxDownloadLimit,callback:function(t){e.maxDownloadLimit=t},expression:"maxDownloadLimit"}}),n("span",[e._v("字节")])],1)],n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeLimit()}}},[e._v("确 定")])],1)],2)],1)])],1)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-table-title"},[n("span",[e._v("文件名")]),n("span",[e._v("大小")]),n("span",{staticStyle:{width:"20%"}},[e._v("进度")]),n("span",[e._v("下载速度")])])}],o=n("c7eb"),r=n("1da1"),l=(n("b0c0"),n("e9c4"),n("b680"),n("d4ec")),c=n("bee2"),u=(n("99af"),n("d3b7"),function(){function e(t){var n=this;Object(l["a"])(this,e),this.options=t,this.websocket=new WebSocket("ws://".concat(t.host,":").concat(t.port,"/jsonrpc")),this.connectPromise=new Promise((function(e,t){n.websocket.addEventListener("open",(function(){e()})),n.websocket.addEventListener("error",(function(e){t("WS_CONNECTION_ERROR")}))})),this.lastId=1,this.callbacks={},this.websocket.addEventListener("message",(function(e){var t=JSON.parse(e.data),a=n.callbacks[t.id];delete n.callbacks[t.id],"function"==typeof a&&a(t)}))}return Object(c["a"])(e,[{key:"ready",value:function(){return this.connectPromise}},{key:"close",value:function(){var e=this;return this.websocket.close(),new Promise((function(t,n){e.websocket.addEventListener("close",(function(){t()}))}))}}]),e}());["addUri","addTorrent","getPeers","addMetalink","remove","pause","forcePause","pauseAll","forcePauseAll","unpause","unpauseAll","forceRemove","changePosition","tellStatus","getUris","getFiles","getServers","tellActive","tellWaiting","tellStopped","getOption","changeUri","changeOption","getGlobalOption","changeGlobalOption","purgeDownloadResult","removeDownloadResult","getVersion","getSessionInfo","shutdown","forceShutdown","getGlobalStat","saveSession","system.multicall","system.listMethods","system.listNotifications"].forEach((function(e){u.prototype[e]=function(){for(var t=this,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return this.connectPromise.then((function(){return new Promise((function(n,s){var i=t,o=i.lastId++;t.callbacks[o]=function(e){e.error?s(e.error):n(e.result)},i.websocket.send(JSON.stringify({jsonrpc:"2.0",id:o,method:"aria2.".concat(e),params:["token:".concat(i.options.secert)].concat(a)}))}))}))}}));var d=u,p={data:function(){var e=JSON.parse(localStorage.getItem("aria2Serves"))||[],t=JSON.parse(localStorage.getItem("btnSty"))||[];return{toggleStyle:"",judgeStyle:[],dialogVisible:!1,maxDownloadLimit:0,task:null,dropDownSty:!1,dropLinkIcon:null,serves:e,selectedServes:null,collectionStatus:"",aria2:null,DownloadPage:!0,btnSty:t}},created:function(){0==this.serves.length&&(this.serves=[{name:"127.0.0.1:6800",host:"127.0.0.1",port:"6800",secert:""}]),this.selectedServes=this.serves[0],this.switchServe(this.selectedServes)},mounted:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"Downloading"!=e.$route.name&&(e.DownloadPage=!1),t.prev=1,t.next=4,e.aria2.getGlobalStat();case 4:e.task=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log("WS_CONNECTION_ERROR");case 10:e.setIntervalId=setInterval(Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.aria2.getGlobalStat();case 3:e.task=t.sent,t.next=13;break;case 6:if(t.prev=6,t.t0=t["catch"](0),"WS_CONNECTION_ERROR"!=t.t0){t.next=12;break}clearInterval(e.setIntervalId),t.next=13;break;case 12:throw t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,6]])}))),1e3),n=e,e.$router.onReady((function(){e.btnClick(n.$route.name)}));case 13:case"end":return t.stop()}}),t,null,[[1,7]])})))()},beforeDestroy:function(){clearInterval(this.setIntervalId)},methods:{switchServe:function(e){var t=this;return Object(r["a"])(Object(o["a"])().mark((function n(){var a,s;return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.selectedServes=e,console.log("关闭现有的服务器"),null===(a=t.aria2)||void 0===a||a.close(),t.collectionStatus="连接中...",console.log("连接新的服务器"),s=new d(t.selectedServes),t.aria2=s,n.prev=7,n.next=10,s.ready();case 10:t.collectionStatus="连接成功",n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](7),t.collectionStatus="连接失败";case 16:case"end":return n.stop()}}),n,null,[[7,13]])})))()},btnClick:function(e){var t=this.$refs;for(var n in e="NextTack"==e?this.btnSty.sty:e,"NextTack"!=e&&localStorage.setItem("btnSty",JSON.stringify({sty:e})),this.$store.state.toggleSele=t,t)t[n].className="";t[e].className="btnClick"},numFixed:function(e){return(e/1024).toFixed(2)},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},changeLimit:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(1),e.dialogVisible=!1,t.next=4,e.aria2.changeGlobalOption({"max-overall-download-limit":e.maxDownloadLimit+""});case 4:case"end":return t.stop()}}),t)})))()}}},v=p,f=(n("7c55"),n("2877")),m=Object(f["a"])(v,s,i,!1,null,null,null),h=m.exports,b=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"top-btn nav-top-table"},[n("div",{on:{click:function(t){e.DownloadPage=!1}}},[n("router-link",{attrs:{to:"/nexttack"}},[n("span",{staticStyle:{"padding-left":"17px"}},[n("i",{staticClass:"el-icon-plus"}),e._v(" 新建 ")])])],1),n("span",{staticClass:"nav-top-line"}),n("button",{on:{click:function(t){return e.execSelected("unpause")}}},[n("i",{staticClass:"el-icon-video-play"})]),n("button",{on:{click:function(t){return e.execSelected("pause")}}},[n("i",{staticClass:"el-icon-video-pause"})]),n("button",{on:{click:function(t){return e.execSelected("remove")}}},[n("i",{staticClass:"el-icon-folder-delete"})]),n("span",{staticClass:"nav-top-line"}),n("button",{on:{click:function(t){return e.selectAllItem()}}},[n("i",{staticClass:"el-icon-document-copy"})])]),e._m(0),n("ul",{staticClass:"download-info",staticStyle:{margin:"0"}},e._l(e.tasks,(function(t,a){return n("li",{key:a,staticClass:"main-boxStyle",on:{click:function(n){return e.toggleSelectd(t)}}},[n("ul",{staticClass:"download-body-info"},[n("li",[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.selected.includes(t.gid)}}),e._v(" "+e._s(e.getFilenames(t.files[0].path))+" ")]),n("li",{staticStyle:{width:"20%"}},[n("el-progress",{attrs:{percentage:+e.fixed(t.completedLength/t.totalLength*100),format:e.format,"text-inside":!0,"stroke-width":26}})],1),n("li",[e._v(" "+e._s(e.fixed(t.downloadSpeed/1024))+" kb/s ")]),n("li",{staticStyle:{"text-align":"right"}},[n("i",{staticClass:"el-icon-more download-btn",on:{click:function(n){return n.stopPropagation(),e.goDetails(t)}}})])])])})),0)])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"task-table-title"},[n("span",[e._v("文件名")]),n("span",[e._v("大小")]),n("span",{staticStyle:{width:"20%"}},[e._v("进度")]),n("span",[e._v("下载速度")])])}],w=n("2909"),k=(n("33d1"),n("ea98"),n("ac1f"),n("1276"),n("a434"),n("159b"),n("d81d"),{name:"Downloading",props:["aria2"],data:function(){return{tasks:[],selected:[],percentage:null}},mounted:function(){var e=this;this.$store.state.DownloadPage=!1,this.aria2,this.intervalId=setInterval(Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.updateList();case 3:t.next=12;break;case 5:if(t.prev=5,t.t0=t["catch"](0),"WS_CONNECTION_ERROR"!=t.t0){t.next=11;break}clearInterval(e.intervalId),t.next=12;break;case 11:throw t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,5]])}))),1e3)},watch:{aria2:function(){this.tasks=[],this.updateList()}},beforeDestroy:function(){clearInterval(this.intervalId)},methods:{updateList:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=[],t.t1=w["a"],t.next=5,e.aria2.tellActive();case 5:return t.t2=t.sent,t.t3=(0,t.t1)(t.t2),t.t4=w["a"],t.next=10,e.aria2.tellWaiting(0,1e3);case 10:t.t5=t.sent,t.t6=(0,t.t4)(t.t5),e.tasks=t.t0.concat.call(t.t0,t.t3,t.t6),console.log(1),t.next=20;break;case 16:throw t.prev=16,t.t7=t["catch"](0),e.tasks=[],t.t7;case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},format:function(e){return 100===e?"满":"".concat(e,"%")},getFilenames:function(e){return e.split("/").at(-1)},fixed:function(e){return e=+e,e.toFixed(2)},toggleSelectd:function(e){var t=this.selected.indexOf(e.gid);-1==t?this.selected.push(e.gid):this.selected.splice(t,1)},execSelected:function(e){var t=this;this.selected.forEach(function(){var n=Object(r["a"])(Object(o["a"])().mark((function n(a){return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.aria2[e](a);case 3:t.updateList(),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log("dont; repeat");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}())},selectAllItem:function(){this.selected.length==this.tasks.length?this.selected=[]:this.selected=this.tasks.map((function(e){return e.gid}))},goDetails:function(e){this.$router.push("/taskinfo/".concat(e.gid))}}}),x=k,C=(n("9256"),Object(f["a"])(x,g,S,!1,null,null,null)),_=C.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.item,expression:"item"}],attrs:{cols:"30",rows:"10"},domProps:{value:e.item},on:{input:function(t){t.target.composing||(e.item=t.target.value)}}},[e._v("aaa")]),n("button",{on:{click:function(t){return e.uploadItem(e.item)}}},[e._v("确定")])])},O=[],j=(n("498a"),{name:"NextTick",props:["aria2"],data:function(){return{item:""}},methods:{uploadItem:function(e){var t=this;return Object(r["a"])(Object(o["a"])().mark((function n(){var a;return Object(o["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.split("/n").map((function(e){return e.trim()})),n.next=3,t.aria2.addUri(a);case 3:t.$router.push("/");case 4:case"end":return n.stop()}}),n)})))()}}}),I=j,D=Object(f["a"])(I,y,O,!1,null,null,null),N=D.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"box"}),n("div",{staticClass:"taggle-btn"},[n("span",{staticClass:"taggle-1",on:{click:function(t){return e.changeIdx(1)}}},[e._v("总览")]),n("span",{staticClass:"taggle-2",on:{click:function(t){return e.changeIdx(2)}}},[e._v("区块信息")])]),e.tasks&&e.$route.params.gid?n("div",{class:{active:e.flag1}},[n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("任务总览")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s(e.getFiles(e.tasks))+" ")])]),n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("任务大小")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s(e.tasks.totalLength/1024/1042)+" MB ")])]),n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("任务状态")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s("active"==e.tasks.status?"正在下载":"未知")+" ")])]),n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("进度")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s((e.tasks.files[0].completedLength/e.tasks.totalLength*100).toFixed(2))+" % ")])]),n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("下载")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s((e.tasks.downloadSpeed/1024).toFixed(2))+" kb/s ")])]),n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("连接数")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s(e.tasks.connections)+" ")])]),n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("下载地址")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s(e.tasks.files[0].path)+" ")])]),n("div",{staticClass:"info-box"},[n("span",{staticClass:"info-name"},[e._v("路径")]),n("span",{staticClass:"info-content"},[e._v(" "+e._s(e.tasks.dir)+" ")])])]):e._e(),e.tasks&&e.$route.params.gid?n("BlockInfo",{class:{active:e.flag2}}):e._e()],1)},$=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.bitfied,(function(e,t){return n("span",{key:t,staticClass:"bitfiedBox",class:{changeBitfied:1==e}})})),0)},E=[],F=(n("a15b"),n("4d90"),n("25f0"),{props:["aria2"],data:function(){return{task:null,bitfied:null}},mounted:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,window.aria2.tellStatus(e.$route.params.gid);case 2:e.task=t.sent,console.log(e.task),e.bitfied=e.task.bitfield.split("").map((function(e){return parseInt(e,16).toString(2).padStart(4,"0")})).join("").split(""),console.log(e.bitfied);case 6:case"end":return t.stop()}}),t)})))()},beforeDesTroy:function(){clearInterval(this.intervalId)}}),R=F,T=(n("3125"),Object(f["a"])(R,L,E,!1,null,null,null)),V=T.exports,G={props:["aria2"],data:function(){return{tasks:null,flag1:!1,flag2:!0}},components:{BlockInfo:V},mounted:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.intervalId=setInterval(Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.aria2.tellStatus(e.$route.params.gid);case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)}))),1e3);case 1:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){clearInterval(this.intervalId)},methods:{getFiles:function(e){return e.files[0].path.split("/").at(-1)},changeIdx:function(e){1==e?(this.flag1=!1,this.flag2=!0):(this.flag1=!0,this.flag2=!1)}}},M=G,A=(n("cb04"),Object(f["a"])(M,P,$,!1,null,null,null)),J=A.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"toggle-nav"},[e._l(e.serves,(function(t,a){return n("div",{key:a,class:{navDisplay:t.name==e.changeServeName}},[n("span",{staticClass:"navStyle",on:{click:function(n){return n.stopPropagation(),e.handleChange(t)}}},[e._v(" "+e._s(t.name)+" ")]),n("span",{on:{click:function(n){return e.deleteServe(t)}}},[n("i",{staticClass:"el-icon-circle-close"})])])})),n("div",[n("div",{staticClass:"toggle-add"},[n("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[n("i",{staticClass:"el-icon-circle-plus-outline"})])],1),n("el-dialog",{attrs:{title:"服务器",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.newServer}},[n("el-form-item",{attrs:{label:"名字","label-width":"120px"}},[n("el-input",{attrs:{autocomplete:"off",placeholder:e.newServer.host+":"+e.newServer.port},model:{value:e.newServer.name,callback:function(t){e.$set(e.newServer,"name",t)},expression:"newServer.name"}})],1),n("el-form-item",{attrs:{label:"地址","label-width":"120px"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.newServer.host,callback:function(t){e.$set(e.newServer,"host",t)},expression:"newServer.host"}})],1),n("el-form-item",{attrs:{label:"端口","label-width":"120px"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.newServer.port,callback:function(t){e.$set(e.newServer,"port",t)},expression:"newServer.port"}})],1),n("el-form-item",{attrs:{label:"密钥","label-width":"120px"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.newServer.secert,callback:function(t){e.$set(e.newServer,"secert",t)},expression:"newServer.secert"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.changeServes()}}},[e._v("确 定")])],1)],1)],1)],2),e._l(e.serves,(function(t,a){return n("div",{key:a,staticClass:"toggle-content"},[n("div",{staticClass:"display-content",class:{changePage:t.name==e.changeServeName}},[n("div",{staticClass:"main-boxStyle"},[n("span",{staticClass:"main-leftStyle"},[e._v("名字")]),n("el-input",{staticClass:"main-rightStyle",attrs:{type:"text"},model:{value:e.saveServe.name,callback:function(t){e.$set(e.saveServe,"name",t)},expression:"saveServe.name"}})],1),n("div",{staticClass:"main-boxStyle"},[n("span",{staticClass:"main-leftStyle"},[e._v("地址")]),n("el-input",{staticClass:"main-rightStyle",attrs:{type:"text"},model:{value:e.saveServe.host,callback:function(t){e.$set(e.saveServe,"host",t)},expression:"saveServe.host"}})],1),n("div",{staticClass:"main-boxStyle"},[n("span",{staticClass:"main-leftStyle"},[e._v("端口")]),n("el-input",{staticClass:"main-rightStyle",attrs:{type:"number"},model:{value:e.saveServe.port,callback:function(t){e.$set(e.saveServe,"port",t)},expression:"saveServe.port"}})],1),n("div",{staticClass:"main-boxStyle"},[n("span",{staticClass:"main-leftStyle"},[e._v("密匙")]),n("el-input",{staticClass:"main-rightStyle",attrs:{type:"password"},model:{value:e.saveServe.secert,callback:function(t){e.$set(e.saveServe,"secert",t)},expression:"saveServe.secert"}})],1),n("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.changeServesOnPage(t)}}},[e._v("修改")])],1)])}))],2)},B=[],U=(n("ddb0"),{props:["aria2"],data:function(){var e=JSON.parse(localStorage.getItem("aria2Serves"))||[];return{serves:e,dialogFormVisible:!1,newServer:{name:"",host:"127.0.0.1",port:"6800",secert:""},saveServe:{name:"",host:"",port:"",secert:""},formLabelWidth:"120px",changeServeName:"",setPassword:""}},created:function(){0==this.serves.length&&(this.newServer.name="127.0.0.1:6800",this.serves.push(this.newServer)),this.changeServeName="127.0.0.1:6800"},mounted:function(){this.handleChange(this.serves[0])},watch:{serves:{handler:function(e){localStorage.setItem("aria2Serves",JSON.stringify(e)),this.$emit("serve-changed",e)},deep:!0,immediate:!0}},methods:{changeServes:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){var n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.dialogFormVisible=!1,e.newServer.name){t.next=11;break}return t.prev=2,t.next=5,e.$confirm("请命名");case 5:return t.abrupt("return");case 8:return t.prev=8,t.t0=t["catch"](2),t.abrupt("return");case 11:t.t1=Object(o["a"])().keys(e.serves);case 12:if((t.t2=t.t1()).done){t.next=26;break}if(n=t.t2.value,e.serves[n].name!=e.newServer.name){t.next=24;break}return t.prev=15,t.next=18,e.$confirm("名字已存在");case 18:return t.abrupt("return");case 21:return t.prev=21,t.t3=t["catch"](15),t.abrupt("return");case 24:t.next=12;break;case 26:e.serves.push(e.newServer),e.handleChange(e.newServer),e.newServer={name:"",host:"127.0.0.1",port:"6800",secert:""};case 29:case"end":return t.stop()}}),t,null,[[2,8],[15,21]])})))()},changeServesOnPage:function(e){var t=this.serves;for(var n in t)if(t[n].name==e.name)return this.serves.splice(+n,1,this.saveServe),void(this.changeServeName=this.serves[n].name)},handleChange:function(e){for(var t in this.changeServeName=e.name,e)this.saveServe[t]=e[t]},deleteServe:function(e){var t=this.serves;for(var n in t)if(t[n].name==e.name)return t.splice(n,1),this.changeServeName=t[n-1].name,void this.handleChange(t[n-1])}}}),z=U,q=(n("6be0"),Object(f["a"])(z,W,B,!1,null,null,null)),H=q.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"overflow-y":"scroll"}},[[n("el-row",[n("el-button",{attrs:{type:"primary",round:""},on:{click:function(t){return e.changeGlobalOpt()}}},[e._v("提交")])],1),e._l(e.setting,(function(t,a){return n("p",{key:a+"a",staticClass:"setting main-boxStyle"},[n("span",{staticClass:"text"},[e._v(" "+e._s(e.$store.state.settingDesc[a]||a)+" ")]),["true"==t||"false"==t?[n("div",{staticClass:"select",staticStyle:{width:"70%"}},[n("el-radio",{attrs:{value:"true",label:"true"},model:{value:e.setting[a],callback:function(t){e.$set(e.setting,a,t)},expression:"setting[i]"}},[e._v("是")]),n("el-radio",{attrs:{value:"false",label:"false"},model:{value:e.setting[a],callback:function(t){e.$set(e.setting,a,t)},expression:"setting[i]"}},[e._v("否")])],1)]:n("div",{staticClass:"select",staticStyle:{width:"70%"}},[n("el-input",{model:{value:e.setting[a],callback:function(t){e.$set(e.setting,a,t)},expression:"setting[i]"}})],1)]],2)}))]],2)},Q=[],X={props:["aria2"],data:function(){return{setting:null,radio:"1"}},mounted:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.aria2.getGlobalOption();case 2:e.setting=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{changeGlobalOpt:function(){var e=this;return Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.aria2.changeGlobalOption(e.setting),t.next=3,e.aria2.getGlobalOption();case 3:e.setting=t.sent;case 4:case"end":return t.stop()}}),t)})))()}}},Y=X,Z=(n("0ae2"),Object(f["a"])(Y,K,Q,!1,null,null,null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"complete-sty"},e._l(e.tasks,(function(t,a){return n("li",{key:a,staticClass:"main-boxStyle"},[e._v(" "+e._s(e.getFilenames(t.files[0].path))+" / "+e._s(e.fixed(t.completedLength/t.totalLength*100))+"% ")])})),0)])},ne=[],ae={name:"completed",props:["aria2"],data:function(){return{tasks:[]}},mounted:function(){var e=this;this.$store.state.DownloadPage=!1;try{this.intervalId=setInterval(Object(r["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.aria2.tellStopped(0,1e3);case 2:e.tasks=t.sent;case 3:case"end":return t.stop()}}),t)}))),1e3)}catch(t){if("WS_CONNECTION_ERROR"!=t)throw t;clearInterval(this.intervalId)}},beforeDestroy:function(){clearInterval(this.intervalId)},methods:{getFilenames:function(e){return e.split("/").at(-1)},fixed:function(e){return e=+e,e.toFixed(2)}}},se=ae,ie=(n("2b25"),Object(f["a"])(se,te,ne,!1,null,null,null)),oe=ie.exports;a["default"].use(b["a"]);var re=[{path:"/",name:"Downloading",component:_},{path:"/completed",name:"Completed",component:oe},{path:"/nexttack",name:"NextTack",component:N},{path:"/taskinfo/:gid",name:"TaskInfo",component:J},{path:"/setting",name:"Setting",component:ee},{path:"/serves",name:"Serves",component:H}],le=new b["a"]({base:"dist",routes:re}),ce=le,ue=n("2f62");a["default"].use(ue["a"]);var de=new ue["a"].Store({state:{toggleSele:"a",settingDesc:{"allow-overwrite":"允许覆盖","allow-piece-length-change":"允许分片大小变化","always-resume":"始终断点续传","async-dns":"异步 DNS","auto-file-renaming":"文件自动重命名","auto-save-interval":"自动保存间隔","conditional-get":"条件下载","conf-path":"配置文件路径","console-log-level":"控制台日志级别","content-disposition-default-utf8":"使用 UTF-8 处理 Content-Disposition",daemon:"启用后台进程","deferred-input":"延迟加载","disable-ipv6":"禁用 IPv6","disk-cache":"磁盘缓存","download-result":"下载结果",dscp:"DSCP","rlimit-nofile":"最多打开的文件描述符","enable-color":"终端输出使用颜色","enable-mmap":"启用 MMap","event-poll":"事件轮询方法","file-allocation":"文件分配方法","force-save":"强制保存","save-not-found":"保存未找到的文件","hash-check-only":"仅哈希检查","human-readable":"控制台可读输出","keep-unfinished-download-result":"保留未完成的任务","max-download-result":"最多下载结果","max-mmap-limit":"MMap 最大限制","max-resume-failure-tries":"最大断点续传尝试次数","min-tls-version":"最低 TLS 版本","log-level":"日志级别","optimize-concurrent-downloads":"优化并发下载","piece-length":"文件分片大小","show-console-readout":"显示控制台输出","summary-interval":"下载摘要输出间隔","max-overall-download-limit":"全局最大下载速度","max-download-limit":"最大下载速度","no-conf":"禁用配置文件","no-file-allocation-limit":"文件分配限制","parameterized-uri":"启用参数化 URI 支持",quiet:"禁用控制台输出","realtime-chunk-checksum":"实时数据块验证","remove-control-file":"删除控制文件","save-session":"状态保存文件","save-session-interval":"保存状态间隔","socket-recv-buffer-size":"Socket 接收缓冲区大小",stop:"自动关闭时间","truncate-console-readout":"缩短控制台输出内容"},setStoreNum:"",DownloadPage:!1,btnClickInfo:""},mutations:{setStore:function(e,t){localStorage.setItem("aria2Serves",t)},getStore:function(e){return e.setStoreNum=localStorage.getItem("aria2Serves"),e.setStoreNum}},actions:{},modules:{}}),pe=n("5c96"),ve=n.n(pe);n("0fae");a["default"].config.productionTip=!1,a["default"].use(ve.a);var fe=new d({host:"localhost",port:"6800",secert:"123456"});window.aria2=fe,new a["default"]({router:ce,store:de,render:function(e){return e(h)}}).$mount("#app")},"6be0":function(e,t,n){"use strict";n("c217")},"74ce":function(e,t,n){},"7c55":function(e,t,n){"use strict";n("2395")},"815d":function(e,t,n){},9256:function(e,t,n){"use strict";n("f195")},a030:function(e,t,n){},c217:function(e,t,n){},cb04:function(e,t,n){"use strict";n("a030")},f195:function(e,t,n){}});
//# sourceMappingURL=app.64adee08.js.map