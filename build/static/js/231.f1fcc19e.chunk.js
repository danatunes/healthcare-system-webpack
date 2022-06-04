"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[231],{231:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(2982),s=n(5861),a=n(885),i=n(7757),o=n.n(i),l=n(2791),c=n(9910),d=n(3504),u=n(6871),f=n(8182),m=n(3626),x=n(9434),h=n(9123),g=n(6960),p=function(e){return{type:"SET_DOCTOR",payload:e}},j=function(e){return{type:"SET_ERROR",payload:e}},v=function(e){return function(){var t=(0,s.Z)(o().mark((function t(n){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"SET_IS_FETCHING",payload:!0}),t.prev=1,t.next=4,h.g.get("/api/v1/patient/profile/doctor/"+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data,"doctor data.data"),n(p(e.data))}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),(0,g.Am)("Please check credentials",{type:"error",theme:"light"}),n(j(!0));case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()},y=n(3729),b=n(9799),w=n(3278);var k=l.forwardRef((function(e,t){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}))})),N=n(2079),O=n(184),Z=function(){var e=(0,x.v9)((function(e){return e.doctor})).doctor,t=(0,l.useState)(!1),n=(0,a.Z)(t,2),r=n[0],i=n[1],g=(0,l.useState)(!1),p=(0,a.Z)(g,2),j=p[0],Z=p[1],E=(0,l.useState)([]),A=(0,a.Z)(E,2),C=A[0],R=A[1],I=(0,l.useState)([]),F=(0,a.Z)(I,2),T=F[0],D=F[1];console.log(C,"workCalendar");var B=(0,x.I0)(),L=(0,u.UO)().id,z=(0,l.useRef)(),P=(0,l.useRef)(),V=(0,l.useRef)(null),M=function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.g.get("/api/v1/schedule/doctor/"+t).then((function(e){R(e.data)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){!function(){var e,t=C;C.map((function(n,r){e=n.times.filter((function(e){return console.log(e.dayOfWeek.includes(n.dayOfWeek)),e.dayOfWeek.includes(n.dayOfWeek)})),t[r].times=e})),R(t)}(),Z(!0)},H=function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.g.post("/api/v1/appointment/create",T,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:Z(!1),M(L);case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=(0,s.Z)(o().mark((function e(t){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=(new Date).toISOString().slice(0,10),r={date:n.toString(),text:P.current.value,rate:parseFloat(z.current.value)},console.log(r),e.prev=4,e.next=7,h.g.post("/api/v1/feedback/doctor/give/"+L,r,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log(e.t0);case 12:B(v(L)),i(!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){console.log("useEffect"),B(v(L)),M(L)}),[L,B]),(0,O.jsx)("div",{className:"w-full space-y-4 max-w-4xl",children:e.doctor?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(S,{userInformation:e.doctor}),(0,O.jsxs)("div",{children:[(0,O.jsx)(c.aV,{styleList:"rounded-t-lg",className:"shadow-md h-fit max-h-[450px]",header:(0,O.jsxs)("div",{className:"w-full flex flex-row justify-between",children:[(0,O.jsx)(d.OL,{to:"",end:!0,className:function(e){var t=e.isActive;return(0,f.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"About Me"}),(0,O.jsx)(d.OL,{to:"feedback",className:function(e){var t=e.isActive;return(0,f.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"Feedback"}),(0,O.jsx)("p",{onClick:function(){return _()},className:function(e){var t=e.isActive;return(0,f.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"Calendar"})]}),children:(0,O.jsx)(l.Suspense,{fallback:(0,O.jsx)(m.Z,{}),children:(0,O.jsx)(u.j3,{})})}),(0,O.jsx)(d.OL,{to:"feedback",onClick:function(){return i(!0)},className:(0,f.Z)("py-2 px-4 bg-[#3A57E8] rounded-b-lg w-full flex justify-center font-medium text-lg focus:text-[#3A57E8]"),children:(0,O.jsxs)("div",{className:"flex flex-row justify-between items-center space-x-5",children:[(0,O.jsx)(y.Z,{className:"w-7 text-white"}),(0,O.jsx)("p",{className:"font-bold text-lg text-white",children:"Add Feedback"})]})})]}),(0,O.jsxs)(b.u,{isOpen:r,setIsOpen:i,handleSubmit:U,feedbackRef:P,ratingRef:z,children:[(0,O.jsxs)("div",{children:[(0,O.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100",children:(0,O.jsx)(w.Z,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),(0,O.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,O.jsx)(N.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Add Feedback and Rating"}),(0,O.jsxs)("div",{className:"mt-2",children:[(0,O.jsxs)("label",{htmlFor:"rating",children:["Rating:",(0,O.jsxs)("select",{ref:z,name:"rating",id:"rating",className:"rounded-md ml-2 mb-2",children:[(0,O.jsx)("option",{value:"1",children:"1"}),(0,O.jsx)("option",{value:"2",children:"2"}),(0,O.jsx)("option",{value:"3",children:"3"}),(0,O.jsx)("option",{value:"4",children:"4"}),(0,O.jsx)("option",{value:"5",children:"5"})]})]}),(0,O.jsx)("input",{ref:P,type:"text",id:"feedback",className:"rounded-lg w-full",placeholder:"Such are nice ...."})]})]})]}),(0,O.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[(0,O.jsx)("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",children:"Submit"}),(0,O.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:function(){return i(!1)},ref:V,children:"Cancel"})]})]}),(0,O.jsx)(b.u,{setIsOpen:Z,isOpen:j,handleSubmit:H,children:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{children:[(0,O.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100",children:(0,O.jsx)(k,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),(0,O.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,O.jsx)(N.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Make an appointment"}),(0,O.jsx)("div",{className:"mt-2 flex flex-col space-y-4",children:(0,O.jsx)(W,{setWorkCalendar:D,dataFromPatient:C})})]})]}),(0,O.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[(0,O.jsx)("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",children:"Submit"}),(0,O.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:function(){return Z(!1)},ref:V,children:"Cancel"})]})]})})]}):(0,O.jsx)(m.Z,{})})},S=function(e){var t=e.userInformation,n=(localStorage.getItem("role"),(0,l.useState)(null)),r=(0,a.Z)(n,2),i=r[0],c=r[1],d=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.g.get("/api/v1/file/avatar/"+t.id,{responseType:"blob",headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){d().then((function(e){var t=URL.createObjectURL(e.data);c(t)}))}),[]),(0,O.jsx)("div",{className:"bg-white rounded-xl shadow-md",children:(0,O.jsxs)("div",{className:(0,f.Z)("flex flex-col items-end","lg:flex-row"),children:[i?(0,O.jsx)("img",{src:i,alt:"",className:(0,f.Z)("w-full","lg:w-56 lg:h-56")}):(0,O.jsx)(m.Z,{}),(0,O.jsxs)("div",{className:"py-3 px-8 space-y-3 w-full",children:[(0,O.jsxs)("h3",{className:"text-2xl font-bold",children:["Hospital : ",t.hospital.name]}),(0,O.jsx)("h4",{className:"text-xl leading-8",children:"Dr. ".concat(t.user.firstName," ").concat(t.user.lastName)}),(0,O.jsxs)("div",{className:(0,f.Z)("flex flex-wrap space-y-2"),children:[(0,O.jsx)(E,{label:"Position",information:t.user.role.name}),(0,O.jsx)(E,{label:"Email",information:t.user.email}),(0,O.jsx)(E,{label:"Role",information:"DOCTOR"}),(0,O.jsx)(E,{label:"Date of Birth",information:"22-05-2000"}),(0,O.jsx)(E,{label:"Phone",information:t.user.phoneNumber}),(0,O.jsx)(E,{label:"Specialization",information:t.specialization.name})]})]}),(0,O.jsx)("a",{href:"#",className:"text-[#3A57E8] text-sm mb-2 mr-2",children:"Edit"})]})})},E=function(e){var t=e.label,n=e.information;return(0,O.jsxs)("div",{className:(0,f.Z)("w-full flex flex-row justify-between flex-grow","sm:w-1/3 sm:flex-col"),children:[(0,O.jsx)("p",{className:(0,f.Z)("text-sm text-gray-400 mr-2","sm:mr-0"),children:t}),(0,O.jsx)("p",{className:"text-md font-bold overflow-x-auto truncate",children:n})]})},W=function(e){var t=e.setWorkCalendar,n=e.dataFromPatient,r=localStorage.getItem("role"),s=[{id:1,dayOfWeek:"mmmMonday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:2,dayOfWeek:"Tuesday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:3,dayOfWeek:"Wednesday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:4,dayOfWeek:"Thursday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:5,dayOfWeek:"Friday",times:["09:00","10:00","11:00","12:00","13:00"]}];return(0,l.useEffect)((function(){void 0!==n&&(s=n)}),[]),(0,O.jsxs)("div",{className:"flex py-9 shadow-inner flex-col bg-white items-center justify-center",children:[(0,O.jsx)("h1",{children:"Reception hours"}),(0,O.jsx)("div",{className:"flex mt-3 flex-row w-full justify-evenly items-start",children:"PATIENT"===r?n.map((function(e,n){return(0,O.jsx)(A,{times:e.times,dayOfWeek:e.dayOfWeek,date:e.date,setWorkCalendar:t},"".concat(e.dayOfWeek," ").concat(n))})):s.map((function(e){return(0,O.jsx)(A,{times:e.times,dayOfWeek:e.dayOfWeek,setWorkCalendar:t},e.dayOfWeek)}))})]})},A=function(e){var t=e.dayOfWeek,n=e.date,r=e.times,s=e.setWorkCalendar;return(0,O.jsx)("div",{className:"flex flex-col items-center justify-center",children:r.length>0&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("h3",{children:t}),(0,O.jsx)(C,{timeByDay:r,date:n,day:t,setWorkCalendar:s})]})})},C=function(e){var t=e.timeByDay,n=(e.day,e.date),s=e.setWorkCalendar,i=(0,l.useState)(""),o=(0,a.Z)(i,2),c=o[0],d=o[1];return console.log(t,"timeByDay"),(0,O.jsx)("ul",{className:"mt-3.5 space-y-2.5",children:t.map((function(e){return(0,O.jsx)("li",{onClick:function(){d((function(t){return[].concat((0,r.Z)(t),[e.time])})),s({date:n,scheduleId:e.id,isFree:!1})},className:(0,f.Z)("px-2 py-1.5 rounded-lg border flex items-center justify-center","active:bg-[#3A57E8]",c.includes(e.time)&&"bg-[#3A57E8] text-white","focus:outline-none focus:ring focus:ring-violet-300"),children:e.time.substring(0,5)},e.id)}))})}}}]);
//# sourceMappingURL=231.f1fcc19e.chunk.js.map