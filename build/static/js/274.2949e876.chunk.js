"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[274],{6274:function(e,n,i){i.r(n),i.d(n,{default:function(){return k}});var s=i(1413),t=i(885),l=i(2982),a=i(6521),c=i(2791);var r=c.forwardRef((function(e,n){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:n},e),c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}))})),u=i(5062),o=i(3504),d=i(4796),m=i(8556),g=i(8182),f=i(9434),p=i(5861),x=i(7757),v=i.n(x),h=i(9123),y=i(4151),w=function(e){return{type:"SET_CLINICS",payload:e}},N=function(e){return{type:"SET_FETCHING",payload:e}};var j=c.forwardRef((function(e,n){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),c.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))})),b=i(3626),C=i(184),k=function(){var e=(0,f.v9)((function(e){return e.clinic.clinics})),n=(0,f.I0)();console.log(e),(0,c.useEffect)((function(){n(function(){var e=(0,p.Z)(v().mark((function e(n){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(N(!0)),e.prev=1,e.next=4,h.g.get("api/v1/hospital/get-all").then((function(e){n(w(e.data))}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0.message),n((0,y.sT)(!0));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}())}),[]);var i=function(e){x(e?function(e){return(0,l.Z)(e.sort((function(e,n){return n.rating-e.rating})))}:r)},r=(0,c.useMemo)((function(){return[{id:"1",name:"Clinica de la salud",img:u,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",rating:4,address:"Calle de la salud, 1, Madrid"},{id:"2",name:"Clinica de la salud",img:u,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",rating:2,address:"Calle de la salud, 1, Madrid"},{id:"3",name:"Clinica de la salud",img:u,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",rating:1,address:"Calle de la salud, 1, Madrid"},{id:"4",name:"Clinica de la salud",img:u,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",rating:3.5,address:"Calle de la salud, 1, Madrid"},{id:"5",name:"Clinica de la salud",img:u,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",rating:4.8,address:"Calle de la salud, 1, Madrid"},{id:"6",name:"Clinica de la salud",img:u,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",rating:4.2,address:"Calle de la salud, 1, Madrid"},{id:"7",name:"Clinica de la salud",img:u,desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl. Nullam euismod, nisi vel consectetur iaculis, nisl nunc aliquet nunc, eget egestas nisl nunc eget nisl.",rating:5,address:"Calle de la salud, 1, Madrid"}]}),[i]),d=(0,c.useState)(r),m=(0,t.Z)(d,2),x=(m[0],m[1]);return console.log(e),e?(0,C.jsxs)("div",{children:[(0,C.jsx)("div",{className:(0,g.Z)("flex flex-row justify-start items-center pb-7","sm:pr-7"),children:(0,C.jsxs)("div",{className:(0,g.Z)("flex flex-col w-full space-y-2","sm:space-y-0 sm:w-3/4 sm:flex-row sm:justify-between"),children:[(0,C.jsx)("h1",{className:"text-2xl font-medium",children:"Clinics"}),(0,C.jsxs)("div",{className:(0,g.Z)("flex flex-row items-center space-x-3 w-full","sm:w-2/3"),children:[(0,C.jsxs)("div",{className:"mt-1 w-full relative z-0 rounded-md shadow-sm",children:[(0,C.jsx)("input",{type:"text",name:"account-number",id:"account-number",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-10 sm:text-sm border-black rounded-md",placeholder:"Search"}),(0,C.jsx)("div",{className:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",children:(0,C.jsx)(j,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),(0,C.jsx)(q,{sortByRating:i})]})]})}),(0,C.jsx)(a.aV,{className:"px-4 py-3 max-h-[500px]",children:e.map((function(e){return(0,C.jsx)(o.OL,{to:"".concat(e.id),children:(0,C.jsx)(a.aY,(0,s.Z)({},e),e.id)},"".concat(e.id))}))})]}):(0,C.jsx)(b.Z,{})},q=function(e){var n=e.sortByRating;return(0,C.jsxs)(d.v,{as:"div",className:"relative inline-block text-left",children:[(0,C.jsx)("div",{children:(0,C.jsxs)(d.v.Button,{className:"bg-gray-100 rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",children:[(0,C.jsx)("span",{className:"sr-only",children:"Open options"}),(0,C.jsx)(r,{className:"w-5 text-[#3A57E8]"})]})}),(0,C.jsx)(m.u,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,C.jsx)(d.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:(0,C.jsxs)("div",{className:"py-1",children:[(0,C.jsx)(d.v.Item,{children:function(e){var i=e.active;return(0,C.jsx)("button",{onClick:function(){return n(!1)},className:(0,g.Z)(i?"bg-gray-100 text-gray-900":"text-gray-700","block w-full text-left px-4 py-2 text-sm"),children:"By default"})}}),(0,C.jsx)(d.v.Item,{children:function(e){var i=e.active;return(0,C.jsx)("button",{onClick:function(){return n(!0)},className:(0,g.Z)(i?"bg-gray-100 text-gray-900":"text-gray-700","block w-full text-left px-4 py-2 text-sm"),children:"By rating"})}})]})})})]})}}}]);
//# sourceMappingURL=274.2949e876.chunk.js.map