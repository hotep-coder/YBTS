(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4,5,6,7,8,9,10],{249:function(t,e,n){"use strict";n.r(e);var l=n(250),o=n.n(l);for(var r in l)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(r);e.default=o.a},250:function(t,e){},251:function(t,e,n){"use strict";n.r(e);var l=n(252),o=n.n(l);for(var r in l)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(r);e.default=o.a},252:function(t,e){},253:function(t,e,n){var content=n(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("ca96d7b6",content,!0,{sourceMap:!1})},254:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("bfd76902",content,!0,{sourceMap:!1})},256:function(t,e,n){t.exports=n.p+"img/logo.2324fed.svg"},257:function(t,e,n){"use strict";n(253)},258:function(t,e,n){var l=n(105)(!1);l.push([t.i,".container[data-v-0aee6515]{min-height:100vh}",""]),t.exports=l},259:function(t,e,n){"use strict";n(254)},260:function(t,e,n){var l=n(105)(!1);l.push([t.i,".fullheight[data-v-74e447dc]{min-height:95vh}",""]),t.exports=l},261:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return o}));var l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Usage")])])}]},262:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return o}));var l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section"},[n("h1",{staticClass:"title"},[t._v("\n      About\n    ")]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n      Developer, Version, Framework\n    ")])]),t._v(" "),n("div",{staticClass:"tile is-ancestor"},[n("div",{staticClass:"tile is-5 is-vertical is-parent"},[n("div",{staticClass:"tile is-child box"},[n("p",{staticClass:"title"},[t._v("\n          Developer\n        ")]),t._v("\n        Y. Narita (Principal developer)"),n("br"),t._v("\n        S. Sasaki (implementation)"),n("br"),t._v("\n        K. Katayama (implementation)"),n("br"),t._v("\n        Y. Murakami (UI-related)"),n("br"),t._v("\n        I. Shiotsuki (UI-related)"),n("br"),t._v("\n        K. Shibuya (adviser)"),n("br"),t._v("\n\n        Thank you for developing this."),n("br")]),t._v(" "),n("div",{staticClass:"tile is-child box"},[n("p",{staticClass:"title"},[t._v("\n          Version\n        ")]),t._v(" "),n("p",[t._v("\n          2021/7/20 Version1.0.0          クーポン以外の実装\n        ")]),t._v(" "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" "),n("a",{attrs:{href:"https://buefy.org",target:"_blank"}},[t._v("Buefy")])])]),t._v(" "),n("div",{staticClass:"tile is-child box"},[n("p",{staticClass:"title"},[t._v("\n          What we used\n        ")]),t._v(" "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" "),n("a",{attrs:{href:"https://buefy.org",target:"_blank"}},[t._v("Buefy")])])])])}]},263:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(106).default)("6dd49c3c",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);var l=n(261),o=n(249);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var c=n(45),component=Object(c.a)(o.default,l.a,l.b,!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n.r(e);var l=n(262),o=n(251);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var c=n(45),component=Object(c.a)(o.default,l.a,l.b,!1,null,"6f8b8a43",null);e.default=component.exports},267:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{activepane:5}},methods:{setActivePane:function(t){this.activepane=t,this.$emit("changePane",this.activepane)}}},o=(n(257),n(45)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"box container"},[l("b-menu",[l("img",{attrs:{src:n(256),width:"256",height:"256"}}),t._v(" "),l("b-menu-list",{attrs:{label:"General"}},[l("b-menu-item",{attrs:{icon:"view-dashboard-variant-outline",label:"DashBoard",active:0===t.activepane},on:{click:function(e){return t.setActivePane(0)}}}),t._v(" "),l("b-menu-item",{attrs:{icon:"book-open-blank-variant",label:"Sell",active:1===t.activepane},on:{click:function(e){return t.setActivePane(1)}}})],1),t._v(" "),l("b-menu-list",{attrs:{label:"Tool"}},[l("b-menu-item",{attrs:{icon:"file-refresh-outline",label:"Convert",active:2===t.activepane},on:{click:function(e){return t.setActivePane(2)}}}),t._v(" "),l("b-menu-item",{attrs:{icon:"arrow-up-bold-circle-outline",label:"Load",active:3===t.activepane},on:{click:function(e){return t.setActivePane(3)}}}),t._v(" "),l("b-menu-item",{attrs:{icon:"download",label:"Save",active:4===t.activepane},on:{click:function(e){return t.setActivePane(4)}}})],1),t._v(" "),l("b-menu-list",{attrs:{label:"Others"}},[l("b-menu-item",{attrs:{icon:"help-circle-outline",label:"Usage",active:5===t.activepane},on:{click:function(e){return t.setActivePane(5)}}}),t._v(" "),l("b-menu-item",{attrs:{icon:"information-outline",label:"About",active:6===t.activepane},on:{click:function(e){return t.setActivePane(6)}}})],1)],1)],1)}),[],!1,null,"0aee6515",null);e.default=component.exports},268:function(t,e,n){"use strict";n.r(e);var l={props:{json:{type:Object,required:!0}}},o=n(45),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(t._s(t.json))])])}),[],!1,null,"9bb9f926",null);e.default=component.exports},269:function(t,e,n){"use strict";n.r(e);n(182);var l={props:{json:{type:Object,required:!0}},data:function(){return{inputisbn:null,couponnum:0,sellisbn:[],columns:[{field:"id",label:"ID",width:"40"},{field:"isbn",label:"ISBN"}]}},methods:{addISBN:function(){var t=this;null===this.json.isbn?(this.$emit("addlog","E-000",null),this.$buefy.toast.open({message:"データがインポートされていません",type:"is-danger"})):!function(){for(var i=0;i<t.sellisbn.length;i++)if(t.sellisbn[i].isbn===t.inputisbn)return!0;return!1}()?String(t.inputisbn)in t.json.isbn?t.json.isbn[String(t.inputisbn)].issold?(this.$emit("addlog","E-003",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" は既に売れています",type:"is-danger"})):(this.sellisbn.push({}),this.sellisbn[this.sellisbn.length-1].id=this.sellisbn.length,this.sellisbn[this.sellisbn.length-1].isbn=this.inputisbn,this.inputisbn=null):(this.$emit("addlog","E-002",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" なんて本は存在しません",type:"is-danger"})):(console.log("E-001"),this.$emit("addlog","E-001",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" は既に追加されています",type:"is-danger"}))},removeAllISBN:function(){this.sellisbn.splice(0)},sell:function(){0===this.sellisbn.length?(this.$emit("addlog","E-004",this.sellisbn),this.$buefy.toast.open({message:"ISBNが入力されていません",type:"is-danger"})):this.sellisbn.length<this.couponnum?(this.$emit("addlog","E-005",this.couponnum),this.$emit("addlog","E-006",this.sellisbn),this.$buefy.toast.open({message:"クーポンは "+this.couponnum+"枚で 本の数 "+this.sellisbn.length+" を超えています",type:"is-danger"})):(this.$emit("sell",this.sellisbn),this.$emit("addCoupon",this.couponnum,this.sellisbn),this.$buefy.toast.open({message:this.sellisbn.length+" 冊の本を売却しました"}),this.removeAllISBN())}}},o=(n(259),n(45)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fullheight"},[n("b-field",{attrs:{message:"ISBNを入力してください"}},[n("b-input",{attrs:{placeholder:"ISBN"},model:{value:t.inputisbn,callback:function(e){t.inputisbn=e},expression:"inputisbn"}}),t._v(" "),n("b-button",{attrs:{type:"is-primary",label:"追加"},on:{click:t.addISBN}})],1),t._v(" "),n("b-table",{attrs:{data:t.sellisbn,columns:t.columns},scopedSlots:t._u([{key:"empty",fn:function(){return[n("div",{staticClass:"has-text-centered"},[t._v("まだ入力されていません")])]},proxy:!0}])}),t._v(" "),n("b-field",{attrs:{message:"クーポンの数を入力してください"}},[n("b-numberinput",{attrs:{min:"0",placeholder:"0","controls-position":"compact"},model:{value:t.couponnum,callback:function(e){t.couponnum=e},expression:"couponnum"}})],1),t._v(" "),n("b-button",{attrs:{type:"is-info",label:"すべて売却"},on:{click:t.sell}}),t._v(" "),n("b-button",{attrs:{type:"is-danger",label:"全追加取り消し"},on:{click:t.removeAllISBN}})],1)}),[],!1,null,"74e447dc",null);e.default=component.exports},270:function(t,e,n){"use strict";n.r(e);n(14),n(25),n(26),n(255),n(180),n(27),n(181),n(46),n(37),n(47),n(30),n(48),n(49);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,l=function(){};return{s:l,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw r}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var r={data:function(){return{isbntabledata:""}},methods:{convert:function(){var t,data={version:"0.0.1",isbn:{},union:{},log:{}},e=l(this.isbntabledata.split("\n"));try{for(e.s();!(t=e.n()).done;){var i=t.value;""!==i&&(data.isbn[String(i)]={},data.isbn[String(i)].issold=!1,data.isbn[String(i)].soldtime=null)}}catch(t){e.e(t)}finally{e.f()}var n=JSON.stringify(data),o=new Blob([n],{type:"text/plain"}),link=document.createElement("a");link.href=window.URL.createObjectURL(o),link.download="isbn.json",link.click()}}},c=n(45),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-field",{attrs:{label:"ISBNTable"}},[n("b-input",{attrs:{type:"textarea"},model:{value:t.isbntabledata,callback:function(e){t.isbntabledata=e},expression:"isbntabledata"}})],1),t._v(" "),n("b-button",{on:{click:function(e){return t.convert()}}},[t._v("\n    保存\n  ")])],1)}),[],!1,null,"87f736a2",null);e.default=component.exports},271:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{file:null,json:null}},methods:{onFileChange:function(t){var e=this,n=t.target.files[0];if(n){var l=new FileReader;l.onload=function(t){e.json=JSON.parse(t.target.result),e.$emit("jsondata",e.json)},l.readAsText(n)}}}},o=n(45),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-field",{staticClass:"file is-primary",class:{"has-name":!!t.file}},[n("b-upload",{staticClass:"file-label",on:{change:t.onFileChange},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("span",{staticClass:"file-cta"},[n("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),t._v(" "),n("span",{staticClass:"file-label"},[t._v("Click to upload")])],1),t._v(" "),t.file?n("span",{staticClass:"file-name"},[t._v("\n        "+t._s(t.file.name)+"\n      ")]):t._e()])],1)],1)}),[],!1,null,"37227c78",null);e.default=component.exports},272:function(t,e,n){"use strict";n.r(e);n(14),n(25),n(26),n(255),n(180);var l={props:{json:{type:Object,required:!0}},methods:{save:function(){var t=JSON.stringify(this.json),e=new Blob([t],{type:"text/plain"}),link=document.createElement("a");link.href=window.URL.createObjectURL(e),link.download="isbn.json",link.click()}}},o=n(45),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-button",{on:{click:t.save}},[t._v("\n    Save json\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n(263)},274:function(t,e,n){var l=n(105)(!1);l.push([t.i,".v-enter-active[data-v-9d622958],.v-leave-active[data-v-9d622958]{transition:opacity .1s}.v-enter[data-v-9d622958],.v-leave-to[data-v-9d622958]{opacity:0}",""]),t.exports=l},280:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{activepane:5,json:null}},methods:{getPane:function(input){this.activepane=input},getJsonData:function(t){this.json=t},sell:function(t){for(var e=new Date,i=0;i<t.length;i++)this.json.isbn[String(t[i].isbn)].issold=!0,this.json.isbn[String(t[i].isbn)].soldtime=Math.floor(e.getTime()/1e3)},addCoupon:function(t,e){var n=new Date;this.json.union[Math.floor(n.getTime()/1e3)]={},this.json.union[Math.floor(n.getTime()/1e3)].couponnum=t,this.json.union[Math.floor(n.getTime()/1e3)].sellisbn=[],console.log(e);for(var i=0;i<e.length;i++)this.json.union[Math.floor(n.getTime()/1e3)].sellisbn.push(e[i].isbn)},addlog:function(t,e){var n=new Date;this.json.log[Math.floor(n.getTime()/1e3)]={},this.json.log[Math.floor(n.getTime()/1e3)].logtype=t,this.json.log[Math.floor(n.getTime()/1e3)].comment=e}}},o=(n(273),n(45)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-narrow"},[n("SideBar",{on:{changePane:t.getPane}})],1),t._v(" "),n("div",{staticClass:"column m-2"},[n("transition",{attrs:{mode:"out-in"}},[0===t.activepane?n("DashBoard",{attrs:{json:t.json}}):t._e(),t._v(" "),1===t.activepane?n("Sell",{attrs:{json:t.json},on:{sell:t.sell,addCoupon:t.addCoupon,addlog:t.addlog}}):t._e(),t._v(" "),2===t.activepane?n("Convert"):t._e(),t._v(" "),3===t.activepane?n("Load",{on:{jsondata:t.getJsonData}}):t._e(),t._v(" "),4===t.activepane?n("Save",{attrs:{json:t.json}}):t._e(),t._v(" "),5===t.activepane?n("Usage"):t._e(),t._v(" "),6===t.activepane?n("About"):t._e()],1)],1)])}),[],!1,null,"9d622958",null);e.default=component.exports;installComponents(component,{SideBar:n(267).default,DashBoard:n(268).default,Sell:n(269).default,Convert:n(270).default,Load:n(271).default,Save:n(272).default,Usage:n(264).default,About:n(265).default})}}]);