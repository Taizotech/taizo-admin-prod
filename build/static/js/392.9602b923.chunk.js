"use strict";(self.webpackChunkadmin_login_react=self.webpackChunkadmin_login_react||[]).push([[392,66],{5066:(e,s,i)=>{i.d(s,{Z:()=>I});var l=i(72791),a=i(41213),n=i(20751),d=i(31711),t=i(41381),c=i(86608),o=i(35019),r=i(44353),m=i(12105),h=i(63524),j=i(56355),x=i(82420),u=i(3757),v=i(16856),p=i(77050),g=i(15770),N=i(93006),b=i(57621),f=i(39504),w=i(97240),y=i(59434),C=i(94822),_=i(24521),Z=i(51338),k=i(80184);const I=e=>{let{data:s,onClose:i,onAssignChange:I,textHeading:S}=e;const[D,H]=(0,l.useState)(!1),[E,L]=(0,l.useState)({}),[Q,F]=(0,l.useState)({canLeadId:"",qualified:!1,notQualified:!1});let T=1===(0,y.v9)((e=>e.adminDetails)).roleID;const[q,P]=(0,l.useState)(!1),[R,A]=(0,l.useState)(null),[W,O]=(0,l.useState)(1),[X,z]=(0,l.useState)(!1),[U,G]=(0,l.useState)(!1);console.log(s,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");const[J,$]=(0,l.useState)({metaLeadId:"",adminId:""}),[B,M]=(0,l.useState)({id:null,adminName:[]}),[V,Y]=(0,l.useState)(!0);(0,l.useEffect)((()=>{const e=window.location.href;let s=e.includes("interview_schedule_list");console.log(e,"parameterrrs"),Y(!s)}),[]);const K=e=>{O(e)};(0,l.useRef)(),(0,l.useRef)();function ee(){Q.canLeadId&&(P(!0),Q.notes=R.notes,(0,o.$9Q)(Q).then((()=>{z(!1),G(!1),(0,o.tpq)().then((e=>{console.log(e),L(e)})),P(!1)})))}(0,l.useEffect)((()=>{J.adminId&&J.metaLeadId&&(0,o.LUt)(J).then((e=>{if(200!==e.code)return alert("something went wrong"),!1;H(!0),setTimeout((()=>{H(!1)}),3e3),I()}))}),[J]),(0,l.useEffect)((()=>{(0,o.EPx)().then((e=>{console.log(e,"All admin details");const s=e.map((e=>e.userName)),i=e.map((e=>e.id));console.log(s),console.log(i),M((e=>({...e,adminName:s,id:i})))}))}),[]);const se=e=>{const s="https://api.whatsapp.com/send?phone=".concat(e);window.open(s,"_blank")},[ie,le]=(0,l.useState)(!1),ae=(e,s)=>{navigator.clipboard.writeText(e,s).then((()=>{le(!0)}))};E.keySkill&&"string"===typeof E.keySkill&&E.keySkill.split(",");return(0,k.jsx)("div",{children:(0,k.jsx)(n.Ur,{children:(0,k.jsx)(t.Z,{topComponent:(0,k.jsx)(k.Fragment,{children:(0,k.jsx)("div",{className:"".concat(c.Z.boxcross),children:(0,k.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,k.jsx)("div",{children:(0,k.jsx)("h4",{className:"text-light ms-3",children:S})}),(0,k.jsx)("div",{className:" ".concat(c.Z.CrossStyle," pe-5 pe-lg-4"),children:(0,k.jsx)("b",{children:(0,k.jsx)(a.$iT,{onClick:()=>{i()}})})})]})})}),childComponent:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"".concat(c.Z.boxwidth),children:(0,k.jsxs)("div",{className:"container-fluid",children:[(0,k.jsxs)("div",{className:"row ".concat(c.Z.topcontainer),children:[(0,k.jsxs)("div",{className:"col-sm-4",children:[(0,k.jsxs)("div",{className:"row",children:[(0,k.jsxs)("div",{className:"col-sm-4",children:[" ",s.profilePic?(0,k.jsx)("img",{src:s.profilePic,alt:"Candidate Profile",width:70}):(0,k.jsx)("img",{src:r,alt:"Profile",width:100})]}),(0,k.jsxs)("div",{className:"col-sm-6",children:[(0,k.jsx)("div",{children:(0,k.jsxs)("b",{children:[s.candidateName," "]})}),(0,k.jsxs)("div",{children:[s.jobCategory?(0,k.jsx)(k.Fragment,{children:s.jobCategory}):(0,k.jsxs)(k.Fragment,{children:[" ","Fresher"]})," "]}),(0,k.jsx)("div",{children:(0,k.jsx)("div",{className:"",children:(0,k.jsx)("div",{className:"".concat(m.Z.StatusStyle),children:(0,k.jsx)("div",{children:(0,k.jsxs)(k.Fragment,{children:[!0===s.qualified&&(0,k.jsxs)("div",{className:"".concat(m.Z.Green_wrp),children:[(0,k.jsx)("input",{type:"radio",name:"status_".concat(s.id),checked:s.qualified,id:"qualified_".concat(s.id)}),(0,k.jsx)("label",{htmlFor:"qualified_".concat(s.id),children:"Qualified"})]}),!0===s.notQualified&&(0,k.jsxs)("div",{className:"".concat(m.Z.chips_wrp),children:[(0,k.jsx)("input",{type:"radio",checked:s.notQualified,name:"status_".concat(s.id),id:"notQualified_".concat(s.id)}),(0,k.jsx)("label",{htmlFor:"notQualified_".concat(s.id),children:"Not Qualified"})]})]})})})})})]})]}),(0,k.jsx)("div",{className:"row mt-1",children:(0,k.jsxs)("div",{className:"".concat(c.Z.Createdon),children:["Created on :"," ",(0,k.jsx)(n.H3,{dateValue:s.createdTime})]})})]}),(0,k.jsx)("div",{className:"col-sm-8",children:(0,k.jsxs)("div",{className:"row",children:[(0,k.jsx)("div",{className:"col-sm-4"}),(0,k.jsx)("div",{className:"col-sm-8 ",children:(0,k.jsx)("div",{className:"row ",children:(0,k.jsxs)("div",{className:"col-sm-12 ".concat(c.Z.flexContainer),children:[(0,k.jsx)("div",{className:"".concat(c.Z.LiaUserEditSolid),children:(0,k.jsx)("div",{className:"mb-1",onClick:()=>se(s.whatsappNumber),children:(0,k.jsx)(j.xpo,{})})}),(0,k.jsx)("div",{}),(0,k.jsxs)("div",{class:"btn-group",children:[(0,k.jsx)("button",{type:"button","data-bs-toggle":"dropdown","data-bs-display":"static","aria-expanded":"false",style:{border:"none"},className:"".concat(c.Z.ThreeOutline),children:(0,k.jsx)(h.ty6,{})}),(0,k.jsxs)("ul",{class:"dropdown-menu dropdown-menu-end dropdown-menu-lg-end",children:[(0,k.jsx)("li",{children:(0,k.jsx)("button",{class:"dropdown-item",type:"button",children:V&&s.id&&(0,k.jsx)(w.Z,{candidateId:s.id})})}),(0,k.jsx)("li",{children:(0,k.jsxs)("button",{class:"dropdown-item",type:"button",children:[(0,k.jsx)(v.fFs,{})," +91 ",s.mobileNumber," ",(0,k.jsx)(v.twx,{onClick:()=>ae(s.mobileNumber),className:"ms-5"})]})}),(0,k.jsx)("li",{children:(0,k.jsxs)("button",{class:"dropdown-item",type:"button",children:[(0,k.jsx)(j.xpo,{})," +91 ",s.whatsappNumber," ",(0,k.jsx)(v.twx,{onClick:()=>ae(s.whatsappNumber),className:"ms-5"})]})})]})]})]})})})]})})]}),(0,k.jsxs)("div",{className:"row mt-2 px-4 ",children:[(0,k.jsxs)("div",{className:"col-sm-4 pb-4 rounded ".concat(c.Z.personalDetails),children:[(0,k.jsxs)("div",{className:"mt-2",children:[" ",(0,k.jsx)("h6",{children:(0,k.jsx)("b",{children:"Personal Details"})}),(0,k.jsxs)("div",{className:"row ".concat(c.Z.CanDetailsRow),children:[(0,k.jsxs)("div",{className:"col-5",children:[(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Name "}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Mobile Number"}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Whatsapp Number"})]}),(0,k.jsxs)("div",{className:"col-7",children:[(0,k.jsxs)("div",{style:{lineHeight:"2"},children:[" ",null!=s.candidateName?s.candidateName:"-"]}),(0,k.jsxs)("div",{className:"d-flex ",style:{lineHeight:"2"},children:[(0,k.jsxs)("div",{className:"me-3 ".concat(c.Z.numbersstyle),children:[(0,k.jsx)("img",{src:x,alt:"",width:15})," ",(0,k.jsxs)("span",{children:[s.mobileNumber," "]}),(0,k.jsx)(v.twx,{onClick:()=>ae(s.mobileNumber)})]}),(0,k.jsx)("div",{className:"".concat(c.Z.Phonecall),children:(0,k.jsx)(v.fFs,{})})]}),(0,k.jsxs)("div",{className:"d-flex",style:{lineHeight:"2"},children:[(0,k.jsxs)("div",{className:"me-3 ".concat(c.Z.Whatsapnumbersstyle),children:[(0,k.jsx)("img",{src:u,alt:"",width:16}),(0,k.jsx)("span",{children:s.whatsappNumber?s.whatsappNumber.slice(-10):""}),(0,k.jsx)(v.twx,{onClick:()=>ae(s.whatsappNumber)})]}),(0,k.jsx)("div",{className:"".concat(c.Z.Phonecall),children:(0,k.jsx)(j.xpo,{onClick:()=>se(s.whatsappNumber)})})]})]})]})]}),(0,k.jsxs)("div",{className:"mt-2",children:[(0,k.jsx)("h6",{children:(0,k.jsx)("b",{children:"Education Details"})}),(0,k.jsxs)("div",{className:"row ".concat(c.Z.CanDetailsRow),children:[(0,k.jsxs)("div",{className:"col-5",children:[(0,k.jsxs)("div",{style:{lineHeight:"2"},children:[" ","Qualification"]}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Degree/Specialization"})]}),(0,k.jsxs)("div",{className:"col-7",children:[" ",(0,k.jsxs)("div",{style:{lineHeight:"2"},children:[null!=s.educationQualification?s.educationQualification:"-"," "]}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:null!=s.specification?s.specification:"-"})]})]})]}),(0,k.jsxs)("div",{className:"mt-2",children:[(0,k.jsx)("h6",{children:(0,k.jsx)("b",{children:"Work Details"})}),(0,k.jsxs)("div",{className:"row ".concat(c.Z.CanDetailsRow),children:[(0,k.jsxs)("div",{className:"col-5",children:[(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Job Category "}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Industry"}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Experience"}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:"Preferred Job City"})]}),(0,k.jsxs)("div",{className:"col-7",children:[(0,k.jsxs)("div",{style:{lineHeight:"2"},children:[null!=s.jobCategory?s.jobCategory:"-"," "]}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:null!=s.industry?s.industry:"-"}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:null!=s.experience?s.experience:"-"}),(0,k.jsx)("div",{style:{lineHeight:"2"},children:null!=s.preferredLocation?s.preferredLocation:"-"})]})]})]}),T&&(0,k.jsxs)("div",{className:"mt-2",children:[(0,k.jsx)("h6",{children:(0,k.jsx)("b",{children:"Admin Details"})}),(0,k.jsxs)("div",{className:"row ".concat(c.Z.CanDetailsRow),children:[(0,k.jsx)("div",{className:"col-5",children:(0,k.jsx)("div",{children:"Assigned To"})}),(0,k.jsx)("div",{className:"col-7",children:(0,k.jsx)("div",{children:(0,k.jsx)(g.Z,{id:"clear-on-escape",clearOnEscape:!0,onChange:(e,i)=>{if(i){const e=i;if(B&&B.adminName&&B.id&&B.adminName.indexOf&&B.id.indexOf){const i=B.adminName.indexOf(e);if(-1!==i&&void 0!==B.id[i]){const e=B.id[i];((e,s)=>{$((i=>({...i,adminId:s,metaLeadId:e})))})(s.id,e)}else console.error("Admin with name ".concat(e," not found."))}else console.error("Invalid adminDetails structure")}},value:B.adminName&&B.id&&B.adminName[B.id.indexOf(s.assignTo)],options:B.adminName,renderInput:e=>(0,k.jsx)(N.Z,{...e,label:"Assign to",variant:"standard"})})})})]})]})]}),(0,k.jsx)("div",{className:" col-sm-8 rounded  ".concat(c.Z.DailyDetailsupdate),children:(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:"tab-buttons ".concat(p.Z.tab_buttons),children:[(0,k.jsxs)("div",{className:"d-flex ".concat(p.Z.tab_hr),children:[(0,k.jsx)("div",{onClick:()=>K(1),className:" ".concat(1===W?p.Z.activetag:p.Z.unactivetag," "),children:"TimeLine"}),(0,k.jsx)("div",{onClick:()=>K(2),className:" ".concat(2===W?p.Z.activetag:p.Z.unactivetag),children:"Notes"})]}),(0,k.jsx)("hr",{style:{borderTop:"10px solid #ccc"}})]}),(0,k.jsxs)("div",{className:"tab-content ".concat(p.Z.tab_content),children:[s.id&&1===W&&(0,k.jsx)("p",{children:(0,k.jsx)(_.Z,{facebookId:s.id})}),s.id&&2===W&&(0,k.jsx)("p",{children:(0,k.jsx)(b.Z,{style:{maxWidth:700,minWidth:350,margin:"0 auto"},children:(0,k.jsx)(f.Z,{children:(0,k.jsx)(Z.Z,{facebookId:s.id})})})})]})]})})]})]})}),U&&(0,k.jsx)(n.Xf,{children:(0,k.jsx)(d.Z,{zIndex:1005,childComponent:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"text-center mb-3",children:"Qualify Candidate"}),(0,k.jsx)(N.Z,{id:"outlined-multiline-flexible",label:"Add Notes",multiline:!0,required:!0,onChange:e=>{A((s=>({...s,notes:e.target.value})))},maxRows:4,fullWidth:!0})]}),(0,k.jsxs)("div",{className:"d-flex justify-content-end gap-1 mt-4",children:[(0,k.jsx)("button",{className:"btn text-white me-3",onClick:()=>{console.log("Cancel button clicked"),G(!1),P(!1)},style:{backgroundColor:"#d00a0a"},children:"Cancel"}),(0,k.jsx)("button",{type:"submit",className:"btn text-white",onClick:ee,disabled:q,style:{backgroundColor:"#169C50"},children:"Qualify"})]})]})})}),X&&(0,k.jsx)(n.Xf,{children:(0,k.jsx)(d.Z,{zIndex:1005,childComponent:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{className:"text-center mb-3",children:"Disqualify Candidate"}),(0,k.jsx)(N.Z,{id:"outlined-multiline-flexible",label:"Add Notes",multiline:!0,required:!0,onChange:e=>{A((s=>({...s,notes:e.target.value})))},maxRows:4,fullWidth:!0})]}),(0,k.jsxs)("div",{className:"d-flex justify-content-end gap-1 mt-4",children:[(0,k.jsx)("button",{className:"btn text-white me-3",onClick:()=>{console.log("Cancel button clicked"),z(!1),P(!1)},style:{backgroundColor:"#d00a0a"},children:"Cancel"}),(0,k.jsx)("button",{type:"submit",className:"btn text-white",onClick:ee,disabled:q,style:{backgroundColor:"#169C50"},children:"Disqualify"})]})]})})}),D&&(0,k.jsx)(n.Xf,{children:(0,k.jsx)(d.Z,{zIndex:2e3,childComponent:(0,k.jsx)(C.Z,{HeadText:"Successfully Updated"})})})]})})})})}},20674:(e,s,i)=>{i.r(s),i.d(s,{default:()=>v});const l="login_login_content__c7X9w",a="login_login_btn_wrp__DGLHB",n="login_login_btn__-Ne0Q",d="login_form-group__2X2Yb",t="login_invalid__XCRp0";var c=i(72791),o=i(57689),r=i(26513),m=i(35019),h=i(93006),j=i(59434),x=(i(71185),i(80032),i(80184));let u;const v=e=>{const s=(0,o.s0)(),[i,v]=(0,c.useState)({email_id:{value:"",err:!1},password:{value:"",err:!1}}),[p,g]=(0,c.useState)({showErr:!1}),[N,b]=(0,c.useState)({LoggedIn:!1}),f=((0,j.v9)((e=>e.adminDetails)),(0,j.I0)(),e=>{console.log(i),console.log(e.target.value);const s=e.target.name,l=e.target.value,a=""===l;v((e=>({...e,[s]:{value:l,err:a}})))});return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"",children:[(0,x.jsx)("h3",{className:"text-center mt-5 my-2 mb-4",children:"Log In"}),(0,x.jsx)("div",{className:" ".concat(a),children:(0,x.jsxs)("div",{className:"shadow p-3 mb-5 bg-body rounded-2 ".concat(l),children:[(0,x.jsxs)("form",{action:"#",onSubmit:e=>{e.preventDefault(),""==i.email_id.value||""==i.password.value?u++:u=0;return 0==u?(0,m.b0i)(i.email_id.value,i.password.value).then((e=>{"Login successful"==e.message?(console.log(e,"success"),console.log(e.admin.id),localStorage.setItem("adminID",e.admin.id),s("/CandidateTabsview"),g((e=>({...e,showErr:!1})))):g((e=>({...e,showErr:!0})))})).catch((e=>{g((e=>({...e,showErr:!0}))),b((e=>({...e,LoggedIn:!1})))})):""==i.email_id.value&&""==i.password.value?v((e=>({...e,email_id:{value:"",err:!0},password:{value:"",err:!0}}))):(""==i.password.value&&v((e=>({...e,email_id:{value:"",err:!1},password:{value:"",err:!0}}))),""==i.email_id.value&&v((e=>({...e,email_id:{value:"",err:!0},password:{value:"",err:!1}})))),!1},children:[(0,x.jsxs)("div",{className:" ".concat(d," ").concat(i.email_id.err&&t),children:[(0,x.jsx)(h.Z,{type:"email",onChange:e=>{f(e)},className:"form-control mt-4",name:"email_id",id:"email_id",value:i.email_id.value,label:"Email ID",variant:"outlined"}),i.email_id.err&&(0,x.jsx)("p",{className:"text-danger my-3",children:"Enter Email ID"})]}),(0,x.jsxs)("div",{className:" ".concat(d," ").concat(i.password.err&&t),children:[(0,x.jsx)(h.Z,{type:"password",className:"form-control  mt-4 ",name:"password",id:"password",value:i.password.value,onChange:f,label:"Password",variant:"outlined"}),i.password.err&&(0,x.jsx)("p",{className:"text-danger my-3",children:"Enter password"})]}),(0,x.jsx)("div",{className:"mt-5 ".concat(a),children:(0,x.jsx)(r.Z,{variant:"contained",type:"submit",className:n,color:"",style:{backgroundColor:"#169C50",color:"#ffff"},children:"Log In"})})]}),(0,x.jsx)("div",{children:p.showErr&&(0,x.jsx)("p",{className:"text-danger my-1",children:"Invalid Credentials"})})]})})]})})}}}]);
//# sourceMappingURL=392.9602b923.chunk.js.map