(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{271:function(e,l,n){"use strict";n.r(l);var t={data:function(){return{file:null,json:null}},methods:{onFileChange:function(e){var l=this,n=e.target.files[0];if(n){var t=new FileReader;t.onload=function(e){l.json=JSON.parse(e.target.result),l.$emit("jsondata",l.json)},t.readAsText(n)}}}},o=n(45),component=Object(o.a)(t,(function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",[n("b-field",{staticClass:"file is-primary",class:{"has-name":!!e.file}},[n("b-upload",{staticClass:"file-label",on:{change:e.onFileChange},model:{value:e.file,callback:function(l){e.file=l},expression:"file"}},[n("span",{staticClass:"file-cta"},[n("b-icon",{staticClass:"file-icon",attrs:{icon:"upload"}}),e._v(" "),n("span",{staticClass:"file-label"},[e._v("Click to upload")])],1),e._v(" "),e.file?n("span",{staticClass:"file-name"},[e._v("\n        "+e._s(e.file.name)+"\n      ")]):e._e()])],1)],1)}),[],!1,null,"08e64400",null);l.default=component.exports}}]);