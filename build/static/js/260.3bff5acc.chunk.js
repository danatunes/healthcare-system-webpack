"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[260],{8260:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(2791),a=n(6521),c=n(3504),o=n(6871),s=n(8182),u=n(3626),i=n(9434),l=n(5861),f=n(7757),d=n.n(f),x=n(9123),h=n(6960),p=function(e){return{type:"SET_DOCTOR",payload:e}},m=function(e){return{type:"SET_ERROR",payload:e}},v=n(184),j=function(){var e=(0,i.v9)((function(e){return e.doctor})).doctor;console.log(e);var t=(0,i.I0)(),n=(0,o.UO)().id;return console.log(n),(0,r.useEffect)((function(){console.log("useEffect"),t(function(e){return function(){var t=(0,l.Z)(d().mark((function t(n){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"SET_IS_FETCHING",payload:!0}),t.prev=1,t.next=4,x.g.get("/api/v1/patient/profile/doctor/"+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),n(p(e.data))}));case 4:t.next=10;break;case 6:t.prev=6,t.t0=t.catch(1),(0,h.Am)("Please check credentials",{type:"error",theme:"light"}),n(m(!0));case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()}(n))}),[]),(0,v.jsx)("div",{className:"space-y-4 max-w-4xl",children:e?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Oe,{userInformation:e.doctor.user}),(0,v.jsx)(a.aV,{className:"shadow-md h-fit max-h-[450px]",header:(0,v.jsxs)("div",{className:"w-full flex flex-row justify-between",children:[(0,v.jsx)(c.OL,{to:"",end:!0,className:function(e){var t=e.isActive;return(0,s.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"About Me"}),(0,v.jsx)(c.OL,{to:"feedback",className:function(e){var t=e.isActive;return(0,s.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"Feedback"}),(0,v.jsx)(c.OL,{to:"calendar",className:function(e){var t=e.isActive;return(0,s.Z)("font-medium text-lg focus:text-[#3A57E8]",t&&"text-[#3A57E8]")},children:"Calendar"})]}),children:(0,v.jsx)(r.Suspense,{fallback:(0,v.jsx)(u.Z,{}),children:(0,v.jsx)(o.j3,{})})})]}):(0,v.jsx)(u.Z,{})})}}}]);
//# sourceMappingURL=260.3bff5acc.chunk.js.map