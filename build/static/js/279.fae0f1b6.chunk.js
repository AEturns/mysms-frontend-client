"use strict";(self.webpackChunkMySMS_FE_Client=self.webpackChunkMySMS_FE_Client||[]).push([[279],{18431:function(e,t,n){n.d(t,{Z:function(){return i}});n(72791);var r=n.p+"static/media/loading.2a71af82e0bcc259cf1290c2212f7d6a.svg",a=n(80184);var i=function(e){var t=e.loading,n=e.message,i=void 0===n?"Loading...":n,s=e.fulscreen,l=void 0===s||s,c=e.dark,o=void 0!==c&&c,u=e.height,d=void 0===u?200:u,x=e.textSize,p=void 0===x?"2em":x;return(0,a.jsx)("div",{style:{zIndex:500},className:"".concat(l?"fullscreen-overlay":""," ").concat(t?"visible":""),children:(0,a.jsxs)("div",{className:"loading-cont animate__animated animate__flipInY",style:{textAlign:"center"},children:[(0,a.jsx)("img",{src:r,height:d}),(0,a.jsx)("p",{style:{fontSize:p,textAlign:"center",color:o?"black":"white"},children:i})]})})}},48382:function(e,t,n){var r=n(42943),a=n(24846),i=n(78983),s=(n(72791),n(57689)),l=n(96930),c=(n(69817),n(80184));t.Z=function(e){var t=e.title,n=e.description,o=e.open,u=e.onOpen,d=e.okay,x=e.buttonTitle,p=void 0===x?"Download":x,m=e.buttonColor;return(0,s.s0)(),(0,c.jsxs)(i.Tk,{alignment:"center",visible:o,onClose:function(){return u(!1)},"aria-labelledby":"VerticallyCenteredExample",children:[(0,c.jsx)(i.p0,{children:(0,c.jsx)(i.fl,{id:"VerticallyCenteredExample",children:t})}),(0,c.jsxs)(i.sD,{className:"m-3",children:[(0,c.jsx)("div",{style:{textAlign:"center"},className:"mb-3",children:(0,c.jsx)(a.Z,{style:{color:m||l.DM.MAIN},icon:r.D,width:80})}),(0,c.jsx)("p",{style:{textAlign:"center",fontSize:"1em"},children:n})]}),(0,c.jsxs)(i.Ym,{children:[(0,c.jsx)(i.u5,{color:"light",onClick:function(){return u(!1)},children:"Cancel"}),(0,c.jsx)(i.u5,{color:"primary",style:{backgroundColor:m||l.DM.SECONDARY,border:"0px"},onClick:function(){d(!0),u(!1)},children:p})]})]})}},31886:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(74165),a=n(15861),i=n(49729),s={createCampaign:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.b.post("/campaigns",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),uploadCampaignFile:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.b.post("/import/csv/"+n,t,{headers:{"Content-Type":"multipart/form-data"}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),getCampaignAll:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.b.get("/campaigns");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),getCampaign:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.b.get("/campaigns/"+t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),approveSendCampaign:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/campaign/send-sms/"+t+"/"+n);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}},24279:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(74165),a=n(15861),i=n(93433),s=n(29439),l=n(42943),c=n(24846),o=n(78983),u=n(72426),d=n.n(u),x=n(72791),p=n(97673),m=n.n(p),h=n(57689),f=(n(92999),n(96930)),k=(n(69817),n(80184));var b=n(86116),g=function(e){var t,n,r,a=e.text,i=a.length,s="chat-bubble";return s+=i<=50?" short-text":i<=200?" medium-text":" long-text",s+=" align-right",(0,k.jsxs)("div",{className:s,children:[(0,k.jsx)("span",{style:{fontWeight:"bold"},children:null===(t=b.Z.getUser())||void 0===t||null===(n=t.user)||void 0===n||null===(r=n.user_detail)||void 0===r?void 0:r.mask}),(0,k.jsx)("br",{}),a]})},v=n(18431),y=n(1413),j=n(92455),C=function(e){var t=e.mobileNumbers,n=e.deleteBtn,r=void 0!==n&&n,a=e.deleteItem;return(0,k.jsxs)("div",{className:"mobile-numbers-container",children:[(0,k.jsx)("div",{className:"header-row",children:(0,k.jsx)("div",{className:"header-cell",children:"Mobile Numbers"})}),(0,k.jsx)(j.S_,{height:350,width:"100%",itemCount:t.length,itemSize:function(e){return 50},children:function(e){var n=e.index,i=e.style;return(0,k.jsxs)("div",{className:"list-row",style:(0,y.Z)((0,y.Z)({},i),{},{display:"flex",justifyContent:"space-between"}),children:[(0,k.jsx)("div",{children:t[n].mobile}),r&&(0,k.jsx)("div",{children:(0,k.jsx)("span",{className:"material-symbols-outlined",style:{cursor:"pointer"},onClick:function(){return a(n)},children:"cancel"})})]},n)}})]})},Z=n(97615),w=n(59741),N=n.n(w),S=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":130,"w":512,"h":512,"nm":"HDFC Success","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"check","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-82.5,4.5],[-31,55],[73,-52.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[1],"y":[0.076]},"t":60,"s":[0]},{"t":85,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,257.86,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.833],"y":[0.98,0.98,-66.114]},"o":{"x":[0.656,0.656,0.167],"y":[0.872,0.872,67.114]},"t":20,"s":[0,0,100]},{"t":60,"s":[150,150,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[236,236],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.172549019608,0.854901960784,0.580392156863,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-3],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.626],"y":[0.729]},"o":{"x":[0.912],"y":[0.073]},"t":76,"s":[100]},{"t":119,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,257.86,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[0.999,0.999,1]},"o":{"x":[0.477,0.477,0.333],"y":[0.587,0.587,0]},"t":10,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":50,"s":[150,150,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":76,"s":[150,150,100]},{"t":123,"s":[210,210,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[236,236],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.783504889993,0.945098039216,0.880089314779,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,-3],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":240,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"BG","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[554,556],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-1,6],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":240,"op":240,"st":0,"bm":0,"hidden":0}],"markers":[]}');var E=function(e){var t=e.title,n=e.description,r=e.rediretUrl,a=e.open,i=e.onOpen,s=e.addAnother,l=void 0===s?null:s,u=(0,h.s0)();return(0,k.jsxs)(o.Tk,{alignment:"center",visible:a,onClose:function(){return i(!1)},"aria-labelledby":"VerticallyCenteredExample",children:[(0,k.jsx)(o.p0,{children:(0,k.jsx)(o.fl,{id:"VerticallyCenteredExample",children:t})}),(0,k.jsxs)(o.sD,{className:"m-3",children:[(0,k.jsx)("div",{style:{textAlign:"center"},className:"mb-3",children:(0,k.jsx)(N(),{loop:!1,autoplay:!0,style:{height:"150px"},className:"match-animation",animationData:S})}),(0,k.jsx)("p",{style:{textAlign:"center"},children:n})]}),(0,k.jsxs)(o.Ym,{children:[(0,k.jsx)(o.u5,{color:"light",onClick:function(){return i(!1)},children:"Close"}),l&&(0,k.jsx)(o.u5,{color:"primary",style:{backgroundColor:f.DM.MAIN,border:"0px"},onClick:function(){l(),window.location.reload(!1),i(!1)},children:"Add Another"}),r&&(0,k.jsxs)(o.u5,{style:{backgroundColor:f.DM.SECONDARY,border:"0px"},color:"primary",onClick:function(){return u(r)},children:["Go To Carousal ",(0,k.jsx)(c.Z,{icon:Z.n,size:"md"})]})]})]})},D=n(48382),A=n(31886),M=n(21830),F=n.n(M);var T=function(){var e,t,n,u,p,y,j,Z,w,N,S,M=(0,h.UO)(),T=M.id,V=M.type,B=(0,x.useState)(""),R=(0,s.Z)(B,2),U=R[0],O=R[1],_=(0,x.useState)(""),G=(0,s.Z)(_,2),L=G[0],P=G[1],I=(0,x.useState)([]),Y=(0,s.Z)(I,2),q=Y[0],z=Y[1],H=(0,x.useState)("custom"),W=(0,s.Z)(H,2),J=W[0],K=W[1],Q=(0,x.useState)(""),X=(0,s.Z)(Q,2),$=X[0],ee=X[1],te=(0,x.useState)(""),ne=(0,s.Z)(te,2),re=ne[0],ae=ne[1],ie=(0,x.useState)("send_now"),se=(0,s.Z)(ie,2),le=(se[0],se[1],(0,x.useState)(d()(new Date).format("YYYY-MM-DD"))),ce=(0,s.Z)(le,2),oe=(ce[0],ce[1],(0,x.useState)(d()(new Date).format("HH:MM"))),ue=(0,s.Z)(oe,2),de=(ue[0],ue[1],(0,x.useState)(!1)),xe=(0,s.Z)(de,2),pe=xe[0],me=xe[1],he=(0,x.useState)(!1),fe=(0,s.Z)(he,2),ke=fe[0],be=fe[1],ge=(0,x.useState)(""),ve=(0,s.Z)(ge,2),ye=ve[0],je=ve[1],Ce=(0,x.useState)(!1),Ze=(0,s.Z)(Ce,2),we=Ze[0],Ne=Ze[1],Se=(0,x.useState)(!1),Ee=(0,s.Z)(Se,2),De=Ee[0],Ae=Ee[1],Me=null===(e=b.Z.getUser())||void 0===e||null===(t=e.user)||void 0===t?void 0:t.id,Fe=(0,x.useState)(null),Te=(0,s.Z)(Fe,2),Ve=Te[0],Be=Te[1];(0,x.useEffect)((function(){"edit"==V&&T>0&&Ge()}),[T,V]);var Re=(q.length*(null===(n=b.Z.getUser())||void 0===n||null===(u=n.user)||void 0===u||null===(p=u.user_detail)||void 0===p?void 0:p.perMessageCount)).toLocaleString("en-US"),Ue=function(){z([])},Oe=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(be(!1),""!=U){e.next=5;break}return be(!0),je("Campaign Name is required"),e.abrupt("return");case 5:if(""!=L){e.next=9;break}return be(!0),je("Camapign Message is required"),e.abrupt("return");case 9:if(!(q.length<=0)){e.next=13;break}return be(!0),je("Number base is required"),e.abrupt("return");case 13:return t=q.map((function(e){return e.mobile})),n={data:{user:Me,campaignName:U,campaignDetails:L,messageCost:Number(Re),numberCount:t.length,audience:J,numberList:"custom"==J?t:[]}},Ne(!0),e.next=18,A.U.createCampaign(n).then(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("custom"==J){e.next=3;break}return e.next=3,_e(null===t||void 0===t?void 0:t.data.id);case 3:me(!0),Ne(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e),Ne(!1),F().fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ve){e.next=3;break}return F().fire({icon:"error",title:"Oops...",text:"Something went wrong with the CSV File!"}),e.abrupt("return");case 3:return(n=new FormData).append("csv",Ve),e.next=7,A.U.uploadCampaignFile(n,t).then((function(e){me(!0),Ne(!1)})).catch((function(e){console.error(e),Ne(!1),F().fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.U.getCampaign(T).then((function(e){Le(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Le=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(t.attributes.campaignName),P(t.attributes.campaignDetails),K(t.attributes.audience),z("custom"==t.attributes.audience?t.attributes.numberList.map((function(e){return{mobile:e}})):[]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(be(!1),""!=U){e.next=5;break}return be(!0),je("Campaign Name is required"),e.abrupt("return",!1);case 5:if(""!=L){e.next=9;break}return be(!0),je("Camapign Message is required"),e.abrupt("return",!1);case 9:if(!(q.length<=0)){e.next=13;break}return be(!0),je("Number base is required"),e.abrupt("return",!1);case 13:Ae(!0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(Ve),(0,k.jsxs)(o.xH,{className:"mb-4",children:[(0,k.jsx)(o.bn,{style:{display:"flex",justifyContent:"space-between"},children:(0,k.jsx)("h5",{children:"Campaign Configaration"})}),(0,k.jsxs)(o.sl,{children:[(0,k.jsx)(v.Z,{loading:we}),(0,k.jsxs)(o.rb,{children:[(0,k.jsxs)(o.b7,{md:8,children:[(0,k.jsx)(o.rb,{className:"mb-4",children:(0,k.jsxs)("h6",{style:{color:f.DM.MAIN},children:["edit"==V?"Edit":"Create New"," Campaign"]})}),(0,k.jsx)(o.rb,{children:(0,k.jsxs)(o.b7,{md:8,children:[(0,k.jsxs)(o.L8,{htmlFor:"staticEmail",className:"col-form-label",children:["Campaign Name (For References) ",(0,k.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,k.jsx)(o.jO,{type:"text",id:"exampleFormControlInput1",placeholder:"Name",value:U,onChange:function(e){return O(e.target.value)}})]})}),(0,k.jsx)(o.rb,{className:"mt-3",children:(0,k.jsxs)(o.b7,{md:8,children:[(0,k.jsxs)(o.L8,{htmlFor:"staticEmail",className:"col-form-label",children:["Campaign Message ",(0,k.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,k.jsx)(o.PB,{type:"text",style:{height:200},id:"exampleFormControlInput1",placeholder:"Type the message here...",value:L,onChange:function(e){return P(e.target.value)}})]})}),(0,k.jsx)(o.rb,{className:"mt-3",children:(0,k.jsxs)(o.b7,{children:[(0,k.jsxs)(o.L8,{htmlFor:"staticEmail",className:"col-form-label",children:["Audience Type ",(0,k.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,k.jsxs)("div",{style:{display:"flex",gap:50},className:"mt-2",children:[(0,k.jsx)(o.EC,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",label:"Custom Numbers",value:"custom",onChange:function(e){Ue(),K(e.target.value)},checked:"custom"==J}),(0,k.jsx)(o.EC,{type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",label:"CSV Upload",value:"csv",onChange:function(e){Ue(),K(e.target.value)},checked:"csv"==J})]})]})}),"csv"==J&&(0,k.jsx)("div",{children:(0,k.jsx)(o.rb,{className:"mt-3",children:(0,k.jsxs)(o.b7,{md:8,children:[(0,k.jsxs)(o.L8,{htmlFor:"staticEmail",className:"col-form-label",children:["Upload CSV File ",(0,k.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,k.jsx)(m(),{cssClass:"mt-1",onFileLoaded:function(e,t,n){return function(e,t,n){Be(n),z(e)}(e,0,n)},parserOptions:{header:!0,dynamicTyping:!0,skipEmptyLines:!0,transformHeader:function(e){return e.toLowerCase().replace(/\W/g,"_")}}})]})})}),"custom"==J&&(0,k.jsx)("div",{children:(0,k.jsx)(o.rb,{className:"mt-3",children:(0,k.jsxs)(o.b7,{md:8,children:[(0,k.jsxs)(o.L8,{htmlFor:"staticEmail",className:"col-form-label",children:["Enter Numbers ",(0,k.jsx)("span",{style:{color:"red"},children:"*"})]}),(0,k.jsx)(o.jO,{type:"text",placeholder:"Type & Enter",text:(0,k.jsx)("span",{style:{color:"red",paddingLeft:5},children:re}),value:$,onChange:function(e){return ee(e.target.value)},onKeyDown:function(e){"Enter"==e.key&&(ae(""),10==$.length?(z([].concat((0,i.Z)(q),[{mobile:$}])),ee("")):ae("Please enter a valid number!!"))}})]})})}),(0,k.jsx)(o.rb,{className:"mt-4",children:(0,k.jsx)(o.b7,{children:(0,k.jsxs)("div",{style:{backgroundColor:"#F0F0F0",padding:"10px",width:"500px",borderRadius:10},children:[(0,k.jsx)("p",{style:{fontWeight:"bold"},children:"SUMMERY:"}),(0,k.jsxs)("p",{children:["Mask Name = ",null===(y=b.Z.getUser())||void 0===y||null===(j=y.user)||void 0===j||null===(Z=j.user_detail)||void 0===Z?void 0:Z.mask]}),(0,k.jsxs)("p",{children:["Number Count = ",q.length]}),(0,k.jsxs)("p",{children:["Per Message Count = Rs."," ",(null===(w=b.Z.getUser())||void 0===w||null===(N=w.user)||void 0===N||null===(S=N.user_detail)||void 0===S?void 0:S.perMessageCount)||f.TY," "]}),(0,k.jsxs)("p",{style:{color:f.DM.MAIN},children:["Total Campaign Cost = Rs. ",Re]})]})})})," ",ke&&(0,k.jsxs)(o.Gc,{hidden:!ke,color:"warning",className:"d-flex align-items-center mt-4",style:{width:"500px"},children:[(0,k.jsx)(c.Z,{icon:l.D,className:"flex-shrink-0 me-2",width:24,height:24}),(0,k.jsx)("div",{children:ye})]}),(0,k.jsx)(o.rb,{className:"mt-5",children:(0,k.jsx)(o.b7,{children:(0,k.jsxs)(o.u5,{onClick:function(){return Pe()},style:{backgroundColor:f.DM.SECONDARY,border:"0px",width:200},children:["edit"==V?"UPDATE":"CREATE"," CAMPAIGN"]})})})]}),(0,k.jsxs)(o.b7,{children:[L.length>0&&(0,k.jsx)(o.rb,{children:(0,k.jsx)(o.b7,{children:(0,k.jsx)(o.xH,{children:(0,k.jsxs)(o.sl,{children:[(0,k.jsx)("p",{children:"Message Preview:"}),(0,k.jsx)(g,{text:L})]})})})}),q.length>0&&(0,k.jsx)(o.rb,{className:"mt-3",children:(0,k.jsx)(o.b7,{children:(0,k.jsx)(C,{mobileNumbers:q,deleteBtn:"custom"==J,deleteItem:function(e){z((function(t){return t.filter((function(t,n){return n!==e}))}))}})})})]})]})]}),(0,k.jsx)(E,{open:pe,title:"Successful Operation",description:f.Wj.CAMPAIGN.ADD_SUCCESS_MSG,onOpen:function(e){return me(e)},rediretUrl:"/campaigns"}),(0,k.jsx)(D.Z,{title:"Action Required!",description:"Pause for a moment! Are you sure you want to create this campaign?",buttonTitle:"CREATE NOW",open:De,onOpen:function(e){return Ae(e)},okay:function(e){return Oe()}})]})}},69817:function(e,t,n){e.exports=n.p+"static/media/verified.8592370a7c099585a0fb.gif"}}]);
//# sourceMappingURL=279.fae0f1b6.chunk.js.map