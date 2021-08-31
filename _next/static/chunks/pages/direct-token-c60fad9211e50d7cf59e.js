(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{1752:function(e,n,r){"use strict";var t=r(2809),s=r(219),i=r(1664),c=r(1826),o=r(5893),a=["href","children"];function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}n.Z=function(e){var n,r=e.href,t=e.children,l=(0,s.Z)(e,a),h=(0,c.default)().publicRuntimeConfig,u=null!==(n=null===h||void 0===h?void 0:h.basePath)&&void 0!==n?n:"",p=u.endsWith("/")||r.startsWith("/")?"".concat(u).concat(r):"".concat(u,"/").concat(r);return(0,o.jsx)(i.default,d(d({href:r,as:p},l),{},{children:t}))}},9884:function(e,n,r){"use strict";r.d(n,{Z:function(){return k}});var t=r(2809),s=r(219),i=r(79),c=r(682),o=r(8911),a=r(1330),l=r(1752),d={src:"https://smartblock-static.s3.amazonaws.com/public-assets/smartblock-logo.svg",mimeType:"image/svg+xml"},h=r(5893),u=function(){return(0,h.jsx)(i.Z,{bg:"light",expand:"lg",children:(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(l.Z,{href:"/",passHref:!0,children:(0,h.jsx)(i.Z.Brand,{children:(0,h.jsx)(a.Z,{src:d.src,alt:"Smartblock",height:"45"})})}),(0,h.jsx)(i.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,h.jsx)(i.Z.Collapse,{id:"basic-navbar-nav",children:(0,h.jsxs)(o.Z,{className:"ms-auto",children:[(0,h.jsx)(l.Z,{href:"/getting-started",passHref:!0,children:(0,h.jsx)(o.Z.Link,{children:"Getting Started"})}),(0,h.jsx)(l.Z,{href:"/endpoints",passHref:!0,children:(0,h.jsx)(o.Z.Link,{children:"API Endpoints"})})]})})]})})},p=r(4051),j=r(1555),b=r(7294),f=function(){var e=(0,b.useState)(2021),n=e[0],r=e[1];return(0,b.useEffect)((function(){r((new Date).getFullYear())}),[]),(0,h.jsx)(c.Z,{fluid:!0,className:"bg-light py-3",children:(0,h.jsx)(p.Z,{children:(0,h.jsx)(j.Z,{className:"text-center",children:(0,h.jsxs)("span",{children:["Smartblock Technologies SpA \xa9 ",n]})})})})},x=r(8521),g=r.n(x),m=["children"];function y(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function v(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?y(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var k=function(e){var n=e.children,r=(0,s.Z)(e,m);return(0,h.jsxs)("div",v(v({},r),{},{className:g().bodyWrapper,children:[(0,h.jsx)(u,{}),(0,h.jsx)("div",{className:g().subWrapper,children:n}),(0,h.jsx)(f,{})]}))}},4113:function(e,n,r){"use strict";r.d(n,{TB:function(){return t},RR:function(){return s}});var t=32,s=124},9406:function(e,n,r){"use strict";r.r(n);var t=r(4113),s=r(9884),i=r(682),c=r(4051),o=r(1555),a=r(9008),l=r(5893);n.default=function(){return(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(a.default,{children:(0,l.jsx)("title",{children:"Direct Token - Smartblock Docs"})}),(0,l.jsx)(i.Z,{className:"my-5",children:(0,l.jsx)(c.Z,{children:(0,l.jsxs)(o.Z,{children:[(0,l.jsx)("h1",{className:"fw-bold",children:"Direct Token"}),(0,l.jsx)("hr",{}),(0,l.jsxs)("p",{children:["Since ",(0,l.jsx)("b",{children:"JSON Web Tokens"})," (JWT) require an authentication process, using a programmable, simple, private and role-based token system to use and integrate our services."]}),(0,l.jsxs)("p",{children:["An ",(0,l.jsx)("b",{children:"Smartblock Direct Token"})," (SDT) is a unique token which can be used to access to the API private endpoints",(0,l.jsx)("sup",{children:"*"}),"."]}),(0,l.jsx)("h2",{id:"considerations",children:"Considerations"}),(0,l.jsxs)("p",{children:["By default, an SDT ",(0,l.jsx)("span",{className:"text-danger",children:"does not expire"}),", but you can modify this by setting up an specific expiration date."]}),(0,l.jsxs)("small",{className:"fst-italic",children:[(0,l.jsx)("sup",{children:"*"})," The response can variate depending on the SDT access configuration and the endpoint rules."]}),(0,l.jsx)("h2",{id:"how-to-obtain-an-sdt",children:"How to obtain an SDT"}),(0,l.jsx)("p",{children:"Steps:"}),(0,l.jsxs)("ol",{children:[(0,l.jsxs)("li",{children:["In your ",(0,l.jsx)("a",{href:"https://smartblock.cl/account/preferences",target:"_blank",rel:"noreferrer",children:"account preferences panel"}),", navigate to ",(0,l.jsx)("b",{children:"API Access"})," ",">"," ",(0,l.jsx)("b",{children:"Direct Tokens"})," and press the ",(0,l.jsx)("b",{children:"New Token"})," button."]}),(0,l.jsxs)("li",{children:["Add a ",(0,l.jsx)("b",{children:"Token Alias"})," (important to identify the token in the future",(0,l.jsx)("sup",{children:"**"}),")."]}),(0,l.jsx)("li",{children:"Check and assign the respective permissions***, be sure to review the configuration to prevent unexpected interactions."}),(0,l.jsxs)("li",{children:["If you need the token for production, ",(0,l.jsx)("b",{children:"uncheck"})," the option ",(0,l.jsx)("b",{children:"Sandbox Mode"}),"."]}),(0,l.jsxs)("li",{children:["If the configuration is correct, press the ",(0,l.jsx)("b",{children:"Create"})," button to get a new token."]}),(0,l.jsxs)("li",{children:["Copy and save the generated token and press ",(0,l.jsx)("b",{children:"Confirm"}),". Be sure to save the token, you will not be able to see it again."]})]}),(0,l.jsxs)("small",{className:"fst-italic",children:[(0,l.jsx)("sup",{children:"**"})," The token will only be visible in the creation step."]}),(0,l.jsx)("br",{}),(0,l.jsxs)("small",{className:"fst-italic",children:[(0,l.jsx)("sup",{children:"***"})," Cannot be modified after the being created."]}),(0,l.jsx)("h2",{id:"how-to-use",children:"How to use"}),(0,l.jsx)("p",{children:"Add the token in your request headers."}),(0,l.jsx)("p",{children:(0,l.jsxs)("code",{children:[String.fromCharCode(t.TB).repeat(4),"Direct-Token: ",(0,l.jsx)("b",{children:"your-direct-token"})]})}),(0,l.jsx)("p",{children:"This can variate depending on the REST client you are implementing."}),(0,l.jsx)("p",{children:"Note if you send the JSON Web Token and Direct Token in the request, if the tokens are valid and assigned in the correct headers, the JSON Web Token will be processed by default."})]})})})]})}},4905:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/direct-token",function(){return r(9406)}])},8521:function(e){e.exports={bodyWrapper:"page-wrapper_bodyWrapper__11zuq",subWrapper:"page-wrapper_subWrapper__3Miup"}}},function(e){e.O(0,[774,537,888,179],(function(){return n=4905,e(e.s=n);var n}));var n=e.O();_N_E=n}]);