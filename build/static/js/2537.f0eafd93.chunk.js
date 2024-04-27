"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2537],{50080:function(e,t,r){var n=r(47209),i=r(24846),a=r(78983),s=(r(72791),r(57689)),o=r(96930),c=(r(69817),r(80184));t.Z=function(e){var t=e.title,r=e.description,l=e.open,u=e.onOpen,d=e.addAnother,h=void 0===d?null:d;return(0,s.s0)(),(0,c.jsxs)(a.Tk,{alignment:"center",visible:l,onClose:function(){return u(!1)},"aria-labelledby":"VerticallyCenteredExample",children:[(0,c.jsx)(a.p0,{children:(0,c.jsx)(a.fl,{id:"VerticallyCenteredExample",children:t})}),(0,c.jsxs)(a.sD,{className:"m-3",children:[(0,c.jsx)("div",{style:{textAlign:"center"},className:"mb-3",children:(0,c.jsx)(i.Z,{style:{color:o.DM.DANGER_BTN},icon:n.J,width:80})}),(0,c.jsx)("p",{style:{textAlign:"center",fontSize:"1.2em"},children:r})]}),(0,c.jsxs)(a.Ym,{children:[(0,c.jsx)(a.u5,{color:"light",onClick:function(){return u(!1)},children:"Close"}),h&&(0,c.jsx)(a.u5,{color:"primary",style:{backgroundColor:o.DM.DANGER_BTN,border:"0px"},onClick:function(){h(),u(!1)},children:"Add Another"})]})]})}},92239:function(e,t,r){r.d(t,{R:function(){return s}});var n=r(74165),i=r(15861),a=r(49729),s={getVoters:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i,s=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1&&void 0!==s[1]?s[1]:10,e.prev=2,e.next=5,a.b.get("/voters?pagination[page]=".concat(t,"&pagination[pageSize]=").concat(r,"&sort[0]=createdAt:desc"));case 5:return i=e.sent,e.abrupt("return",i.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),getVoter:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.b.get("/voters/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getVotorsByBirthday:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.b.get("/voters?filters[Date_of_Birth][$containsi]=".concat(t,"&sort[0]=createdAt:desc"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getVotersByFiltering:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,r,i,s,o,c=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:1,r=c.length>1&&void 0!==c[1]?c[1]:10,i=c.length>2?c[2]:void 0,e.prev=3,s="",i.map((function(e){s+="filters[".concat(e.key,"][$containsi]=").concat(e.value,"&")})),e.next=8,a.b.get("/voters?pagination[page]=".concat(t,"&pagination[pageSize]=").concat(r,"&").concat(s,"sort[0]=createdAt:desc"));case 8:return o=e.sent,e.abrupt("return",o.data);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),getVotersByBirthday:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.b.get("/voters?filters[Date_of_Birth][$eq]=".concat(t,"&sort[0]=createdAt:desc"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),addVoter:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.b.post("/voters",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),updateVoter:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.b.put("/voters/".concat(t),r);case 3:return i=e.sent,e.abrupt("return",i.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()}},82537:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(74165),i=r(15861),a=r(29439),s=(r(24846),r(78983)),o=r(72426),c=r.n(o),l=r(72791),u=r(57689),d=r(96930),h=r(91356),p=r(80184);var v=r(50080),f=r(88956),x=r(34831),m=r(92239);var g=function(){(0,u.s0)();var e=(0,l.useState)(!1),t=(0,a.Z)(e,2),r=t[0],o=t[1],g=(0,l.useState)(!1),j=(0,a.Z)(g,2),b=j[0],N=j[1],y=(0,l.useState)(!1),w=(0,a.Z)(y,2),Z=(w[0],w[1],(0,l.useState)([])),_=(0,a.Z)(Z,2),D=_[0],C=(_[1],(0,l.useState)(1)),k=(0,a.Z)(C,2),M=(k[0],k[1]),A=(0,l.useState)(null),B=(0,a.Z)(A,2),S=B[0],Y=B[1],R=(0,l.useState)(!1),V=(0,a.Z)(R,2),O=(V[0],V[1],(0,l.useState)([])),T=(0,a.Z)(O,2),z=T[0],I=T[1],E=(0,l.useState)([]),W=(0,a.Z)(E,2),H=W[0],P=W[1],F=(0,l.useState)("\ud83c\udf89 Happy Birthday to You! \ud83c\udf82 Your vote is the greatest gift you can give to shape our future. Thank you for being an active participant in our democracy! Wishing you a day filled with joy and celebration. \ud83e\udd73 From Name"),G=(0,a.Z)(F,2),L=G[0],$=(G[1],(0,l.useState)("\ud83c\udf89 Happy Birthday to an incredible organizer! \ud83c\udf82 Your dedication and hard work make our events unforgettable. Here's to another year of bringing people together and making a difference. Wishing you a day as amazing as you are! \ud83e\udd73 From Name")),J=(0,a.Z)($,2),U=J[0];J[1],(0,l.useEffect)((function(){q(),K()}),[]);var q=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),x.c.getOrganizersByBirthday("".concat(c()(new Date).format("MM-DD"))).then((function(e){var t=null===e||void 0===e?void 0:e.data;Y(e.meta.pagination),P(t),N(!1)})).catch((function(e){var t;console.log(e),N(!1),403!==(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)?o(!0):P([])}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),m.R.getVotorsByBirthday("".concat(c()(new Date).format("MM-DD"))).then((function(e){var t=null===e||void 0===e?void 0:e.data;Y(e.meta.pagination),I(t),N(!1)})).catch((function(e){var t;console.log(e),N(!1),403!==(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)?o(!0):I([])}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)(v.Z,{open:r,onOpen:function(e){return o(e)},title:"Failed Operation",description:d.Wj.ERROR_MSG}),(0,p.jsxs)(s.xH,{className:"mb-4",children:[(0,p.jsx)(s.bn,{style:{display:"flex",justifyContent:"space-between"},children:(0,p.jsx)("h5",{children:"Birthdays Managment"})}),(0,p.jsxs)(s.sl,{children:[(0,p.jsx)(s.rb,{className:"mb-2",children:(0,p.jsx)("span",{style:{fontWeight:"bold"},children:"Voters"})}),b?(0,p.jsx)(h.Z,{loading:b}):0===z.length?(0,p.jsx)(f.Z,{visible:!0,description:D.length>0?d.Wj.SEARCH_NO_DATA_DOUND:d.Wj.NO_BIRTHDAYS,size:10}):(0,p.jsxs)(s.Sx,{hover:!0,responsive:!0,small:!0,children:[(0,p.jsx)(s.V,{color:"light",children:(0,p.jsxs)(s.T6,{children:[(0,p.jsx)(s.is,{scope:"col",children:"#"}),(0,p.jsx)(s.is,{scope:"col",children:"Name"}),(0,p.jsx)(s.is,{scope:"col",children:"NIC"}),(0,p.jsx)(s.is,{scope:"col",children:"Birth-Date"}),(0,p.jsx)(s.is,{scope:"col",children:"Contact"})]})}),(0,p.jsx)(s.NR,{children:z.map((function(e,t){var r,n,i,a,o;return(0,p.jsxs)(s.T6,{style:{cursor:"pointer"},children:[(0,p.jsx)(s.NN,{width:50,children:t+1}),(0,p.jsx)(s.NN,{width:550,children:null===e||void 0===e||null===(r=e.attributes)||void 0===r?void 0:r.Name}),(0,p.jsx)(s.NN,{width:550,children:null===e||void 0===e||null===(n=e.attributes)||void 0===n?void 0:n.NIC_Number}),(0,p.jsx)(s.NN,{width:550,children:c()(null===e||void 0===e||null===(i=e.attributes)||void 0===i?void 0:i.Date_of_Birth).format("DD/MM/YYYY")}),(0,p.jsx)(s.NN,{width:550,children:(null===e||void 0===e||null===(a=e.attributes)||void 0===a?void 0:a.Mobile_Number_1)||(null===e||void 0===e||null===(o=e.attributes)||void 0===o?void 0:o.Mobile_Number_2)})]},t)}))})]}),S&&(0,p.jsxs)(s.E7,{className:"mt-2","aria-label":"Page navigation example",children:[(0,p.jsx)(s.tn,{hidden:1===S.page,style:{color:d.DM.MAIN,cursor:"pointer"},onClick:function(){return M(S.page-1)},children:"Previous"}),(0,p.jsx)(s.tn,{hidden:S.page>=S.pageCount,style:{color:d.DM.MAIN,cursor:"pointer"},onClick:function(){return M(S.page+1)},children:"Next"})]}),(0,p.jsx)(s.rb,{className:"mb-2",children:(0,p.jsx)("span",{style:{fontWeight:"bold"},children:"Organizers"})}),b?(0,p.jsx)(h.Z,{loading:b}):0===H.length?(0,p.jsx)(f.Z,{visible:!0,description:D.length>0?d.Wj.SEARCH_NO_DATA_DOUND:d.Wj.NO_BIRTHDAYS,size:10}):(0,p.jsxs)(s.Sx,{hover:!0,responsive:!0,small:!0,children:[(0,p.jsx)(s.V,{color:"light",children:(0,p.jsxs)(s.T6,{children:[(0,p.jsx)(s.is,{scope:"col",children:"#"}),(0,p.jsx)(s.is,{scope:"col",children:"Name"}),(0,p.jsx)(s.is,{scope:"col",children:"NIC"}),(0,p.jsx)(s.is,{scope:"col",children:"Birth-Date"}),(0,p.jsx)(s.is,{scope:"col",children:"Contact"})]})}),(0,p.jsx)(s.NR,{children:H.map((function(e,t){var r,n,i,a,o;return(0,p.jsxs)(s.T6,{style:{cursor:"pointer"},children:[(0,p.jsx)(s.NN,{width:50,children:t+1}),(0,p.jsx)(s.NN,{width:550,children:null===e||void 0===e||null===(r=e.attributes)||void 0===r?void 0:r.Name}),(0,p.jsx)(s.NN,{width:550,children:null===e||void 0===e||null===(n=e.attributes)||void 0===n?void 0:n.NIC_Number}),(0,p.jsx)(s.NN,{width:550,children:c()(null===e||void 0===e||null===(i=e.attributes)||void 0===i?void 0:i.Date_of_Birth).format("DD/MM/YYYY")}),(0,p.jsx)(s.NN,{width:550,children:(null===e||void 0===e||null===(a=e.attributes)||void 0===a?void 0:a.Mobile_Number_1)||(null===e||void 0===e||null===(o=e.attributes)||void 0===o?void 0:o.Mobile_Number_2)})]},t)}))})]}),S&&(0,p.jsxs)(s.E7,{className:"mt-2","aria-label":"Page navigation example",children:[(0,p.jsx)(s.tn,{hidden:1===S.page,style:{color:d.DM.MAIN,cursor:"pointer"},onClick:function(){return M(S.page-1)},children:"Previous"}),(0,p.jsx)(s.tn,{hidden:S.page>=S.pageCount,style:{color:d.DM.MAIN,cursor:"pointer"},onClick:function(){return M(S.page+1)},children:"Next"})]}),(0,p.jsxs)("div",{className:"mt-4",children:[(0,p.jsx)("hr",{}),(0,p.jsx)("h3",{className:"mt-4",children:"Birthday Campaigns"}),(0,p.jsx)(s.rb,{children:(0,p.jsxs)(s.b7,{children:[(0,p.jsx)(s.L8,{htmlFor:"columns-sel",children:"Write the automatic message that you want to send for their birthdays:"}),(0,p.jsxs)(s.rb,{children:[(0,p.jsxs)(s.b7,{children:[" ",(0,p.jsx)(s.PB,{id:"columns-sel",className:"mb-4",floatingLabel:"write voter's message here...",placeholder:"write voter's message here...",value:L,style:{height:"100px"}})]}),(0,p.jsxs)(s.b7,{children:[" ",(0,p.jsx)(s.PB,{id:"columns-sel",className:"mb-4",floatingLabel:"write organizer's message here...",placeholder:"write organizer's message here...",value:U,style:{height:"100px"}})]})]})]})}),(0,p.jsx)(s.rb,{children:(0,p.jsx)(s.b7,{md:2,xs:6,children:(0,p.jsx)(s.u5,{disabled:b,color:"primary",style:{width:"100%",backgroundColor:d.DM.MAIN,border:"0px"},onClick:function(){window.location.reload(!1)},children:"Save"})})})]})]})]})]})}},47209:function(e,t,r){r.d(t,{J:function(){return n}});var n=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='348.071 141.302 260.308 229.065 172.545 141.302 149.917 163.929 237.681 251.692 149.917 339.456 172.545 362.083 260.308 274.32 348.071 362.083 370.699 339.456 282.935 251.692 370.699 163.929 348.071 141.302' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M425.706,86.294A240,240,0,0,0,86.294,425.706,240,240,0,0,0,425.706,86.294ZM256,464C141.309,464,48,370.691,48,256S141.309,48,256,48s208,93.309,208,208S370.691,464,256,464Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=2537.f0eafd93.chunk.js.map