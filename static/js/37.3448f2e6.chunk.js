"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[37],{6911:function(e,n,t){t.d(n,{Ai:function(){return d},DC:function(){return u},l2:function(){return o},r7:function(){return p},y:function(){return l}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org";var s="f62607027645556b04bb89c144d22028",u=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/3/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/3/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("3/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("3/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("3/search/movie?api_key=".concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},37:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r,a,c,i=t(5861),s=t(9439),u=t(4687),o=t.n(u),l=t(2791),p=t(7689),d=t(6911),f=t(1087),h=t(168),v=t(5706),x=v.Z.div(r||(r=(0,h.Z)(["\n  display: flex;\n"]))),m=v.Z.div(a||(a=(0,h.Z)(["\n  margin-left: 20px;\n  \n"]))),g=v.Z.ul(c||(c=(0,h.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 10px;\n  padding: 0;\n\n"]))),j=t(184),w=function(e){var n=e.moviesCard,t=n.release_date,r=n.poster_path,a=n.title,c=n.overview,i=n.genres,s=n.vote_average,u=n.original_title,o=new Date(t).getFullYear(),l=Math.round(10*Number("".concat(s)));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(x,{children:[(0,j.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://i.pinimg.com/originals/a0/57/48/a05748c84d7093e382c560bbc57665ce.jpg",alt:"".concat(a&&u),width:400}),(0,j.jsxs)(m,{children:[(0,j.jsxs)("h1",{children:[u&&a," (",o,")"]}),(0,j.jsxs)("p",{children:["User Score: ",l,"% "]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:c}),(0,j.jsx)("h2",{children:"Genres"}),(0,j.jsx)(g,{children:i.map((function(e){return(0,j.jsx)("li",{children:e.name},e.id)}))})]})]})})},b=t(9723),Z=function(){var e,n,t=(0,l.useState)(null),r=(0,s.Z)(t,2),a=r[0],c=r[1],u=(0,l.useState)(""),h=(0,s.Z)(u,2),v=h[0],x=h[1],m=(0,p.UO)().moviesId,g=(0,p.TH)(),Z=(0,l.useRef)(null!==(e=null===(n=g.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.l2)(m);case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),x(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]),(0,j.jsxs)(j.Fragment,{children:[v&&(0,j.jsx)("h2",{children:v}),(0,j.jsx)(f.rU,{to:Z.current,children:(0,j.jsx)("button",{type:"button",style:{marginBottom:"30px"},children:"Go back"})}),a&&(0,j.jsx)(w,{moviesCard:a}),!v&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(f.rU,{to:"cast",children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(f.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,j.jsx)(l.Suspense,{fallback:(0,j.jsx)(b.Z,{}),children:(0,j.jsx)(p.j3,{})})]})}}}]);
//# sourceMappingURL=37.3448f2e6.chunk.js.map