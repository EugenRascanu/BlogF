(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{69:function(n,e,t){"use strict";t.r(e);var r,a,c,i,s=t(2),o=t.n(s),l=t(35),j=t.n(l),d=t(7),b=t.n(d),x=t(12),p=t(8),u=t(5),h=t(6),O=h.b.header(r||(r=Object(u.a)(["\n  background: var(--dark-900);\n  color: var(--white);\n  position: fixed;\n  width: 100%;\n  font-size: 18px;\n  font-weight: 300;\n  top: 0;\n  z-index: 1;\n  a {\n    text-decoration: none;\n    display: block;\n    text-align: left;\n    color: var(--white);\n  }\n"]))),m=h.b.div(a||(a=Object(u.a)(["\n  max-width: 1220px;\n  margin: 0 auto;\n  display: flex;\n  height: 60px;\n  align-items: center;\n"]))),f=h.b.h1(c||(c=Object(u.a)(["\n  width: calc(100% / 5);\n\n  img {\n    max-width: 40px;\n    padding: 5px;\n  }\n"]))),g=h.b.nav(i||(i=Object(u.a)(["\n  display: flex;\n  flex: 1;\n  height: 100%;\n  a {\n    color: var(--white);\n    display: flex;\n    align-items: center;\n    padding: 0 20px 0 20px;\n    text-decoration: none;\n    transition: color 0.3s;\n    &:hover {\n      color: var(--green-600);\n    }\n  }\n  .dropdown {\n    overflow: hidden;\n    margin: auto;\n  }\n\n  .dropdown span {\n    font-size: 16px;\n    border: none;\n    outline: none;\n    color: white;\n    padding: 14px 16px;\n    background: var(--dark-900);\n    font-family: inherit;\n  }\n\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background: var(--dark-900);\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n  }\n\n  .dropdown-content a {\n    float: none;\n    padding: 12px 16px;\n    height: 100%;\n  }\n\n  .dropdown-content a:hover {\n    background: var(--dark-700);\n  }\n\n  .dropdown:hover .dropdown-content {\n    display: block;\n  }\n"]))),v=t(38),y=t.n(v).a.create({baseURL:"http://127.0.0.1:8000/"}),w=t(13),k=t(1);function S(n){var e=Object(s.useState)([]),t=Object(p.a)(e,2),r=t[0],a=t[1],c=function(){var n=Object(x.a)(b.a.mark((function n(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.get("category/");case 3:e=n.sent,t=e.data,a(t),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(s.useEffect)((function(){c()}),[]),Object(k.jsx)(O,{children:Object(k.jsxs)(m,{children:[Object(k.jsx)(f,{children:Object(k.jsxs)(w.b,{to:"/",children:[void 0!==n.logo?Object(k.jsx)("img",{src:n.logo,alt:n.alt}):"",void 0!==n.nameBlog?n.nameBlog:""]})}),Object(k.jsx)(g,{id:"nav",children:r.map((function(n){return Object(k.jsxs)("span",{className:"dropdown",children:[Object(k.jsx)(w.b,{to:"/category/"+n.slug,children:n.name},n.id),n.subcategory.length>0?Object(k.jsx)("span",{className:"dropdown-content",id:"dropdown-content",children:n.subcategory.map((function(n){return Object(k.jsx)(w.b,{to:"/category/"+n.slug,children:n.name},n.id)}))}):""]},n.id)}))})]})})}var _,z=t(4),N=t.p+"static/media/loading.65fe500b.svg",D=h.b.img(_||(_=Object(u.a)(["\n  display: flex;\n  margin: auto;\n"])));function E(){return Object(k.jsx)(D,{src:N,alt:"Loading"})}var F,I,B,U,T,L,M,H=t(14),P=h.b.div(F||(F=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 5px;\n  max-width: 1220px;\n  margin: 0 auto 0;\n  flex-grow: 4;\n  height: 20rem;\n"]))),C=h.b.div(I||(I=Object(u.a)(["\n  background: var(--white);\n  width: 17.5rem;\n  text-align: center;\n  border-radius: 1rem;\n  margin-bottom: 1rem;\n  \n\n  \n  @media (max-width: 830px) {\n    text-align: left;\n    width: 100%;\n   \n  }\n  }\n  div {\n    padding: 1rem;\n    @media (max-width: 830px) {\n    display: flex;\n    align-items: center;\n   \n  }\n    ul {\n        \n      \n      li {\n        font-size: 0.7rem;\n        display: inline-block;\n        list-style-type: none;\n        padding: 0.3rem;\n\n        span {\n          margin-left: 0.5rem;\n          \n        }\n        \n        }\n      }\n      \n      \n    }\n    a{\n            text-decoration: none;\n            color: var(--dark-900);\n            transition: color 0.5s;\n            :hover{\n                color: var(--green-600);\n            }\n        }\n"]))),J=h.b.img(B||(B=Object(u.a)(["\n  align-items: center;\n  max-width: 100px;\n  border-radius: 1rem;\n  transition: filter 0.5s;\n  :hover {\n    filter: opacity(70%);\n  }\n"]))),R=h.b.span(U||(U=Object(u.a)(["\n  display: block;\n  font-size: 1.2rem;\n  margin-left: 1rem;\n"])));function q(){var n=Object(z.g)().slug,e=Object(s.useState)([]),t=Object(p.a)(e,2),r=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(p.a)(c,2),o=i[0],l=i[1];return Object(s.useEffect)((function(){(function(){var n=Object(x.a)(b.a.mark((function n(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.get("post/");case 3:e=n.sent,t=e.data,a(t),console.log(t),l(!1),n.next=12;break;case 10:n.prev=10,n.t0=n.catch(0);case 12:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}})()()}),[n]),Object(k.jsx)(P,{children:o?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(E,{})}):0!==r.length?r.map((function(n){return Object(k.jsx)(C,{children:Object(k.jsxs)("div",{children:[Object(k.jsxs)(w.b,{to:"post/"+n.slug,children:[n.picture&&Object(k.jsx)(J,{src:n.picture,alt:n.title}),Object(k.jsx)(R,{children:n.title})]}),Object(k.jsxs)("ul",{children:[Object(k.jsxs)("li",{children:[Object(k.jsx)(H.a,{}),Object(k.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(Date.parse(n.create_at))})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)(H.b,{}),Object(k.jsx)("span",{children:n.read_time})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)(H.c,{}),Object(k.jsx)("span",{children:n.views})]})]}),Object(k.jsx)("div",{className:"tooltip product-details",dangerouslySetInnerHTML:{__html:n.content.slice(0,150)}})]},n.title)})})):Object(k.jsx)(z.a,{to:"/404"})})}var A,G,K=Object(h.a)(T||(T=Object(u.a)(["\n    :root{\n        --dark-900: #20232a;\n        --dark-700: #373940;\n        --dark-050: #f9f9f9;\n        --white: #ffffff;\n        --green-600: #61E21D\n    }\n    *{\n        margin:0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n        \n    }\n    body{\n      background: var(--dark-050);\n    }\n"]))),Q=h.b.div(L||(L=Object(u.a)([""]))),V=h.b.div(M||(M=Object(u.a)(["\n  max-width: 1220px;\n  margin: 0rem auto 2rem;\n  background: var(--white);\n  padding: 1rem 3rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  a {\n    text-decoration: none;\n    display: block;\n    text-align: left;\n    color: var(--dark-700);\n  }\n\n  &.about {\n    margin: 5rem auto 2rem;\n  }\n"])));function W(){return Object(k.jsx)(Q,{children:Object(k.jsx)(V,{children:Object(k.jsx)("h1",{children:"Page404 - Page Not Found"})})})}var X,Y,Z,$,nn=h.b.div(A||(A=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  }\n  ul {\n    display: flex;\n    justify-content: center;\n    li {\n      list-style-type: none;\n      padding: 1rem 0 1rem 1rem;\n      color: #999;\n      span {\n        padding-left: 0.3rem;\n      }\n    }\n  }\n  p{\n    padding: 0.2rem;\n  }\n"]))),en=h.b.img(G||(G=Object(u.a)(["\n  width: 50rem;\n  max-width: 90%;\n  border-radius: 1rem;\n  margin-bottom: 1rem;\n"])));function tn(){var n=Object(z.g)().slug,e=Object(s.useState)([]),t=Object(p.a)(e,2),r=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(p.a)(c,2),o=i[0],l=i[1];return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("post/?slug="+n);case 3:if(t=e.sent,r=t.data,a(r),console.log(r),l(!1),0===r.length){e.next=11;break}return e.next=11,y.patch("post/"+r[0].id,{views:r[0].views+1});case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(k.jsx)(Q,{children:Object(k.jsx)(V,{children:o?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(E,{})}):0!==r.length?r.map((function(n){return Object(k.jsxs)(nn,{children:[Object(k.jsx)("h1",{children:n.title}),Object(k.jsxs)("ul",{children:[Object(k.jsxs)("li",{children:[Object(k.jsx)(H.a,{}),Object(k.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(Date.parse(n.create_at))})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)(H.b,{}),Object(k.jsx)("span",{children:n.read_time})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)(H.c,{}),Object(k.jsx)("span",{children:n.views+1})]})]}),n.picture&&Object(k.jsx)(en,{src:n.picture,alt:n.title}),Object(k.jsx)("div",{className:"tooltip product-details",dangerouslySetInnerHTML:{__html:n.content}})]},n.title)})):Object(k.jsx)(z.a,{to:"/404"})})})}var rn=h.b.div(X||(X=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  ul {\n    display: flex;\n    justify-content: center;\n    li {\n      margin-top: 1rem;\n      list-style-type: none;\n      padding: 0.3rem 0 1rem 1rem;\n      color: #999;\n      span {\n        padding-left: 0.3rem;\n      }\n    }\n  }\n"]))),an=h.b.span(Y||(Y=Object(u.a)(["\n  font-size: 2rem;\n  display: flex;\n  justify-content: center;\n"]))),cn=h.b.span(Z||(Z=Object(u.a)(["\n  margin-left: 1rem;\n  font-size: 1.5rem;\n  transition: filter 0.5s;\n  :hover {\n    color: var(--green-600);\n  }\n"]))),sn=h.b.img($||($=Object(u.a)(["\n  align-items: center;\n  max-width: 100px;\n  border-radius: 1rem;\n"])));function on(){var n=Object(z.g)().category,e=Object(s.useState)(!0),t=Object(p.a)(e,2),r=t[0],a=t[1],c=Object(s.useState)([]),i=Object(p.a)(c,2),o=i[0],l=i[1];return Object(s.useEffect)((function(){(function(){var e=Object(x.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.get("post/?category__slug="+n);case 3:t=e.sent,r=t.data,l(r),a(!1),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(k.jsx)(Q,{children:Object(k.jsxs)(V,{children:[Object(k.jsx)(an,{children:"Posts"}),r?Object(k.jsx)(E,{}):0!==o.length?o.map((function(n){return Object(k.jsxs)(rn,{children:[n.picture&&Object(k.jsx)(sn,{src:n.picture,alt:n.title}),Object(k.jsx)(w.b,{to:"/post/"+n.slug,children:Object(k.jsx)(cn,{children:n.title})}),Object(k.jsxs)("ul",{children:[Object(k.jsxs)("li",{children:[Object(k.jsx)(H.a,{}),Object(k.jsx)("span",{children:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(Date.parse(n.create_at))})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)(H.b,{}),Object(k.jsx)("span",{children:n.read_time})]}),Object(k.jsxs)("li",{children:[Object(k.jsx)(H.c,{}),Object(k.jsx)("span",{children:n.views+1})]})]})]},n.title)})):Object(k.jsx)(z.a,{to:"/404"})]})})}function ln(){return Object(k.jsxs)(z.d,{children:[Object(k.jsx)(z.b,{exact:!0,path:"/",component:q}),Object(k.jsx)(z.b,{exact:!0,path:"/post",component:tn}),Object(k.jsx)(z.b,{exact:!0,path:"/post/:slug",component:tn}),Object(k.jsx)(z.b,{path:"/404",component:W}),Object(k.jsx)(z.b,{exact:!0,path:"/category",component:on}),Object(k.jsx)(z.b,{exact:!0,path:"/category/:category",component:on}),Object(k.jsx)(z.b,{path:"*",exact:!0,component:W})]})}var jn,dn,bn=t(22),xn=function(n){var e=n.title;return Object(k.jsx)(bn.b,{children:Object(k.jsx)(bn.a,{children:Object(k.jsx)("title",{children:e||"Blog"})})})},pn=t(15),un=h.b.img(jn||(jn=Object(u.a)(["\n  max-width: 100px;\n  border-radius: 3rem;\n"]))),hn=h.b.div(dn||(dn=Object(u.a)(["\n  display: flex;\n  \n  }\n  .social-media {\n    font-size: 1.5rem;\n    filter: opacity(45%);\n    display: flex;\n    \n        a{\n          transition: color 0.3s;\n            display: inline-block;\n            :hover {\n            color: var(--green-600);\n  }\n        }\n    }\n\n    .info {\n    padding: 1rem;\n    }\n\n    span {\n      font-size: 1rem;\n      filter: opacity(45%);\n      display: inline;\n\n    }\n"])));function On(){var n=Object(s.useState)(!0),e=Object(p.a)(n,2),t=e[0],r=e[1],a=Object(s.useState)([]),c=Object(p.a)(a,2),i=c[0],o=c[1],l=function(){r(!t)};return Object(s.useEffect)((function(){(function(){var n=Object(x.a)(b.a.mark((function n(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.get("about-me/");case 3:e=n.sent,t=e.data,o(t),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(k.jsx)(Q,{children:Object(k.jsx)(V,{className:"about",children:i.map((function(n){return Object(k.jsxs)(hn,{children:[Object(k.jsx)("div",{children:Object(k.jsx)(un,{src:n.img_perfil,alt:"img"})}),Object(k.jsxs)("div",{className:"info",children:[Object(k.jsx)("h2",{children:n.name}),t?n.about.slice(0,150):n.about,Object(k.jsx)("span",{onClick:l,className:"read-or-hide",children:t?"...read more":" show less"}),Object(k.jsxs)("span",{className:"social-media",children:[Object(k.jsx)("a",{href:n.facebook_url,children:Object(k.jsx)(pn.a,{})}),Object(k.jsx)("a",{href:n.twitter_url,children:Object(k.jsx)(pn.f,{})}),Object(k.jsx)("a",{href:n.instagram_url,children:Object(k.jsx)(pn.c,{})}),Object(k.jsx)("a",{href:n.youtube_url,children:Object(k.jsx)(pn.e,{})}),Object(k.jsx)("a",{href:n.github_url,children:Object(k.jsx)(pn.b,{})}),Object(k.jsx)("a",{href:n.linkedin_url,children:Object(k.jsx)(pn.d,{})})]})]})]},n.id)}))})})}var mn=function(){var n=Object(s.useState)([]),e=Object(p.a)(n,2),t=e[0],r=e[1],a=function(){var n=Object(x.a)(b.a.mark((function n(){var e,t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.get("blog-data/");case 3:e=n.sent,t=e.data,r(t),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(k.jsxs)(w.a,{children:[Object(k.jsx)(xn,{title:0!==t.length?t[0].title:""}),Object(k.jsx)(S,{logo:0!==t.length?t[0].logo:"",alt:0!==t.length?t[0].alt:"",nameBlog:0!==t.length?t[0].name:""}),Object(k.jsx)(On,{}),Object(k.jsx)(ln,{})]})};j.a.render(Object(k.jsxs)(o.a.StrictMode,{children:[Object(k.jsx)(mn,{}),Object(k.jsx)(K,{})]}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.cab06343.chunk.js.map