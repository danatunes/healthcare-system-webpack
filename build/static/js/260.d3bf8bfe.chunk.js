"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[260],{8260:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(5861),s=n(885),a=n(7757),c=n.n(a),o=n(2791),i=n(6521),l=n(3504),u=n(6871),d=n(8182),f=n(3626),x=n(9434),m=n(9123),h=n(6960),g=function(e){return{type:"SET_DOCTOR",payload:e}},p=function(e){return{type:"SET_ERROR",payload:e}},j=function(e){return function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"SET_IS_FETCHING",payload:!0}),t.prev=1,t.next=4,m.g.get("/api/v1/patient/profile/doctor/"+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data,"doctor data.data"),n(g(e.data))}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),(0,h.Am)("Please check credentials",{type:"error",theme:"light"}),n(p(!0));case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},v=n(3729),b=n(9799),w=n(3278),y=n(2079),k=n(184),N=function(){var e=(0,x.v9)((function(e){return e.doctor})).doctor,t=(0,o.useState)(!1),n=(0,s.Z)(t,2),a=n[0],h=n[1],g=(0,x.I0)(),p=(0,u.UO)().id,N=(0,o.useRef)(),A=(0,o.useRef)(),E=(0,o.useRef)(null),O=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,s,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new Date,r=n.getDate(),s=n.getMonth()+1,a=n.getFullYear(),o={date:"".concat(a,"-").concat(s<10?"0".concat(s):"".concat(s),"-").concat(r),text:A.current.value,rate:parseFloat(N.current.value)},console.log(o),e.prev=7,e.next=10,m.g.post("/api/v1/feedback/doctor/give/"+p,o,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.log(e.t0);case 15:g(j(p)),h(!1);case 17:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){console.log("useEffect"),g(j(p))}),[p,g]),(0,k.jsx)("div",{className:"w-full space-y-4 max-w-4xl",children:e.doctor?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.Oe,{userInformation:e.doctor.user}),(0,k.jsxs)("div",{children:[(0,k.jsx)(i.aV,{styleList:"rounded-t-lg",className:"shadow-md h-fit max-h-[450px]",header:(0,k.jsxs)("div",{className:"w-full flex flex-row justify-between",children:[(0,k.jsx)(l.OL,{to:"",end:!0,className:function(e){var t=e.isActive;return(0,d.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"About Me"}),(0,k.jsx)(l.OL,{to:"feedback",className:function(e){var t=e.isActive;return(0,d.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"Feedback"}),(0,k.jsx)(l.OL,{to:"calendar",className:function(e){var t=e.isActive;return(0,d.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"Calendar"})]}),children:(0,k.jsx)(o.Suspense,{fallback:(0,k.jsx)(f.Z,{}),children:(0,k.jsx)(u.j3,{})})}),(0,k.jsx)(l.OL,{to:"feedback",onClick:function(){return h(!0)},className:(0,d.Z)("py-2 px-4 bg-[#3A57E8] rounded-b-lg w-full flex justify-center font-medium text-lg focus:text-[#3A57E8]"),children:(0,k.jsxs)("div",{className:"flex flex-row justify-between items-center space-x-5",children:[(0,k.jsx)(v.Z,{className:"w-7 text-white"}),(0,k.jsx)("p",{className:"font-bold text-lg text-white",children:"Add Feedback"})]})})]}),(0,k.jsxs)(b.u,{isOpen:a,setIsOpen:h,handleSubmit:O,feedbackRef:A,ratingRef:N,children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100",children:(0,k.jsx)(w.Z,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),(0,k.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,k.jsx)(y.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Add Feedback and Rating"}),(0,k.jsxs)("div",{className:"mt-2",children:[(0,k.jsxs)("label",{htmlFor:"rating",children:["Rating:",(0,k.jsxs)("select",{ref:N,name:"rating",id:"rating",className:"rounded-md ml-2 mb-2",children:[(0,k.jsx)("option",{value:"1",children:"1"}),(0,k.jsx)("option",{value:"2",children:"2"}),(0,k.jsx)("option",{value:"3",children:"3"}),(0,k.jsx)("option",{value:"4",children:"4"}),(0,k.jsx)("option",{value:"5",children:"5"})]})]}),(0,k.jsx)("input",{ref:A,type:"text",id:"feedback",className:"rounded-lg w-full",placeholder:"Such are nice ...."})]})]})]}),(0,k.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[(0,k.jsx)("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",children:"Submit"}),(0,k.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:function(){return h(!1)},ref:E,children:"Cancel"})]})]})]}):(0,k.jsx)(f.Z,{})})}}}]);
//# sourceMappingURL=260.d3bf8bfe.chunk.js.map