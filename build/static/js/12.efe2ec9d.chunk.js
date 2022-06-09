"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[12],{6012:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(5861),s=n(885),a=n(7757),o=n.n(a),i=n(3504),c=n(8182),l=n(9910),u=n(9434),d=n(1056),f=n(2791),m=n(9799),p=n(7415);var x=f.forwardRef((function(e,t){return f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),f.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}))})),h=n(2079),g=n(9123),y=n(2982),v=n(184),j=function(e){var t=e.setWorkCalendar,n=e.dataFromPatient,r=localStorage.getItem("role"),s=[{id:1,dayOfWeek:"Monday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:2,dayOfWeek:"Tuesday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:3,dayOfWeek:"Wednesday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:4,dayOfWeek:"Thursday",times:["09:00","10:00","11:00","12:00","13:00"]},{id:5,dayOfWeek:"Friday",times:["09:00","10:00","11:00","12:00","13:00"]}];return(0,f.useEffect)((function(){void 0!==n&&(s=n)}),[]),(0,v.jsxs)("div",{className:"flex py-9 shadow-inner flex-col bg-white items-center justify-center",children:[(0,v.jsx)("h1",{children:"Reception hours"}),(0,v.jsx)("div",{className:"flex mt-3 flex-row w-full justify-evenly items-start",children:"PATIENT"===r?n.map((function(e,n){return(0,v.jsx)(b,{times:e.times,dayOfWeek:e.dayOfWeek,setWorkCalendar:t},"".concat(e.dayOfWeek," ").concat(n))})):s.map((function(e){return(0,v.jsx)(b,{times:e.times,dayOfWeek:e.dayOfWeek,setWorkCalendar:t},e.dayOfWeek)}))})]})},b=function(e){var t=e.dayOfWeek,n=e.times,r=e.setWorkCalendar;return(0,v.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,v.jsx)("h3",{children:t}),(0,v.jsx)(w,{timeByDay:n,day:t,setWorkCalendar:r})]})},w=function(e){var t=e.timeByDay,n=e.day,r=e.setWorkCalendar,a=(0,f.useState)(""),o=(0,s.Z)(a,2),i=o[0],l=o[1];return(0,v.jsx)("ul",{className:"mt-3.5 space-y-2.5",children:t.map((function(e){return(0,v.jsx)("li",{onClick:function(){l((function(t){return[].concat((0,y.Z)(t),[e])})),r((function(t){return[].concat((0,y.Z)(t),[{time:e,dayOfWeek:n.toUpperCase()}])}))},className:(0,c.Z)("px-2 py-1.5 rounded-lg border flex items-center justify-center","active:bg-[#3A57E8]",i.includes(e)&&"bg-[#3A57E8] text-white","focus:outline-none focus:ring focus:ring-violet-300"),children:e.substring(0,5)},e)}))})},k=n(2858),N=n(6960),C=function(){var e=(0,u.v9)((function(e){return e.user.me})),t=(0,u.v9)((function(e){return e.patients})).patients;console.log(e);var n=(0,f.useState)(!1),a=(0,s.Z)(n,2),y=a[0],b=a[1],w=(0,f.useState)(!1),C=(0,s.Z)(w,2),W=C[0],A=C[1],S=(0,f.useRef)(null),T=(0,f.useState)([]),E=(0,s.Z)(T,2),I=E[0],Z=E[1],D=(0,f.useState)(null),F=(0,s.Z)(D,2),B=F[0],_=F[1],z=(0,u.I0)(),R=function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null===B){e.next=14;break}return(n=new FormData).append("file",B),n.append("typeId",2),console.log(n,"formData"),e.prev=6,e.next=9,g.g.post("/api/v1/file/upload/avatar",n,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),ContentType:"multipart/form-data"}}).then((function(){(0,N.Am)("Avatar successfully uploaded",{type:"success",position:"top-right"})}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(6),(0,N.Am)(e.t0.data.message||e.t0.message,{type:"error",position:"top-right"});case 14:A(!1);case 15:case"end":return e.stop()}}),e,null,[[6,11]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(I),e.prev=2,e.next=5,g.g.post("api/v1/schedule/create",I,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),Application:"application/json"}}).then((function(){(0,N.Am)("Schedule created successfully",{type:"success",position:"top-right"})}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),(0,N.Am)(e.t0.data.message||e.t0.message,{type:"error",position:"top-right"});case 10:b(!1);case 11:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){z((0,k.l6)())}),[]),(0,v.jsx)(v.Fragment,{children:null!==e&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.tV,{className:"cursor-pointer",onClick:function(){return A(!0)},name:"Dr. ".concat(e.user.firstName," ").concat(e.user.lastName)}),(0,v.jsxs)("div",{className:(0,c.Z)("grid grid-cols-1 gap-5","sm:grid-cols-2"),children:[(0,v.jsx)(i.OL,{to:"/doctor/patients",children:(0,v.jsx)(O,{type:"Offline",when:"Today",count:t.length})}),(0,v.jsx)(O,{type:"Online",when:"Today",count:"0"})]}),(0,v.jsx)(d.z,{name:"Add opening hours",onClick:function(){return b(!0)}}),(0,v.jsx)(l._V,{className:"py-4 px-2.5",isDoctor:!0}),(0,v.jsxs)(m.u,{isOpen:y,setIsOpen:b,handleSubmit:V,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100",children:(0,v.jsx)(p.Z,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),(0,v.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,v.jsx)(h.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Add opening hours"}),(0,v.jsx)("div",{className:"mt-2",children:(0,v.jsx)(j,{setWorkCalendar:Z})})]})]}),(0,v.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[(0,v.jsx)("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",children:"Submit"}),(0,v.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:function(){return b(!1)},ref:S,children:"Cancel"})]})]}),(0,v.jsxs)(m.u,{isOpen:W,setIsOpen:A,handleSubmit:R,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100",children:(0,v.jsx)(x,{className:"h-6 w-6 text-green-600","aria-hidden":"true"})}),(0,v.jsxs)("div",{className:"mt-3 text-center sm:mt-5",children:[(0,v.jsx)(h.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Add avatar"}),(0,v.jsx)("div",{className:"mt-2",children:(0,v.jsxs)("label",{htmlFor:"avatar",className:"flex flex-col text-gray-500 text-md items-start",children:["Please choose your photo",(0,v.jsx)("input",{type:"file",onChange:function(e){_(e.target.files[0]),console.log(B,"selectedFile")},className:"mt-2"})]})})]})]}),(0,v.jsxs)("div",{className:"mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense",children:[(0,v.jsx)("button",{type:"submit",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm",children:"Submit"}),(0,v.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm",onClick:function(){return A(!1)},ref:S,children:"Cancel"})]})]})]})})},O=function(e){var t=e.type,n=e.when,r=e.count;return(0,v.jsxs)("div",{className:"flex flex-col bg-white rounded-xl shadow-lg p-3 justify-between",children:[(0,v.jsxs)("div",{className:"font-normal",children:[(0,v.jsxs)("h1",{className:"text-xl",children:[t," Consultation"]}),(0,v.jsx)("p",{className:"text-sm text-gray-400",children:n})]}),(0,v.jsxs)("div",{className:"flex flex-row justify-between items-end mt-12",children:[(0,v.jsx)("p",{className:"font-normal text-5xl text-[#3A57E8]",children:r}),(0,v.jsx)(i.rU,{to:"#",className:"font-normal text-sm text-end",children:"View All"})]})]})}},2858:function(e,t,n){n.d(t,{_s:function(){return u},l6:function(){return d}});var r=n(5861),s=n(7757),a=n.n(s),o=n(9123),i=n(6960),c=function(e){return{type:"SET_IS_FETCHING",payload:e}},l=function(e){return{type:"SET_ERROR",payload:e}},u=function(e){return function(){var t=(0,r.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(c(!0)),console.log(e,"here"),t.prev=2,t.next=5,o.g.get("/api/v1/doctor/profile/patient/"+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 5:r=t.sent,console.log("try",r),n({type:"SET_PATIENT",payload:r.data}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0),n(l(!0));case 14:n(c(!1));case 15:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.g.get("/api/v1/doctor/patients/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t({type:"GET_PATIENTS",payload:e.data})}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),(0,i.Am)("Error fetching patients",{type:"error",position:"top-right"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=12.efe2ec9d.chunk.js.map