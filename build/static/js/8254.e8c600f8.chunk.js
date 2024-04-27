"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[8254],{34831:function(e,t,r){r.d(t,{c:function(){return i}});var a=r(74165),n=r(15861),s=r(49729),i={getOrganizers:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t,r,n,i=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,r=i.length>1&&void 0!==i[1]?i[1]:1e7,e.prev=2,e.next=5,s.b.get("/organizers?pagination[page]=".concat(t,"&pagination[pageSize]=").concat(r,"&sort[0]=createdAt:desc"));case 5:return n=e.sent,e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),getOrganizersByBirthday:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.get("/organizers?filters[Date_of_Birth][$containsi]=".concat(t,"&sort[0]=createdAt:desc"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizersByOrganizerCategory:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.get("/organizers?filters[Organizer_Category][$eq]=".concat(t,"&sort[0]=createdAt:desc"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizer:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.get("/organizers/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizersByFiltering:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t,r,n,i,c,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,r=o.length>1&&void 0!==o[1]?o[1]:10,n=o.length>2?o[2]:void 0,e.prev=3,i="",n.map((function(e){i+="filters[".concat(e.key,"][$containsi]=").concat(e.value,"&")})),e.next=8,s.b.get("/organizers?pagination[page]=".concat(t,"&pagination[pageSize]=").concat(r,"&").concat(i,"sort[0]=createdAt:desc"));case 8:return c=e.sent,e.abrupt("return",c.data);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),addOrganizer:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.post("/organizers",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),updateOrganizer:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.put("/organizers/".concat(t),r);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),getOrganizersByDistrictId:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,n=c.length>2&&void 0!==c[2]?c[2]:1e7,e.prev=2,e.next=5,s.b.get("/organizers?filters[District][$eq]=".concat(t,"&pagination[page]=").concat(r,"&pagination[pageSize]=").concat(n,"&sort[0]=createdAt:desc"));case 5:return i=e.sent,e.abrupt("return",i.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizersBySeatId:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,n=c.length>2&&void 0!==c[2]?c[2]:1e7,e.prev=2,e.next=5,s.b.get("/organizers?filters[Seat][$eq]=".concat(t,"&pagination[page]=").concat(r,"&pagination[pageSize]=").concat(n,"&sort[0]=createdAt:desc"));case 5:return i=e.sent,e.abrupt("return",i.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizersByGnDivisionId:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,n=c.length>2&&void 0!==c[2]?c[2]:1e7,e.prev=2,e.next=5,s.b.get("/organizers?filters[GN_Division][$eq]=".concat(t,"&pagination[page]=").concat(r,"&pagination[pageSize]=").concat(n,"&sort[0]=createdAt:desc"));case 5:return i=e.sent,e.abrupt("return",i.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizersByLocalAuthorityId:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,n=c.length>2&&void 0!==c[2]?c[2]:1e7,e.prev=2,e.next=5,s.b.get("/organizers?filters[Local_Authority][$eq]=".concat(t,"&pagination[page]=").concat(r,"&pagination[pageSize]=").concat(n,"&sort[0]=createdAt:desc"));case 5:return i=e.sent,e.abrupt("return",i.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizersByWardId:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,n=c.length>2&&void 0!==c[2]?c[2]:1e7,e.prev=2,e.next=5,s.b.get("/organizers?filters[Ward][$eq]=".concat(t,"&pagination[page]=").concat(r,"&pagination[pageSize]=").concat(n,"&sort[0]=createdAt:desc"));case 5:return i=e.sent,e.abrupt("return",i.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),getOrganizersByStreetId:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,c=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:1,n=c.length>2&&void 0!==c[2]?c[2]:1e7,e.prev=2,e.next=5,s.b.get("/organizers?filters[Street_Village][$eq]=".concat(t,"&pagination[page]=").concat(r,"&pagination[pageSize]=").concat(n,"&sort[0]=createdAt:desc"));case 5:return i=e.sent,e.abrupt("return",i.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}},92239:function(e,t,r){r.d(t,{R:function(){return i}});var a=r(74165),n=r(15861),s=r(49729),i={getVoters:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t,r,n,i=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,r=i.length>1&&void 0!==i[1]?i[1]:10,e.prev=2,e.next=5,s.b.get("/voters?pagination[page]=".concat(t,"&pagination[pageSize]=").concat(r,"&sort[0]=createdAt:desc"));case 5:return n=e.sent,e.abrupt("return",n.data);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),getVoter:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.get("/voters/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getVotorsByBirthday:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.get("/voters?filters[Date_of_Birth][$containsi]=".concat(t,"&sort[0]=createdAt:desc"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),getVotersByFiltering:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t,r,n,i,c,o=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,r=o.length>1&&void 0!==o[1]?o[1]:10,n=o.length>2?o[2]:void 0,e.prev=3,i="",n.map((function(e){i+="filters[".concat(e.key,"][$containsi]=").concat(e.value,"&")})),e.next=8,s.b.get("/voters?pagination[page]=".concat(t,"&pagination[pageSize]=").concat(r,"&").concat(i,"sort[0]=createdAt:desc"));case 8:return c=e.sent,e.abrupt("return",c.data);case 12:throw e.prev=12,e.t0=e.catch(3),e.t0;case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),getVotersByBirthday:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.get("/voters?filters[Date_of_Birth][$eq]=".concat(t,"&sort[0]=createdAt:desc"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),addVoter:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.post("/voters",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),updateVoter:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,r){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.b.put("/voters/".concat(t),r);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}()}},11166:function(e,t,r){r.r(t),r.d(t,{default:function(){return M}});var a=r(72791),n=r(78983),s=r(93076),i=r(24846),c=r(99161),o=r(81172),l=r(29759),u=r(30434),d=r(24914),p=r(75015),h=r(46630),g=r(16226),f=r(23438),v=r(46066),x=r(17218),b=r(28545),m=r(87372),y=r(42735),j=r(64101),w=r(67446),Z=r(77627),N=r(47704),k=(r.p,r.p,r.p,r.p,r.p,r.p,r(96558),r(8379),r(96930)),z=r(34831),A=r(92239),S=r(80184);var B=r(29439);var F=function(){var e=(0,a.useState)(0),t=(0,B.Z)(e,2),r=t[0],s=t[1],l=(0,a.useState)(0),u=(0,B.Z)(l,2),d=u[0],p=u[1],h=(0,a.useState)(0),g=(0,B.Z)(h,2),f=g[0],v=g[1],x=(0,a.useState)(0),b=(0,B.Z)(x,2),m=b[0],y=b[1],j=(0,a.useState)(0),w=(0,B.Z)(j,2),Z=w[0],N=w[1],k=(0,a.useState)(0),F=(0,B.Z)(k,2),C=F[0],_=F[1],M=(0,a.useState)(0),$=(0,B.Z)(M,2),J=$[0],O=$[1],D=(0,a.useState)(0),R=(0,B.Z)(D,2),I=R[0],V=R[1],W=(0,a.useState)(0),H=(0,B.Z)(W,2),G=H[0],q=H[1],E=(0,a.useState)(0),L=(0,B.Z)(E,2),K=L[0],P=L[1];return(0,a.useEffect)((function(){z.c.getOrganizers(0,0).then((function(e){s(e.meta.pagination.total)})),A.R.getVoters(0,0).then((function(e){P(e.meta.pagination.total)}))}),[]),(0,a.useEffect)((function(){z.c.getOrganizersByFiltering(0,0,[{key:"Gender",value:"Female"}]).then((function(e){var t=e.meta.pagination.total/r*100;y(t||0),p(100-t||0),v(r-e.meta.pagination.total||0),N(e.meta.pagination.total)}))}),[r]),(0,a.useEffect)((function(){A.R.getVotersByFiltering(0,0,[{key:"Gender",value:"Female"}]).then((function(e){var t=e.meta.pagination.total/K*100;q(t||0),V(100-t||0),_(K-e.meta.pagination.total||0),O(e.meta.pagination.total)}))}),[K]),(0,S.jsx)(n.xH,{className:"mb-4",children:(0,S.jsxs)(n.sl,{children:[(0,S.jsxs)(n.rb,{children:[(0,S.jsxs)(n.b7,{xs:12,md:6,xl:6,children:[(0,S.jsx)(n.rb,{children:(0,S.jsx)(n.b7,{sm:6,children:(0,S.jsxs)("div",{className:"border-start border-start-5 border-start-danger py-1 px-3 mb-3",children:[(0,S.jsx)("div",{className:"text-medium-emphasis ",children:"Organizers"}),(0,S.jsx)("div",{className:"fs-5 fw-semibold",children:r})]})})}),(0,S.jsx)("hr",{className:"mt-0"})]}),(0,S.jsxs)(n.b7,{xs:12,md:6,xl:6,children:[(0,S.jsx)(n.rb,{children:(0,S.jsx)(n.b7,{sm:6,children:(0,S.jsxs)("div",{className:"border-start border-start-5 border-start-warning py-1 px-3 mb-3",children:[(0,S.jsx)("div",{className:"text-medium-emphasis ",children:"Voters"}),(0,S.jsx)("div",{className:"fs-5 fw-semibold",children:K})]})})}),(0,S.jsx)("hr",{className:"mt-0"})]})]}),(0,S.jsxs)(n.rb,{children:[(0,S.jsxs)("div",{className:"progress-group mb-4",children:[(0,S.jsxs)("div",{className:"progress-group-header",children:[(0,S.jsx)(i.Z,{className:"me-2",icon:c.E,size:"lg"}),(0,S.jsx)("span",{children:"Male"}),(0,S.jsxs)("div",{className:"ms-auto fw-semibold",style:{textAlign:"end"},children:["(",C,") ",I.toFixed(2),"%"]})]}),(0,S.jsxs)("div",{className:"progress-group-bars",children:[(0,S.jsx)(n.yI,{thin:!0,color:"warning",className:"mb-2",height:12,value:I}),(0,S.jsx)(n.yI,{thin:!0,color:"danger",height:12,value:d}),(0,S.jsxs)("div",{className:"ms-auto fw-semibold",style:{textAlign:"end"},children:["(",f,") ",d.toFixed(2),"%"]})]})]}),(0,S.jsxs)("div",{className:"progress-group mb-4",children:[(0,S.jsxs)("div",{className:"progress-group-header",children:[(0,S.jsx)(i.Z,{className:"me-2",icon:o.Q,size:"lg"}),(0,S.jsx)("span",{children:"Female"}),(0,S.jsxs)("div",{className:"ms-auto fw-semibold",style:{textAlign:"end"},children:["(",J,") ",G.toFixed(2),"%"]})]}),(0,S.jsxs)("div",{className:"progress-group-bars",children:[(0,S.jsx)(n.yI,{thin:!0,color:"warning",className:"mb-2",height:12,value:G}),(0,S.jsx)(n.yI,{thin:!0,color:"danger",height:12,value:m}),(0,S.jsxs)("div",{className:"ms-auto fw-semibold",style:{textAlign:"end"},children:["(",Z,") ",m.toFixed(2),"%"]})]})]})]}),(0,S.jsx)("br",{})]})})};var C=function(){return(0,S.jsx)(s.FR,{type:"bar",data:{labels:["Seat","Local Authority","Ward","GN Division","Street Village"],datasets:[{label:"Voters",backgroundColor:k.DM.MAIN,data:[40,20,12,39,10,40,39,80,40]}]},labels:"months",options:{plugins:{legend:{labels:{color:"gray"}}},scales:{x:{grid:{color:"#fff6"},ticks:{color:"gray"}},y:{grid:{color:k.DM.LIGHT},ticks:{color:"gray"}}}}})};var _=function(){return(0,S.jsx)(s.FR,{type:"bar",data:{labels:["Seat","Local Authority","Ward","GN Division","Street Village"],datasets:[{label:"Organizers",backgroundColor:k.DM.DANGER_BTN,data:[40,20,12,39,10,40,39,80,40]}]},labels:"months",options:{plugins:{legend:{labels:{color:"gray"}}},scales:{x:{grid:{color:"#fff6"},ticks:{color:"gray"}},y:{grid:{color:k.DM.LIGHT},ticks:{color:"gray"}}}}})},M=function(){c.E,o.Q,l.N,u.t,d._,p.n,h.E,g.y,f.N,v.W,x.J,b.I,m.A,y.K,j.z,w.D,Z.I,N.I;return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(n.rb,{children:(0,S.jsx)(n.b7,{xs:!0,children:(0,S.jsx)(F,{})})}),(0,S.jsxs)(n.rb,{children:[(0,S.jsx)(n.b7,{md:6,children:(0,S.jsx)(n.xH,{className:"mb-4",children:(0,S.jsx)(n.sl,{children:(0,S.jsx)(C,{})})})}),(0,S.jsx)(n.b7,{md:6,children:(0,S.jsx)(n.xH,{className:"mb-4",children:(0,S.jsx)(n.sl,{children:(0,S.jsx)(_,{})})})})]})]})}},96558:function(e,t,r){var a=r(1413),n=(r(72791),r(78983)),s=r(24846),i=r(30434),c=r(24914),o=r(75015),l=r(49909),u=r(93076),d=r(80184);t.Z=function(e){var t=e.withCharts,r={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return(0,d.jsxs)(n.rb,{children:[(0,d.jsx)(n.b7,{sm:6,lg:3,children:(0,d.jsx)(n.bP,(0,a.Z)((0,a.Z)({className:"mb-4"},t&&{chart:(0,d.jsx)(u.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:r})}),{},{icon:(0,d.jsx)(s.Z,{icon:i.t,height:52,className:"my-4 text-white"}),values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],style:{"--cui-card-cap-bg":"#3b5998"}}))}),(0,d.jsx)(n.b7,{sm:6,lg:3,children:(0,d.jsx)(n.bP,(0,a.Z)((0,a.Z)({className:"mb-4"},t&&{chart:(0,d.jsx)(u.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:r})}),{},{icon:(0,d.jsx)(s.Z,{icon:c._,height:52,className:"my-4 text-white"}),values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],style:{"--cui-card-cap-bg":"#00aced"}}))}),(0,d.jsx)(n.b7,{sm:6,lg:3,children:(0,d.jsx)(n.bP,(0,a.Z)((0,a.Z)({className:"mb-4"},t&&{chart:(0,d.jsx)(u.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:r})}),{},{icon:(0,d.jsx)(s.Z,{icon:o.n,height:52,className:"my-4 text-white"}),values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],style:{"--cui-card-cap-bg":"#4875b4"}}))}),(0,d.jsx)(n.b7,{sm:6,lg:3,children:(0,d.jsx)(n.bP,(0,a.Z)((0,a.Z)({className:"mb-4",color:"warning"},t&&{chart:(0,d.jsx)(u.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:r})}),{},{icon:(0,d.jsx)(s.Z,{icon:l.J,height:52,className:"my-4 text-white"}),values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]}))})]})}},8379:function(e,t,r){r(72791);var a=r(78983),n=r(93076),s=r(24846),i=r(38957),c=r(3896),o=r(40289),l=r(96930),u=r(80184);t.Z=function(){return(0,u.jsxs)(a.rb,{children:[(0,u.jsx)(a.b7,{md:6,lg:6,children:(0,u.jsx)(a.co,{className:"mb-4",style:{backgroundColor:l.DM.MAIN,color:"white"},value:(0,u.jsxs)(u.Fragment,{children:["26K"," ",(0,u.jsxs)("span",{className:"fs-6 fw-normal",children:["(-12.4% ",(0,u.jsx)(s.Z,{icon:i.t}),")"]})]}),title:"Organizers",action:(0,u.jsxs)(a.w5,{alignment:"end",children:[(0,u.jsx)(a.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,u.jsx)(s.Z,{icon:c.t,className:"text-high-emphasis-inverse"})}),(0,u.jsxs)(a.$H,{children:[(0,u.jsx)(a.$f,{children:"Action"}),(0,u.jsx)(a.$f,{children:"Another action"}),(0,u.jsx)(a.$f,{children:"Something else here..."}),(0,u.jsx)(a.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,u.jsx)(n.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:"black",data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,u.jsx)(a.b7,{md:6,lg:6,children:(0,u.jsx)(a.co,{className:"mb-4",style:{backgroundColor:"black",color:"white"},value:(0,u.jsxs)(u.Fragment,{children:["$6.200"," ",(0,u.jsxs)("span",{className:"fs-6 fw-normal",children:["(40.9% ",(0,u.jsx)(s.Z,{icon:o.T}),")"]})]}),title:"Voters",action:(0,u.jsxs)(a.w5,{alignment:"end",children:[(0,u.jsx)(a.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,u.jsx)(s.Z,{icon:c.t,className:"text-high-emphasis-inverse"})}),(0,u.jsxs)(a.$H,{children:[(0,u.jsx)(a.$f,{children:"Action"}),(0,u.jsx)(a.$f,{children:"Another action"}),(0,u.jsx)(a.$f,{children:"Something else here..."}),(0,u.jsx)(a.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,u.jsx)(n.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:l.DM.MAIN,data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})})]})}}}]);
//# sourceMappingURL=8254.e8c600f8.chunk.js.map