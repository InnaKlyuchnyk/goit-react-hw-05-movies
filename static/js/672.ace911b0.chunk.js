"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[672,405],{948:function(n,t,e){e.d(t,{qw:function(){return i},hG:function(){return f},IH:function(){return h},Cm:function(){return d},$S:function(){return g}});var r=e(861),c=e(757),a=e.n(c),u="b5cd3fae011a36a857068d95d756f08e",o="https://api.themoviedb.org/3/";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"trending/all/day?api_key=").concat(u)).then((function(n){if(n.ok)return n.json()})).catch((function(n){return console.log(n)}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US")).then((function(n){if(n.ok)return n.json()})).catch((function(n){return console.log(n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US")).then((function(n){if(n.ok)return n.json()})).catch((function(n){return console.log(n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1")).then((function(n){if(n.ok)return n.json()})).catch((function(n){return console.log(n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"search/movie?api_key=").concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(n){if(n.ok)return n.json()})).catch((function(n){return console.log(n)}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},672:function(n,t,e){e.r(t);var r=e(405),c=e(184);t.default=function(){var n=(0,r.default)(),t=n.cast,e=n.loading;return(0,c.jsxs)("div",{children:[e&&(0,c.jsx)("h2",{children:"Loading"}),(0,c.jsx)("ul",{children:t&&t.cast.map((function(n){return(0,c.jsxs)("li",{children:[(0,c.jsx)("img",{src:n.profile_path?"https://image.tmdb.org/t/p/w500"+n.profile_path:"https://sd.keepcalms.com/i/sorry-no-picture-available-2.png",alt:n.name,width:"200px",height:"auto"}),(0,c.jsx)("h4",{children:n.name})]},n.id)}))})]})}},405:function(n,t,e){e.r(t);var r=e(861),c=e(885),a=e(757),u=e.n(a),o=e(948),i=e(871),s=e(791);t.default=function(){var n=(0,i.UO)().movieId,t=(0,s.useState)(null),e=(0,c.Z)(t,2),a=e[0],f=e[1],p=(0,s.useState)(!1),h=(0,c.Z)(p,2),l=h[0],d=h[1];return(0,s.useEffect)((function(){d(!0);var t=function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.IH)(n).then(f).finally((function(){return d(!1)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),{cast:a,loading:l}}}}]);
//# sourceMappingURL=672.ace911b0.chunk.js.map