"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[403],{5403:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(5861),s=a(885),r=a(7757),i=a.n(r),c=a(2791),l=a(5060),o=a(354),d=a(1056),u=a(8182),p=a(9123),m=a(184),f=function(e){var t=e.id,a=e.data;return console.log(a),(0,m.jsx)("datalist",{id:t,children:a&&a.map((function(e){return(0,m.jsx)("option",{value:e.name},e.name)}))})},h=a(3504),x=a(6960),y=function(){var e=c.useState([]),t=(0,s.Z)(e,2),a=t[0],r=t[1],y=c.useState([]),g=(0,s.Z)(y,2),v=g[0],j=g[1],b=c.useState(),w=(0,s.Z)(b,2),N=w[0],C=w[1];(0,c.useEffect)((0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.g)("/api/v1/city/get-all");case 3:t=e.sent,r(t.data),(0,x.Am)("Succesfully created",{type:"success",theme:"light"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,x.Am)("Please check your data",{type:"error",theme:"light"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);var k=function(){var e=(0,n.Z)(i().mark((function e(t){var n,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.find((function(e){e.name===t.target.value&&(n=e.id)})),C(n),e.next=4,p.g.get("api/v1/hospital/city/"+n);case 4:s=e.sent,console.log(s.data),j(s.data.hospitals);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,n.Z)(i().mark((function e(t){var a,n,s,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(t.currentTarget),n=Object.fromEntries(a),v.find((function(e){e.name===n.Clinics&&(s=e.id)})),n.City=N,n.Clinics=s,e.next=8,p.g.post("api/v1/auth/registration/patient",n);case 8:r=e.sent,console.log(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)("form",{onSubmit:S,children:[(0,m.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-2",children:[(0,m.jsx)("h1",{className:"items-center text-4xl font-medium text-black",children:"Sign Up"}),(0,m.jsx)("p",{className:"text-[#8A92A6]",children:"Create your account"})]}),(0,m.jsxs)("div",{className:(0,u.Z)("grid grid-cols-1 gap-3","md:grid-cols-2"),children:[[{id:"fatherName",name:"Father Name",type:"text"},{id:"firstName",name:"First Name",type:"text"},{id:"lastName",name:"Last Name",type:"text"},{id:"email",name:"Email",type:"email"},{id:"phoneNumber",name:"Phone",type:"tel"},{id:"iin",name:"IIN",type:"text"},{id:"password",name:"Password",type:"password"},{id:"rePassword",name:"Confirm Password",type:"password"},{id:"cityId",name:"City",type:"datalistCity"},{id:"hospitalId",name:"Clinics",type:"datalist"}].map((function(e){return(0,m.jsx)("label",{htmlFor:e.id,children:(0,m.jsx)(l.M,{id:"".concat(e.id,"_").concat(e.name),name:e.name,type:"datalist"===e.type||"datalistCity"===e.type?null:e.type,onChange:"datalistCity"===e.type?k:null,placeholder:e.name,autoComplete:"off",list:"datalist"===e.type||"datalistCity"===e.type?e.id:null},e.id)})})),(0,m.jsx)(f,{data:v,id:"hospitalId"}),(0,m.jsx)(f,{data:a,id:"cityId"})]}),(0,m.jsxs)("div",{className:"flex flex-col items-center mt-4 justify-center space-y-5",children:[(0,m.jsxs)("div",{className:"flex w-full items-center justify-center space-x-2",children:[(0,m.jsx)("input",{type:"checkbox",className:"border-0"}),(0,m.jsx)("p",{className:"text-[#8A92A6]",children:"I agree with the terms of use"})]}),(0,m.jsx)(d.z,{name:"Sign up",type:"submit"}),(0,m.jsx)("p",{className:"text-black",children:"or sign up with other accounts?"}),(0,m.jsx)(o.Sb,{}),(0,m.jsxs)("p",{className:"text-black",children:["Already have an Account"," ",(0,m.jsx)(h.OL,{className:"text-[#458FF6]",to:"/login",children:"Sign in"})]})]})]})}},5060:function(e,t,a){a.d(t,{M:function(){return r}});a(2791);var n=a(8182),s=a(184),r=function(e){var t=e.id,a=e.name,r=e.style,i=e.placeholder,c=e.type,l=e.list,o=e.autoComplete,d=e.onChange;return(0,s.jsx)("div",{className:(0,n.Z)("mt-1 min-w-[250px] border-b border-black focus-within:border-indigo-600",r),children:(0,s.jsx)("input",{type:c,name:a,autoComplete:o,onChange:d,id:t,className:"block min-h-[40px] w-full border-0 border-transparent bg-transparent outline-0 focus:border-none sm:text-sm",placeholder:i,list:l})})}}}]);
//# sourceMappingURL=403.9591a723.chunk.js.map