"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),s=t(6911),i=t(2791),o=t(7689),p=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],u=n[1],f=(0,i.useState)(""),v=(0,a.Z)(f,2),h=v[0],l=v[1],d=(0,o.UO)().moviesId;return(0,i.useEffect)((function(){if(null!==d){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.r7)(d);case 3:n=e.sent,u(n.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[d]),(0,p.jsxs)(p.Fragment,{children:[h&&(0,p.jsx)("div",{children:h}),t&&t.map((function(e){return(0,p.jsxs)("div",{children:[(0,p.jsxs)("h4",{children:["Author: ",e.author,"."]}),(0,p.jsx)("p",{children:e.content})]},e.id)})),0===t.length&&(0,p.jsx)("h3",{children:"No yet reviews about this film"})]})}},6911:function(e,n,t){t.d(n,{Ai:function(){return v},DC:function(){return i},l2:function(){return o},r7:function(){return f},y:function(){return p}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org";var s="f62607027645556b04bb89c144d22028",i=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/3/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/search/movie?api_key=".concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.61e3574b.chunk.js.map