(this.webpackJsonpchat2=this.webpackJsonpchat2||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(14),n=a(33),r=a.n(n),i=a(8),o=a(47),l=a.n(o),u=a(27),d=a(6),j=a(29),b=a.n(j),m=function(e,t){var a={},s={};e.split("").forEach((function(e){a[e]||(a[e]=0),a[e]++})),t.split("").forEach((function(e){s[e]||(s[e]=0),s[e]++}));var c=Number(Object.values(a).sort().join(""))+Number(Object.values(s).sort().join(""));return String(c)},p=a(114),h=a(40),O=a.n(h);a(57);a(90);var g=Object(h.initializeApp)({apiKey:"AIzaSyC2DEhjn4vwD0M0P5Qy6aG070QhDQXTZCo",authDomain:"chat-clone-87936.firebaseapp.com",projectId:"chat-clone-87936",storageBucket:"chat-clone-87936.appspot.com",messagingSenderId:"521626344990",appId:"1:521626344990:web:f98e5b08a500d2eb58d80f",measurementId:"G-FKD7HB1K0G"}),f=O.a.auth(),_=new O.a.auth.GoogleAuthProvider,x=g.firestore(),v=a(48),N=a.n(v),S=a(3),I=function(e){e.id;var t=e.msg,a=e.src,s=e.lastmsg;e.onClick;return Object(S.jsx)(u.b,{to:"/users/".concat(t),children:Object(S.jsxs)("div",{className:N.a.user,children:[Object(S.jsx)(p.a,{src:a}),Object(S.jsxs)("div",{className:N.a.msg,children:[Object(S.jsx)("p",{children:t}),""!==s&&Object(S.jsx)("p",{children:s})]})]})})},y=function(e){var t=Object(s.useState)([]),a=Object(i.a)(t,2),n=a[0],r=a[1],o=Object(s.useState)({}),l=Object(i.a)(o,2),u=l[0],d=l[1],j=Object(c.c)((function(e){return e.user})),h=Object(c.c)((function(e){return e.lastMsg}));Object(s.useEffect)((function(){j&&(x.collection("users").doc(j.email).set({aid:j.id,email:j.email,name:j.name,pic:j.pic,lastmm:"",rId:""}),x.collection("users").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,aid:e.data().aid,name:e.data().name,email:e.data().email,pic:e.data().pic,lastmm:e.data().lastmm,rId:e.data().rId}})))})))}),[j]),Object(s.useEffect)((function(){d(h)}),[h]);var O=n.filter((function(e){return j.email!==e.email})).map((function(e){var t,a=m(j.email,e.email);return t=u[a]?u[a]:e.lastmm&&e.rId===j.email?e.lastmm:"",Object(S.jsx)(I,{id:e.id,msg:e.email,src:e.pic,lastmsg:t},e.id)}));return Object(S.jsxs)("div",{className:b.a.sidebar,children:[Object(S.jsxs)("div",{className:b.a["sidebar-header"],children:[Object(S.jsx)(p.a,{src:j.pic}),Object(S.jsx)("div",{className:b.a.user,children:Object(S.jsx)("p",{children:j.email})})]}),Object(S.jsx)("div",{className:b.a["sidebar-users"],children:O})]})},w=a(25),E=a.n(w),C=a(59),L=a(7),M=a(37),k=a(12),D=a(20),G=a.n(D),A=a(51),B=Object(A.b)({name:"auth",initialState:{isLoggedIn:!1,user:{},lastMsg:{}},reducers:{login:function(e,t){e.isLoggedIn=!0,e.user=t.payload},addLastMsg:function(e,t){e.lastMsg=t.payload}}}),K=Object(A.a)({reducer:B.reducer}),Q=B.actions,X=K,P=a(112),U=function(e){var t=Object(c.c)((function(e){return e.user})),a=Object(s.useRef)(),n=Object(d.f)().Email,r=Object(s.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)(""),b=Object(i.a)(j,2),h=b[0],O=b[1],g=Object(s.useState)([]),f=Object(i.a)(g,2),_=f[0],v=f[1],N=t.email,I=Object(c.b)();Object(s.useEffect)((function(){if(n){x.collection("users").doc(n).onSnapshot((function(e){u(e.data().email),O(e.data().pic)}));var e=m(n,N);x.collection("messages").doc(e).get().then((function(t){t.exists?x.collection("messages").doc(e).onSnapshot((function(e){if(!e.exists)return v([]);v(Object(k.a)(Object.values(e.data())))})):v([])}))}}),[n,N]);var y=function(){var e=Object(M.a)(E.a.mark((function e(s){var c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),c=m(n,N),x.collection("messages").doc(c).set(Object(L.a)({},(new Date).toLocaleString(),{sid:N,docId:c,rid:n,msg:a.current.value,timestamp:(new Date).getHours()+":"+(new Date).getMinutes()}),{merge:!0}),e.next=5,x.collection("messages").doc(c).onSnapshot((function(e){v(Object(k.a)(Object.values(e.data())))}));case 5:x.collection("lastMsg").doc(c).set(Object(L.a)({},c,a.current.value)),x.collection("lastMsg").onSnapshot((function(e){var t={},a=[],s=[];e.docs.map((function(e){a.push.apply(a,Object(k.a)(Object.keys(e.data()))),s.push.apply(s,Object(k.a)(Object.values(e.data())))}));for(var c=0;c<a.length;c++)t[a[c]]||(t[a[c]]=s[c]),t[a[c]]=s[c];I(Q.addLastMsg(Object(C.a)({},t)))})),x.collection("users").doc(t.email).set({aid:t.id,email:t.email,name:t.name,pic:t.pic,lastmm:a.current.value,rId:n}),a.current.value="";case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:G.a["user-page"],children:[Object(S.jsxs)("div",{className:G.a["user-page-header"],children:[Object(S.jsx)(p.a,{src:h}),Object(S.jsx)("div",{className:G.a.user,children:Object(S.jsx)("p",{children:l})})]}),Object(S.jsx)("div",{className:G.a["sidebar-users__chat-area"],children:_.map((function(e){return e.rid!==N?Object(S.jsxs)("div",{id:Object(P.a)(),className:"".concat(G.a["chat-msg"]," ").concat(G.a.left),children:[Object(S.jsx)("p",{children:e.msg}),Object(S.jsx)("span",{children:e.timestamp})]},Object(P.a)()):Object(S.jsxs)("div",{id:Object(P.a)(),className:"".concat(G.a["chat-msg"]),children:[Object(S.jsx)("p",{children:e.msg}),Object(S.jsx)("span",{children:e.timestamp})]},Object(P.a)())}))}),Object(S.jsx)("div",{className:G.a["form-grp"],children:Object(S.jsxs)("form",{onSubmit:y,children:[Object(S.jsx)("input",{type:"text",placeholder:"Enter Message",ref:a}),Object(S.jsx)("button",{type:"submit",children:"Go"})]})})]})},z=a(41),J=a.n(z),R=a(60),Y=a.n(R),q=function(){var e=Object(c.b)(),t=function(){var t=Object(M.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.signInWithPopup(_);case 3:(a=t.sent).user.emailVerified&&e(Q.login({id:a.user.uid,name:a.user.displayName,email:a.user.email,pic:a.user.photoURL})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("".concat(t.t0.message," please try again!!!"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(S.jsx)("div",{className:J.a.login,children:Object(S.jsxs)("div",{className:J.a.holder,children:[Object(S.jsx)(Y.a,{}),Object(S.jsxs)("button",{onClick:t,children:["SIGN IN",Object(S.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/128/281/281764.png",alt:"google logo",className:J.a.google})]})]})})};var F=function(){var e=Object(c.c)((function(e){return e.isLoggedIn})),t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],r=a[1];return Object(s.useEffect)((function(){r(e)}),[e]),Object(S.jsx)("div",{className:l.a.container,children:Object(S.jsx)("div",{className:l.a.app,children:n?Object(S.jsx)(u.a,{children:Object(S.jsxs)(d.c,{children:[Object(S.jsxs)(d.a,{path:"/users/:Email",children:[Object(S.jsx)(y,{}),Object(S.jsx)(U,{})]}),Object(S.jsx)(d.a,{path:"/",children:Object(S.jsx)(y,{})})]})}):Object(S.jsx)(q,{})})})};r.a.render(Object(S.jsx)(c.a,{store:X,children:Object(S.jsx)(F,{})}),document.getElementById("root"))},20:function(e,t,a){e.exports={"user-page":"Chat_user-page__qlNbu","user-page-header":"Chat_user-page-header__3XXK1",box:"Chat_box__5217Q",user:"Chat_user__Qgvw-","sidebar-users__chat-area":"Chat_sidebar-users__chat-area__2skGO","chat-msg":"Chat_chat-msg__1xEpa",left:"Chat_left__qb1vY","form-grp":"Chat_form-grp__3VB_X"}},29:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__3wXLy","sidebar-header":"Sidebar_sidebar-header__15zM2","sidebar-users":"Sidebar_sidebar-users__1xLRi",user:"Sidebar_user__2sF47"}},41:function(e,t,a){e.exports={login:"Login_login__1G-78",holder:"Login_holder__1o_eP",google:"Login_google__3WKNp"}},47:function(e,t,a){e.exports={container:"App_container__ea6Jd",app:"App_app__3Dx9Y"}},48:function(e,t,a){e.exports={user:"User_user__3vx4Y",box:"User_box__25MEG",msg:"User_msg__3wBg3"}}},[[100,1,2]]]);
//# sourceMappingURL=main.e9460f26.chunk.js.map