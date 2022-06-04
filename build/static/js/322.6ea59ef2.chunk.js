"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[322],{6322:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(5861),a=n(885),s=n(7757),o=n.n(s),c=n(9910),l=n(6049),i=n(2791);var u=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"}))})),d=n(8182),f=n(9434),m=n(9123),h=n(184),p=function(){var e=(0,f.v9)((function(e){return e.user.me})),t=(0,i.useState)([]),n=(0,a.Z)(t,2),s=n[0],p=n[1],x=(0,i.useState)(null),j=(0,a.Z)(x,2),v=(j[0],j[1],(0,i.useState)(null)),g=(0,a.Z)(v,2),w=g[0],y=g[1];function N(){return(N=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.g.get("api/v1/file/patient/files",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){p(e.data)}));case 3:console.log(Z()),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var k=function(e){(function(e){return b.apply(this,arguments)})(e).then((function(e){var t=URL.createObjectURL(e.data);y(t)}))};function b(){return(b=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.g.get("/api/v1/file/data/"+t,{responseType:"blob",headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function Z(){return Math.floor(3*Math.random())}return(0,i.useEffect)((function(){!function(){N.apply(this,arguments)}()}),[]),console.log(s),(0,h.jsxs)("div",{className:"w-full space-y-9",children:[(0,h.jsx)(c.tV,{name:"".concat(e.user.fatherName," ").concat(e.user.firstName," ").concat(e.user.lastName," !")}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Oe,{userInformation:e}),(0,h.jsx)(c.aV,{styleList:"rounded-xl",header:(0,h.jsx)("h4",{className:"text-xl font-medium",children:"Documents"}),children:0!==s.length?(0,h.jsxs)("table",{className:"[border-spacing:0 0.75rem] border-collapse w-full table-auto bg-[#F8F9FD] rounded-t-xl",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{className:"text-left text-gray-400 text-sm",children:[(0,h.jsx)("th",{className:"py-4 font-normal px-10",children:"Name"}),(0,h.jsx)("th",{className:"py-4 font-normal px-10",children:"Type"}),(0,h.jsx)("th",{className:"py-4 font-normal px-10",children:"Specialist"}),(0,h.jsx)("th",{className:"py-4 font-normal px-10 text-center",children:"Download"})]})}),(0,h.jsx)("tbody",{children:s.map((function(e,t){return(0,h.jsxs)("tr",{className:(0,d.Z)("text-sm text-left",t%2===0&&"bg-white"),children:[(0,h.jsx)("td",{className:"py-4 font-normal px-10",children:e.name}),(0,h.jsx)("td",{className:"py-4 font-normal px-10",children:e.contentType}),(0,h.jsx)("td",{className:"py-4 font-normal px-10",children:"Dr. Vin Diesel"}),(0,h.jsx)("td",{className:"py-4 flex justify-center font-normal text-center px-10",children:(0,h.jsx)("a",{href:w,onClick:function(){return k(e.id)},download:!0,children:(0,h.jsx)(l.Z,{className:"cursor-pointer w-5 text-[#3A57E8]"})})})]},e.id)}))})]}):(0,h.jsxs)("div",{className:"text-center text-gray-400 py-6 px-3 flex items-center justify-center",children:[(0,h.jsx)(u,{className:"w-11"}),(0,h.jsx)("p",{className:"text-lg font-medium",children:"No documents"})]})}),(0,h.jsx)(c._V,{className:"py-4 px-2.5",isDoctor:!1})]})]})}},6049:function(e,t,n){var r=n(2791);var a=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"}))}));t.Z=a}}]);
//# sourceMappingURL=322.6ea59ef2.chunk.js.map